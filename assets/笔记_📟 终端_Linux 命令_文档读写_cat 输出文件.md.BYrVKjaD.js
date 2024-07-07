import{_ as r}from"./chunks/IMG_7413.B4ZJ2lpV.js";import{_ as o,c as v,I as s,j as a,a as t,av as n,D as i,o as k}from"./chunks/framework.B0QqYF0U.js";const B=JSON.parse('{"title":"cat 输出文件","description":"","frontmatter":{},"headers":[],"relativePath":"笔记/📟 终端/Linux 命令/文档读写/cat 输出文件.md","filePath":"笔记/📟 终端/Linux 命令/文档读写/cat 输出文件.md"}'),d={name:"笔记/📟 终端/Linux 命令/文档读写/cat 输出文件.md"},c=a("h1",{id:"cat-输出文件",tabindex:"-1"},[a("code",null,"cat"),t(" 输出文件 "),a("a",{class:"header-anchor",href:"#cat-输出文件","aria-label":'Permalink to "`cat` 输出文件"'},"​")],-1),f=n(`<h2 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-label="Permalink to &quot;说明&quot;">​</a></h2><p><strong>c</strong>onc<strong>a</strong>tena<strong>t</strong>e，连环的含义，使用这个命令可以把任何文件的内容以文本形式输出到命令行上。</p><h3 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h3><p><code>-AbeEnstTuv</code> 是所有参数，此处是可选的</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">cat</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [-AbeEnstTuv] [--help] [--version] 文件名</span></span></code></pre></div><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例&quot;">​</a></h3><ol><li>看文本文件 hello 文件里面写着：世界你好！</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> cat</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> hello</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">世界你好！</span></span></code></pre></div><ol start="2"><li>看二进制文件</li></ol><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> which</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> curl</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">/usr/bin/curl</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> cat</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/bin/curl</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ELF</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">��@��@8</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">            @@@@h����D�D</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> 0H0H#0H#�79</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> �y�y#�y#@���</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> ���DDS�td���</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> P�td@%@%@%��Q�tdR�td0H0H#0H#�7�7/lib64/ld-linux-x86-64.so.2GNU�GNUGNU��w���e����8=R{#�x�A</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> �</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">x</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">�BE���</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">fUa8��qX</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">{�M���O�nH�hQ�*</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> #�4&quot;A��3�c�uC�Dt:����\`��</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">                                                          t5����</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># 以下省略</span></span></code></pre></div><p>可以看到它强行把这个文件读取了，这个里面还有很多文件头的信息，这些信息在上一个命令 <strong>file</strong> 中被它读取并且解析，作为文件的元数据展示给你</p><ol start="3"><li>看图片文件</li></ol>`,12),P=n(`<div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> cat</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> IMG_7413.JPG</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">����JFIFHH��</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)�ExifMMJR(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">�iZ�HH�0221��0100��1��</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">((�</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">HH</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">�����      																														��</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">���&quot;���</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}!1AQa&quot;q2��#B��R��$3br�</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">&#39;()*456789:CDEFGHIJSTUVWXYZcdefghijstuvwxyz�������������������������������������������������������������������������</span></span></code></pre></div><p>可以看到这个地方它也会强行把这个文件读取，不会自动转换为 base64 编码，这个里面也有很多文件头信息，被 <strong>file</strong> 命令读取并且使用</p>`,2);function A(g,u,y,b,F,C){const e=i("NolebasePageProperties"),l=i("NolebaseUnlazyImg"),h=i("NolebaseGitContributors"),p=i("NolebaseGitChangelog");return k(),v("div",null,[c,s(e),f,a("p",null,[s(l,{src:r,alt:"",thumbhash:"MxgOD4L4lmqJh3Z/hVaHiHiJqPCHCowF",placeholderSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAQxklEQVR4AQCBAH7/AP/////////////////////////////////////////////+////9///+/H///jt///26///9Oj///Dj///q3v/849f/9NzQ/+/YzP/u2M3/8t7U//zq4f//+/L/////////////////////////////////////////////////AIEAfv8A//////////////////////////////////////////////n///vy///27P//8+n///Hm///v4///69///uXZ//fe0v/w2Mz/6tPI/+nTyP/t2c//9+Xc///27v/////////////////////////////////////////////+/f8AgQB+/wD////////////////////////////////////////5///48P//8en//+3j///q4P//6N3//+bb//zi1v/23dH/7tXK/+fOw//hyr//38q//+TQxv/u3NP//O3l////+P///////////////////////////////////////Pv6/wCBAH7/AP/////////////////////////////////89///9O3//+zl//rm3f/44dj/9t/V//bd0//029D/8djM/+vSxv/kyr//28O4/9W+s//TvrT/2MS6/+LQx//x4dn///Tu///////////////////////////////////9/f/5+Pf/AIEAfv8A////////////////////////+///+PT///Hs//ro4v/z4Nn/79rS/+zWzf/r1Mr/69LI/+rQxv/mzcL/4Me8/9i/tP/Qt63/ybKo/8exp//Ltq7/1cO7/+TUzf/26OL///v2/////////////////////////////Pr6//b19f8AgQB+/wD//////////////f///Pr///b0//7v7P/35+P/8N7Z/+nW0P/l0Mn/4szE/+LKwf/iycD/4ce9/97Euf/XvbP/z7Wr/8ato/++p53/u6Wc/7+qov/Jtq//2MjC/+rc1//88Oz////9///////////////////////7+Pn/9fT0/wCBAH7/AP///v///v3///v7///39v//8e//+Onn//Dg3f/p19L/4s7J/97Iwv/cxb7/28O7/9zDuv/bwbj/1720/9G3rf/IrqT/vqWc/7aelf+ym5P/tKCY/76rpf/Ovbj/4dLO//Pn5P//+Pb///////////////////////v4+v/29Pb/AIEAfv8A/////////////Pz///f2//3w7//25+X/7d3a/+XTz//eysb/2sS//9jBuv/YwLj/2L+3/9i+tf/UurH/zbOq/8Opof+4n5f/r5eP/6qUjP+sl5H/taKd/8W0sP/Yycb/7N/d//zy8f////7//////////////////Pr8//j2+f8AgQB+/wD/////////////////+fn//vDw//Xm5f/s29n/49HO/9zIxP/Ywr3/1r+5/9a+uP/Xvrf/17y1/9O4sf/Msan/waef/7WblP+rkov/pY6H/6WQi/+um5b/vayp/9HCwP/l2df/9+zs///7+///////////////////+///+/j8/wCBAH7/AP/////////////////7/f//8vP/9ufn/+vb2v/iz87/28bE/9bAvf/Vvbn/1r24/9e9t//WvLb/07ix/8uwqf+/pZ7/spiS/6eOiP+fiIP/n4qF/6eTkP+2paL/yru5/9/S0v/x5+j///b4///////////////////8///9+v//AIEAfv8A//////////////////3////y9P/15uf/6tnZ/9/NzP/Yw8L/0727/9K7t//Uu7b/1bu2/9W6tf/RtrD/ya6o/72inP+vlY//oomE/5mCfv+Ygn//n4uJ/66cm//CsrL/18rL/+vg4v/58fP///v//////////v////z///36//8AgQB+/wD//////////////////P///vDy//Hi5P/l1NX/2sjI/9K+vf/OuLb/zbaz/8+2s//Rt7P/0bay/82yrf/EqaX/uJ2Y/6mPi/+bgn7/kXp3/495d/+VgoD/pJKS/7ioqf/OwML/4tfa//Lp7f/79Pn///n///76///8+P//+vf9/wCBAH7/AP/////////////////3+//36u3/6tve/93Mzv/Rv8D/ybW1/8Wvrv/Erav/xq6r/8mvrP/Jr6v/xqun/72inv+wlZL/oIaD/5J5dv+HcG7/hG9t/4p2dv+Yhof/rJye/8K1uP/XzND/6N/k//Pr8f/38vj/9/P6//Xy+v/08fj/AIEAfv8A////////////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/7yusP+uoKP/pJic/6KYnf+poKb/uLG4/8zI0P/i4On/9vb//////////////////////////////////wCBAH7/AP/////////////////////7+///8O31/+Xh6P/e2N7/2tPY/9vS1v/g1tn/59ve/+7g4v/x4+T/7+Di/+fY2v/Zy83/yry+/7uusf+xpqr/r6Wq/7Wus//EvsX/2NTc/+3r9f//////////////////////////////////////AIEAfv8A///////////////////////////39fz/7uvx/+fi6P/l3uP/597i/+zi5f/06Ov/+u3w//3w8v/77e//8+Xm/+XY2f/VyMv/x7q+/7yytv+6sbb/wLm//87J0P/h3ub/9vX+//////////////////////////////////////8AgQB+/wD///////////////////////////z7///08fj/7+rw/+3n6//w6Oz/9uzv//3y9f//+Pr///r8///3+f/87/H/7+Lj/9/S1f/QxMf/xbu//8O6v//Jwsj/1tLZ/+nm7//9/P///////////////////////////////////////wCBAH7/AP////////////////////////////////j2/P/z8PX/8+3x//bu8v/88/b///n8///////////////////2+P/16er/5dnb/9bLzv/Mwsb/ycHF/87Izv/c2N7/7uz0////////////////////////////////////////////AYEAfv8A////////////////////////////////+vj+//by9//18PT/+fL1///3+f///f////////////////////r7//ns7v/p3d//2c7R/8/Fyf/MxMn/0cvR/9/b4v/x7/f////////////////////////////////////////////C9HP4JW5yjAAAAABJRU5ErkJggg==",width:"1585",height:"1536",autoSizes:"true"}),t(" IMG_7413.jpg")]),P,s(h),s(p)])}const H=o(d,[["render",A]]);export{B as __pageData,H as default};
