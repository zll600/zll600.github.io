---
tags:
  - programming
  - mysql
---

文章主要用来记录，我在分析线上环境的慢查询时的分析工具。

# 问题描述

有一个两张表 join 的查询耗时 40s 甚至 60s。花费了很多时间才做了优化。


explain 语句

explain analyze 语句

optimizer_trace 分析 explain analyze

使用 mysql histogram 来验证 optimizer_trace 的分析结果

根据 histogram 的结果，可以尝试强制指定 join 时的驱动表。 因此 straight_join 可以解决问题


# 实验环境
mysql 版本
8.0.37 docker image
OS macos 15
OrbStack 分配了 8 G RAM
CPU M3 Pro

我们聚一个例子，需要两张表，如下

第一张 users 表
````sql

````

users 表插入数据 500_000 行，其中 deleted_at is not null 的数据很少（不到 10 条）

第二张 posts 表
````sql

````

posts 表插入数据 1500_000 行

查询如下
```sql
SELECT
	posts.*
FROM
	posts
	INNER JOIN users ON users.id = posts.user_id
		AND users.deleted_at IS NULL
	ORDER BY
		posts.id DESC
	LIMIT 100 OFFSET 0;
```


explain 结果

````sql
mysql> EXPLAIN SELECT posts.* FROM posts INNER JOIN users ON users.id = posts.user_id AND users.deleted_at IS NULL ORDER BY posts.id DESC LIMIT 100 OFFSET 0\G
*************************** 1. row ***************************
           id: 1
  select_type: SIMPLE
        table: users
   partitions: NULL
         type: ALL
possible_keys: PRIMARY
          key: NULL
      key_len: NULL
          ref: NULL
         rows: 497082
     filtered: 10.00
        Extra: Using where; Using temporary; Using filesort
*************************** 2. row ***************************
           id: 1
  select_type: SIMPLE
        table: posts
   partitions: NULL
         type: ref
possible_keys: user_id
          key: user_id
      key_len: 8
          ref: sql_tests.users.id
         rows: 17
     filtered: 100.00
        Extra: NULL
2 rows in set, 1 warning (0.01 sec)
````


explain analyze 结果
````sql
mysql> EXPLAIN ANALYZE SELECT posts.* FROM posts INNER JOIN users ON users.id = posts.user_id AND users.deleted_at IS NULL ORDER BY posts.id DESC LIMIT 100 OFFSET 0\G
*************************** 1. row ***************************
EXPLAIN: -> Limit: 100 row(s)  (actual time=48196..48196 rows=100 loops=1)
    -> Sort: posts.id DESC, limit input to 100 row(s) per chunk  (actual time=48196..48196 rows=100 loops=1)
        -> Stream results  (cost=357662 rows=877647) (actual time=0.757..47686 rows=15e+6 loops=1)
            -> Nested loop inner join  (cost=357662 rows=877647) (actual time=0.741..46726 rows=15e+6 loops=1)
                -> Filter: (users.deleted_at is null)  (cost=50485 rows=49708) (actual time=0.318..133 rows=500000 loops=1)
                    -> Table scan on users  (cost=50485 rows=497082) (actual time=0.315..114 rows=500000 loops=1)
                -> Index lookup on posts using user_id (user_id=users.id)  (cost=4.41 rows=17.7) (actual time=0.0505..0.0924 rows=30 loops=500000)

1 row in set (48.20 sec)
````

使用 optimizer_trace 进行分析
````
set session optimizer_trace='enabled=on';
````

再次运行 explain analyze 或者重新执行一次 sql

````
EXPLAIN ANALYZE SELECT
	posts.*
FROM
	posts
	INNER JOIN users ON users.id = posts.user_id
		AND users.deleted_at IS NULL
	ORDER BY
		posts.id DESC
	LIMIT 100 OFFSET 0;
````

关闭 optimizer_trace
````
set session optimizer_trace='enabled=off';
````

