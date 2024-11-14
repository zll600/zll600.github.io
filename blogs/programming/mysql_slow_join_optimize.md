---
tags:
  - programming
  - mysql
---

文章主要用来记录，我在分析线上环境的慢查询时的分析工具。

问题描述

表结构

数据规模

问题分析

explain 语句

explain analyze 语句

optimizer_trace 分析 explain analyze

使用 mysql histogram 来验证 optimizer_trace 的分析结果

根据 histogram 的结果，可以尝试强制指定 join 时的驱动表。 因此 straight_join 可以解决问题

列出 todo
1. 整理 optimizer_trace 中各个字段的含义，单独开一篇 blog
2. 调研深分页问题的常见解决方案
  - 基于 cursor 分页
  - 延迟 join



这篇文章主要介绍一下，我学到的一些 mysql 查询性能分析工具。

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


参考：

- [https://dev.mysql.com/doc/refman/8.4/en/join.html#:~:text=official ODBC syntax.-,STRAIGHT_JOIN,-is similar to](https://dev.mysql.com/doc/refman/8.4/en/join.html#:~:text=official%20ODBC%20syntax.-,STRAIGHT_JOIN,-is%20similar%20to)
- https://timyang.net/data/key-list-pagination/
- https://stackoverflow.com/questions/4481388/why-does-mysql-higher-limit-offset-slow-the-query-down
- https://www.cnblogs.com/weixiaotao/p/10646666.html
- https://dev.mysql.com/doc/refman/8.4/en/analyze-table.html#analyze-table-histogram-statistics-analysis
- https://dev.mysql.com/blog-archive/mysql-8-0-1-accent-and-case-sensitive-collations-for-utf8mb4/

