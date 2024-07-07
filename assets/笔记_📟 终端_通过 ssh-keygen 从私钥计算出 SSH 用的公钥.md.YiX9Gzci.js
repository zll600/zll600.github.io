import{_ as l,c as p,I as s,j as e,a as i,av as o,D as a,o as k}from"./chunks/framework.B0QqYF0U.js";const m=JSON.parse('{"title":"通过 ssh-keygen 从私钥计算出 SSH 用的公钥","description":"","frontmatter":{"tags":["命令行","命令行/终端","操作系统/macOS","操作系统/Linux","命令行/ssh-keygen","命令行/ssh","计算机/网络/协议/SSH","开源/软件/ssh"]},"headers":[],"relativePath":"笔记/📟 终端/通过 ssh-keygen 从私钥计算出 SSH 用的公钥.md","filePath":"笔记/📟 终端/通过 ssh-keygen 从私钥计算出 SSH 用的公钥.md"}'),r={name:"笔记/📟 终端/通过 ssh-keygen 从私钥计算出 SSH 用的公钥.md"},d=e("h1",{id:"通过-ssh-keygen-从私钥计算出-ssh-用的公钥",tabindex:"-1"},[i("通过 "),e("code",null,"ssh-keygen"),i(" 从私钥计算出 SSH 用的公钥 "),e("a",{class:"header-anchor",href:"#通过-ssh-keygen-从私钥计算出-ssh-用的公钥","aria-label":'Permalink to "通过 `ssh-keygen` 从私钥计算出 SSH 用的公钥"'},"​")],-1),c=o(`<p>超级简单，像这样就可以了：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ssh-keygen</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">私钥地</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">址</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>就像这样：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ssh-keygen</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ~/.ssh/test_encrypted_ed25519</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Enter</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> passphrase:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ssh-ed25519</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> AAAAC3NzaC1lZDI1NTE5AAAAIAyAbAwe4xj/1Or+BrppbdqxO23bcVXt+FhnwXz9tv7C</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> neko@ayaka.moe</span></span></code></pre></div><p>RSA 和 ED25519 都支持，都可以这么用。</p>`,5);function _(g,y,C,A,S,F){const t=a("NolebasePageProperties"),n=a("NolebaseGitContributors"),h=a("NolebaseGitChangelog");return k(),p("div",null,[d,s(t),c,s(n),s(h)])}const u=l(r,[["render",_]]);export{m as __pageData,u as default};