查看 optimizer_trace 的结果
````
select trace from information_schema.optimizer_trace\G
mysql> select trace from information_schema.optimizer_trace\G
*************************** 1. row ***************************
trace: {
  "steps": [
    {
      "join_preparation": {
        "select#": 1,
        "steps": [
          {
            "expanded_query": "/* select#1 */ select `posts`.`id` AS `id`,`posts`.`source` AS `source`,`posts`.`user_id` AS `user_id` from (`posts` join `users` on(((`users`.`id` = `posts`.`user_id`) and (`users`.`deleted_at` is null)))) order by `posts`.`id` desc limit 0,100"
          },
          {
            "transformations_to_nested_joins": {
              "transformations": [
                "JOIN_condition_to_WHERE",
                "parenthesis_removal"
              ],
              "expanded_query": "/* select#1 */ select `posts`.`id` AS `id`,`posts`.`source` AS `source`,`posts`.`user_id` AS `user_id` from `posts` join `users` where ((`users`.`id` = `posts`.`user_id`) and (`users`.`deleted_at` is null)) order by `posts`.`id` desc limit 0,100"
            }
          }
        ]
      }
    },
    {
      "join_optimization": {
        "select#": 1,
        "steps": [
          {
            "condition_processing": {
              "condition": "WHERE",
              "original_condition": "((`users`.`id` = `posts`.`user_id`) and (`users`.`deleted_at` is null))",
              "steps": [
                {
                  "transformation": "equality_propagation",
                  "resulting_condition": "((`users`.`deleted_at` is null) and multiple equal(`users`.`id`, `posts`.`user_id`))"
                },
                {
                  "transformation": "constant_propagation",
                  "resulting_condition": "((`users`.`deleted_at` is null) and multiple equal(`users`.`id`, `posts`.`user_id`))"
                },
                {
                  "transformation": "trivial_condition_removal",
                  "resulting_condition": "((`users`.`deleted_at` is null) and multiple equal(`users`.`id`, `posts`.`user_id`))"
                }
              ]
            }
          },
          {
            "substitute_generated_columns": {
            }
          },
          {
            "table_dependencies": [
              {
                "table": "`posts`",
                "row_may_be_null": false,
                "map_bit": 0,
                "depends_on_map_bits": [
                ]
              },
              {
                "table": "`users`",
                "row_may_be_null": false,
                "map_bit": 1,
                "depends_on_map_bits": [
                ]
              }
            ]
          },
          {
            "ref_optimizer_key_uses": [
              {
                "table": "`posts`",
                "field": "user_id",
                "equals": "`users`.`id`",
                "null_rejecting": true
              },
              {
                "table": "`users`",
                "field": "id",
                "equals": "`posts`.`user_id`",
                "null_rejecting": true
              }
            ]
          },
          {
            "rows_estimation": [
              {
                "table": "`posts`",
                "table_scan": {
                  "rows": 14612375,
                  "cost": 10224
                }
              },
              {
                "table": "`users`",
                "table_scan": {
                  "rows": 497082,
                  "cost": 777.25
                }
              }
            ]
          },
          {
            "considered_execution_plans": [
              {
                "plan_prefix": [
                ],
                "table": "`users`",
                "best_access_path": {
                  "considered_access_paths": [
                    {
                      "access_type": "ref",
                      "index": "PRIMARY",
                      "usable": false,
                      "chosen": false
                    },
                    {
                      "rows_to_scan": 497082,
                      "filtering_effect": [
                      ],
                      "final_filtering_effect": 0.1,
                      "access_type": "scan",
                      "resulting_rows": 49708.2,
                      "cost": 50485.4,
                      "chosen": true
                    }
                  ]
                },
                "condition_filtering_pct": 100,
                "rows_for_plan": 49708.2,
                "cost_for_plan": 50485.4,
                "rest_of_plan": [
                  {
                    "plan_prefix": [
                      "`users`"
                    ],
                    "table": "`posts`",
                    "best_access_path": {
                      "considered_access_paths": [
                        {
                          "access_type": "ref",
                          "index": "user_id",
                          "rows": 17.656,
                          "cost": 307176,
                          "chosen": true
                        },
                        {
                          "rows_to_scan": 14612375,
                          "filtering_effect": [
                          ],
                          "final_filtering_effect": 1,
                          "access_type": "scan",
                          "using_join_cache": true,
                          "buffers_needed": 3,
                          "resulting_rows": 1.46124e+07,
                          "cost": 7.26355e+10,
                          "chosen": false
                        }
                      ]
                    },
                    "condition_filtering_pct": 100,
                    "rows_for_plan": 877647,
                    "cost_for_plan": 357662,
                    "sort_cost": 877647,
                    "new_cost_for_plan": 1.23531e+06,
                    "chosen": true
                  }
                ]
              },
              {
                "plan_prefix": [
                ],
                "table": "`posts`",
                "best_access_path": {
                  "considered_access_paths": [
                    {
                      "access_type": "ref",
                      "index": "user_id",
                      "usable": false,
                      "chosen": false
                    },
                    {
                      "rows_to_scan": 14612375,
                      "filtering_effect": [
                      ],
                      "final_filtering_effect": 1,
                      "access_type": "scan",
                      "resulting_rows": 1.46124e+07,
                      "cost": 1.47146e+06,
                      "chosen": true
                    }
                  ]
                },
                "condition_filtering_pct": 100,
                "rows_for_plan": 1.46124e+07,
                "cost_for_plan": 1.47146e+06,
                "pruned_by_cost": true
              }
            ]
          },
          {
            "attaching_conditions_to_tables": {
              "original_condition": "((`posts`.`user_id` = `users`.`id`) and (`users`.`deleted_at` is null))",
              "attached_conditions_computation": [
              ],
              "attached_conditions_summary": [
                {
                  "table": "`users`",
                  "attached": "(`users`.`deleted_at` is null)"
                },
                {
                  "table": "`posts`",
                  "attached": "(`posts`.`user_id` = `users`.`id`)"
                }
              ]
            }
          },
          {
            "optimizing_distinct_group_by_order_by": {
              "simplifying_order_by": {
                "original_clause": "`posts`.`id` desc",
                "items": [
                  {
                    "item": "`posts`.`id`"
                  }
                ],
                "resulting_clause_is_simple": false,
                "resulting_clause": "`posts`.`id` desc"
              }
            }
          },
          {
            "finalizing_table_conditions": [
              {
                "table": "`users`",
                "original_table_condition": "(`users`.`deleted_at` is null)",
                "final_table_condition   ": "(`users`.`deleted_at` is null)"
              },
              {
                "table": "`posts`",
                "original_table_condition": "(`posts`.`user_id` = `users`.`id`)",
                "final_table_condition   ": null
              }
            ]
          },
          {
            "refine_plan": [
              {
                "table": "`users`"
              },
              {
                "table": "`posts`"
              }
            ]
          },
          {
            "considering_tmp_tables": [
              {
                "adding_tmp_table_in_plan_at_position": 2,
                "write_method": "write_all_rows"
              },
              {
                "adding_sort_to_table": ""
              }
            ]
          }
        ]
      }
    },
    {
      "join_execution": {
        "select#": 1,
        "steps": [
          {
            "sorting_table": "<temporary>",
            "filesort_information": [
              {
                "direction": "desc",
                "expression": "`posts`.`id`"
              }
            ],
            "filesort_priority_queue_optimization": {
              "limit": 100,
              "chosen": true
            },
            "filesort_execution": [
            ],
            "filesort_summary": {
              "memory_available": 262144,
              "key_size": 8,
              "row_size": 535,
              "max_rows_per_buffer": 101,
              "num_rows_estimate": 877647,
              "num_rows_found": 14999897,
              "num_initial_chunks_spilled_to_disk": 0,
              "peak_memory_used": 54843,
              "sort_algorithm": "std::stable_sort",
              "unpacked_addon_fields": "using_priority_queue",
              "sort_mode": "<fixed_sort_key, additional_fields>"
            }
          }
        ]
      }
    }
  ]
}
1 row in set (0.01 sec)
````

