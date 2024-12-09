---
tags:
  - programming
  - architecture
---

什么是限流/限流做了什么？
为什么会有限流？


后端 api 经常需要考虑限流，那么限流应该在哪里做？

在 L4 网关 还是 L7 网关，还是在后端代码中?

首先考虑限流的目的是什么
限流的目的是保护后端服务

那么放在网关就比放在应用中更好，更容易达到保护应用的目的。

在网关层做限流更加简单，业务初期可以考虑优先使用网关限流。

如果需要更精细的限流策略，那么使用

# 参考
- https://www.reddit.com/r/node/comments/yjmggc/where_should_rate_limiting_be_done/