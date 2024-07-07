import{_ as d,c as e,I as l,j as t,a,av as n,D as Q,o as s}from"./chunks/framework.B0QqYF0U.js";const f="/assets/image-20210928132816839.B1hYTqKr.png",m="/assets/image-20210927124236874.C61NzZSA.png",h="/assets/image-20211001124355927.C2vfBXe1.png",v3=JSON.parse('{"title":"🔘 点乘","description":"","frontmatter":{"tags":["数学","知识领域/数学","数学/向量","数学/矩阵","数学/点乘","数学/线性代数","数学/高等数学","计算机/计算机图形学","知识领域/计算机图形学"]},"headers":[],"relativePath":"笔记/📐 图形学/🔘 点乘.md","filePath":"笔记/📐 图形学/🔘 点乘.md"}'),p={name:"笔记/📐 图形学/🔘 点乘.md"},g=t("h1",{id:"🔘-点乘",tabindex:"-1"},[a("🔘 点乘 "),t("a",{class:"header-anchor",href:"#🔘-点乘","aria-label":'Permalink to "🔘 点乘"'},"​")],-1),c={id:"",tabindex:"-1"},v={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},P={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"3.802ex",height:"1.595ex",role:"img",focusable:"false",viewBox:"0 -694 1680.4 705","aria-hidden":"true"},u=n("",1),k=[u],w=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mi",null,"a"),t("mo",null,"⋅"),t("mi",null,"b")])],-1),z=t("a",{class:"header-anchor",href:"#","aria-label":'Permalink to "$a \\cdot b$"'},"​",-1),A=t("p",null,[a("点乘被用于"),t("strong",null,"向量和一维矩阵的计算"),a("，点乘的结果是一个"),t("strong",null,"值"),a("(标量)。")],-1),x=t("h4",{id:"计算公式",tabindex:"-1"},[a("计算公式 "),t("a",{class:"header-anchor",href:"#计算公式","aria-label":'Permalink to "计算公式"'},"​")],-1),b={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},_={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.357ex"},xmlns:"http://www.w3.org/2000/svg",width:"28.871ex",height:"1.927ex",role:"img",focusable:"false",viewBox:"0 -694 12761.2 851.8","aria-hidden":"true"},y=n("",1),H=[y],L=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mi",null,"a"),t("mo",null,"⋅"),t("mi",null,"b"),t("mo",null,"="),t("msub",null,[t("mi",null,"a"),t("mn",null,"1")]),t("msub",null,[t("mi",null,"b"),t("mn",null,"1")]),t("mo",null,"+"),t("msub",null,[t("mi",null,"a"),t("mn",null,"2")]),t("msub",null,[t("mi",null,"b"),t("mn",null,"2")]),t("mo",null,"+"),t("mo",null,"."),t("mo",null,"."),t("mo",null,"."),t("mo",null,"+"),t("msub",null,[t("mi",null,"a"),t("mi",null,"n")]),t("msub",null,[t("mi",null,"b"),t("mi",null,"n")])])],-1),D=n("",6),j=t("h4",{id:"满足交换律",tabindex:"-1"},[a("满足交换律 "),t("a",{class:"header-anchor",href:"#满足交换律","aria-label":'Permalink to "满足交换律"'},"​")],-1),V=t("h4",{id:"计算向量投影",tabindex:"-1"},[a("计算向量投影 "),t("a",{class:"header-anchor",href:"#计算向量投影","aria-label":'Permalink to "计算向量投影"'},"​")],-1),B={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},M={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.339ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.403ex",height:"2.821ex",role:"img",focusable:"false",viewBox:"0 -1097 1062.1 1247","aria-hidden":"true"},O=n("",1),C=[O],Z=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"b"),t("mo",{stretchy:"false"},"→")])]),t("mi",{mathvariant:"normal"},"⊥")])])],-1),E={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},X={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.564ex"},xmlns:"http://www.w3.org/2000/svg",width:"13.749ex",height:"3.046ex",role:"img",focusable:"false",viewBox:"0 -1097 6077 1346.5","aria-hidden":"true"},N=n("",1),S=[N],R=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("msub",null,[t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"b"),t("mo",{stretchy:"false"},"→")])]),t("mi",{mathvariant:"normal"},"⊥")]),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mo",null,"="),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"b"),t("mo",{stretchy:"false"},"→")])]),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"cos"),t("mo",{"data-mjx-texclass":"NONE"},"⁡"),t("mi",null,"θ")])],-1),q={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},F={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.339ex"},xmlns:"http://www.w3.org/2000/svg",width:"2.403ex",height:"2.821ex",role:"img",focusable:"false",viewBox:"0 -1097 1062.1 1247","aria-hidden":"true"},I=n("",1),Y=[I],U=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("msub",null,[t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"b"),t("mo",{stretchy:"false"},"→")])]),t("mi",{mathvariant:"normal"},"⊥")])])],-1),G={class:"MathJax",jax:"SVG",display:"true",style:{direction:"ltr",display:"block","text-align":"center",margin:"1em 0",position:"relative"}},J={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.564ex"},xmlns:"http://www.w3.org/2000/svg",width:"13.688ex",height:"3.046ex",role:"img",focusable:"false",viewBox:"0 -1097 6050 1346.5","aria-hidden":"true"},W=n("",1),K=[W],$=t("mjx-assistive-mml",{unselectable:"on",display:"block",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",overflow:"hidden",width:"100%"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[t("msub",null,[t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"b"),t("mo",{stretchy:"false"},"→")])]),t("mi",{mathvariant:"normal"},"⊥")]),t("mo",null,"="),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"b"),t("mo",{stretchy:"false"},"→")])]),t("mo",{"data-mjx-texclass":"ORD",stretchy:"false"},"|"),t("mi",null,"cos"),t("mo",{"data-mjx-texclass":"NONE"},"⁡"),t("mi",null,"θ"),t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"a"),t("mo",{stretchy:"false"},"^")])])])],-1),t3={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},a3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.339ex"},xmlns:"http://www.w3.org/2000/svg",width:"6.139ex",height:"2.821ex",role:"img",focusable:"false",viewBox:"0 -1097 2713.6 1247","aria-hidden":"true"},e3=n("",1),s3=[e3],n3=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"b"),t("mo",{stretchy:"false"},"→")])]),t("mo",null,"−"),t("msub",null,[t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"b"),t("mo",{stretchy:"false"},"→")])]),t("mi",{mathvariant:"normal"},"⊥")])])],-1),l3={class:"MathJax",jax:"SVG",style:{direction:"ltr",position:"relative"}},Q3={style:{overflow:"visible","min-height":"1px","min-width":"1px","vertical-align":"-0.025ex"},xmlns:"http://www.w3.org/2000/svg",width:"0.971ex",height:"2.507ex",role:"img",focusable:"false",viewBox:"0 -1097 429 1108","aria-hidden":"true"},o3=n("",1),i3=[o3],r3=t("mjx-assistive-mml",{unselectable:"on",display:"inline",style:{top:"0px",left:"0px",clip:"rect(1px, 1px, 1px, 1px)","-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none",position:"absolute",padding:"1px 0px 0px 0px",border:"0px",display:"block",width:"auto",overflow:"hidden"}},[t("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[t("mrow",{"data-mjx-texclass":"ORD"},[t("mover",null,[t("mi",null,"b"),t("mo",{stretchy:"false"},"→")])])])],-1);function T3(d3,f3,m3,h3,p3,g3){const i=Q("NolebasePageProperties"),o=Q("NolebaseUnlazyImg"),r=Q("NolebaseGitContributors"),T=Q("NolebaseGitChangelog");return s(),e("div",null,[g,l(i),t("h3",c,[t("mjx-container",v,[(s(),e("svg",P,k)),w]),a(),z]),A,x,t("mjx-container",b,[(s(),e("svg",_,H)),L]),D,t("p",null,[l(o,{src:f,alt:"",thumbhash:"PAgGBoD3eIiJeHZ7h4ZXiHh5Io834Ec=",placeholderSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAbCAYAAAAdx42aAAAOKElEQVR4AQCBAH7/AP////////////////////////////////////////////////////////3///v5//v39f/38/H/9PDu//Pv7f/08O7/9/Pw//v39f///Pr/////////////////////////////////////////////////////////////////AIEAfv8A///////////////////////////////////////////////////////9+//9+ff/+PTy//Tw7v/y7uz/8ezq//Ht6//08O7/+PTy//359////vz///////////////////////////////////////////////////////////8AgQB+/wD//////////////////////////////////////////////v///fv//vn3//n18//08O7/8Ozq/+3p5//s6Ob/7enn/+/r6f/z7+3/+PTy//359////vz//////////////////////////////////////////////////////wCBAH7/AP///////////////////////////////////v////3///z6//359//59fP/9PDu/+/r6f/r5+X/6OTi/+fi4P/n4+H/6eXj/+3p5//y7uz/9/Px//z49v///Pr////9////////////////////////////////////////////AIEAfv8A/////////////////////////v////3///37///7+f/8+Pb/+fXz//Tw7v/v6+n/6ubk/+bi4P/j393/4d3b/+Hd2//j393/5+Ph/+zn5f/x7ev/9vLw//r29P/++vj///37///+/P////7////+//////////////////////8AgQB+/wD///////////////////7///78///9+///+vj//Pj2//n18//18e//8Ozq/+vn5f/m4uD/4t7c/9/a2P/d2df/3dnX/97a2P/i3tz/5uLg/+vn5f/w7Or/9fHv//n18//8+Pb///v5///9+/////3////+/////////////////wCBAH7/AP///////////////////v///vz///v5//359//69vT/9vLw//Lu7P/u6ef/6eXj/+Tg3v/f29n/3NjW/9rW1P/a1tT/29fV/97a2P/i3tz/5+Ph/+zo5v/x7ev/9vLw//r18//9+ff///v5///+/P////7/////////////////AIEAfv8A///////////////////+///9+//++vj/+/f1//j08v/18O7/8Ozq/+zo5v/n4+H/49/d/97a2P/b19X/2dXT/9nU0v/a1tT/3djW/+Dc2v/l4d//6ubk/+/r6f/08O7/+PTy//z39f//+/n///78//////////////////////8AgQB+/wD///////////////////7///37//76+P/79/X/9/Px//Tw7f/w7Or/6+fl/+fj4f/j393/39vZ/9zX1f/a1dP/2dXT/9rW1P/c2Nb/4Nza/+Tg3v/p5eP/7uro//Lu7P/38/H/+/f1///7+f///vz//////////////////////wCBAH7/AP///////////////////v///fv//fn3//r29P/28vD/8+/t/+/r6f/r5+X/6OPh/+Tg3f/g3Nr/3dnX/9vX1f/a1tT/29fV/93Z1//g3Nr/5ODe/+nl4//t6ef/8u7s//by8P/69vT//vr4///+/P//////////////////////AIEAfv8A///////////////////+///8+v/8+Pb/+fXz//Xx7//y7uz/7+vp/+vn5f/o5OL/5eDe/+Hd2//f29n/3dnX/9zY1v/d2df/3trY/+Hd2//l4d//6OTi/+3o5v/x7ev/9fHv//n18//9+ff///37//////////////////////8AgQB+/wD//////////////////vz//vr4//r29P/38/H/8+/t//Ds6v/u6uj/6+fl/+jk4v/l4d//4t7c/+Dc2v/f2tj/3trY/97a2P/f29n/4t7c/+Xh3//o5OL/7Ofl/+/r6f/z7+3/9/Px//v39f//+/n///78/////////////////wCBAH7/AP/////////////9///8+v/8+Pb/+PTy//Tw7v/x7ev/7uro/+zo5v/q5uT/6OPh/+Xh3//j393/4d3b/+Dc2v/f29n/39vZ/+Dc2v/i3tz/5ODe/+fj4f/q5uT/7enn//Ht6//08O7/+PTy//v39f//+/n///78/////v//////AIEAfv8A/////////f///Pr//fn3//n08v/18O7/8e3r/+7q6P/s6Ob/6ubk/+jk4v/n4+H/5eHf/+Pf3f/h3dv/4Nza/+Dc2f/g3Nr/4Nza/+Le3P/k4N7/5uLg/+nl4//s5+X/7uro//Ht6//18e//+PTy//v39f/++vf///v5///9+v8AgQB+/wD//vz///z6//769//69vT/9vHv//Lu7P/u6uj/7Ofl/+rl4//o5OL/5+Ph/+bi4P/k4N7/49/d/+Le3P/h3dv/4Nza/+Dc2v/h3dv/4t7c/+Tg3v/m4uD/6OTi/+rm5P/t6ef/7+vp//Lu7P/18e//+PPx//r29P/8+Pb//fn3/wCBAH7/AP/8+v/++vj/+/f1//fz8f/z7+3/7+vp/+zo5v/p5eP/6OTi/+fj4f/m4uD/5eHf/+Tg3v/j393/4t7c/+Hd2//h3dv/4d3b/+Le3P/j393/5ODe/+bi4P/o5OL/6ubk/+zo5v/u6uj/8e3r//Pv7f/28vD/+PTy//n18//69vT/AIEAfv8A//v5//359//69vT/9vLw//Lu7P/u6uj/6+fl/+nk4v/n4+H/5uLg/+bh3//l4d//5ODe/+Tg3v/j393/4t7c/+Le3P/i3tz/49/d/+Tg3v/m4uD/6OTi/+rm5P/s5+X/7enn/+/r6f/x7ev/9O/t//by7//38/H/+fXz//n18/8AgQB+/wD/+/n//fn3//r29P/28vD/8u7s/+7q6P/r5+X/6eXj/+fj4f/n4+H/5uLg/+bi4P/l4d//5eHf/+Tg3v/k4N7/5ODe/+Tg3v/l4d//5+Ph/+nl4v/r5uT/7Ojm/+7q6P/w7Or/8u7s//Tw7v/28vD/+PPx//n18//69vT/+/f1/wCBAH7/AP/8+v//+vj/+/f1//j08v/z7+3/8Ozq/+3o5v/q5uT/6eXj/+jk4v/o5OL/6OPh/+fj4f/n4uD/5uLg/+bi4P/m4uD/5+Ph/+jk4v/q5uT/7Ojm/+7q6P/w7Or/8u7s//Tw7v/28vD/+PTy//n18//79/X//Pj2//359//++vj/AIEAfv8A//78///9+//++vj/+vb0//by8P/y7uz/7+vp/+3p5//r5+X/6ubk/+rm5P/p5eP/6eXj/+jk4v/o5OL/6OPh/+jk4v/p5eP/6ubk/+zo5v/v6+n/8u7s//Tw7v/38vD/+fXz//v39P/8+Pb//vr4///7+f///Pr///37///+/P8AgQB+/wD////////9///8+v/9+ff/+fTy//Xx7//y7uz/7+vp/+7q6P/t6ef/7Ojm/+vn5f/r5+X/6ubk/+nl4//p5eP/6eXj/+rm5P/s6Ob/7+vp//Ht6//18O7/+PPx//r29P/9+fb///v5///8+v///vz////9/////v///////////wCBAH7/AP/////////////9///7+f/79/X/9/Px//Tw7v/y7uz/8Ozq/+/r6f/u6uj/7enn/+zo5v/r5+X/6ubk/+nl4//p5eP/6+fl/+3p5//w6+n/8+/t//by8P/69vT//fn3///7+f///fv////9////////////////////////////AIEAfv8A//////////////////78//76+P/69vT/9vLw//Tw7v/y7uz/8Ozq/+/r6f/u6ef/7Ojm/+rm5P/p5eP/6eXi/+nl4//q5uT/7Ojm/+/r6f/z7+3/9/Pw//r29P/++vj///z6/////f////////////////////////////////8AgQB+/wD///////////////////3///v5//v39f/49PL/9fHv//Pv7f/x7ev/7+vp/+3p5//s5+X/6ubk/+jk4v/n4+H/5+Ph/+jk4v/q5uT/7uro//Lt6//28vD/+vbz//359////Pr////9/////////////////////////////////wCBAH7/AP///////////////////v///Pr//Pj2//n18//28vD/8+/t//Ht6//v6+n/7enn/+vn5f/o5OL/5uLg/+Xh3//l4d//5uLg/+jk4v/s6Ob/8Ozq//Tw7v/49PL//Pj2///7+f///vv////9////////////////////////////AIEAfv8A///////////////////////9+//9+ff/+fXz//by8P/07+3/8e3r/+/r6f/s6Ob/6ubk/+fj4f/l4d//5N/d/+Pf3f/k4N7/5uLg/+rm5P/u6uj/8u7s//by8P/69vT//vr4///8+v///vz////+//////////////////////8BgQB+/wD///////////////////////37//359//59fP/9vLw//Tv7f/x7ev/7+ro/+zo5v/p5eP/5uLg/+Tg3v/i3tz/4t7c/+Pf3f/l4d//6eXj/+3p5//x7ev/9fHv//n18//9+ff///v5///9+/////3////+/////v///////////4Hq5UcsWisAAAAAAElFTkSuQmCC",width:"535",height:"441",autoSizes:"true"})]),j,t("p",null,[l(o,{src:m,alt:"",thumbhash:"/QcCA4CAiJk9p5lnspzPCzU=",placeholderSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAOCAYAAABO3B6yAAAHWklEQVR4AQCBAH7/APfz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/AIEAfv8A9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f8AgQB+/wD38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5/wCBAH7/APfz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/AIEAfv8A9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f8AgQB+/wD38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5/wCBAH7/APfz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/AIEAfv8A9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f8AgQB+/wD38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5/wCBAH7/APfz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/AIEAfv8A9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f8AgQB+/wD38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5/wCBAH7/APfz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/AYEAfv8A9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f/38/n/9/P5//fz+f8k5cvbCKCdwAAAAABJRU5ErkJggg==",width:"681",height:"317",autoSizes:"true"})]),V,t("p",null,[l(o,{src:h,alt:"",thumbhash:"PAgGBYCnp4l6aIaPdjd4fF5w0AUH",placeholderSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAXCAYAAABqBU3hAAAMEElEQVR4AQCBAH7/AP/////////////////////////////////////////////////////////////////////////////////////////////+///+/P///vz///78/////v//////////////////////////////////////////////////////AIEAfv8A/////////////////////////v////7////+/////////////////////////////////////////////////////////vz///z6///7+f///Pr///37/////v////////////////////////////////////////////////8AgQB+/wD///////////////////3///37///8+v///Pr///78/////v////////////////////////////////////3///z6//359//79/X/+vb0//v39f/9+ff///v5///+/P////7//////////////////////////////////////wCBAH7/AP////////7///78///7+f/8+Pb/+/f1//v39f/8+Pb//vr4///9+/////3///////////////3///37//769//69vT/9/Px//by8P/18e//9vLw//fz8f/69vT//fj2///7+f///vz////+////////////////////////////AIEAfv8A///9///9+//++vj/+/f1//j08v/28vD/9vLw//fz8f/59fP/+/f1//359///+/n///v5//759//79/X/+PTy//Xx7//y7uz/8e3r//Ds6v/x7ev/8u7s//Xx7//49PL/+vb0//359///+/n///37/////f////7////+//////8AgQB+/wD//fv///v5//z49v/59fP/9fHv//Pv7f/y7uz/8u7s//Tw7v/28vD/+PTy//r28//69vT/+fXz//fz8f/08O7/8e3r/+/r6f/t6ef/7enm/+3p5//v6+n/8e3r//Tw7v/38/H/+vb0//z49v//+/n///z6///+/P////3////9/wCBAH7/AP/9+///+/n//Pj2//j08v/08O7/8e3r/+/r6f/v6+n/8ezq//Pu7P/18e//9vLw//fy8P/28vD/9PDu//Lu7P/v6+n/7enn/+vn5f/r5+X/7Ojm/+3p5//w7Or/8+/s//by7//59PL/+/f1//76+P///Pr///37///+/P////3/AIEAfv8A//78///8+v/8+Pb/+PTy//Tw7v/w7Or/7uro/+7q6P/v6uj/8Ozq//Lu7P/08O7/9fHv//Tw7v/z7+3/8e3r/+/q6P/t6eb/6+fl/+vn5f/s6Ob/7enn//Dr6f/y7uz/9fHv//j08v/79/X//vr4///8+v///vz////9/////v8AgQB+/wD///3///37//359//49PL/9PDu//Ds6v/t6ef/7Ojm/+3p5//v6+n/8e3r//Pv7f/08O7/9PDu//Pv7f/x7ev/7+vp/+3p5//s6Ob/7Ojm/+zo5v/u6uj/8Ozq//Pv7f/28vD/+fXz//z49v//+/n///37/////f///////////wCBAH7/AP///f///fv//fn3//j08v/z7+3/7+vp/+zo5v/r5+X/6+fl/+3p5//v6+n/8e3r//Lu7P/z7+3/8u7s//Ht6//v6+n/7unn/+zo5v/s6Ob/7Ojm/+7q6P/w7Or/8u7s//Xx7//49PL/+/f1//76+P///fv////9////////////AIEAfv8A//78///8+v/8+Pb/9/Px//Ht6//t6ef/6uXj/+jk4v/p5eP/6ubk/+zo5v/v6+n/8Ozq//Ht6//x7Or/7+vp/+7q6P/t6eb/6+fl/+vn5f/r5+X/7Ojm/+7q6P/w7Or/8+/t//by8P/59fP//Pj2///7+f///fv////9/////v8AgQB+/wD/+/n//fn3//n18v/z7+3/7unn/+nl4//l4d//5ODe/+Tg3v/m4uD/6OTi/+vm5P/s6Ob/7enn/+3p5//s6Ob/6+fl/+rm5P/p5eP/6OTi/+jk4v/p5eP/6ubk/+zo5v/u6uj/8e3r//Tw7v/38/H/+vb0//359///+vj///v5/wCBAH7/APv29P/49PL/9PDu/+7q6P/o5OL/49/d/+Dc2v/e2tj/39vZ/+Dc2v/j393/5eHf/+fj4f/o5OL/6eXj/+jk4v/n4+H/5eHf/+Tg3v/j393/49/d/+Pf3f/k4N7/5uLg/+jk4v/r5+X/7enn//Ds6v/z7+3/9vLw//j08v/59fP/AIEAfv8A9fHv//Pv7f/u6uj/6eXj/+Pf3f/e2tj/2tbU/9nV0//Z1dP/29bU/93Z1//g3Nr/4t7c/+Pf3f/k393/49/d/+Le3P/h3Nr/39vZ/97a2P/d2df/3dnX/97a2P/f29n/4d3b/+Pf3f/m4uD/6eXj/+vn5f/u6uj/8Ozq//Ht6/8AgQB+/wDw7Or/7uro/+rl4//k4N7/3trY/9nV0//W0tD/1NDO/9TQzv/W0tD/2NTS/9vX1f/d2df/39vZ/9/b2f/f29n/3trY/9zY1v/b19X/2tbU/9nV0//Y1NL/2NTS/9nV0//a1tT/3NjW/9/b2f/i3tz/5ODe/+fj4f/p5eP/6ubk/wCBAH7/AO7q6P/s6Ob/5+Ph/+Le3P/c2Nb/19PR/9TPzf/Szsz/0s7M/9TQzv/W0tD/2dXT/9zY1v/d2df/3trY/93Z1//c2Nb/29fV/9nV0//Y1NL/1tLQ/9bS0P/V0c//1tLQ/9fT0f/Z1dP/29fV/93Z1//g3Nr/4t7c/+Tg3v/l4d//AIEAfv8A7+vp/+3p5//p5eP/49/d/93Z1//Z1dL/1dHP/9TQzv/U0M7/1tLQ/9jU0v/b19X/3trY/9/b2f/g3Nr/4Nza/9/b2f/d2df/29fV/9rW1P/Y1NL/19PR/9fT0f/X09H/2NPR/9nV0//b19X/3dnX/+Dc2v/i3tz/5ODe/+Xh3/8AgQB+/wD08O7/8u7s/+7q6P/o5OL/49/d/97a2P/b19X/2tXT/9rW1P/c2Nb/3trY/+Hd2//k4N7/5uLg/+bi4P/m4uD/5eHf/+Tg3v/i3tz/4Nza/97a2P/d2df/3NjW/9zY1v/d2df/3trY/+Dc2v/j3tz/5eHf/+fj4f/p5eP/6ubk/wCBAH7/AP359//79/X/9/Px//Ht6//s6Ob/5+Ph/+Tg3v/j393/49/d/+Xh3//o5OL/6+fl/+7q6P/w7Or/8Ozq//Ds6v/v6+n/7uro/+zo5v/q5uT/6eXi/+fj4f/m4uD/5uLg/+fj4f/o5OL/6ubk/+zo5v/u6uj/8e3r//Lu7P/z7+3/AIEAfv8A/////////////vz//Pj2//fz8f/z7+3/8Ozq/+/r6P/v6+n/8e3r//Tw7v/38/H/+vb0//z49v/9+ff//fn3//z49v/69vT/+fXz//fz8f/18e//9PDu//Pv7f/y7uz/8+/t//Tw7v/28vD/+PTy//v39P/9+ff///v5///8+v8AgQB+/wD///////////////////////78//76+P/79/X/+vb0//v39f/9+ff///z6/////f/////////////////////////////////////////9///+/P///Pr///v5///7+f//+/n///z6///+/P///////////////////////////wCBAH7/AP///////////////////////////////////v////3////+////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AYEAfv8A//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tx/Lp6eCXhwAAAABJRU5ErkJggg==",width:"322",height:"211",autoSizes:"true"})]),t("p",null,[a("向量 b 到向量 a 的投影称为 "),t("mjx-container",B,[(s(),e("svg",M,C)),Z]),a(" , 它的长度（标量投影）公式是：")]),t("mjx-container",E,[(s(),e("svg",X,S)),R]),t("p",null,[a("得出 "),t("mjx-container",q,[(s(),e("svg",F,Y)),U]),a(" 的向量投影公式：")]),t("mjx-container",G,[(s(),e("svg",J,K)),$]),t("p",null,[a("通过 "),t("mjx-container",t3,[(s(),e("svg",a3,s3)),n3]),a(" 可以得到 "),t("mjx-container",l3,[(s(),e("svg",Q3,i3)),r3]),a(" 另一个方向上的分量")]),l(r),l(T)])}const P3=d(p,[["render",T3]]);export{v3 as __pageData,P3 as default};
