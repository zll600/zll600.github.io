import{_ as h,c as p,I as o,j as i,a as s,w as t,av as e,D as j,o as P}from"./chunks/framework.B0QqYF0U.js";const q="/assets/github-actions-use-bot-user-account-as-commiter-screenshot-01.Dw4DwUr6.png",O="/assets/github-actions-use-bot-user-account-as-commiter-screenshot-02.qOC-nG6U.png",F=JSON.parse('{"title":"仓库内的 GitHub Actions 工作流使用 GitHub Actions Bot 来提交","description":"","frontmatter":{"tags":["网站/GitHub","开发/CICD","开发/CICD/GitHub-Actions","开发/标记语言/YAML","开发/DevOps","开发/容器化/Docker","开发/云原生/Docker","开发/API/GraphQL","开发/API/Protobuf","开发/API/Swagger","开发/API/OpenAPI","命令行/git","开发/Git"]},"headers":[],"relativePath":"笔记/🛠️ 开发/🟢 持续集成 持续交付 CICD/GitHub Actions/仓库内的 GitHub Actions 工作流使用 GitHub Actions Bot 来提交.md","filePath":"笔记/🛠️ 开发/🟢 持续集成 持续交付 CICD/GitHub Actions/仓库内的 GitHub Actions 工作流使用 GitHub Actions Bot 来提交.md"}'),L={name:"笔记/🛠️ 开发/🟢 持续集成 持续交付 CICD/GitHub Actions/仓库内的 GitHub Actions 工作流使用 GitHub Actions Bot 来提交.md"},K=i("h1",{id:"仓库内的-github-actions-工作流使用-github-actions-bot-来提交",tabindex:"-1"},[s("仓库内的 GitHub Actions 工作流使用 GitHub Actions Bot 来提交 "),i("a",{class:"header-anchor",href:"#仓库内的-github-actions-工作流使用-github-actions-bot-来提交","aria-label":'Permalink to "仓库内的 GitHub Actions 工作流使用 GitHub Actions Bot 来提交"'},"​")],-1),c=e(`<h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p>我们可能会需要通过 GitHub Actions 联动触发并构建诸如 Swagger API 文档、Swagger API 生成代码、GraphQL 生成代码、Protobuf 生成代码之类的文件或是项目，在构建之后提交到仓库内，这个时候我们可以利用到 Github Actions 提供的工作流内 Token 和官方预置的机器用户 GitHub Actions Bot 来推送我们新的提交，这样做也可以避免将自动构建的 Commit 和贡献数量计入到管理员账号名下，也可以一目了然的看出来具体是 Bot 提交的还是人为干预提交的。</p><h2 id="实践方法" tabindex="-1">实践方法 <a class="header-anchor" href="#实践方法" aria-label="Permalink to &quot;实践方法&quot;">​</a></h2><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">工作流名称</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">concurrency</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">concurrency-key</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  workflow_dispatch</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  commit_job</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">代码签出</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">actions/checkout@v3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">          repository</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">org/repo1</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">          token</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">\${{ secrets.ACCESS_TOKEN }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">          path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">clones/org/repo1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">创建 hello_world.txt 文件</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">            cd clones/org/repo1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">            echo &#39;Hello, world!&#39; &gt;&gt; hello_world.txt</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">同步 repo</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">          cd clones/org/repo1</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">          bash -c &#39;if [ $(git status --porcelain | wc -l) -eq 0 ]; then</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">            echo &quot;工作树无变更，跳过提交步骤...&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">          else</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">            echo &quot;提交文件中...&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">            git config user.name &quot;github-actions[bot]&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">            git config user.email &quot;github-actions[bot]@users.noreply.github.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">            git add .</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">            git commit -m &quot;chore(generated): GitHub Actions Bot 提交的记录&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">            git log -3 --oneline</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">            echo &quot;推送更新中...&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">            git push</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">          fi&#39;</span></span></code></pre></div><h3 id="工作流说明" tabindex="-1">工作流说明 <a class="header-anchor" href="#工作流说明" aria-label="Permalink to &quot;工作流说明&quot;">​</a></h3><p>在上述文件中我们创建了一个有 3 个步骤的工作流。</p>`,6),k=i("code",null,"concurrency",-1),r=i("code",null,"concurrency",-1),A=e(`<p>其次是我们使用了 <code>actions/checkout@v3</code> 工作流插件来使用预先配置的 Secret <code>secrets.ACCESS_TOKEN</code> 去克隆 <code>org</code> 组织名下的 <code>repo1</code> 仓库到本地 <code>clones/org/repo1</code> 目录下。</p><p>接下来我们使用简单的命令 <code>echo &#39;Hello, world!&#39; &gt;&gt; hello_world.txt</code> 在 <code>clones/org/repo1</code> 目录下创建了一个内容为 <code>Hello, world!</code> 名为 <code>hello_world.txt</code> 的文件。</p><p>我们在第三部执行中先切换到 <code>clones/org/repo1</code> 目录，然后通过 <code>bash -c &#39;&lt;脚本&gt;&#39;</code> 命令来执行一段多行且带有逻辑判断的脚本。<code>git status --porcelain | wc -l</code> 用于统计当前工作区下的文件变更数量，如果我们不需要提交的时候就跳过提交了。反之我们需要将自己的用户配置为用户名为 <code>github-actions[bot]</code> 和邮箱为 <code>github-actions[bot]@users.noreply.github.com</code> 的用户，然后创建我们的提交 <code>chore(generated): GitHub Actions Bot 提交的记录</code>，最后通过 <code>git push</code> 推送到远程分支上。</p><h3 id="细节和原理说明" tabindex="-1">细节和原理说明 <a class="header-anchor" href="#细节和原理说明" aria-label="Permalink to &quot;细节和原理说明&quot;">​</a></h3><p>工作流文件中最关键的地方在于这两行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> user.name</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;github-actions[bot]&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> config</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> user.email</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;github-actions[bot]@users.noreply.github.com&quot;</span></span></code></pre></div><p>这会将我们的用户配置为用户名为 <code>github-actions[bot]</code> 和邮箱为 <code>github-actions[bot]@users.noreply.github.com</code> 的用户，推送到 GitHub 之后就可以看到下面带有头像且名称为 <code>github-actions[bot]</code> 的提交记录啦。</p>`,7),d=i("h3",{id:"工作流执行结果",tabindex:"-1"},[s("工作流执行结果 "),i("a",{class:"header-anchor",href:"#工作流执行结果","aria-label":'Permalink to "工作流执行结果"'},"​")],-1),g=i("h2",{id:"参考资料",tabindex:"-1"},[s("参考资料 "),i("a",{class:"header-anchor",href:"#参考资料","aria-label":'Permalink to "参考资料"'},"​")],-1);function f(C,b,B,_,v,m){const u=j("NolebasePageProperties"),a=j("VPNolebaseInlineLinkPreview"),n=j("NolebaseUnlazyImg"),l=j("NolebaseGitContributors"),y=j("NolebaseGitChangelog");return P(),p("div",null,[K,o(u),c,i("p",null,[s("首先需要注意的是第二行的 "),k,s(" 属性，设定该属性可以避免多个工作流并发运行从而导致错误生成版本不正确的代码影响业务开发，关于 "),r,s(" 可以在 "),o(a,{href:"https://docs.github.com/en/actions/using-jobs/using-concurrency",target:"_blank",rel:"noreferrer"},{default:t(()=>[s("官方文档")]),_:1}),s(" 中找到更多详细内容。")]),A,i("p",null,[o(n,{src:q,alt:"",thumbhash:"/vcBAYBUh5h4d/eZZ3l/lvc=",placeholderSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAFCAYAAAAkG+5xAAACpElEQVR4AQCBAH7/APf7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/AIEAfv8A9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f8AgQB+/wD3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9/wCBAH7/APf7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/AYEAfv8A9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f/3+/3/9/v9//f7/f88rXTfOWRDxAAAAABJRU5ErkJggg==",width:"2558",height:"494",autoSizes:"true"})]),d,i("p",null,[o(n,{src:O,alt:"",thumbhash:"jPcBBoCvZ3aLmHh1mJmJSJeUpIA+Cug=",placeholderSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAYAAAAdx42aAAAOKElEQVR4AQCBAH7/ACouOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/AIEAfv8AKi44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8AgQB+/wAqLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/wCBAH7/ACouOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/AIEAfv8AKi44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8AgQB+/wAqLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/wCBAH7/ACouOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/AIEAfv8AKi44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8AgQB+/wAqLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/wCBAH7/ACouOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/AIEAfv8AKi44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8AgQB+/wAqLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/wCBAH7/ACouOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/AIEAfv8AKi44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8AgQB+/wAqLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/wCBAH7/ACouOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/AIEAfv8AKi44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8AgQB+/wAqLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/wCBAH7/ACouOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/AIEAfv8AKi44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8AgQB+/wAqLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/wCBAH7/ACouOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/AIEAfv8AKi44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8AgQB+/wAqLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/wCBAH7/ACouOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/AIEAfv8AKi44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8BgQB+/wAqLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/youOP8qLjj/Ki44/5p1QuwJqR4wAAAAAElFTkSuQmCC",width:"2146",height:"1872",autoSizes:"true"})]),g,i("ul",null,[i("li",null,[o(a,{href:"https://github.com/actions/checkout/discussions/479",target:"_blank",rel:"noreferrer"},{default:t(()=>[s('How can commits show "github actions bot" instead of Unknown ? · Discussion #479 · actions/checkout')]),_:1})])]),o(l),o(y)])}const w=h(L,[["render",f]]);export{F as __pageData,w as default};
