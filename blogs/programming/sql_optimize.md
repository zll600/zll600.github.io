---
tags:
  - programming
  - sql
---

## 背景

业务场景是分⻚查询 user_info ⾥⾯ user_type 为 3 的 user，数据库使用的 Postgres 15

user_info 的 schema 如下

```sql
CREATE TABLE user_info
(
    user_id    SERIAL PRIMARY KEY,
    user_name  VARCHAR(255),
    user_type  INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    deleted_at TIMESTAMP
);
```

测试 sql 如下

```sql                              
EXPLAIN ANALYZE VERBOSE
SELECT *
FROM user_info
WHERE user_id <= 1000000000
  AND user_type = 3
  AND deleted_at is null
ORDER BY user_id DESC
LIMIT 10;
```

得到的查询计划如下：

| QUERY PLAN |
| :--- |
| Limit  \(cost=0.29..1.91 rows=10 width=41\) \(actual time=0.008..0.014 rows=10 loops=1\) |
|   Output: user\_id, user\_name, user\_type, created\_at, updated\_at, deleted\_at |
|   -&gt;  Index Scan Backward using user\_info\_pkey on public.user\_info  \(cost=0.29..407.29 rows=2512 width=41\) \(actual time=0.007..0.012 rows=10 loops=1\) |
|         Output: user\_id, user\_name, user\_type, created\_at, updated\_at, deleted\_at |
|         Index Cond: \(user\_info.user\_id &lt;= 1000000000\) |
|         Filter: \(\(user\_info.deleted\_at IS NULL\) AND \(user\_info.user\_type = 3\)\) |
|         Rows Removed by Filter: 33 |
| Planning Time: 0.250 ms |
| Execution Time: 0.034 ms |

根据查询计划得知，会通过 PK 来扫，然后通过 where 条件过滤。

## 优化思路

### 方案一 (user_type, user_id) where deleted_at is null

```sql
CREATE INDEX idx_user_type_user_id on user_info(user_type, user_id) where deleted_at is null;
```

执行上面的查询，得到的查询计划如下：

| QUERY PLAN |
| :--- |
| Limit  \(cost=0.29..1.90 rows=10 width=41\) \(actual time=0.021..0.024 rows=10 loops=1\) |
|   Output: user\_id, user\_name, user\_type, created\_at, updated\_at, deleted\_at |
|   -&gt;  Index Scan Backward using idx\_user\_type\_user\_id on public.user\_info  \(cost=0.29..407.18 rows=2512 width=41\) \(actual time=0.020..0.022 rows=10 loops=1\) |
|         Output: user\_id, user\_name, user\_type, created\_at, updated\_at, deleted\_at |
|         Index Cond: \(\(user\_info.user\_type = 3\) AND \(user\_info.user\_id &lt;= 1000000000\)\) |
| Planning Time: 0.264 ms |
| Execution Time: 0.043 ms |

这里的索引是是 user_type, user_id 联合索引。所以会先定位到 user_type = 3 的索引，然后再通过 user_id 定位到 user_id 小于 1000000000 的索引，然后再回表。

如果将查询 sql 改为下列的情况，则有：

```sql
EXPLAIN ANALYZE VERBOSE
SELECT *
FROM user_info
WHERE user_type = 3
  AND user_id <= 1000000000
  AND deleted_at is null
ORDER BY user_id DESC
LIMIT 10;
```

得到的查询计划如下：

| QUERY PLAN |
| :--- |
| Limit  \(cost=0.29..1.90 rows=10 width=41\) \(actual time=0.009..0.013 rows=10 loops=1\) |
|   Output: user\_id, user\_name, user\_type, created\_at, updated\_at, deleted\_at |
|   -&gt;  Index Scan Backward using idx\_user\_type\_user\_id on public.user\_info  \(cost=0.29..407.18 rows=2512 width=41\) \(actual time=0.008..0.011 rows=10 loops=1\) |
|         Output: user\_id, user\_name, user\_type, created\_at, updated\_at, deleted\_at |
|         Index Cond: \(\(user\_info.user\_type = 3\) AND \(user\_info.user\_id &lt;= 1000000000\)\) |
| Planning Time: 0.100 ms |
| Execution Time: 0.024 ms |

修改查询后 Postgres 可以更好的命中联合索引