这里我们重点关注这一部分，可以发现，优化器认为扫描 users 表之后，只会得到 5w 行数据。而实际 explain analyze 得到的是 50w 行记录。
````text
              "table": "`users`",
                "best_access_path": {
                  "considered_access_paths": [
                    {
                      "access_type": "ref",
                      "index": "PRIMARY",
                      "usable": false,
                      "chosen": false
                    },
                    {
                      "rows_to_scan": 497082,
                      "filtering_effect": [
                      ],
                      "final_filtering_effect": 0.1,
                      "access_type": "scan",
                      "resulting_rows": 49708.2,
                      "cost": 50485.4,
                      "chosen": true
                    }
                  ]
                },
````

根据上述结果，怀疑是优化器拿到的 users.deleted_at 的数据不准，因此做出了误判。

验证：

使用 mysql histogram
````
mysql> ANALYZE TABLE users UPDATE HISTOGRAM ON deleted_at WITH 1024 BUCKETS;
+-----------------+-----------+----------+-------------------------------------------------------+
| Table           | Op        | Msg_type | Msg_text                                              |
+-----------------+-----------+----------+-------------------------------------------------------+
| sql_tests.users | histogram | status   | Histogram statistics created for column 'deleted_at'. |
+-----------------+-----------+----------+-------------------------------------------------------+
1 row in set (2.81 sec)
````

