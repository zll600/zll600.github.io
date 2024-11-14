---
tags:
  - programming
  - mysql
---

文章主要用来记录在我比较关注的 mysql optimizer_trace 中的一些信息，留一个备忘录，方便日后查阅。

简单解释 optimizer_trace 是什么

给一个两张表 inner join 的例子。需要
- 带分页，
- 带排序
- 带删除？

从上到下解释一下 trace 中的各个步骤。