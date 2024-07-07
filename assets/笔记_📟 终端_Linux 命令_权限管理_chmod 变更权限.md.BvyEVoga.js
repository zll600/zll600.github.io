import{_ as o,a as r}from"./chunks/image_20211012140400.2H8nntDF.js";import{_ as p,c as v,I as i,j as s,a as e,w as c,av as f,D as t,o as k}from"./chunks/framework.B0QqYF0U.js";const F=JSON.parse('{"title":"chmod 变更权限","description":"","frontmatter":{},"headers":[],"relativePath":"笔记/📟 终端/Linux 命令/权限管理/chmod 变更权限.md","filePath":"笔记/📟 终端/Linux 命令/权限管理/chmod 变更权限.md"}'),P={name:"笔记/📟 终端/Linux 命令/权限管理/chmod 变更权限.md"},g=s("h1",{id:"chmod-变更权限",tabindex:"-1"},[s("code",null,"chmod"),e(" 变更权限 "),s("a",{class:"header-anchor",href:"#chmod-变更权限","aria-label":'Permalink to "`chmod` 变更权限"'},"​")],-1),u=s("h2",{id:"说明",tabindex:"-1"},[e("说明 "),s("a",{class:"header-anchor",href:"#说明","aria-label":'Permalink to "说明"'},"​")],-1),b=s("p",null,[s("strong",null,"ch"),e("ange "),s("strong",null,"mod"),e("e，变更模式，使用该命令可以控制用户对文件的权限")],-1),A=f('<h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><p>此处 <code>-cfvR</code> 是参数，可选项</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [-cfvR] [--help] [--version] </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">模式</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">路径</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">...</span></span></code></pre></div><h4 id="模式的语法" tabindex="-1">模式的语法 <a class="header-anchor" href="#模式的语法" aria-label="Permalink to &quot;模式的语法&quot;">​</a></h4><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[ugoa...][[+-</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">][rwxXst]...][,...]</span></span></code></pre></div><h5 id="变更时加上-u-g-o-a-的含义" tabindex="-1">变更时加上 <code>u</code>/<code>g</code>/<code>o</code>/<code>a</code> 的含义 <a class="header-anchor" href="#变更时加上-u-g-o-a-的含义" aria-label="Permalink to &quot;变更时加上 `u`/`g`/`o`/`a` 的含义&quot;">​</a></h5><ol><li><code>u</code> 表示该文件的拥有者，加上了之后只会编辑用户（第一组）的值</li><li><code>g</code> 表示与该文件的拥有者属于同一个用户组，加上了之后只会编辑用户组（第二组）的值</li><li><code>o</code> 表示其他以外的人，加上了之后只会编辑其他用户（第三组）的值</li><li><code>a</code> 表示这三者皆是，加上了之后全部都会被影响</li></ol><h5 id="变更时加上-的含义" tabindex="-1">变更时加上 +-= 的含义 <a class="header-anchor" href="#变更时加上-的含义" aria-label="Permalink to &quot;变更时加上 +-= 的含义&quot;">​</a></h5><ol><li><code>+</code> 表示增加权限</li><li><code>-</code> 表示取消权限</li><li><code>=</code> 表示唯一设定权限</li></ol><h5 id="变更时加上-rwxx-的含义" tabindex="-1">变更时加上 rwxX 的含义 <a class="header-anchor" href="#变更时加上-rwxx-的含义" aria-label="Permalink to &quot;变更时加上 rwxX 的含义&quot;">​</a></h5><ol><li><code>r</code> 表示可读取</li><li><code>w</code> 表示可写入</li><li><code>x</code> 表示可执行</li><li><code>X</code> 只有当文件为目录文件，或者其他类型的用户有可执行权限时，才将文件权限设置可执行</li><li><code>s</code> 表示当文件被执行时，根据 who 参数指定的用户类型设置文件的 setuid 或者 setgid 权限</li><li><code>t</code> 表示设置粘贴位，只有超级用户可以设置该位，只有文件所有者u可以使用该位</li></ol><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><ol><li>将文件 file1.txt 设为所有人皆可读取 :</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ugo+r</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> file1.txt</span></span></code></pre></div><ol start="2"><li>将文件 file1.txt 设为所有人皆可读取 :</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> a+r</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> file1.txt</span></span></code></pre></div><ol start="3"><li>将文件 file1.txt 与 file2.txt 设为该文件拥有者，与其所属同一个群体者可写入，但其他以外的人则不可写入 :</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ug+w,o-w</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> file1.txt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> file2.txt</span></span></code></pre></div><ol start="4"><li>为 ex1.py 文件拥有者增加可执行权限:</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> u+x</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ex1.py</span></span></code></pre></div><ol start="5"><li>将目前目录下的所有文件与子目录皆设为任何人可读取 :</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -R</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> a+r</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> *</span></span></code></pre></div><ol start="6"><li>此外chmod也可以用数字来表示权限如 :</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 777</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> file</span></span></code></pre></div><p>语法：</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> abc</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> file</span></span></code></pre></div><p>其中a,b,c各为一个数字，分别表示User、Group、及Other的权限。 每个权限类型对应的数字值为：</p><table><thead><tr><th>r</th><th>w</th><th>x</th><th>-</th></tr></thead><tbody><tr><td>4</td><td>2</td><td>1</td><td>0</td></tr></tbody></table><ul><li>若要 rwx 属性则 4+2+1=7；</li><li>若要 rw- 属性则 4+2=6；</li><li>若要 r-x 属性则 4+1=5。</li></ul><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> a=rwx</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> file</span></span></code></pre></div><p>和</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 777</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> file</span></span></code></pre></div><p>效果相同</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ug=rwx,o=x</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> file</span></span></code></pre></div><p>和</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">chmod</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 771</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> file</span></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><h3 id="其他参数" tabindex="-1">其他参数 <a class="header-anchor" href="#其他参数" aria-label="Permalink to &quot;其他参数&quot;">​</a></h3><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td><strong>-c</strong></td><td>若该文件权限确实已经更改，才显示其更改动作</td></tr><tr><td><strong>-f</strong></td><td>若该文件权限无法被更改也不要显示错误讯息</td></tr><tr><td><strong>-v</strong></td><td>显示权限变更的详细资料</td></tr><tr><td><strong>-R</strong></td><td>对目前目录下的所有文件与子目录进行相同的权限变更(即以递归的方式逐个变更)</td></tr><tr><td><strong>--help</strong></td><td>显示辅助说明</td></tr><tr><td><strong>--version</strong></td><td>显示版本</td></tr></tbody></table>',39);function y(z,m,x,C,w,j){const l=t("NolebasePageProperties"),n=t("VPNolebaseInlineLinkPreview"),a=t("NolebaseUnlazyImg"),h=t("NolebaseGitContributors"),d=t("NolebaseGitChangelog");return k(),v("div",null,[g,i(l),u,b,s("p",null,[e("Linux/Unix 的文件调用权限分为三级 : 文件所有者（Owner）、用户组（Group）、其它用户（Other Users）。具体参考："),i(n,{href:"./../../Linux 权限.html"},{default:c(()=>[e("Linux 权限")]),_:1}),i(a,{src:o,alt:"",thumbhash:"+/cFAoB8eJh5h/iDqm+n+XU=",placeholderSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAYAAABT2S4KAAAEvElEQVR4AQCBAH7/AP///////////v////z////5/f//+Pz+//n9///6/v///P////7////////////////////+/////P////z////8/////f/////////////////////////////////////////9////+/////v////7////+/////z////9////AIEAfv8A//////3////7////+Pz+//b6/P/0+Pv/9fn7//b6/P/4/P7/+v7///v////6////+f3///j8/v/2+vz/9Pj6//T4+v/1+fv/9vr8//j8/v/5/f//+v7///n9///3+/3/9Pj6//L2+P/w9Pb/7/P1/+/z9f/v8/X/8PT2//D19/8AgQB+/wD5/f//9/v9//X5+//y9vj/8PT2/+7y9f/u8vX/7/T2//H19//y9vj/8/f5//L2+P/w9Pb/7vL0/+vv8f/p7e//6Ozu/+js7v/p7e//6u7w/+vv8f/q7vD/6e3v/+bq7f/j5+n/4OTm/97i5P/c4eP/3ODi/9zg4v/d4eP/3eHj/wCBAH7/APP3+f/y9vj/7/P1/+3x8//q7vD/6e3v/+nt7//q7vD/6+/x/+zw8v/s8PL/6+/x/+js7v/l6ev/4ubo/9/j5f/d4eP/3ODi/93h4//d4eP/3eHj/9zh4//b3+H/2Nze/9TY2v/R1df/ztLU/8zQ0v/Lz9H/y8/R/8zQ0v/M0NL/AIEAfv8A8PT2/+/z9f/t8fP/6u7w/+js7v/n6+3/5+vt/+fr7f/p7e//6e3v/+nt7//n6+3/5Ojq/+Hl5//d4eP/2t7g/9fb3f/W2tz/1trc/9fb3f/X293/1trc/9TY2v/R1df/zdHT/8rO0P/Hy83/xcnL/8TIyv/EyMr/xMjK/8XJy/8AgQB+/wDx9ff/8PT2/+7y9P/r7/H/6e3v/+js7v/o7O7/6e3v/+vv8f/r7/H/6+/x/+nt7//m6uz/4ubo/97i5f/b3+H/2d3f/9jc3v/Z3d//2d3f/9re4P/Z3d//2Nze/9XZ2//S1tj/ztPV/8zQ0v/KztD/yc3P/8nNz//JztD/ys7Q/wCBAH7/APT5+//z9/n/8fX3/+/z9f/u8vT/7fHz/+3x8//v8/X/8PT2//H19//x9ff/7/P1/+3x8//p7e//5enr/+Lm6f/h5ef/4eXn/+Hl5//j5+n/5Ojq/+To6v/j5+n/4eXn/9/j5f/c4OL/2t7g/9jd3//Y3N7/2Nze/9nd3//Z3d//AIEAfv8A+f3///j8/v/2+vz/9Pj6//P3+f/y9vj/8/f5//X5+//3+/3/+Pz+//j8/v/3+/3/9Pj6//H19//u8vT/6+/x/+ru8P/r7/H/7PDy/+7y9P/w9Pb/8fX3//H19//w9Pb/7vL0/+zw8v/q7vD/6e3v/+nt7//q7vD/6u7w/+vv8f8BgQB+/wD8////+/////n9///3+/3/9vr8//b6/P/3+/3/+f3///v////8/////P////v////5/f//9vr8//P3+f/x9ff/8fX3//H19//z9/n/9vr8//j8/v/6/v//+v7///r+///4/P7/9vv9//X5+//0+fv/9fn7//X5+//2+vz/9vr8/2LoQhl8z578AAAAAElFTkSuQmCC",width:"2048",height:"680",autoSizes:"true"}),e(" 只有文件所有者和超级用户可以修改文件或目录的权限。可以使用绝对模式（八进制数字模式），符号模式指定文件的权限。 "),i(a,{src:r,alt:"",thumbhash:"OAgGBYLpuXZ8hYeGeMdogIqJkJYI",placeholderSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAYAAABqBU3hAAAMEElEQVR4AQCBAH7/APT38f/z9vH/8vXw//Dz7v/u8Ov/6u3o/+bp5P/i5d//3+Hc/9ze2f/a3Nf/2tzX/9vd2P/d39r/4OLd/+Lk3//j5uD/5Obh/+Pm4P/h5N7/3uLc/9zg2v/a39j/2d7X/9jf2P/Z4Nn/2+Lb/93l3f/g6N//4uri/+Ps4//k7eT/AIEAfv8A9/r1//f59P/2+PP/9Pbx//Hz7v/t7+r/6evm/+Xn4v/i497/3+Db/93e2v/d3tn/3t/b/+Dh3f/j5N//5ebi/+bo4//n6eT/5ujj/+Tn4f/i5d//3+Pd/93i3P/c4dv/3OLb/93j3P/f5t7/4ejh/+Tr4//m7ub/6PDo/+nx6f8AgQB+/wD9//r//f75//v9+P/5+vb/9vfz//Pz7//v7+v/6urm/+bm4v/j49//4uHd/+Hh3f/j4t7/5eTh/+fn4//q6ub/6+vn/+zs6P/r7Oj/6uvm/+fp5P/l5+L/4+bh/+Pm4P/j5+H/5Oni/+br5f/p7uf/6/Hq/+707f/v9u//8Pfw/wCBAH7/AP/////////////9////+//8+/j/+Pf0//Ty7//v7ur/6+nm/+jm4//m5OH/5uTh/+fl4v/q5+T/7Orn/+/t6v/x7+z/8fDs//Hw7P/v7+v/7e3p/+vs5//q6+b/6evm/+rs5//r7uj/7vHr//H07v/0+PL/9vv0//j99v/5/vj/AIEAfv8A///////////////////////9+//8+ff/+PTy//Pv7f/u6uj/6+bl/+nk4//p5OL/6uXk/+zo5v/v6+n/8u7s//Tw7v/18e//9fHv//Pw7v/y7+z/8O7r/+7t6v/u7er/7+/r//Hx7f/09PD/9/jz//r89//9//r////8/////v8AgQB+/wD///////////////////////z7//339v/48vH/8+3s/+7o5//r5OP/6eLh/+jh4f/q4+L/7OXl/+/o6P/y6+v/9O7t//bv7v/17+7/9O/t//Lt7P/x7Or/8Ozq/+/s6v/x7uv/8/Du//b08f/6+PX//fz5/////P///////////wCBAH7/AP/////////////////8/P//+Pj/+/Lz//Xt7f/w5+f/6+Li/+fe3v/l29z/5dvc/+bc3f/p3+D/7OLj/+/l5v/x6On/8urq//Lq6v/x6en/8Ojo/+7n5v/t5ub/7efm/+7p5//w7Or/9PDu//j08v/8+Pb///z6/////f////7/AIEAfv8A//v8///6+///+Pn///X2//vw8f/16+z/8OXm/+re4P/l2dv/4dXX/97T1P/e0tT/4NPV/+LW2P/m2tz/6d3f/+vg4f/t4eP/7OLj/+vh4v/q4OH/6N7f/+fe3v/n3t7/6ODg/+rj4//u5+f/8uzr//fx8P/69fT//fj3///5+P8AgQB+/wD/8/X//vL0//zw8v/57O7/9Ofq/+/i5P/p3N7/49XY/93Q0v/ZzM7/18nM/9fJzP/Yys3/283Q/97Q0//i1Nf/5NfZ/+XY2//l2Nv/5Nfa/+LW2P/g1db/39TV/9/U1f/g1tf/4tna/+bd3v/r4uL/7+fn//Pr6//27+7/+PDw/wCBAH7/APrs7//46+7/9unr//Pl6P/u4OP/6Nrd/+LU1//cztH/18jL/9PEx//RwcX/0MHE/9LCxv/Vxcn/2MnM/9zM0P/ez9L/39DU/9/R1P/e0NP/287R/9nMz//Yy83/18vN/9jNz//b0NH/39TV/+PZ2v/o3t//7OPj/+/m5v/x6Oj/AIEAfv8A9ujr//Xn6v/z5Oj/7+Hk/+vc3//l1tr/39DT/9nKzf/UxMj/z8DD/829wf/NvcH/z77C/9LBxf/Vxcn/2cjM/9vLz//czdD/3MzQ/9rLz//Yycz/1cfK/9PGyf/Txsj/1MfJ/9bKzP/aztD/3tPV/+PY2v/n3d7/6uDh/+zi4/8AgQB+/wD36Ov/9efq//Pl6P/w4eX/693g/+bX2v/g0dT/2srO/9TFyP/QwMT/zr7C/86+wv/Qv8P/08LG/9bGyv/ayc7/3MzQ/93N0f/dzdH/28zP/9jKzf/Vx8r/08bI/9LFyP/Txsn/1cnL/9nNz//d0tT/4tjZ/+fc3f/q4OH/7OLj/wCBAH7/APvt8P/67O//+Ort//Tn6f/w4uX/69zf/+XW2f/f0NP/2crO/9XGyv/TxMf/08PH/9XFyf/YyMz/3MzQ/9/P0//h0tb/4tPX/+LT1v/g0dT/3c/S/9rMz//Xys3/1srM/9fLzf/Zzs//3dLT/+HX2P/m3N3/6+Hi/+7k5f/w5uf/AIEAfv8A//b4///19///8/X//O/x//fr7f/y5ej/7N/i/+bZ3P/h1Nb/3c/S/9vN0P/bzdD/3c7R/+DR1P/j1dj/59jb/+nb3v/q3N//6dze/+fa3P/k19r/4dXX/97T1f/d0tT/3tPU/+DW1//k2tv/6N/g/+3k5f/y6en/9e3t//fv7/8AgQB+/wD///////7////8/f//+fr///X2//rw8f/16uv/7+Pl/+ne4P/l2tv/49fZ/+PX2f/k2Nr/59vd/+vf4f/u4uT/8eXn//Lm6P/x5ef/7+Tl/+zh4v/p3t//5tzd/+Xc3P/l3d3/6ODg/+zk5P/w6en/9u/u//r08//+9/f///n5/wCBAH7/AP///////////////////////v3///j4//vy8v/17Oz/7+bn/+vi4//p3+D/6N/f/+rg4f/t4+T/8Obn//Pq6v/27O3/9+3u//bt7f/06+v/8enp/+7m5v/r5OT/6uTj/+vl5P/u6Of/8u3r//fy8P/8+Pb///37////////////AIEAfv8A/////////////////////////////fz//ff2//fx8P/x6+r/7ebl/+rj4v/p4uL/6uPj/+3m5f/w6ej/8+zs//Xv7v/28O//9u/v//Tu7f/x7Or/7uno/+zo5v/r5+X/7Onn/+/s6v/08e7/+ff0///9+v////////////////8AgQB+/wD////////////////////////////8+f/59vP/8/Dt/+3q5//o5eL/5eHf/+Tg3v/k4N7/5uLg/+rl4//t6ef/7+vp//Ds6v/v7Or/7evo/+vo5v/o5uP/5+Xi/+bl4v/o5+P/6+vn//Dw7P/19vL/+/34/////f///////////wCBAH7/AP/////////////+////+//7/Pf/9vby//Dw7P/p6eX/4+Pf/97d2f/a2db/2NjU/9nY1P/b2db/3dzZ/+Df3P/i4d7/4+Pf/+Pi3//h4d3/39/b/93e2f/b3dj/3N3Y/93g2v/h5N7/5unk/+zw6v/z9/H/+Pz2//z/+/////3/AIEAfv8A+Pz2//f79f/1+fP/8vbw/+7y7P/p7Of/4+bg/9zf2f/V2NP/0NLN/8zOyf/Ky8b/ycvG/8vMyP/Nz8r/0NLN/9LUz//T1dD/09XQ/9HUz//P0s3/ztHL/8zQyv/N0cv/z9TO/9PZ0v/Z39j/3+Xe/+bs5f/s8+v/8Pfw//P68v8AgQB+/wDr8er/6vDp/+ju5//l6+T/4efg/9zh2v/V2tT/ztPM/8fMxf/Bxb//vcG7/7q+uP+6vbf/u764/73Au/+/w73/wcW//8LGwP/CxsD/wcW//7/Evf+9w7z/vcO8/73Evf/Ax7//xMzE/8rSyv/R2dH/2OHY/97n3//j7OP/5e7m/wCBAH7/AODn3//f59//3eXd/9ri2v/W3dX/0NfQ/8rQyf/CycH/u8G6/7W7tP+wtq//rbKs/6yyq/+tsqz/r7Su/7G3sP+zubL/tLqz/7S6s/+zubL/sbix/7C3r/+wt6//sbmx/7O8tP+4wbn/vsi//8XPxv/M1s3/093U/9fi2f/a5Nv/AYEAfv8A2eLa/9jh2f/X39f/1NzU/8/Xz//K0sr/w8rD/7zDu/+0u7T/rrSt/6mvqP+mrKX/pauk/6arpP+nrab/qrCp/6yyqv+ss6z/rLOs/6uyq/+qsan/qbCo/6iwqP+psqr/rLWt/7G7sv+3wrj/v8nA/8bRx//M187/0dzS/9Pf1f9sfXkXL6nh/wAAAABJRU5ErkJggg==",width:"1198",height:"800",autoSizes:"true"})]),A,i(h),i(d)])}const D=p(P,[["render",y]]);export{F as __pageData,D as default};