重复使用 optimizer_trace 得到新的 optimizer_trace 的结果

````
vmysql> set session optimizer_trace='enabled=on';
Query OK, 0 rows affected (0.01 sec)

mysql> EXPLAIN ANALYZE SELECT posts.* FROM posts INNER JOIN users ON users.id = posts.user_id AND users.deleted_at IS NULL ORDER BY posts.id DESC LIMIT 100 OFFSET 0\G
*************************** 1. row ***************************
EXPLAIN: -> Limit: 100 row(s)  (cost=3.65e+6 rows=100) (actual time=0.183..2.55 rows=100 loops=1)
    -> Nested loop inner join  (cost=3.65e+6 rows=100) (actual time=0.181..2.55 rows=100 loops=1)
        -> Index scan on posts using PRIMARY (reverse)  (cost=0.07 rows=100) (actual time=0.11..0.142 rows=100 loops=1)
        -> Filter: (users.deleted_at is null)  (cost=0.25 rows=1) (actual time=0.0238..0.0239 rows=1 loops=100)
            -> Single-row index lookup on users using PRIMARY (id=posts.user_id)  (cost=0.25 rows=1) (actual time=0.0237..0.0237 rows=1 loops=100)

1 row in set (0.02 sec)

mysql> set session optimizer_trace='enabled=off';
Query OK, 0 rows affected (0.00 sec)
````
耗时大幅缩减

