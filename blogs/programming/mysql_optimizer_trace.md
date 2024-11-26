---
tags:
  - programming
  - mysql
---

文章主要用来记录在我比较关注的 mysql optimizer_trace 中的一些信息，留一个备忘录，方便日后查阅。

> mysql optimizer_trace 中的各个字段目前并没有官方的文档来说明，这里只是结合我自己的理解来编写。未来 mysql 很有可能会修改这里的字段以及字段所表示的含义。


从上到下解释一下 trace 中的各个步骤。

optimizer_trace 的信息来源于 `information_schema.optimizer_trace`，该表的 schema 如下。
````sql
mysql> show create table information_schema.optimizer_trace\G
*************************** 1. row ***************************
       Table: OPTIMIZER_TRACE
Create Table: CREATE TEMPORARY TABLE `OPTIMIZER_TRACE` (
  `QUERY` longtext NOT NULL,
  `TRACE` longtext NOT NULL,
  `MISSING_BYTES_BEYOND_MAX_MEM_SIZE` int NOT NULL DEFAULT '0',
  `INSUFFICIENT_PRIVILEGES` tinyint NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3
1 row in set (0.00 sec)
````

执行语句如下：
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

````sql
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

optimizer_trace 的解释


`steps` 表示这个语句执行过程有哪些具体步骤。
````text
"steps": [
{
````

第一步是 `jion_preparation`
1. 对整个查询语句进行格式化并展开，找到每一列所在的 database 和 table。对包含多个子查询的语句进行划分，如下列的 `/* select#1 */`
2. 将 join 中的条件转化为 where 条件
````json
"steps": [
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
    }
] /* steps */
````

第二步是 `join_optimization`，主要是如何做 join 优化。
1. `condition_processing` 就是做 where 等条件转化，消除不必要的 where 条件。
2. `substitute_generated_columns` 替换掉虚拟的生成列
3. `table_dependencies` 表之间的依赖关系
4. `ref_optimizer_key_uses` 分析执行 ref 扫描可以利用的索引
5. `rows_estimation` 估算表的扫描行数以及代价
6. `considered_execution_plans` 对比不同的执行计划方案，选择执行计划
7. `attaching_conditions_to_tables` 添加筛选条件，尽量将所有的条件添加在一张表上，减少对其他表的过滤
8. `optimizing_distinct_group_by_order_by` 优化 `distinct`, `group_by` 和 `order_by`，尽量消除这些计算操作
9. `finalizing_table_conditions` 选择最终应用在查询上的 `where` 条件
10. `refine_plan` 最终确定的执行计划，查询表的顺序，这里先 users 表再 posts 表
11. `considering_tmp_tables` 考虑使用临时表
````json
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
    }
````

第三步是 `join_execution`，join 的执行阶段。
1. `select#` 哪一个 select 查询，对应 `join_preparation` 的编号
2. `steps` 查询执行的具体步骤
    1. `sorting_table`: 需要排序的表，这里是 `临时表`
    2. `filesort_information` 内存外排序相关信息，这里展示了排序的规则和使用的表达式
    3. `filesort_priority_queue_optimization` 内存外排序的优先队列优化，这里是针对 `limit` 子句进行优化。
    4. `filesort_execution` 内存外排序的执行，因为查询是 explain analyze，可能导致了这部分信息缺失
    5. `filesort_summary` 内存外排序的汇总信息

````json
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
````

# Reference
- https://dev.mysql.com/doc/dev/mysql-server/8.4.3/PAGE_OPT_TRACE.html
- https://dev.mysql.com/doc/refman/8.0/en/information-schema-optimizer-trace-table.html
- https://dev.mysql.com/doc/refman/8.0/en/optimizer-trace-system-variable.html
- https://dev.mysql.com/doc/refman/8.0/en/optimizer-tracing.html
- https://dev.mysql.com/doc/refman/8.0/en/tracing-example.html
- http://www.unofficialmysqlguide.com/optimizer-trace.html
- https://blog.itpub.net/28218939/viewspace-2658978/

# todo
简单解释 optimizer_trace 是什么

给一个两张表 inner join 的例子。需要
- 带分页，
- 带排序
- 带删除？