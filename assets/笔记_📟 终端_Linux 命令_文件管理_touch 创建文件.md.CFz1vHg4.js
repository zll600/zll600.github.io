import{_ as l,c as e,I as s,j as i,a as k,av as p,D as a,o as r}from"./chunks/framework.B0QqYF0U.js";const B=JSON.parse('{"title":"touch 创建文件","description":"","frontmatter":{},"headers":[],"relativePath":"笔记/📟 终端/Linux 命令/文件管理/touch 创建文件.md","filePath":"笔记/📟 终端/Linux 命令/文件管理/touch 创建文件.md"}'),d={name:"笔记/📟 终端/Linux 命令/文件管理/touch 创建文件.md"},o=i("h1",{id:"touch-创建文件",tabindex:"-1"},[i("code",null,"touch"),k(" 创建文件 "),i("a",{class:"header-anchor",href:"#touch-创建文件","aria-label":'Permalink to "`touch` 创建文件"'},"​")],-1),g=p(`<h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p>touch，触摸的含义；类似于触摸一下，多了一个文件出来的感觉。使用这个命令可以修改文件或者目录的时间属性，包括存取时间和更改时间。若文件不存在，系统会建立一个新的文件，该文件没有任何编码、内容，只是占用「文件名」的大小</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">touch</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [-acfm][-d</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">日期时间</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">][-r</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">参考文件或目录</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] [-t</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">日期时间</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">][--help][--version] [文件或目录…]</span></span></code></pre></div><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -la</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">总用量</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">drwxrwxr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">    6</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  9</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 17:21</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">drwxr-xr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 16</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 4096</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  9</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 17:21</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ..</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> touch</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">neko@ls-865528-12130-12130</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ~/test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -la</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">总用量</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 4</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">drwxrwxr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">   19</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  9</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 17:21</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">drwxr-xr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 16</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 4096</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  9</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 17:21</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ..</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">-rw-rw-r--</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">    0</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  9</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 17:21</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 多了一个 hello 文件</span></span></code></pre></div><p>如果此时我们查看 hello 文件的信息、内容，会发现里面都是空的：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> file</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">hello:</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> empty</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> cat</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><h3 id="其他参数" tabindex="-1">其他参数 <a class="header-anchor" href="#其他参数" aria-label="Permalink to &quot;其他参数&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><strong>-a</strong></td><td>改变档案的读取时间记录。</td></tr><tr><td><strong>-m</strong></td><td>改变档案的修改时间记录。</td></tr><tr><td><strong>-c</strong></td><td>假如目的档案不存在，不会建立新的档案。与 --no-create 的效果一样。</td></tr><tr><td><strong>-f</strong></td><td>不使用，是为了与其他 unix 系统的相容性而保留。</td></tr><tr><td><strong>-r</strong></td><td>使用参考档的时间记录，与 --file 的效果一样。</td></tr><tr><td><strong>-d</strong></td><td>设定时间与日期，可以使用各种不同的格式。</td></tr><tr><td><strong>-t</strong></td><td>设定档案的时间记录，格式与 date 指令相同。</td></tr><tr><td><strong>--no-create</strong></td><td>不会建立新档案。</td></tr></tbody></table>`,11);function C(c,y,F,A,u,_){const t=a("NolebasePageProperties"),n=a("NolebaseGitContributors"),h=a("NolebaseGitChangelog");return r(),e("div",null,[o,s(t),g,s(n),s(h)])}const x=l(d,[["render",C]]);export{B as __pageData,x as default};