得到的 optimizer_trace 的结果
````sql
mysql> select trace from information_schema.optimizer_trace\G
*************************** 1. row ***************************
trace: {
  "steps": [
    {
      "join_preparation": {
        "select#": 1,
        "steps": [
          {
            "expanded_query": "/* select#1 */ select `posts`.`id` AS `id`,`posts`.`source` AS `source`,`posts`.`user_id` AS `user_id` from (`posts` join `users` on(((`users`.`id` = `posts`.`user_id`) and (`users`.`deleted_at` is null)))) order by `posts`.`id` desc limit 0,100"
          },
          {
            "transformations_to_nested_joins": {
              "transformations": [
                "JOIN_condition_to_WHERE",
                "parenthesis_removal"
              ],
              "expanded_query": "/* select#1 */ select `posts`.`id` AS `id`,`posts`.`source` AS `source`,`posts`.`user_id` AS `user_id` from `posts` join `users` where ((`users`.`id` = `posts`.`user_id`) and (`users`.`deleted_at` is null)) order by `posts`.`id` desc limit 0,100"
            }
          }
        ]
      }
    },
    {
      "join_optimization": {
        "select#": 1,
        "steps": [
          {
            "condition_processing": {
              "condition": "WHERE",
              "original_condition": "((`users`.`id` = `posts`.`user_id`) and (`users`.`deleted_at` is null))",
              "steps": [
                {
                  "transformation": "equality_propagation",
                  "resulting_condition": "((`users`.`deleted_at` is null) and multiple equal(`users`.`id`, `posts`.`user_id`))"
                },
                {
                  "transformation": "constant_propagation",
                  "resulting_condition": "((`users`.`deleted_at` is null) and multiple equal(`users`.`id`, `posts`.`user_id`))"
                },
                {
                  "transformation": "trivial_condition_removal",
                  "resulting_condition": "((`users`.`deleted_at` is null) and multiple equal(`users`.`id`, `posts`.`user_id`))"
                }
              ]
            }
          },
          {
            "substitute_generated_columns": {
            }
          },
          {
            "table_dependencies": [
              {
                "table": "`posts`",
                "row_may_be_null": false,
                "map_bit": 0,
                "depends_on_map_bits": [
                ]
              },
              {
                "table": "`users`",
                "row_may_be_null": false,
                "map_bit": 1,
                "depends_on_map_bits": [
                ]
              }
            ]
          },
          {
            "ref_optimizer_key_uses": [
              {
                "table": "`posts`",
                "field": "user_id",
                "equals": "`users`.`id`",
                "null_rejecting": true
              },
              {
                "table": "`users`",
                "field": "id",
                "equals": "`posts`.`user_id`",
                "null_rejecting": true
              }
            ]
          },
          {
            "rows_estimation": [
              {
                "table": "`posts`",
                "table_scan": {
                  "rows": 14612375,
                  "cost": 10224
                }
              },
              {
                "table": "`users`",
                "table_scan": {
                  "rows": 473065,
                  "cost": 777.25
                }
              }
            ]
          },
          {
            "considered_execution_plans": [
              {
                "plan_prefix": [
                ],
                "table": "`users`",
                "best_access_path": {
                  "considered_access_paths": [
                    {
                      "access_type": "ref",
                      "index": "PRIMARY",
                      "usable": false,
                      "chosen": false
                    },
                    {
                      "rows_to_scan": 473065,
                      "filtering_effect": [
                        {
                          "condition": "(`users`.`deleted_at` is null)",
                          "histogram_selectivity": 0.99998
                        }
                      ],
                      "final_filtering_effect": 0.99998,
                      "access_type": "scan",
                      "resulting_rows": 473056,
                      "cost": 48083.8,
                      "chosen": true
                    }
                  ]
                },
                "condition_filtering_pct": 100,
                "rows_for_plan": 473056,
                "cost_for_plan": 48083.8,
                "rest_of_plan": [
                  {
                    "plan_prefix": [
                      "`users`"
                    ],
                    "table": "`posts`",
                    "best_access_path": {
                      "considered_access_paths": [
                        {
                          "access_type": "ref",
                          "index": "user_id",
                          "rows": 17.656,
                          "cost": 2.92329e+06,
                          "chosen": true
                        },
                        {
                          "rows_to_scan": 14612375,
                          "filtering_effect": [
                          ],
                          "final_filtering_effect": 1,
                          "access_type": "scan",
                          "using_join_cache": true,
                          "buffers_needed": 24,
                          "resulting_rows": 1.46124e+07,
                          "cost": 6.91247e+11,
                          "chosen": false
                        }
                      ]
                    },
                    "condition_filtering_pct": 100,
                    "rows_for_plan": 8.35226e+06,
                    "cost_for_plan": 2.97137e+06,
                    "sort_cost": 8.35226e+06,
                    "new_cost_for_plan": 1.13236e+07,
                    "chosen": true
                  }
                ]
              },
              {
                "plan_prefix": [
                ],
                "table": "`posts`",
                "best_access_path": {
                  "considered_access_paths": [
                    {
                      "access_type": "ref",
                      "index": "user_id",
                      "usable": false,
                      "chosen": false
                    },
                    {
                      "rows_to_scan": 14612375,
                      "filtering_effect": [
                      ],
                      "final_filtering_effect": 1,
                      "access_type": "scan",
                      "resulting_rows": 1.46124e+07,
                      "cost": 1.47146e+06,
                      "chosen": true
                    }
                  ]
                },
                "condition_filtering_pct": 100,
                "rows_for_plan": 1.46124e+07,
                "cost_for_plan": 1.47146e+06,
                "rest_of_plan": [
                  {
                    "plan_prefix": [
                      "`posts`"
                    ],
                    "table": "`users`",
                    "best_access_path": {
                      "considered_access_paths": [
                        {
                          "access_type": "eq_ref",
                          "index": "PRIMARY",
                          "rows": 1,
                          "cost": 5.11433e+06,
                          "chosen": true,
                          "cause": "clustered_pk_chosen_by_heuristics"
                        },
                        {
                          "rows_to_scan": 473065,
                          "filtering_effect": [
                            {
                              "condition": "(`users`.`deleted_at` is null)",
                              "histogram_selectivity": 0.99998
                            }
                          ],
                          "final_filtering_effect": 0.99998,
                          "access_type": "scan",
                          "using_join_cache": true,
                          "buffers_needed": 29376,
                          "resulting_rows": 473056,
                          "cost": 6.91269e+11,
                          "chosen": false
                        }
                      ]
                    },
                    "condition_filtering_pct": 99.998,
                    "rows_for_plan": 1.46121e+07,
                    "cost_for_plan": 6.58579e+06,
                    "chosen": true
                  }
                ]
              }
            ]
          },
          {
            "attaching_conditions_to_tables": {
              "original_condition": "((`users`.`id` = `posts`.`user_id`) and (`users`.`deleted_at` is null))",
              "attached_conditions_computation": [
              ],
              "attached_conditions_summary": [
                {
                  "table": "`posts`",
                  "attached": null
                },
                {
                  "table": "`users`",
                  "attached": "((`users`.`id` = `posts`.`user_id`) and (`users`.`deleted_at` is null))"
                }
              ]
            }
          },
          {
            "optimizing_distinct_group_by_order_by": {
              "simplifying_order_by": {
                "original_clause": "`posts`.`id` desc",
                "items": [
                  {
                    "item": "`posts`.`id`"
                  }
                ],
                "resulting_clause_is_simple": true,
                "resulting_clause": "`posts`.`id` desc"
              }
            }
          },
          {
            "reconsidering_access_paths_for_index_ordering": {
              "clause": "ORDER BY",
              "steps": [
              ],
              "index_order_summary": {
                "table": "`posts`",
                "index_provides_order": true,
                "order_direction": "desc",
                "index": "PRIMARY",
                "plan_changed": true,
                "access_type": "index"
              }
            }
          },
          {
            "finalizing_table_conditions": [
              {
                "table": "`users`",
                "original_table_condition": "((`users`.`id` = `posts`.`user_id`) and (`users`.`deleted_at` is null))",
                "final_table_condition   ": "(`users`.`deleted_at` is null)"
              }
            ]
          },
          {
            "refine_plan": [
              {
                "table": "`posts`"
              },
              {
                "table": "`users`"
              }
            ]
          },
          {
            "considering_tmp_tables": [
            ]
          }
        ]
      }
    },
    {
      "join_execution": {
        "select#": 1,
        "steps": [
        ]
      }
    }
  ]
}
1 row in set (0.01 sec)
````

