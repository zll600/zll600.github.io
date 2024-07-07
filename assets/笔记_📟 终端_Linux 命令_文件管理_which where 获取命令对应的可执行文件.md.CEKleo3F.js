import{_ as t,c as p,I as i,j as s,a as e,av as r,D as a,o}from"./chunks/framework.B0QqYF0U.js";const m=JSON.parse('{"title":"which where 获取命令对应的可执行文件","description":"","frontmatter":{},"headers":[],"relativePath":"笔记/📟 终端/Linux 命令/文件管理/which where 获取命令对应的可执行文件.md","filePath":"笔记/📟 终端/Linux 命令/文件管理/which where 获取命令对应的可执行文件.md"}'),k={name:"笔记/📟 终端/Linux 命令/文件管理/which where 获取命令对应的可执行文件.md"},c=s("h1",{id:"which-where-获取命令对应的可执行文件",tabindex:"-1"},[s("code",null,"which"),e(),s("code",null,"where"),e(" 获取命令对应的可执行文件 "),s("a",{class:"header-anchor",href:"#which-where-获取命令对应的可执行文件","aria-label":'Permalink to "`which` `where` 获取命令对应的可执行文件"'},"​")],-1),d=r(`<h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p>which，哪个，where，在哪里的含义，使用这个命令可以获取可执行命令的具体位置，这个命令包含以下几种形式：</p><ol><li>shell 程序定义、内建的可执行命令，比如 cd</li><li>shell 脚本，可以被 shell 程序读取的代码文件，比如 hello_world.sh、hello_world.zsh 等等</li><li>二进制可执行文件，编译好的程序，比如 curl、ls 等等</li></ol><p>找不到命令和东西的时候可以先用这个试试看w</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">which</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [命令]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">where</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [命令]</span></span></code></pre></div><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> which</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> cd</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # shell 内建命令</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> shell</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> built-in</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> command</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # cd: shell 程序内建的命令</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> which</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello_world.sh</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # sh 脚本文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">/usr/local/bin/hello_world.sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> which</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> curl</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 二进制可执行文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">/usr/bin/curl</span></span></code></pre></div>`,8);function _(g,y,F,C,u,w){const l=a("NolebasePageProperties"),h=a("NolebaseGitContributors"),n=a("NolebaseGitChangelog");return o(),p("div",null,[c,i(l),d,i(h),i(n)])}const f=t(k,[["render",_]]);export{m as __pageData,f as default};
