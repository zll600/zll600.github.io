import{_ as t,c as l,I as s,j as i,a as p,av as e,D as a,o as r}from"./chunks/framework.B0QqYF0U.js";const u=JSON.parse('{"title":"chown 变更所属权","description":"","frontmatter":{},"headers":[],"relativePath":"笔记/📟 终端/Linux 命令/权限管理/chown 变更所属权.md","filePath":"笔记/📟 终端/Linux 命令/权限管理/chown 变更所属权.md"}'),d={name:"笔记/📟 终端/Linux 命令/权限管理/chown 变更所属权.md"},C=i("h1",{id:"chown-变更所属权",tabindex:"-1"},[i("code",null,"chown"),p(" 变更所属权 "),i("a",{class:"header-anchor",href:"#chown-变更所属权","aria-label":'Permalink to "`chown` 变更所属权"'},"​")],-1),g=e(`<h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p><strong>ch</strong>ange <strong>own</strong>ership，变更所属权的含义，使用该命令可以设置文件所有者和文件关联组的命令。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><p>此处 <code>-cfhvR</code> 是参数，可选项，<code>user</code> 指的是用户名，<code>:group</code> 是可选的，表示用户组名称</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chown</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [-cfhvR] [--help] [--version] user[:group] </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">路径</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><ol><li>变更归属人</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -la</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 查看当前的文件详细信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">总用量</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">drwxrwxr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  3</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">   32</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 11</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10:37</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">drwxr-xr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 16</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 4096</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 12</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 13:35</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ..</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">-rw-rw-r--</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">   16</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  9</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 17:34</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">drwxrwxr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">    6</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 11</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10:37</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tests</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> chown</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 变更 hello 文件的归属权中「归属人」为 root</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -la</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">总用量</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">drwxrwxr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  3</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">   32</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 11</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10:37</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">drwxr-xr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 16</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 4096</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 12</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 13:36</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ..</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">-rw-rw-r--</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">   16</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  9</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 17:34</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 可以看到这里被变更为 root 了</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">drwxrwxr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">    6</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 11</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10:37</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tests</span></span></code></pre></div><ol start="2"><li>变更归属人和用户组</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -la</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 查看当前的文件详细信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">总用量</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">drwxrwxr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  3</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">   32</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 11</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10:37</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">drwxr-xr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 16</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 4096</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 12</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 13:35</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ..</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">-rw-rw-r--</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">   16</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  9</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 17:34</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">drwxrwxr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">    6</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 11</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10:37</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tests</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> chown</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> root:root</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 变更 hello 文件的归属权中「归属人」和「归属用户组」为 root</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ls</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -la</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">总用量</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">drwxrwxr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  3</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">   32</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 11</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10:37</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> .</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">drwxr-xr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 16</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 4096</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 12</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 13:38</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ..</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">-rw-rw-r--</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  1</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">   16</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  9</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 17:34</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> # 可以看到这里被变更为 root 了</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">drwxrwxr-x</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">  2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">    6</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10月</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 11</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 10:37</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tests</span></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><h3 id="其他参数" tabindex="-1">其他参数 <a class="header-anchor" href="#其他参数" aria-label="Permalink to &quot;其他参数&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><strong>-c</strong></td><td>显示更改的部分的信息</td></tr><tr><td><strong>-f</strong></td><td>忽略错误信息</td></tr><tr><td><strong>-h</strong></td><td>修复符号链接</td></tr><tr><td><strong>-v</strong></td><td>显示详细的处理信息</td></tr><tr><td><strong>-R</strong></td><td>处理指定目录以及其子目录下的所有文件</td></tr><tr><td><strong>--help</strong></td><td>帮助信息</td></tr><tr><td><strong>--version</strong></td><td>版本信息</td></tr></tbody></table>`,13);function o(y,F,c,A,D,x){const h=a("NolebasePageProperties"),n=a("NolebaseGitContributors"),k=a("NolebaseGitChangelog");return r(),l("div",null,[C,s(h),g,s(n),s(k)])}const _=t(d,[["render",o]]);export{u as __pageData,_ as default};
