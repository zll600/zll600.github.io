---
tags:
  - programming
  - social system
---

# 背景

构建了一个 Post 系统，用户可以发布 Post，Post 可以被点赞，点赞的数量也可以被查询。

业务上有以下需求

- 对 post 点赞
- 取消对 post 的点赞
- 查询某条 post 的点赞数
- 判断用户是否对某条 post 点赞
- 判断对某条 post 点赞的用户列表
                                            
# 方案

## 数据库 schema

```sql
--- 保存 Post
CREATE TABLE post
(
    id         BIGSERIAL PRIMARY KEY,
    user_id    INTEGER,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

-- 保存 <post_id, user_id> 的点赞记录
CREATE TABLE post_like
(
    post_id    BIGINT    NOT NULL,
    user_id    INTEGER   NOT NULL,
    is_like    BOOLEAN   NOT NULL DEFAULT false,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    PRIMARY KEY (post_id, user_id)
);

-- 保存 post 点赞数
CREATE TABLE post_like_count
(
    post_id    BIGINT    PRIMARY KEY ,
    like_count INT       NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

## Kafka

- topic: post_like_topic
- message:
```txt
- post_id: int
- user_id: int
- is_like: boolean
```


## 服务端的逻辑

### 写接口

在本地需求中，写接口有两种操作
- 点赞
- 取消点赞。

### 读接口

- 查询某条 post 的点赞数
- 查询当前用户是否点赞了某条 post（高频）
- 获取 post 的点赞用户列表（低频）