### 方案二 (user_id, user_type) where deleted_at is null

```sql
CREATE INDEX idx_user_id_user_type ON user_info (user_id, user_type) WHERE deleted_at IS NULL;
```

得到的查询计划如下：

| QUERY PLAN |
| :--- |
| Limit  \(cost=0.29..1.90 rows=10 width=41\) \(actual time=0.017..0.022 rows=10 loops=1\) |
|   Output: user\_id, user\_name, user\_type, created\_at, updated\_at, deleted\_at |
|   -&gt;  Index Scan Backward using idx\_user\_id\_user\_type on public.user\_info  \(cost=0.29..406.47 rows=2512 width=41\) \(actual time=0.016..0.019 rows=10 loops=1\) |
|         Output: user\_id, user\_name, user\_type, created\_at, updated\_at, deleted\_at |
|         Index Cond: \(\(user\_info.user\_id &lt;= 1000000000\) AND \(user\_info.user\_type = 3\)\) |
| Planning Time: 0.232 ms |
| Execution Time: 0.036 ms |

同样是联合索引，但是索引是 user_id, user_type 联合索引。所以会先定位到 user_id 小于 1000000000 的索引，然后再过滤 user_type = 3 的索引，然后再回表。

### 方案三 user_id WHERE user_type = 3 AND WHERE deleted_at is null

```sql
CREATE INDEX idx_user_id ON user_info (user_id) WHERE user_type = 3 AND deleted_at IS NULL;
```

得到的查询计划如下：

| QUERY PLAN |
| :--- |
| Limit  \(cost=0.28..0.70 rows=10 width=41\) \(actual time=0.012..0.016 rows=10 loops=1\) |
|   Output: user\_id, user\_name, user\_type, created\_at, updated\_at, deleted\_at |
|   -&gt;  Index Scan Backward using idx\_user\_id on public.user\_info  \(cost=0.28..105.24 rows=2512 width=41\) \(actual time=0.011..0.014 rows=10 loops=1\) |
|         Output: user\_id, user\_name, user\_type, created\_at, updated\_at, deleted\_at |
|         Index Cond: \(user\_info.user\_id &lt;= 1000000000\) |
| Planning Time: 0.179 ms |
| Execution Time: 0.026 ms |

这里利用了 Postgres 的条件索引，所以会先定位到 user_id 小于 1000000000 的索引，然后再回表。但是这里只对有效查询结果的集合建立的索引。


### 方案四 user_id DESC WHERE user_type = 3 AND WHERE deleted_at is null


```sql
CREATE INDEX idx_user_id ON user_info (user_id DESC) WHERE user_type = 3 AND deleted_at IS NULL;
```

得到的查询计划如下：

| QUERY PLAN |
| :--- |
| Limit  \(cost=0.28..0.70 rows=10 width=41\) \(actual time=0.018..0.022 rows=10 loops=1\) |
|   Output: user\_id, user\_name, user\_type, created\_at, updated\_at, deleted\_at |
|   -&gt;  Index Scan using idx\_user\_id on public.user\_info  \(cost=0.28..105.24 rows=2512 width=41\) \(actual time=0.017..0.020 rows=10 loops=1\) |
|         Output: user\_id, user\_name, user\_type, created\_at, updated\_at, deleted\_at |
|         Index Cond: \(user\_info.user\_id &lt;= 1000000000\) |
| Planning Time: 0.229 ms |
| Execution Time: 0.035 ms |

整体同方案三，这里使用了倒序索引，所以会先定位到 user_id 小于 1000000000 的索引，然后再回表。



测试过程中使用脚本插入了 10000 条数据（from GPT）

```python3
import psycopg2
from psycopg2 import sql
import random

# 连接到你的 PostgreSQL 数据库
conn = psycopg2.connect(
    dbname="your_database_name",
    user="your_username",
    password="your_password",
    host="your_host",
    port="your_port"
)

# 创建一个游标对象
cur = conn.cursor()

# 插入10000条数据
for i in range(10000):
    user_name = f"user_{i}"
    user_type = random.choice([0, 1, 2, 3])
    
    cur.execute(
        sql.SQL("INSERT INTO user_info (user_name, user_type) VALUES (%s, %s)"),
        [user_name, user_type]
    )

# 提交事务
conn.commit()

# 关闭游标和连接
cur.close()
conn.close()
```
