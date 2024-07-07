import{_ as p,c as d,I as a,j as i,w as t,a as s,av as l,D as n,o}from"./chunks/framework.B0QqYF0U.js";const S=JSON.parse('{"title":"通过 kubeadm 部署 Kubernetes 集群的时候的问题排查","description":"","frontmatter":{"tags":["运维/云原生/Kubernetes","运维/云原生/Kubernetes/K8s","开发/云原生/Kubernetes","开发/云原生/Kubernetes/K8s","命令行/systemd","命令行/journalctl","计算机/操作系统/Linux","计算机/操作系统/Linux/命令行","操作系统/Linux","操作系统/Debian","操作系统/Debian/Debian-11","开发/虚拟化/cgroup","命令行/kubeadm","软件/云原生/kubeadm","命令行/kubectl","软件/云原生/kubectl","软件/云原生/kubelet","计算机/网络"]},"headers":[],"relativePath":"笔记/🧱 基础设施/🚢 Kubernetes/通过 Kubeadm 部署 Kubernetes 集群的时候的问题排查.md","filePath":"笔记/🧱 基础设施/🚢 Kubernetes/通过 Kubeadm 部署 Kubernetes 集群的时候的问题排查.md"}'),c={name:"笔记/🧱 基础设施/🚢 Kubernetes/通过 Kubeadm 部署 Kubernetes 集群的时候的问题排查.md"},g=i("h1",{id:"通过-kubeadm-部署-kubernetes-集群的时候的问题排查",tabindex:"-1"},[s("通过 "),i("code",null,"kubeadm"),s(" 部署 Kubernetes 集群的时候的问题排查 "),i("a",{class:"header-anchor",href:"#通过-kubeadm-部署-kubernetes-集群的时候的问题排查","aria-label":'Permalink to "通过 `kubeadm` 部署 Kubernetes 集群的时候的问题排查"'},"​")],-1),u=i("h3",{id:"文档兼容性",tabindex:"-1"},[s("文档兼容性 "),i("a",{class:"header-anchor",href:"#文档兼容性","aria-label":'Permalink to "文档兼容性"'},"​")],-1),y=i("thead",null,[i("tr",null,[i("th",null,"主体"),i("th",null,"版本号"),i("th",null,"文档地址（如果有）")])],-1),C=i("tr",null,[i("td",null,"Debian"),i("td",null,"11"),i("td")],-1),F=i("td",null,"Kubernetes",-1),b=i("td",null,"1.28",-1),B=i("td",null,"Docker",-1),m=i("td",null,"24.0.2",-1),A=i("tr",null,[i("td",null,"containerd"),i("td",null,"1.7.6"),i("td")],-1),f=i("tr",null,[i("td",null,"Linux kernel"),i("td",null,"5.10.0"),i("td")],-1),q=l("",14),_=l("",2);function E(v,x,D,P,w,I){const h=n("NolebasePageProperties"),e=n("VPNolebaseInlineLinkPreview"),k=n("NolebaseGitContributors"),r=n("NolebaseGitChangelog");return o(),d("div",null,[g,a(h),u,i("table",null,[y,i("tbody",null,[C,i("tr",null,[F,b,i("td",null,[a(e,{href:"https://v1-28.docs.kubernetes.io/",target:"_blank",rel:"noreferrer"},{default:t(()=>[s("https://v1-28.docs.kubernetes.io/")]),_:1})])]),i("tr",null,[B,m,i("td",null,[a(e,{href:"https://docs.docker.com/",target:"_blank",rel:"noreferrer"},{default:t(()=>[s("https://docs.docker.com/")]),_:1})])]),A,f])]),q,i("p",null,[s("是否有参照 "),a(e,{href:"https://kubernetes.io/zh-cn/docs/tasks/administer-cluster/kubeadm/configure-cgroup-driver/",target:"_blank",rel:"noreferrer"},{default:t(()=>[s("配置 cgroup 驱动 | Kubernetes")]),_:1}),s(" 配置过 CGroup Driver？如果没有，可以参考 "),a(e,{href:"/笔记/🧱 基础设施/🚢 Kubernetes/准备 Kubernetes 节点裸金属虚拟机.html"},{default:t(()=>[s("准备 Kubernetes 节点裸金属虚拟机")]),_:1}),s(" 或者 "),a(e,{href:"https://github.com/kubernetes/kubeadm/issues/2699",target:"_blank",rel:"noreferrer"},{default:t(()=>[s("Error during kubeadm init - addon phase with coreDNS · Issue #2699 · kubernetes/kubeadm")]),_:1}),s(" Issue 中的脚本进行配置：")]),_,i("p",null,[a(e,{href:"https://github.com/kubernetes/kubeadm/issues/2699",target:"_blank",rel:"noreferrer"},{default:t(()=>[s("Error during kubeadm init - addon phase with coreDNS · Issue #2699 · kubernetes/kubeadm")]),_:1})]),a(k),a(r)])}const T=p(c,[["render",E]]);export{S as __pageData,T as default};
