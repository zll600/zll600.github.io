---
tags:
  - programming
  - url shortener
---

什么是 URL shortener 工具呢？

简单来说，就是将一个长的 URL 转化为一个短的 URL。当你在浏览器中输入缩短后的 URL 时，这个服务会自动使用缩短之前的 URL 帮你替换。

URL shortener 的工作原理

最简单的实现，存储缩短前的 URL 和缩短后的 URL。每次访问缩短后的 URL 时，重定向到缩短前的 URL

进阶实现，需要实现多租户功能，对每个用户做好访问控制，数据隔离。



# Reference
- https://www.reddit.com/r/selfhosted/comments/1bssmo0/whats_your_favorite_selfhosted_url_shortener/?rdt=44732
- shrink: https://shlink.io/
- yourls: https://github.com/YOURLS/YOURLS
- https://www.reddit.com/r/explainlikeimfive/comments/nccfip/eli5_what_is_a_url_link_shortener_and_why_would/