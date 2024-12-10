import{_ as p,c as d,G as l,aj as v,j as a,w as r,B as o,o as f,a as t}from"./chunks/framework.grSdWIKG.js";const P=JSON.parse('{"title":"","description":"","frontmatter":{"tags":["programming","php","laravel"]},"headers":[],"relativePath":"blogs/programming/laravel.md","filePath":"blogs/programming/laravel.md"}'),h={name:"blogs/programming/laravel.md"};function m(b,e,u,g,F,x){const c=o("NolebasePageProperties"),i=o("VPNolebaseInlineLinkPreview"),n=o("NolebaseGitContributors"),s=o("NolebaseGitChangelog");return f(),d("div",null,[l(c),e[4]||(e[4]=v('<p>本文记录一些学习 laravel 过程中积累的知识</p><h2 id="request-lifecycle" tabindex="-1">Request Lifecycle <a class="header-anchor" href="#request-lifecycle" aria-label="Permalink to &quot;Request Lifecycle&quot;">​</a></h2><ol><li>每个请求都会初始化一个新的 laravel app 实例，注册相关的 service container</li></ol><blockquote><p>The index.php file loads the Composer generated autoloader definition, and then retrieves an instance of the Laravel application from bootstrap/app.php. The first action taken by Laravel itself is to create an instance of the application / service container.</p></blockquote><ol start="2"><li><p>实例化一个新的 laravel app 之后，请求就会进入 http kernel 或者 console kernel。</p><ol><li>http kernel 会注册需要的 service provider 并执行对应的 boot 函数。</li><li>接着通过路由将请求路由到指定的 controller。</li><li>通过定义的 middleware</li><li>进入 controller，controller 接收 request，执行逻辑并返回 response</li><li>执行 middlewares</li><li>response 返回给请求方</li></ol></li></ol><h2 id="service-container" tabindex="-1">Service Container <a class="header-anchor" href="#service-container" aria-label="Permalink to &quot;Service Container&quot;">​</a></h2><p>Laravel 提供的一种依赖注入机制。</p><ol><li><p>bind</p><ol><li>bind 一次，每次 resolve 的时候都返回新的实例</li></ol></li><li><p>singleton</p><ol><li>bind 一次，第一次 resolve 的时候初始化一个新的实例</li><li>之后每次都返回已经初始化之后的实例</li></ol></li><li><p>scoped</p><ol><li>bind 一次，第一次 resolve 的时候初始化一个新的实例</li><li>一个 request 的 lifecycle 只能 resolve 一次</li></ol></li><li><p>instance</p><ol><li>bind 一个已经存在的对象进入 service container</li></ol></li></ol><h2 id="service-provider" tabindex="-1">Service Provider <a class="header-anchor" href="#service-provider" aria-label="Permalink to &quot;Service Provider&quot;">​</a></h2><p>我理解时 laravel 提供的一种初始化机制，将整个 app 的功能分解为不同的 service provider，无论的 laravel 框架本身提供的 service provider 还是业务定义的 service provider。</p><ol><li><p>register 方法</p><ol><li>主要用于 binding service container</li><li>不能注册 route、event listener，否则可能用到一个尚未 register 的 service provider</li></ol></li><li><p>boot 方法</p><ol><li>定义该 service provider 具体的初始化逻</li><li>执行 boot 方法时，所有的 service provider 都已经注册完成</li></ol></li><li><p>deferred service providers</p><ol><li>将 service provider 涉及的 service container 的注册过程延迟到真正需要时</li><li>laravel 存储需要延迟注册的 service provider 名称以及类名，当真正需要时对这些 service provider 进行初始化</li></ol></li></ol><h2 id="facade" tabindex="-1">Facade <a class="header-anchor" href="#facade" aria-label="Permalink to &quot;Facade&quot;">​</a></h2><p>Facade 提供了使用 static 方法访问 service container 中的类的方法的方式。Facade 就是提供了一种 static proxy 代理注册在 service container 中的类。</p><p>除了 Facade，Laravel 同样提供了一些 helper function 进行补充，来更好地利用 laravel 的其他 feature。</p><ol><li><p>什么时候使用 Facade</p><ol><li>Facade 提供 static proxy 的能力，使用者不用记住 binding service container 是使用 key 名</li><li>Facade 使用独特的 php dynamic method，使得 Facade 更容易测试。</li><li>潜在隐患 <ol><li>Facade 非常容易使用，因此容易导致一个 class 中使用了大量的 Facade，造成单个 class 的范围过大。</li><li>显式使用依赖注入，可以让用户对单个 class 的膨胀保持警惕</li></ol></li></ol></li><li><p>Facade vs dependency injection</p><ol><li>dependency injection 的优势在于可以方便的替换被注入 class 的内部实现。这在测试时十分有用</li><li>Facade 有利于测试 class 的 static method</li></ol></li><li><p>Facade vs helper functions</p><ol><li>这两者可以都可以实现使用 Laravel 的大部分功能</li><li>helper function 也可以配合同样功能的 Facade 使用/测试</li></ol></li><li><p>Facade 是如何工作的</p><ol><li>在 Laravel 中，一个 Facade 就是一个代理了 service container 中一个 object 的访问的一个 class。实现这个功能就是 Laravel 的 Facade 以及用户自定义的各种 Facade</li><li>Facade class 利用 PHP __callStatic 魔术方法，将对 Facade class 的所有访问传递到 service container 中真正执行逻辑的 instance</li><li>每个继承 Laravel 抽象 Facade class 的类都会实现一个 <code>getFacadeAccessor</code> 其中返回要 resolve 的提前 binding 的 service container instance。</li></ol></li><li><p>Real-time Facade</p><ol><li>使用 Real time Facade，你可以将 Laravel app 中的任何类作为 Facade 使用，具体可以参考 Laravel 官方文档中的例子</li></ol></li></ol><h2 id="reference" tabindex="-1">Reference <a class="header-anchor" href="#reference" aria-label="Permalink to &quot;Reference&quot;">​</a></h2>',16)),a("ul",null,[a("li",null,[l(i,{href:"https://laravel.com/docs/11.x/lifecycle",target:"_blank",rel:"noreferrer"},{default:r(()=>e[0]||(e[0]=[t("https://laravel.com/docs/11.x/lifecycle")])),_:1})]),a("li",null,[l(i,{href:"https://laravel.com/docs/11.x/container",target:"_blank",rel:"noreferrer"},{default:r(()=>e[1]||(e[1]=[t("https://laravel.com/docs/11.x/container")])),_:1})]),a("li",null,[l(i,{href:"https://laravel.com/docs/11.x/providers",target:"_blank",rel:"noreferrer"},{default:r(()=>e[2]||(e[2]=[t("https://laravel.com/docs/11.x/providers")])),_:1})]),a("li",null,[l(i,{href:"https://laravel.com/docs/11.x/facades",target:"_blank",rel:"noreferrer"},{default:r(()=>e[3]||(e[3]=[t("https://laravel.com/docs/11.x/facades")])),_:1})])]),l(n),l(s)])}const _=p(h,[["render",m]]);export{P as __pageData,_ as default};
