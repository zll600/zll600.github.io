import{_ as k,c as d,I as a,j as s,w as e,a as i,av as r,D as n,o}from"./chunks/framework.B0QqYF0U.js";const V=JSON.parse('{"title":"准备 Kubernetes 节点裸金属虚拟机","description":"","frontmatter":{"tags":["开发/云原生","计算机/计算机科学/CS/虚拟化","开发/云原生/Kubernetes","开发/容器化","开发/虚拟化","开发/容器化/Docker","开发/云原生/Docker","命令行/kubectl","命令行/kubeadm","命令行/containerd","命令行/docker","软件/云原生/kubeadm","软件/云原生/kubelet","软件/云原生/kubectl","软件/云原生/containerd","软件/云原生/docker","开发/虚拟化/cgroup","命令行/systemd","命令行/journalctl","计算机/操作系统/Linux","操作系统/Linux","操作系统/Debian","操作系统/Debian/Debian-11","命令行/sysctl","计算机科学/内核/内核参数","运维/内核","命令行/apt"]},"headers":[],"relativePath":"笔记/🧱 基础设施/🚢 Kubernetes/准备 Kubernetes 节点裸金属虚拟机.md","filePath":"笔记/🧱 基础设施/🚢 Kubernetes/准备 Kubernetes 节点裸金属虚拟机.md"}'),c={name:"笔记/🧱 基础设施/🚢 Kubernetes/准备 Kubernetes 节点裸金属虚拟机.md"},g=s("h1",{id:"准备-kubernetes-节点裸金属虚拟机",tabindex:"-1"},[i("准备 Kubernetes 节点裸金属虚拟机 "),s("a",{class:"header-anchor",href:"#准备-kubernetes-节点裸金属虚拟机","aria-label":'Permalink to "准备 Kubernetes 节点裸金属虚拟机"'},"​")],-1),y=s("h3",{id:"文档兼容性",tabindex:"-1"},[i("文档兼容性 "),s("a",{class:"header-anchor",href:"#文档兼容性","aria-label":'Permalink to "文档兼容性"'},"​")],-1),F=s("thead",null,[s("tr",null,[s("th",null,"主体"),s("th",null,"版本号"),s("th",null,"文档地址（如果有）")])],-1),C=s("tr",null,[s("td",null,"Debian"),s("td",null,"11"),s("td")],-1),u=s("td",null,"Kubernetes",-1),b=s("td",null,"1.28",-1),m=s("td",null,"Docker",-1),v=s("td",null,"24.0.2",-1),A=s("tr",null,[s("td",null,"containerd"),s("td",null,"1.7.6"),s("td")],-1),B=s("tr",null,[s("td",null,"Linux kernel"),s("td",null,"5.10.0"),s("td")],-1),_=r("",18),E=s("hr",{class:"footnotes-sep"},null,-1),f={class:"footnotes"},D={class:"footnotes-list"},x={id:"fn1",class:"footnote-item"},P=s("a",{href:"#fnref1",class:"footnote-backref"},"↩︎",-1);function K(q,S,N,G,I,w){const l=n("NolebasePageProperties"),t=n("VPNolebaseInlineLinkPreview"),h=n("NolebaseGitContributors"),p=n("NolebaseGitChangelog");return o(),d("div",null,[g,a(l),y,s("table",null,[F,s("tbody",null,[C,s("tr",null,[u,b,s("td",null,[a(t,{href:"https://v1-28.docs.kubernetes.io/",target:"_blank",rel:"noreferrer"},{default:e(()=>[i("https://v1-28.docs.kubernetes.io/")]),_:1})])]),s("tr",null,[m,v,s("td",null,[a(t,{href:"https://docs.docker.com/",target:"_blank",rel:"noreferrer"},{default:e(()=>[i("https://docs.docker.com/")]),_:1})])]),A,B])]),_,a(h),a(p),E,s("section",f,[s("ol",D,[s("li",x,[s("p",null,[i("对于，CGroup Driver，在 "),a(t,{href:"https://kubernetes.io/zh-cn/docs/setup/production-environment/container-runtimes/",target:"_blank",rel:"noreferrer"},{default:e(()=>[i("容器运行时 | Kubernetes")]),_:1}),i(" 和 "),a(t,{href:"https://kubernetes.io/zh-cn/docs/tasks/administer-cluster/kubeadm/configure-cgroup-driver/",target:"_blank",rel:"noreferrer"},{default:e(()=>[i("配置 cgroup 驱动 | Kubernetes")]),_:1}),i(" 文档中有讲解到，是 CRI 的一部分。 "),P])])])])])}const z=k(c,[["render",K]]);export{V as __pageData,z as default};
