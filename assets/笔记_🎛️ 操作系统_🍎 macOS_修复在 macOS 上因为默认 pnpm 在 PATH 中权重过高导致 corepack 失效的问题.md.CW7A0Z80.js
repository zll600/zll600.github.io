import{_ as l,c as d,I as a,j as s,a as e,w as i,av as h,D as n,o as r}from"./chunks/framework.B0QqYF0U.js";const H=JSON.parse('{"title":"修复在 macOS 上因为默认 pnpm 在 PATH 中权重过高导致 corepack 失效的问题","description":"","frontmatter":{"tags":["操作系统/macOS","开发/Nodejs/pnpm","开发/Nodejs/npm","开发/Nodejs","命令行","开发/Nodejs/corepack","命令行/corepack","命令行/npm","命令行/pnpm"]},"headers":[],"relativePath":"笔记/🎛️ 操作系统/🍎 macOS/修复在 macOS 上因为默认 pnpm 在 PATH 中权重过高导致 corepack 失效的问题.md","filePath":"笔记/🎛️ 操作系统/🍎 macOS/修复在 macOS 上因为默认 pnpm 在 PATH 中权重过高导致 corepack 失效的问题.md"}'),k={name:"笔记/🎛️ 操作系统/🍎 macOS/修复在 macOS 上因为默认 pnpm 在 PATH 中权重过高导致 corepack 失效的问题.md"},_=s("h1",{id:"修复在-macos-上因为默认-pnpm-在-path-中权重过高导致-corepack-失效的问题",tabindex:"-1"},[e("修复在 macOS 上因为默认 "),s("code",null,"pnpm"),e(" 在 "),s("code",null,"PATH"),e(" 中权重过高导致 "),s("code",null,"corepack"),e(" 失效的问题 "),s("a",{class:"header-anchor",href:"#修复在-macos-上因为默认-pnpm-在-path-中权重过高导致-corepack-失效的问题","aria-label":'Permalink to "修复在 macOS 上因为默认 `pnpm` 在 `PATH` 中权重过高导致 `corepack` 失效的问题"'},"​")],-1),m=s("code",null,"nr",-1),g=s("code",null,"pnpm",-1),u=s("code",null,"8.6.12",-1),C=s("code",null,"pnpm",-1),b=s("code",null,"package.json",-1),v=s("code",null,'"packageManager": "pnpm@8.5.14"',-1),y=s("code",null,"corepack",-1),F=s("code",null,"corepack prepare <package> --activate",-1),A=s("code",null,"pnpm",-1),P=s("code",null,"corepack",-1),N=s("code",null,"corepack",-1),f=h('<div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> uninstall</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yarn</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pnpm</span></span></code></pre></div><p>如果是用 <code>pnpm</code> 自己安装的 <code>pnpm</code>，可以用这个命令移除：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> uninstall</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pnpm</span></span></code></pre></div><p>接下来重新确认一下 <code>npm</code> 侧的 <code>corepack</code> 是存在的：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> corepack</span></span></code></pre></div><p>然后激活 <code>corepack</code>：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">corepack</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> enable</span></span></code></pre></div><p>如果希望直接用 <code>pnpm</code> 的 8.15.4 版本的话，可以直接运行下面的命令来下载和准备好：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">corepack</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> prepare</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pnpm@8.15.4</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --activate</span></span></code></pre></div>',9);function S(T,O,x,E,D,j){const t=n("NolebasePageProperties"),p=n("VPNolebaseInlineLinkPreview"),o=n("NolebaseGitContributors"),c=n("NolebaseGitChangelog");return r(),d("div",null,[_,a(t),s("p",null,[e("今天用着用着 macOS 发现 "),a(p,{href:"https://github.com/antfu/ni",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("@antfu/ni")]),_:1}),e("的 "),m,e(" 子命令突然不工作了，然后 "),g,e(" 回退到了 "),u,e(" 的系统全局 "),C,e(" 版本，就算是项目的 "),b,e(" 已经写了 "),v,e("，确认了 "),y,e(" 存在，并且已经激活，甚至主动使用了 "),F,e(" 都无法使用项目内指定的 "),A,e("。")]),s("p",null,[e("在反复搜索之后，还是决定去阅读一下 "),P,e(" 的官方文档，在参考了 "),N,e(" 的文档后 "),a(p,{href:"https://github.com/nodejs/corepack/blob/main/README.md",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("corepack/README.md at main · nodejs/corepack")]),_:1}),e("，发现官方文档建议把全局的 pnpm 卸载删除了：")]),f,a(o),a(c)])}const I=l(k,[["render",S]]);export{H as __pageData,I as default};