再次关注扫描 users 表的预估可以发现，先扫描 users 表会得到大概 50w 行记录。而且这里也用到了 histogram 提供的统计数据。
````text
                "table": "`users`",
                "best_access_path": {
                  "considered_access_paths": [
                    {
                      "access_type": "ref",
                      "index": "PRIMARY",
                      "usable": false,
                      "chosen": false
                    },
                    {
                      "rows_to_scan": 473065,
                      "filtering_effect": [
                        {
                          "condition": "(`users`.`deleted_at` is null)",
                          "histogram_selectivity": 0.99998
                        }
                      ],
                      "final_filtering_effect": 0.99998,
                      "access_type": "scan",
                      "resulting_rows": 473056,
                      "cost": 48083.8,
                      "chosen": true
                    }
                  ]
                },
````

因此可以得知，如果这里可以使用 posts 表作为驱动表，或许可以优化整体的查询效率。
使用 STRAIGHT_JOIN 强制 posts 表作为驱动表，执行上述查询
首先删除 histogram 数据
````sql
mysql> ANALYZE TABLE users DROP HISTOGRAM ON deleted_at;
+-----------------+-----------+----------+-------------------------------------------------------+
| Table           | Op        | Msg_type | Msg_text                                              |
+-----------------+-----------+----------+-------------------------------------------------------+
| sql_tests.users | histogram | status   | Histogram statistics removed for column 'deleted_at'. |
+-----------------+-----------+----------+-------------------------------------------------------+
1 row in set (0.01 sec)
````

