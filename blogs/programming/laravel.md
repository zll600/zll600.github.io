---
tags:
  - programming
  - php
  - laravel
---

本文记录一些学习 laravel 过程中积累的知识

## Request Lifecycle

1. 每个请求都会初始化一个新的 laravel app 实例，注册相关的 service container

> The index.php file loads the Composer generated autoloader definition, and then retrieves an instance of the Laravel application from bootstrap/app.php. The first action taken by Laravel itself is to create an instance of the application / service container.

2. 实例化一个新的 laravel app 之后，请求就会进入 http kernel 或者 console kernel。

   1. http kernel 会注册需要的 service provider 并执行对应的 boot 函数。
   2. 接着通过路由将请求路由到指定的 controller。
   3. 通过定义的 middleware
   4. 进入 controller，controller 接收 request，执行逻辑并返回 response
   5. 执行 middlewares
   6. response 返回给请求方

## Service Container

Laravel 提供的一种依赖注入机制。

1. bind

   1. bind 一次，每次 resolve 的时候都返回新的实例

2. singleton

   1. bind 一次，第一次 resolve 的时候初始化一个新的实例
   2. 之后每次都返回已经初始化之后的实例

3. scoped

   1. bind 一次，第一次 resolve 的时候初始化一个新的实例
   2. 一个 request 的 lifecycle 只能 resolve 一次

4. instance

   1. bind 一个已经存在的对象进入 service container

## Service Provider

我理解时 laravel 提供的一种初始化机制，将整个 app 的功能分解为不同的 service provider，无论的 laravel 框架本身提供的 service provider 还是业务定义的 service provider。

1. register 方法

   1. 主要用于 binding service container
   2. 不能注册 route、event listener，否则可能用到一个尚未 register 的 service provider

2. boot 方法

   1. 定义该 service provider 具体的初始化逻
   2. 执行 boot 方法时，所有的 service provider 都已经注册完成

3. deferred service providers
   1. 将 service provider 涉及的 service container 的注册过程延迟到真正需要时
   2. laravel 存储需要延迟注册的 service provider 名称以及类名，当真正需要时对这些 service provider 进行初始化

## Facade

Facade 提供了使用 static 方法访问 service container 中的类的方法的方式。Facade 就是提供了一种 static proxy 代理注册在 service container 中的类。

除了 Facade，Laravel 同样提供了一些 helper function 进行补充，来更好地利用 laravel 的其他 feature。

1. 什么时候使用 Facade

   1. Facade 提供 static proxy 的能力，使用者不用记住 binding service container 是使用 key 名
   2. Facade 使用独特的 php dynamic method，使得 Facade 更容易测试。
   3. 潜在隐患
      1. Facade 非常容易使用，因此容易导致一个 class 中使用了大量的 Facade，造成单个 class 的范围过大。
      2. 显式使用依赖注入，可以让用户对单个 class 的膨胀保持警惕

2. Facade vs dependency injection

   1. dependency injection 的优势在于可以方便的替换被注入 class 的内部实现。这在测试时十分有用
   2. Facade 有利于测试 class 的 static method

3. Facade vs helper functions

   1. 这两者可以都可以实现使用 Laravel 的大部分功能
   2. helper function 也可以配合同样功能的 Facade 使用/测试

4. Facade 是如何工作的

   1. 在 Laravel 中，一个 Facade 就是一个代理了 service container 中一个 object 的访问的一个 class。实现这个功能就是 Laravel 的 Facade 以及用户自定义的各种 Facade
   2. Facade class 利用 PHP \_\_callStatic 魔术方法，将对 Facade class 的所有访问传递到 service container 中真正执行逻辑的 instance
   3. 每个继承 Laravel 抽象 Facade class 的类都会实现一个 `getFacadeAccessor` 其中返回要 resolve 的提前 binding 的 service container instance。

5. Real-time Facade
   1. 使用 Real time Facade，你可以将 Laravel app 中的任何类作为 Facade 使用，具体可以参考 Laravel 官方文档中的例子

## Reference

- https://laravel.com/docs/11.x/lifecycle
- https://laravel.com/docs/11.x/container
- https://laravel.com/docs/11.x/providers
- https://laravel.com/docs/11.x/facades
