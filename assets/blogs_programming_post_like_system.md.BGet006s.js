import{_ as p,c as k,j as n,a as e,G as i,as as r,B as a,o as d}from"./chunks/framework.CjH1QeIx.js";const C=JSON.parse('{"title":"背景","description":"","frontmatter":{"tags":["programming","social system"]},"headers":[],"relativePath":"blogs/programming/post_like_system.md","filePath":"blogs/programming/post_like_system.md"}'),D={name:"blogs/programming/post_like_system.md"};function o(g,s,A,B,y,c){const l=a("NolebasePageProperties"),t=a("NolebaseGitContributors"),h=a("NolebaseGitChangelog");return d(),k("div",null,[s[0]||(s[0]=n("h1",{id:"背景",tabindex:"-1"},[e("背景 "),n("a",{class:"header-anchor",href:"#背景","aria-label":'Permalink to "背景"'},"​")],-1)),i(l),s[1]||(s[1]=r(`<p>构建了一个 Post 系统，用户可以发布 Post，Post 可以被点赞，点赞的数量也可以被查询。</p><p>业务上有以下需求</p><ul><li>对 post 点赞</li><li>取消对 post 的点赞</li><li>查询某条 post 的点赞数</li><li>判断用户是否对某条 post 点赞</li><li>判断对某条 post 点赞的用户列表</li></ul><h1 id="方案" tabindex="-1">方案 <a class="header-anchor" href="#方案" aria-label="Permalink to &quot;方案&quot;">​</a></h1><h2 id="数据库-schema" tabindex="-1">数据库 schema <a class="header-anchor" href="#数据库-schema" aria-label="Permalink to &quot;数据库 schema&quot;">​</a></h2><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">--- 保存 Post</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> post</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    id         </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">BIGSERIAL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    user_id    </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">INTEGER</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    created_at </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">TIMESTAMP</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NOW</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    updated_at </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">TIMESTAMP</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NOW</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 保存 &lt;post_id, user_id&gt; 的点赞记录</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> post_like</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    post_id    </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">BIGINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    user_id    </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">INTEGER</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">   NOT NULL</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    is_like    </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">BOOLEAN</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">   NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> false,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    created_at </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">TIMESTAMP</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NOW</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    updated_at </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">TIMESTAMP</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NOW</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(),</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (post_id, user_id)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-light-font-style:inherit;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">-- 保存 post 点赞数</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">CREATE</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> TABLE</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> post_like_count</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    post_id    </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">BIGINT</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    PRIMARY KEY</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> ,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    like_count </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">INT</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">       NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    created_at </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">TIMESTAMP</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NOW</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    updated_at </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">TIMESTAMP</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NOT NULL</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> DEFAULT</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> NOW</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span></code></pre></div><h2 id="kafka" tabindex="-1">Kafka <a class="header-anchor" href="#kafka" aria-label="Permalink to &quot;Kafka&quot;">​</a></h2><ul><li>topic: post_like_topic</li><li>message:</li></ul><div class="language-txt vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>- post_id: int</span></span>
<span class="line"><span>- user_id: int</span></span>
<span class="line"><span>- is_like: boolean</span></span></code></pre></div><h2 id="服务端的逻辑" tabindex="-1">服务端的逻辑 <a class="header-anchor" href="#服务端的逻辑" aria-label="Permalink to &quot;服务端的逻辑&quot;">​</a></h2><h3 id="写接口" tabindex="-1">写接口 <a class="header-anchor" href="#写接口" aria-label="Permalink to &quot;写接口&quot;">​</a></h3><p>在本地需求中，写接口有两种操作</p><ul><li>点赞</li><li>取消点赞。</li></ul><h3 id="读接口" tabindex="-1">读接口 <a class="header-anchor" href="#读接口" aria-label="Permalink to &quot;读接口&quot;">​</a></h3><ul><li>查询某条 post 的点赞数</li><li>查询当前用户是否点赞了某条 post（高频）</li><li>获取 post 的点赞用户列表（低频）</li></ul>`,15)),i(t),i(h)])}const F=p(D,[["render",o]]);export{C as __pageData,F as default};