使用 STRAIGHT_JOIN 执行，可以大幅降低查询时间

````sql
mysql> EXPLAIN ANALYZE SELECT posts.* FROM posts STRAIGHT_JOIN users ON users.id = posts.user_id AND users.deleted_at IS NULL ORDER BY posts.id DESC LIMIT 100 OFFSET 0\G
*************************** 1. row ***************************
EXPLAIN: -> Limit: 100 row(s)  (cost=3.65e+6 rows=99.9) (actual time=0.273..1.55 rows=100 loops=1)
    -> Nested loop inner join  (cost=3.65e+6 rows=99.9) (actual time=0.27..1.54 rows=100 loops=1)
        -> Index scan on posts using PRIMARY (reverse)  (cost=0.706 rows=999) (actual time=0.208..0.266 rows=100 loops=1)
        -> Filter: (users.deleted_at is null)  (cost=0.25 rows=0.1) (actual time=0.0124..0.0125 rows=1 loops=100)
            -> Single-row index lookup on users using PRIMARY (id=posts.user_id)  (cost=0.25 rows=1) (actual time=0.012..0.0121 rows=1 loops=100)

1 row in set (0.02 sec)
````

上述就是整个使用 optimizer_trace 分析的过程。

参考：

- [https://dev.mysql.com/doc/refman/8.4/en/join.html#:~:text=official ODBC syntax.-,STRAIGHT_JOIN,-is similar to](https://dev.mysql.com/doc/refman/8.4/en/join.html#:~:text=official%20ODBC%20syntax.-,STRAIGHT_JOIN,-is%20similar%20to)
- https://timyang.net/data/key-list-pagination/
- https://stackoverflow.com/questions/4481388/why-does-mysql-higher-limit-offset-slow-the-query-down
- https://www.cnblogs.com/weixiaotao/p/10646666.html
- https://dev.mysql.com/doc/refman/8.4/en/analyze-table.html#analyze-table-histogram-statistics-analysis
- https://dev.mysql.com/blog-archive/mysql-8-0-1-accent-and-case-sensitive-collations-for-utf8mb4/


# todo
explain 语句

通过 explain 语句可以得到语句可能使用的执行计划，

可以参考: https://dev.mysql.com/doc/refman/8.4/en/explain.html#explain-execution-plan

explain 语句的 json 格式



explain analyze 语句



optimizer_trace


深分页问题
1. offset 分页
2. cursor 分页
    - timestamp 分页
    - primary key 分页
3. 延迟 join

straight_join