import{_ as f,c as d,I as i,j as e,w as l,a,av as o,D as t,o as _}from"./chunks/framework.B0QqYF0U.js";const N=JSON.parse('{"title":"AI 绘画工作流","description":"","frontmatter":{"tags":["索引","分类/收集箱","AI/绘画","AI/大语言模型/Diffusion/StableDiffusion","AI/绘画/工具/ComfyUI","AI/微调/LoRA","AI/绘画/工具/ComfyUI/插件","AI/AIGC"]},"headers":[],"relativePath":"笔记/🤖 AI 人工智能/AI 绘画工作流工具和相关 SOTA.md","filePath":"笔记/🤖 AI 人工智能/AI 绘画工作流工具和相关 SOTA.md"}'),b={name:"笔记/🤖 AI 人工智能/AI 绘画工作流工具和相关 SOTA.md"},c=e("h1",{id:"ai-绘画工作流",tabindex:"-1"},[a("AI 绘画工作流 "),e("a",{class:"header-anchor",href:"#ai-绘画工作流","aria-label":'Permalink to "AI 绘画工作流"'},"​")],-1),u=o('<h2 id="前置知识" tabindex="-1">前置知识 <a class="header-anchor" href="#前置知识" aria-label="Permalink to &quot;前置知识&quot;">​</a></h2><h3 id="概念" tabindex="-1">概念 <a class="header-anchor" href="#概念" aria-label="Permalink to &quot;概念&quot;">​</a></h3><h4 id="lora" tabindex="-1">LoRA <a class="header-anchor" href="#lora" aria-label="Permalink to &quot;LoRA&quot;">​</a></h4>',3),m=e("h3",{id:"软件",tabindex:"-1"},[a("软件 "),e("a",{class:"header-anchor",href:"#软件","aria-label":'Permalink to "软件"'},"​")],-1),I=e("h3",{id:"硬件",tabindex:"-1"},[a("硬件 "),e("a",{class:"header-anchor",href:"#硬件","aria-label":'Permalink to "硬件"'},"​")],-1),p=o('<h2 id="comfyui" tabindex="-1">ComfyUI <a class="header-anchor" href="#comfyui" aria-label="Permalink to &quot;ComfyUI&quot;">​</a></h2><h3 id="本体" tabindex="-1">本体 <a class="header-anchor" href="#本体" aria-label="Permalink to &quot;本体&quot;">​</a></h3><h4 id="教程" tabindex="-1">教程 <a class="header-anchor" href="#教程" aria-label="Permalink to &quot;教程&quot;">​</a></h4>',3),A=e("h4",{id:"整合包",tabindex:"-1"},[a("整合包 "),e("a",{class:"header-anchor",href:"#整合包","aria-label":'Permalink to "整合包"'},"​")],-1),k=e("h3",{id:"插件",tabindex:"-1"},[a("插件 "),e("a",{class:"header-anchor",href:"#插件","aria-label":'Permalink to "插件"'},"​")],-1),w=e("h4",{id:"layerdiffusion-透明图层绘制插件",tabindex:"-1"},[a("LayerDiffusion 透明图层绘制插件 "),e("a",{class:"header-anchor",href:"#layerdiffusion-透明图层绘制插件","aria-label":'Permalink to "LayerDiffusion 透明图层绘制插件"'},"​")],-1),P=e("h3",{id:"工作流",tabindex:"-1"},[a("工作流 "),e("a",{class:"header-anchor",href:"#工作流","aria-label":'Permalink to "工作流"'},"​")],-1),g=e("h4",{id:"实现-3d-绘画流程",tabindex:"-1"},[a("实现 3D 绘画流程 "),e("a",{class:"header-anchor",href:"#实现-3d-绘画流程","aria-label":'Permalink to "实现 3D 绘画流程"'},"​")],-1);function x(y,S,C,v,T,D){const n=t("NolebasePageProperties"),r=t("VPNolebaseInlineLinkPreview"),s=t("NolebaseGitContributors"),h=t("NolebaseGitChangelog");return _(),d("div",null,[c,i(n),u,e("p",null,[i(r,{href:"https://www.bilibili.com/video/BV16e411e7Zx",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("60分钟速通LORA训练！绝对是你看过最好懂的AI绘画模型训练教程！StableDiffusion超详细训练原理讲解+实操教学，LORA参数详解与训练集处理技巧 - 哔哩哔哩 bilibili")]),_:1})]),e("p",null,[i(r,{href:"https://gf66fxi6ji.feishu.cn/wiki/KMUawB8K5iXJvxkOP6ocKqjzn3b",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("第2课：LoRA模型训练入门 - 飞书云文档 (feishu.cn)")]),_:1})]),m,e("p",null,[i(r,{href:"https://www.bilibili.com/video/BV1TK411v7Jw",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("B站第一套系统的AI绘画模型训练课程！零基础入门“炼丹”，制作属于你的SD模型！模型微调（Dreambooth、LoRA、Embedding）原理分析教学 - 哔哩哔哩 bilibili")]),_:1})]),e("p",null,[i(r,{href:"https://gf66fxi6ji.feishu.cn/wiki/Eddrww7BQin9TikOI8lcOjyQnhh",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("第1课：模型训练原理和微调手法分析 - 飞书云文档 (feishu.cn)")]),_:1})]),I,e("p",null,[i(r,{href:"https://www.bilibili.com/video/BV1Yx4y1Z7xk",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("首个40系SUPER显卡“AI评测”：速度提升50%？生成视频也很快！Stable Diffusion 绘画 & SVD动画性能实测 70S/70TiS/80S - 哔哩哔哩 bilibili")]),_:1})]),p,e("p",null,[i(r,{href:"https://www.bilibili.com/video/av1650423248/?vd_source=f0545eb2f2f0269a5a9941436ba53b7d",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("ComfyUI全球爆红，AI绘画进入“工作流时代”？做最好懂的Comfy UI入门教程：Stable Diffusion专业节点式界面新手教学 - 哔哩哔哩 bilibili")]),_:1})]),A,e("p",null,[i(r,{href:"https://www.bilibili.com/video/av326388194/?vd_source=f0545eb2f2f0269a5a9941436ba53b7d",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("【AI绘画】ComfyUI整合包发布！解压即用 一键启动 工作流版界面 超多节点 ☆更新 ☆汉化 秋叶整合包 - 哔哩哔哩 bilibili")]),_:1})]),k,w,e("p",null,[i(r,{href:"https://t.me/aigc1024/6136",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("演示视频")]),_:1})]),e("ul",null,[e("li",null,[i(r,{href:"https://github.com/huchenlei/ComfyUI-layerdiffusion",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("huchenlei/ComfyUI-layerdiffusion: Layer Diffusion custom nodes")]),_:1})]),e("li",null,[i(r,{href:"https://readhacker.news/s/63nh6",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("Generating transparent images using Stable Diffusion XL")]),_:1})])]),P,g,e("ul",null,[e("li",null,[i(r,{href:"https://www.bilibili.com/video/BV1Ec411i7v6/",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("重磅！Rhino+SU+Blender实时AI渲染工作流！ComfyUI+lcm+sdxl_turbo 加速场景概念设计！附详细工作流程文件！- 哔哩哔哩 bilibili")]),_:1})]),e("li",null,[i(r,{href:"https://www.bilibili.com/video/BV15H4y117m4/",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("ComfyUI投屏威力无穷！sdxl—turbo模型一步采样，软件图像轻松驾驭，绘画天才即刻唤醒，全球震撼的艺术革命，你准备好了吗？- 哔哩哔哩 bilibili")]),_:1})]),e("li",null,[i(r,{href:"https://www.bilibili.com/video/BV1au4y1P7ZS",target:"_blank",rel:"noreferrer"},{default:l(()=>[a("Krita+ComfyUI+LCM震撼登场，绘画界霸主崛起！瞬间秒杀一切平庸，引爆创意狂潮！- 哔哩哔哩 bilibili")]),_:1})])]),i(s),i(h)])}const U=f(b,[["render",x]]);export{N as __pageData,U as default};
