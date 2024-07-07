import{_ as l,c as A,I as f,j as v,a as e,w as n,av as o,D as P,o as z}from"./chunks/framework.B0QqYF0U.js";const b="/assets/troubleshooting-service-unavailable-by-upgrading-mems-image-01.B20mCo-n.png",i="/assets/troubleshooting-service-unavailable-by-upgrading-mems-screenshot-01.C1dDLVDx.png",d="/assets/troubleshooting-service-unavailable-by-upgrading-mems-screenshot-02.BaWCSQEh.png",q=JSON.parse('{"title":"记一次升级内存导致的服务不可用和硬盘数据错误","description":"","frontmatter":{"tags":["运维","基础设施/Homelab","基础设施/NAS","运维/服务器","运维/物理机"]},"headers":[],"relativePath":"笔记/🧱 基础设施/📦 Homelab/记一次升级内存导致的服务不可用和硬盘数据错误.md","filePath":"笔记/🧱 基础设施/📦 Homelab/记一次升级内存导致的服务不可用和硬盘数据错误.md"}'),c={name:"笔记/🧱 基础设施/📦 Homelab/记一次升级内存导致的服务不可用和硬盘数据错误.md"},p=v("h1",{id:"记一次升级内存导致的服务不可用和硬盘数据错误",tabindex:"-1"},[e("记一次升级内存导致的服务不可用和硬盘数据错误 "),v("a",{class:"header-anchor",href:"#记一次升级内存导致的服务不可用和硬盘数据错误","aria-label":'Permalink to "记一次升级内存导致的服务不可用和硬盘数据错误"'},"​")],-1),D=v("h2",{id:"升级缘由",tabindex:"-1"},[e("升级缘由 "),v("a",{class:"header-anchor",href:"#升级缘由","aria-label":'Permalink to "升级缘由"'},"​")],-1),T=v("div",{class:"caution custom-block github-alert"},[v("p",{class:"custom-block-title"},"First thing first"),v("p"),v("ul",null,[v("li",null,[v("strong",null,"数据无价，谨慎操作。")]),v("li",null,[v("strong",null,"不要在你不清楚完整后果的情况下尝试修复系统错误。")])])],-1),w=v("p",null,"起初问题不是很明显，我在为小音 @LittleSound 创建上 GAMES101 课程所需要的 Ubuntu 虚拟环境的时候发现 Hyper-V 中的内存压力较高，而恰好压力和占用较高的又是家里的 Kubernetes 集群节点和 TrueNAS SCALE 虚拟机，于是希望尽快为整个服务器进行内存扩容。",-1),h={class:"tip custom-block github-alert"},j=v("p",{class:"custom-block-title"},"TIP",-1),H=v("p",null,"毕竟一般的最佳实践是期望内存占用不要超过 50%，我期望扩容后不要超 60%（当时已经接近 80% 了），所以我预订了 6 条镁光的 DDR4 16G ECC 内存条来给 Homelab 服务器进行升级。之前有安装过不少内存条，服务器整体内存可用量为 160GB，装 6 条新的内存条之后应该是到 256GB。",-1),L=v("h2",{id:"问题开始",tabindex:"-1"},[e("问题开始 "),v("a",{class:"header-anchor",href:"#问题开始","aria-label":'Permalink to "问题开始"'},"​")],-1),X=v("h3",{id:"问题一-b2-内存故障",tabindex:"-1"},[e("问题一：B2 内存故障 "),v("a",{class:"header-anchor",href:"#问题一-b2-内存故障","aria-label":'Permalink to "问题一：B2 内存故障"'},"​")],-1),g=v("p",null,[e("不巧的是，填充之后第一次 Boot 进 BIOS 就遇到了错误，提示 B2 slot 有故障，因为 B2 是之前就存在的内存条，我想应该不会有问题，于是在 BIOS 中尝试选择 Retry and Boot 的选项之后试图进入到 Windows。尝试很成功，确实能 Boot 到 Windows，这个时候通过在 PowerShell 中执行 "),v("code",null,"wimc memorychip"),e(" 查看现在系统读取和加载的内存，看看能不能重新尝试加载到 B2 slot，结果发现确实是 B2 slot 的内存缺失了，这就奇怪了，也许是安装 B6 slot（B6 slot 就在 B2 slot 旁边，布局可参见下图）的时候清理导致了什么接触不良的问题（怎么这种问题还是被我给碰上了？），那也只有拆开看看才知道了。")],-1),N=v("p",{align:"center"},"内存布局",-1),y=v("p",null,"这个时候我拆开了盖板希望给 B2 内存调试看看，也同步在 Twitter 上发了一条评论状态来吐槽自己的困境，但我殊不知，其实这只是问题的开始...",-1),O=o("",19),B=o("",28),x=v("hr",{class:"footnotes-sep"},null,-1),m={class:"footnotes"},_={class:"footnotes-list"},S={id:"fn1",class:"footnote-item"},C=v("a",{href:"#fnref1",class:"footnote-backref"},"↩︎",-1);function E(M,I,V,k,W,Q){const s=P("NolebasePageProperties"),r=P("VPNolebaseInlineLinkPreview"),t=P("NolebaseUnlazyImg"),u=P("NolebaseGitContributors"),a=P("NolebaseGitChangelog");return z(),A("div",null,[p,f(s),D,T,w,v("div",h,[j,v("p",null,[e("关于配置这个虚拟环境，也遭遇了很多有趣的事情，可以查阅 "),f(r,{href:"./为在 Hyper-V 上运行的 Ubuntu 18.04 虚拟机修复卡顿、提高刷新率和提供可变分辨率.html"},{default:n(()=>[e("为在 Hyper-V 上运行的 Ubuntu 18.04 虚拟机修复卡顿、提高刷新率和提供可变分辨率")]),_:1}),e(" 这篇知识库文档来了解更多我和 Hyper-V 大战的情况。")])]),H,v("p",null,[e("升级当然很简单就是了，还顺便给 Homelab 服务器 R730 进行了例行的清灰和打理工作，这也能确保内存条安装和插入的时候不会遇到奇怪的接触不良问题和静电造成的额外损坏，按照 "),f(r,{href:"https://www.dell.com/support/manuals/zh-hk/poweredge-r730/r730_ompublication/%E4%B8%80%E8%88%AC%E5%86%85%E5%AD%98%E6%A8%A1%E5%9D%97%E5%AE%89%E8%A3%85%E5%8E%9F%E5%88%99?guid=guid-770a902d-9e4f-440e-a77d-b6abc3308396&lang=zh-cn",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("Dell R730 Owner's Manual")]),_:1}),e(" 中的指示，继续对内存条按色别进行填充。")]),L,X,g,v("p",null,[f(t,{src:b,alt:"",thumbhash:"NugFBwL5xXiOaoaJcteXSFd2WgHW2Z8D",placeholderSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAQxklEQVR4AQCBAH7/AP369//8+ff/+/j2//n49P/39/P/9fbx//P28P/y9vD/8ffw//H58f/y+/L/8v30//L/9P/x//T/7/7z/+z88P/o+Oz/5PTo/9/v4//c69//2ujd/9ro3f/c6d7/4Ovh/+Xv5v/r9Ov/8fnx//b99v/7//r//v/9////////////AIEAfv8A/fr3//z59//7+fb/+fj0//f28//19vH/8/Xw//H17//w9u//8Pjw//D68f/x/PL/8P3z//D98v/u/PH/6vru/+b26v/i8eb/3e3h/9rp3f/Y5tv/2Obb/9rn3P/e6uD/4+7l/+rz6v/w+PD/9fz1//r/+f/9//z////+//////8AgQB+/wD++vj//fr3//z59v/5+PT/9/by//T18f/y9O//8PTu/+/17v/u9u7/7vfv/+757//u+vD/7Prv/+r47f/n9ur/4/Lm/97u4v/a6d3/1uXa/9Xj2P/V4tf/1+PZ/9vm3f/h6+L/5/Do/+717v/0+vP/+f74//z/+/////3////+/wCBAH7/AP/7+f/++/n//fr3//r49f/39vP/9PXw//Hz7v/v8u3/7fLs/+zz6//r9Oz/6/Xs/+r27P/p9uv/5vTp/+Px5v/f7eL/2und/9bk2f/S4dX/0d7T/9He0//U39X/2OPZ/97o3//l7eX/7PPr//L48f/4/fb//P/6//7//P////7/AIEAfv8A//37///8+v/++/n/+/n2//j38//09PD/8fLu/+7x6//r8Or/6vDp/+nx6f/o8ej/5vLo/+Xx5//i8OX/3+3i/9rp3f/W5Nn/0eDU/87c0f/N2s//zdrP/9Db0v/V39b/3OXc/+Pr4//q8er/8ffw//f89f/8//n////8/////v8AgQB+/wD///7///78///8+v/9+vf/+ff0//X08f/x8u3/7fDq/+rv6P/o7uf/5u7m/+Xu5f/j7uX/4e3j/9/r4f/b6N7/1+TZ/9Lg1f/O29D/y9jN/8nWy//K1sz/zdjP/9Pc0//a4tr/4enh/+nv6P/x9u//9/v1//z/+v////3////+/wCBAH7/AP////////7///78//77+f/6+PX/9fTx//Dx7f/s7+n/6e3n/+bs5f/k6+T/4uvj/+Hr4v/f6uD/3Oje/9jl2v/U4db/z9zS/8vYzf/I1Mr/x9PJ/8jTyf/L1cz/0drR/9jg2P/h5+D/6e7o//H17//4+/X//f/6/////v//////AIEAfv8A/////////////v3///v5//r39f/19PD/8PDs/+vt6P/n6+X/5Oni/+Lo4f/g6OD/3ujf/9zn3f/Z5dv/1eLY/9He0//M2c//yNXL/8XSyP/E0Mb/xtDH/8nTyv/P2M//197X/+Dm3//p7ef/8fXv//j79v/+//v///////////8AgQB+/wD////////////9/P/++vj/+fbz//Px7v/t7en/6Orl/+Tn4v/h5t//3uXe/9zl3P/b5Nv/2ePa/9bh2P/T39T/ztvQ/8rWzP/G0sj/w8/F/8LNxP/EzcT/x9DI/83Vzf/V3NX/3uTd/+js5v/w8+7/+Pr1//7/+/////7//////wCBAH7/AP/+/f///fz///r5//v29P/18u//7+3q/+np5f/k5eH/4OLd/9zh2v/a4Nn/2ODY/9fg1//V39b/0t3U/8/b0f/L183/x9PJ/8PPxf/Ay8L/v8rA/8HKwf/EzcX/y9LK/9PZ0f/c4Nr/5enj/+7x6//2+PP//P35/////f//////AIEAfv8A//n4//339v/69fP/9fHv/+/s6v/p5+T/4+Pf/97f2v/Z3Nf/1trU/9Ta0//S2tL/0drR/9DZ0P/N2M//y9bM/8fSyf/DzsX/v8rB/7zHvv+7xbz/vca9/8DIwP/Gzcb/ztTN/9fc1v/h5N//6uzn//Lz7//4+fX//f35////+/8AgQB+/wD58vH/9/Hw//Pu7P/u6uj/6OXi/+Lg3f/c29f/1tfT/9LUz//P083/zNLL/8vTy//K08v/ydPK/8jSyf/F0Mf/ws3E/77KwP+6xrz/uMK5/7bAt/+4wbj/u8O7/8HIwP/Jzsj/0tbQ/9ze2f/l5+L/7e7p//Pz7//49/T/+vr2/wCBAH7/APHr6v/w6un/7Ofl/+fi4f/h3dv/2tjV/9TU0P/O0Mv/ys3H/8fLxf/Fy8T/xMzE/8TNxP/DzcT/ws3D/8DLwf+9yL//ucW7/7bBt/+zvrT/sryz/7O7s/+2vrb/vMK7/8PJwv/M0Mr/1tjT/9/g3P/n6OP/7e3p//Ly7v/09PD/AIEAfv8A7Obl/+rk4//m4d//4d3b/9rY1f/U0s//zc3J/8jJxP/Dx8H/wMW//7/Fvv++xr7/vse//77Iv/+9yL//u8e9/7nEuv+1wbf/sr2z/6+6sP+uuK//rrev/7G5sf+3vrb/vsS9/8fLxf/Q087/2dvW/+Lj3v/o6OT/7ezp/+/v6/8AgQB+/wDp5OL/5+Lg/+Pf3f/d2tf/19XS/9DPy//JysX/w8bA/7/Dvf+8wrv/usK6/7rDuv+6xLv/u8W8/7rGvP+5xbv/tsO4/7O/tf+wvLL/rbiv/6y2rf+stq3/r7ev/7S7tP+7wbr/xMnC/83Ry//W2dP/3uDb/+Xm4f/q6ub/7Ozo/wCBAH7/AOnl4//n5OH/4+Dd/93b2P/X1dL/z9DL/8jKxf/CxsD/vsO8/7vBuv+5wbn/ucO6/7rEu/+6xrz/usa8/7nGu/+3xLn/tMG2/7G9s/+uurD/rLiu/623rv+vubD/tby0/7zCu//EycP/zdHL/9bZ1P/e4Nv/5ebi/+rq5v/s7Oj/AIEAfv8A7uvo/+zp5v/n5eL/4eDd/9ra1v/T1M//y87J/8XKw//Axr//vcW9/7zFvP+7xr3/vMi+/73Jv/+9yr//vMq//7rIvf+3xbr/tMK3/7G+tP+wvLL/sLuy/7O9tP+4wbj/v8a+/8fNxv/Q1c//2t3X/+Lk3//o6uX/7e/q//Dx7P8AgQB+/wD19PH/8/Lu/+7u6v/o6eT/4eLe/9nc1v/R1s//y9DJ/8XNxf/Cy8L/wMvB/8DMwv/BzsP/ws/E/8LRxf/B0MX/wM/D/73MwP+6yb3/t8W6/7bDuP+2wrj/ucS6/77Hvv/FzcX/zdTN/9bc1f/f5N7/6Ovm/+/x7P/z9vD/9vjz/wCBAH7/AP7++v/8/Pj/9/j0//Dz7f/p7Ob/4OXf/9ne1//R2dH/zNXM/8jTyf/G0sj/xtPJ/8fVyv/I18v/yNjM/8jYzP/G18r/xNTI/8HRxf++zsL/vcvA/73LwP/AzML/xdDG/8zVzP/U3NT/3eTd/+ft5v/v9O3/9vr0//v++f/9//v/AIEAfv8A//////////////z/+Pz2//D17v/n7uf/3+ff/9jh2P/S3dP/ztrQ/8zaz//M28//zNzQ/83e0v/O39P/zeDS/8ze0f/K3M//x9nM/8XWyf/D08f/xNPH/8bUyf/L2M3/0t3U/9vk2//k7OT/7fXt//b89f/9//z///////////8AgQB+/wD////////////////9//z/9fz0/+z07P/j7eT/3Ofd/9bj2P/S4NX/0N/U/8/g1P/Q4tX/0eTW/9Ll1//R5df/0OTW/87i1P/L39H/ydzO/8jZzP/I2cz/ytrO/8/d0v/W49n/3+rg/+jy6f/y+/L/+v/6/////////////////wCBAH7/AP////////////////3//f/1/vb/7ffu/+Tw5v/d6t//1+Xa/9Pj1//R4tX/0OPW/9Hl1//S59j/0+jZ/9Pp2v/S59j/z+XW/83i0//K39H/ydzP/8nczv/L3dD/0ODU/9fl2v/f7eL/6fXr//L98//7//z/////////////////AIEAfv8A////////////////+f/6//H88//p9ev/4e7k/9rp3f/U5Nj/0OLV/87i1P/O49T/z+XW/9Dn2P/R6dn/0enZ/9Do2P/O5tb/y+LT/8nf0P/H3M7/x9vN/8nczv/N39L/1OTY/9zr4P/l8+j/7vvx//f/+f/+//////////////8AgQB+/wD+/////P/9//j/+f/x/fP/6vfs/+Lw5f/a6t7/0+TY/87h0//L39H/yd/Q/8ng0f/L4tL/zOXU/83n1v/N59b/zObV/8rk0//H4ND/xN3M/8Layv/C2Mn/w9jK/8fbzf/O4NP/1eba/97t4v/n9er/7/zy//b/+P/7//3//f///wCBAH7/APP/9f/w/fP/7Pnv/+b06f/f7uP/2Ojc/9Hj1v/L3tD/xtvN/8Tay//D2sv/xNzM/8Xfzv/H4tD/yeTS/8nk0//I49H/xeHP/8LdzP+/2cj/vNXF/7vTw/+808P/v9XG/8XZy//M39H/1OXZ/93t4f/l9Oj/6/nu//D+8//y//X/AIEAfv8A5fTo/+Py5//g7+P/2ure/9Tl2f/O4NP/x9vN/8LXyf+/1cb/vdXF/73Wxf++2cf/wNzK/8Pfzf/E4c//xeLP/8Phzv/B3sv/vdrI/7nVw/+20cD/tM69/7XNvf+3zr//vNHC/8LWyP/K3M//0ePW/9np3f/f7+P/4/Pn/+b16f8AgQB+/wDZ6d3/1+fb/9Tl2P/P4dT/ytzP/8TYyv+/1MX/u9HC/7jQwP+30cD/uNPB/7rWxP+92sf/wN7L/8Lgzf/C4c7/weDM/77dyf+62MX/tdPA/7HOvP+vyrj/rsi3/7DIuP+zy7v/uc/A/8DUxv/H2sz/zeDT/9Pl2P/X6Nz/2ure/wCBAH7/AM7g0//N3tH/ytzP/8bZy//B1cf/vNLD/7jPwP+1zb3/tM28/7TPvf+10sD/uNbD/7zbx/+/38v/weHN/8Lizv/A4c3/vd3J/7nYxP+007//r826/6vItv+qxbP/qsSz/63Ftf+xybn/t82+/77SxP/E18r/ydzO/83f0v/P4dT/AIEAfv8AxtnL/8XYyv/C1sj/v9PF/7vRwv+3zr//tMy8/7LMu/+xzLv/ss+9/7XTwP+52MT/vd3J/8Dhzf/D5M//w+XQ/8Lkz/++4Mv/udrG/7TUwP+uzbr/qsi1/6fEsf+nwrD/qcKx/6zFtP+xyLn/t82+/73Rw//B1cf/xdjK/8fazP8AgQB+/wDB1Mb/wNTG/73SxP+70MH/t86//7TMvP+yy7v/scu6/7HNu/+z0L7/ttXB/7raxv+/4Mv/w+XQ/8bo0//G6dT/xefS/8Hjzv+83cj/tdbC/6/Pu/+qybX/p8Sx/6XBr/+mwbD/qcOy/67Ftv+zybr/uM2+/7zRwv+/1MX/wdXH/wCBAH7/AL7SxP+90cP/u9DB/7jPv/+2zb3/s8y7/7HLuv+xzLr/ss68/7TSv/+418P/vN3J/8Hjzv/G6NP/yOzW/8nt1//H69X/xOfR/77gy/+32cT/sdG9/6vKt/+nxbL/pcKv/6bBr/+owrH/rMS0/7DIuP+1y7z/uc7A/7zRwv++0sT/AYEAfv8AvNHD/7vQwv+6z8D/t86//7XNvf+zzLv/scu6/7HNu/+yz73/tdPA/7nZxf++38r/w+XQ/8fq1f/K7tj/y+/Z/8nt1//F6dP/v+LN/7nbxf+y077/rMu4/6fGs/+lwrD/pcGv/6fCsP+rxLP/r8e3/7TKu/+4zb7/u9DB/7zRw/+F6TI9lmZCogAAAABJRU5ErkJggg==",width:"740",height:"779",autoSizes:"true"})]),N,y,v("p",null,[f(t,{src:i,alt:"",thumbhash:"PfgFAoBxpptld/hJ/++5/r8=",placeholderSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAJCAYAAABT2S4KAAAEvElEQVR4AQCBAH7/APX58//y9vD/7fHr/+fr5f/j5+H/4eXf/+Pn4f/p7ef/8fXv//v/+f//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AIEAfv8A8fXv/+7y7P/o7Ob/4ufg/97i3P/c4Nr/3eHb/+Lm4P/q7uf/8/fw//v/+f///////////////////////////////v/9//v/+//5//v/+f/7//n//P/6//7//P////3///////////////////////////////////////////8AgQB+/wDr7+n/5+vl/+Lm4P/c4Nn/1trU/9PX0f/U2NL/2NzV/97i3P/m6uT/7vLs//T48v/4/Pb/+f33//f79f/0+PL/8fXv/+7z7P/t8ev/7fHr/+/z7f/x9e//9Pjy//b69P/5/ff/+//5//7//P////7//////////////////////wCBAH7/AObr5P/j5+H/3eHb/9ba1P/Q1M7/zdHL/8zQyv/P083/1dnT/9zg2v/j5+H/6Ozm/+vv6f/s8Or/6u7o/+fr5f/k6OL/4ubg/+Hl3//i5uD/5Oji/+fs5f/r7+n/7/Pt//P38f/2+vT/+f33//z/+v/+//z////+////////////AIEAfv8A5+vl/+To4v/e4tz/19vV/9DUzv/M0Mr/y8/J/87SzP/T19H/2t7Y/+Dk3v/l6eP/5+vl/+fr5f/l6eP/4ubg/9/k3f/d4tv/3eHb/97i3P/h5d//5enj/+nt5//t8ev/8fXv//X58//4/Pb/+//5//3/+/////3///////////8AgQB+/wDt8ev/6u7o/+To4v/d4dv/19vV/9PX0f/S1tD/1dnT/9re2P/h5d//5+vl/+zw6v/u8uz/7vLs/+zw6v/p7ef/5urk/+To4v/k6OL/5enj/+fr5f/r7+n/7/Pt//P38f/2+vT/+f33//z/+v/+//z////+/////////////////wCBAH7/APf79f/0+PL/7/Pt/+js5v/i5+D/3+Pd/9/j3f/i5uD/6Ozm/+/z7f/2+vT/+//5//7//P/+//z//P/6//n99//1+fP/8/fx//L28P/z9/H/9fnz//f79f/6/vj//f/7/////f//////////////////////////////////////AIEAfv8A/////////f/5/ff/8/fx/+7y7P/s8Or/7fHq//D17v/3+/X////9//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8BgQB+/wD//////////////v/7//n/9vr0//T48v/1+fP/+f73/////v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wQRUc+N3mdBAAAAAElFTkSuQmCC",width:"600",height:"204",autoSizes:"true"})]),O,v("p",null,[f(t,{src:d,alt:"",thumbhash:"O/gFB4BgmJl4h4h4h4h4p3h3+I54EHcI",placeholderSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAQxklEQVR4AQCBAH7/AOzw6v/p7uf/5enj/+Dk3v/c4Nn/2d3X/9re2P/d4dv/4+fh/+ru6P/x9e//9/v1//v/+f/+//z////9/////v////7///////////////////////////////////////////////7////9/////f////7/////////////////AIEAfv8A6+/p/+nt5//k6OL/3+Pd/9vf2f/Y3Nb/2d3X/9zg2v/i5uD/6e3n//D07v/2+vT/+v74//3/+//+//z////9/////f////3////+///////////////////////////////+/////f////3//v/8/////f////7///////////8AgQB+/wDq7uj/5+vl/+Pn4f/e4tz/2d3X/9fb1f/X29X/2t7Y/+Dk3v/n6+X/7fHr//P38f/4/PX/+v74//v/+f/8//r//P/6//3/+//+//z////9/////v////7////+/////f/+//z//f/7//3/+//9//v//f/7//7//P////3////+/wCBAH7/AOjs5v/m6uT/4eXf/9zg2v/X29X/1dnT/9XZ0//Y3Nb/3eHb/+To4v/q7+j/8PTu//T48v/3+/X/+Pz2//j99v/5/ff/+f33//r++P/8//r//f/7//7/+//+//z//f/7//z/+v/7//n/+//5//v/+f/7//n//P/6//3/+//+//z/AIEAfv8A5uvk/+To4v/f493/2t7Y/9XZ0//T19H/09fR/9ba1P/b39n/4eXf/+fr5f/t8ev/8fXv//P38f/0+PL/9fnz//X58//2+vT/9/v1//j89v/6/vj/+//5//v/+f/7//n/+v74//n99//5/ff/+f33//n+9//6//j/+//5//z/+v8AgQB+/wDl6eP/4ubg/97i3P/Y3Nb/1NjS/9HVz//R1c//1NjS/9nd1v/f493/5enj/+ru6P/u8uz/8PTu//H17//x9e//8vbw//P38P/0+PL/9vrz//f79f/4/Pb/+f33//n99//4/Pb/9/v1//f79f/3+/X/+Pz2//n99//6/vj/+//4/wCBAH7/AOPn4f/h5d//3ODa/9fb1f/S1tD/0NTO/9DUzv/S1tD/19vV/93h2//i5uD/5+vl/+vv6f/t8ev/7vLs/+7y7P/v8+3/8PTu//H17//z9/H/9fnz//b79P/3+/X/9/v1//f79f/2+vT/9vr0//b69P/3+/X/+Pz2//n99//6/vj/AIEAfv8A4ubg/+Dk3v/b39n/1trU/9LW0P/P083/z9PN/9HVz//W2tT/29/Z/+Hl3//m6uT/6e3n/+vv6f/s8Or/7PDq/+3x6//u8uz/8PTu//L28P/0+PL/9frz//b69P/3+/X/9vr0//b69P/2+vT/9vr0//f79f/4/Pb/+f33//n+9/8AgQB+/wDi5uD/3+Pd/9vf2f/W2tT/0tbP/8/Tzf/P083/0dXP/9ba1P/b39n/4eXf/+Xp4//o7Ob/6u7o/+vv6f/r7+n/7PDq/+3x6//v8+3/8fXv//P48f/1+fP/9vr0//f79f/3+/X/9vr0//b69P/2+vT/9/v1//j89v/5/ff/+v74/wCBAH7/AOLm4P/f493/29/Z/9ba1P/S1tD/z9TN/8/Uzf/S1tD/1trU/9zg2v/h5d//5enj/+js5v/q7uj/6+/p/+vv6f/s8Or/7fHr/+/z7f/x9e//9Pjy//b69P/3+/X/9/v1//f79f/3+/X/9/v1//f79f/4/Pb/+f33//r++P/7//n/AIEAfv8A4ubg/+Dk3v/c4Nr/19vV/9PX0f/R1c//0dXP/9PX0f/Y3Nb/3eHb/+Lm4P/m6uT/6e3n/+vv6f/r7+n/7PDq/+zw6v/u8uv/8PTu//L28P/1+fL/9/v1//j89v/4/Pb/+Pz2//j89v/4/Pb/+Pz2//n99//6/vj/+//5//z/+v8AgQB+/wDj5+H/4eXf/93h2//Y3Nb/1NjS/9LW0P/T19H/1dnT/9re2P/f493/5Oji/+js5v/r7+n/7PDq/+3x6//t8ev/7fHr/+/z7f/x9e//8/fx//b68//4/Pb/+f33//n99//5/ff/+f33//n99//5/ff/+v74//v/+f/8//r//f/7/wCBAH7/AOTo4v/i5uD/3uLc/9re2P/W2tT/1NjS/9XZ0//Y3Nb/3ODa/+Hl3//m6uT/6u7o/+3x6//u8uz/7vLs/+7y7P/v8+3/8PTu//L28P/0+PL/9/v1//n99//6/vj/+v74//r++P/6/vj/+v74//r++P/7//n//P/6//3/+//9//v/AIEAfv8A5enj/+Pn4f/f493/29/Z/9jc1v/W29T/19vV/9re2P/f493/5Oji/+nt5//t8ev/7/Pt//D07v/w9O7/8PTu//D07v/x9e//8/fx//X58//4/Pb/+f33//v/+P/7//n/+//5//r++P/6/vj/+v74//v/+f/8//r//f/7//7//P8AgQB+/wDm6uT/5Oji/+Hl3//d4dv/2t7Y/9nd1//a3tj/3eHb/+Hl3//n6+X/6+/p/+/z7f/x9e//8vbw//L28P/x9e//8fbv//L28P/0+PL/9vr0//j89v/6/vj/+//5//v/+f/7//n/+v74//r++P/6//j/+//5//z/+v/9//v//v/8/wCBAH7/AOfr5f/l6uP/4ubg/9/j3f/c4Nr/29/Z/9zg2v/f493/5Oji/+nt5//u8uz/8fXv//P38f/0+PL/8/fx//P38f/z9/H/8/fx//X58//3+/X/+f33//r++P/7//n/+//5//v/+f/6/vj/+v74//r++P/7//n//P/6//3/+//+//z/AIEAfv8A6Ozm/+bq5P/j5+H/4OTe/93h2//c4Nr/3uLc/+Hl3//m6uT/6+/p/+/z7f/z9/H/9fnz//X58//0+PL/9Pjy//P38f/0+PL/9fnz//f79f/5/ff/+v74//v/+f/7//n/+//5//r++P/6/vj/+v74//v/+f/8//r//f/7//7//P8AgQB+/wDp7ef/5+vl/+To4v/h5d//3uLc/93h2//f493/4ubg/+fr5f/s8Or/8PTu//T48v/1+fP/9vr0//X58//0+PL/9Pjy//T48v/1+fP/9/v1//n99//6/vj/+//5//v/+f/6/vj/+v74//n+9//6/vj/+//5//z/+v/9//v//v/8/wCBAH7/AOjs5v/m6uT/4+jh/+Dk3v/e4tz/3eHb/9/j3f/i5uD/5+vl/+zw6v/w9O7/9Pjy//X58//1+fP/9fny//T48v/z9/H/8/jx//X58//2+vT/+Pz2//n99//6/vj/+v74//n99//5/ff/+f33//n99//6/vj//P/6//3/+//+//z/AIEAfv8A5+vl/+Xp4//i5uD/3+Pd/93h2//c4Nr/3uLc/+Hl3//m6uT/6+/p/+/z7f/y9vD/9Pjy//T48v/z9/H/8vbw//L28P/y9vD/8/fx//X58//3+/X/+Pz2//n99//5/ff/+Pz2//j89v/4/Pb/+Pz2//r++P/7//n//P/6//3/+/8AgQB+/wDl6eP/4+fh/+Dk3v/d4dv/29/Z/9re2P/c4Nr/3+Pd/+To4v/p7ef/7fHr//D07v/y9vD/8vbw//H17//w9O7/8PTu//D07v/y9vD/8/fx//X58//2+vT/9/v1//f79f/3+/X/9vv0//f79f/3+/X/+f33//r++P/8//r//f/6/wCBAH7/AOLm4P/g5N7/3eLb/9re2P/Y3Nb/2NzW/9nd1//c4Nr/4eXf/+bq5P/q7uj/7fHr/+/z7f/v8+3/7/Pt/+7y7P/u8uz/7vLs//D07v/x9u//8/fx//X58//1+fP/9fnz//X58//1+fP/9fnz//b69P/3/PX/+f33//v/+f/8//r/AIEAfv8A3+Pd/93i2//b39n/2NzW/9XZ0//V2dP/1trU/9nd1//e4tz/4+fh/+fr5f/q7uj/7PDq/+zw6v/s8Or/7PDp/+vw6f/s8Or/7vLs//D07v/y9u//8/fx//T48v/0+PL/9Pjy//P48f/0+PL/9fnz//b69P/4/Pb/+v74//v/+f8AgQB+/wDd4dv/29/Z/9jc1v/V2dP/09fR/9LW0P/T19H/19vV/9vf2f/g5N7/5Oji/+js5v/p7ef/6u7o/+ru6P/p7ef/6u7o/+vv6f/s8Or/7vLs//D07v/y9vD/8vfw//P38f/y9vD/8vbw//P38f/0+PL/9fnz//f79f/5/ff/+v74/wCBAH7/ANzg2v/a3tj/19vV/9TY0v/R1c//0NTO/9HWz//V2dP/2d3X/97i3P/i5uD/5urk/+js5v/o7Ob/6Ozm/+js5v/p7ef/6u7o/+zw6v/u8uz/8PTu//H17//y9vD/8vbw//L28P/y9vD/8vbw//P38f/1+fP/9/v1//j89v/5/ff/AIEAfv8A3ODa/9re2P/X29X/09jR/9HVz//Q1M7/0dXP/9TY0v/Y3Nb/3eHb/+Lm4P/l6eP/5+vl/+js5v/o7Ob/6Ozm/+nt5//q7uj/7PDq/+7y7P/w9O7/8vbw//P38f/z9/H/8vbw//L28P/y9vD/8/fx//X58//3+/X/+f33//r++P8AgQB+/wDd4dv/29/Z/9jc1v/V2dP/0tbQ/9HVz//S1tD/1dnT/9nd1//e4tz/4ubg/+bq5P/o7Ob/6e3n/+nt5//q7uj/6u/o/+zw6v/u8uz/8PTu//L28P/0+PL/9Pjy//T48v/0+PL/8/fx//P38f/0+PL/9vr0//j89v/5/vf/+v/4/wCBAH7/AODk3v/e4tz/29/Z/9fb1f/V2dP/09fR/9TY0v/X29X/29/Z/+Dk3v/k6OL/6Ozm/+ru6P/r7+n/7PDq/+zw6v/t8ev/7/Pt//H17//z9/H/9fnz//b69P/3+/X/9vr0//b69P/1+fP/9fnz//b69P/4/Pb/+f33//v/+f/8//r/AIEAfv8A5Oji/+Lm4P/e49z/29/Z/9jc1v/W29T/19vV/9re2P/e4tz/4+fh/+fr5f/r7+n/7fHr/+7y7P/v8+3/7/Pt//D07v/y9vD/9Pjy//b69P/4/Pb/+f33//r++P/5/ff/+Pz2//j89v/3/PX/+Pz2//r++P/7//n//f/7//7//P8AgQB+/wDn6+X/5enj/+Lm4P/e4tz/29/Z/9re2P/a3tj/3eHb/+Hl3//m6uT/6u7o/+7y7P/w9O7/8fXv//L28P/z9/H/9Pjy//X58//3+/X/+v74//v/+f/8//r//P/6//z/+v/7//n/+v74//r++P/6/vj//P/6//3/+/////3////+/wCBAH7/AOru6P/o7Ob/5enj/+Hl3//e4tz/3eHb/93h2//f5N3/4+fh/+js5v/s8er/8PTu//L38P/0+PL/9fnz//X58//2+vT/+Pz2//r++P/8//r//v/8/////f////3//v/8//3/+//8//r//P/6//z/+v/9//v////9/////v//////AYEAfv8A7PDq/+ru6P/n6+X/4+fh/+Dk3v/e4tz/3+Pc/+Hl3//l6eP/6e7n/+7y7P/x9e//9Pjy//X58//2+vT/9/v1//j89v/6/vj//P/6//7//P////3////+/////v////3//v/8//3/+//9//v//f/7//7//P////7///////////8IdSZbiYzBYgAAAABJRU5ErkJggg==",width:"1162",height:"1090",autoSizes:"true"})]),B,f(u),f(a),x,v("section",m,[v("ol",_,[v("li",S,[v("p",null,[f(r,{href:"https://www.dell.com/support/manuals/zh-hk/poweredge-r730/r730_ompublication/%E4%B8%80%E8%88%AC%E5%86%85%E5%AD%98%E6%A8%A1%E5%9D%97%E5%AE%89%E8%A3%85%E5%8E%9F%E5%88%99?guid=guid-770a902d-9e4f-440e-a77d-b6abc3308396&lang=zh-cn",target:"_blank",rel:"noreferrer"},{default:n(()=>[e("Dell PowerEdge R730 用户手册 | Dell 香港")]),_:1}),e(" 的「系统内存」- 「一般内存模块安装原则」中的第 7 条。 "),C])])])])])}const U=l(c,[["render",E]]);export{q as __pageData,U as default};
