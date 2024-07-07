import{_ as r,c as d,I as a,j as s,w as h,a as i,av as l,D as k,o as F}from"./chunks/framework.B0QqYF0U.js";const J=JSON.parse('{"title":"”灾难性“地将 Homelab K8s 的 Calico 迁移到 Cilium","description":"","frontmatter":{"tags":["开发/云原生","计算机/计算机科学/CS/虚拟化","开发/云原生/Kubernetes","开发/容器化","开发/虚拟化","开发/容器化/Docker","开发/云原生/Docker","命令行/kubectl","命令行/kubeadm","命令行/containerd","命令行/docker","软件/云原生/kubeadm","软件/云原生/kubelet","软件/云原生/kubectl","软件/云原生/containerd","软件/云原生/docker","开发/虚拟化/cgroup","运维/云原生/Kubernetes/K8s","开发/云原生/Kubernetes/K8s","运维/云原生/Kubernetes","计算机/网络","运维/Cilium","命令行/cilium","软件/云原生/Cilium","软件/云原生/kube-proxy","计算机/网络/Calico","运维/Calico","软件/云原生/Calico","计算机/网络/Cilium","开发/标记语言/YAML"]},"headers":[],"relativePath":"笔记/🧱 基础设施/🚢 Kubernetes/”灾难性“地将 Homelab K8s 的 Calico 迁移到 Cilium.md","filePath":"笔记/🧱 基础设施/🚢 Kubernetes/”灾难性“地将 Homelab K8s 的 Calico 迁移到 Cilium.md"}'),g={name:"笔记/🧱 基础设施/🚢 Kubernetes/”灾难性“地将 Homelab K8s 的 Calico 迁移到 Cilium.md"},C=s("h1",{id:"灾难性-地将-homelab-k8s-的-calico-迁移到-cilium",tabindex:"-1"},[i("”灾难性“地将 Homelab K8s 的 Calico 迁移到 Cilium "),s("a",{class:"header-anchor",href:"#灾难性-地将-homelab-k8s-的-calico-迁移到-cilium","aria-label":'Permalink to "”灾难性“地将 Homelab K8s 的 Calico 迁移到 Cilium"'},"​")],-1),y=s("h3",{id:"文档兼容性",tabindex:"-1"},[i("文档兼容性 "),s("a",{class:"header-anchor",href:"#文档兼容性","aria-label":'Permalink to "文档兼容性"'},"​")],-1),o=s("thead",null,[s("tr",null,[s("th",null,"主体"),s("th",null,"版本号"),s("th",null,"文档地址（如果有）")])],-1),c=s("tr",null,[s("td",null,"Debian"),s("td",null,"11"),s("td")],-1),u=s("td",null,"Kubernetes",-1),A=s("td",null,"1.28",-1),b=s("td",null,"Docker",-1),m=s("td",null,"24.0.2",-1),E=s("tr",null,[s("td",null,"containerd"),s("td",null,"1.7.6"),s("td")],-1),B=s("tr",null,[s("td",null,"Linux kernel"),s("td",null,"5.10.0"),s("td")],-1),v=s("tr",null,[s("td",null,"Calico"),s("td"),s("td")],-1),f=s("td",null,"Cilium",-1),D=s("td",null,"1.14.2",-1),_=s("td",null,"helm",-1),q=s("td",null,"v3.9.0",-1),x=s("h2",{id:"简单删除-calico-之后安装-cilium",tabindex:"-1"},[i("简单删除 Calico 之后安装 Cilium "),s("a",{class:"header-anchor",href:"#简单删除-calico-之后安装-cilium","aria-label":'Permalink to "简单删除 Calico 之后安装 Cilium"'},"​")],-1),I=s("h3",{id:"安装-cilium",tabindex:"-1"},[i("安装 Cilium "),s("a",{class:"header-anchor",href:"#安装-cilium","aria-label":'Permalink to "安装 Cilium"'},"​")],-1),P=l("",10),T=l("",52),S=l("",7),R=s("h2",{id:"为修复-cidr-冲突重装-cilium",tabindex:"-1"},[i("为修复 CIDR 冲突重装 Cilium "),s("a",{class:"header-anchor",href:"#为修复-cidr-冲突重装-cilium","aria-label":'Permalink to "为修复 CIDR 冲突重装 Cilium"'},"​")],-1),w=s("h4",{id:"卸载-cilium-1",tabindex:"-1"},[i("卸载 Cilium "),s("a",{class:"header-anchor",href:"#卸载-cilium-1","aria-label":'Permalink to "卸载 Cilium"'},"​")],-1),N=l("",10),K=s("code",null,"kubeProxyReplacement",-1),O=l("",4),M=l("",2),G={class:"tip custom-block github-alert"},H=s("p",{class:"custom-block-title"},"如果你选择使用 `kubeProxyReplacement` 参数替代 `kube-proxy`",-1),L=s("code",null,"kube-proxy",-1),$=s("code",null,"kube-proxy",-1),V=l("",10);function U(W,z,j,Q,X,Y){const t=k("NolebasePageProperties"),n=k("VPNolebaseInlineLinkPreview"),p=k("NolebaseGitContributors"),e=k("NolebaseGitChangelog");return F(),d("div",null,[C,a(t),y,s("table",null,[o,s("tbody",null,[c,s("tr",null,[u,A,s("td",null,[a(n,{href:"https://v1-28.docs.kubernetes.io/",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("https://v1-28.docs.kubernetes.io/")]),_:1})])]),s("tr",null,[b,m,s("td",null,[a(n,{href:"https://docs.docker.com/",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("https://docs.docker.com/")]),_:1})])]),E,B,v,s("tr",null,[f,D,s("td",null,[a(n,{href:"https://docs.cilium.io/en/v1.14/",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("https://docs.cilium.io/en/v1.14/")]),_:1})])]),s("tr",null,[_,q,s("td",null,[a(n,{href:"https://helm.sh/docs/",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("https://helm.sh/docs/")]),_:1})])])])]),x,I,s("p",null,[i("根据 "),a(n,{href:"https://docs.cilium.io/en/stable/gettingstarted/k8s-install-default/",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("Cilium Quick Installation")]),_:1}),i(" 的要求运行：")]),P,s("p",null,[i("可以根据文档"),a(n,{href:"/笔记/🧱 基础设施/🚢 Kubernetes/完全卸载使用 KubeKey 安装的 Calico.html"},{default:h(()=>[i("完全卸载使用 KubeKey 安装的 Calico")]),_:1}),i(" 中建议的方式和步骤来进行删除。")]),T,s("p",null,[i("我们重新翻阅文档 "),a(n,{href:"https://docs.cilium.io/en/stable/network/concepts/ipam/cluster-pool/#ipam-crd-cluster-pool",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("Cluster Scope (Default) — Cilium 1.14.2 documentation")]),_:1}),i(": 可以发现文档中描述说：")]),S,s("p",null,[i("所以根据文档 "),a(n,{href:"https://docs.cilium.io/en/stable/installation/k8s-install-migration/",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("Migrating a cluster to Cilium — Cilium 1.14.2 documentation")]),_:1}),i(" 的说明，我们还需要在安装的时候额外配置一下 CIDR 才能解决这个问题。")]),R,w,s("p",null,[i("那我们现在先根据"),a(n,{href:"/笔记/🧱 基础设施/🚢 Kubernetes/完全卸载使用 Helm 安装的 Cilium.html"},{default:h(()=>[i("完全卸载使用 Helm 安装的 Cilium")]),_:1}),i(" 文档的指引完全删除 cilium 然后再试一次。")]),N,s("p",null,[i("注意这个配置文件里面的 "),K,i(" 字段配置，根据 Cilium 的 "),a(n,{href:"https://docs.cilium.io/en/stable/network/kubernetes/kubeproxy-free/#kubeproxy-free",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("Kubernetes Without kube-proxy")]),_:1}),i(" 文档：")]),O,s("p",null,[i("可以通过 "),a(n,{href:"/笔记/📟 终端/Linux 命令/文档读写/cat 输出文件.html"},{default:h(()=>[i("cat 输出文件")]),_:1}),i(" 命令检查一下：")]),M,s("div",G,[H,s("p",null,[i("可以跟随"),a(n,{href:"/笔记/🧱 基础设施/🚢 Kubernetes/完全卸载集群内的 `kube-proxy`.html"},{default:h(()=>[i("完全卸载集群内的 "),L]),_:1}),i(" 文档的指引备份和删除 "),$,i(" 相关的配置和资源。")])]),V,s("ul",null,[s("li",null,[a(n,{href:"https://tinychen.com/20230201-k8s-15-migrate-cni-from-calico-to-cilium/",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("k8s系列15-calico有损迁移至cilium - TinyChen's Studio - 互联网技术学习工作经验分享")]),_:1})]),s("li",null,[a(n,{href:"https://github.com/kubernetes/kubernetes/issues/86762",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("coredns [ERROR] plugin/errors: 2 read udp 10.244.235.249:55567->10.96.0.10:53: i/o timeout · Issue #86762 · kubernetes/kubernetes")]),_:1})]),s("li",null,[a(n,{href:"https://github.com/kubernetes/kubernetes/issues/111105",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("When using cilium as Kubernetes network CNI, the coredns is running but not-ready, healthcheck failed and plugin/errors HINFO: read udp i/o timeout · Issue #111105 · kubernetes/kubernetes")]),_:1})]),s("li",null,[a(n,{href:"https://izsk.me/2023/06/03/cilium-on-kubernetes-install/",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("cilium在kubernetes中的生产实践二(cilium部署) | Z.S.K.'s Records")]),_:1})]),s("li",null,[a(n,{href:"https://isovalent.com/blog/post/tutorial-migrating-to-cilium-part-1/",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("Tutorial: How to Migrate to Cilium (Part 1) - Isovalent")]),_:1})]),s("li",null,[a(n,{href:"https://kubernetes.feisky.xyz/extension/network/cilium",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("Cilium - Kubernetes指南")]),_:1})]),s("li",null,[a(n,{href:"https://github.com/kubernetes/kubernetes/issues/86762",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("coredns [ERROR] plugin/errors: 2 read udp 10.244.235.249:55567->10.96.0.10:53: i/o timeout · Issue #86762 · kubernetes/kubernetes")]),_:1})]),s("li",null,[a(n,{href:"https://github.com/cilium/cilium/issues/13308",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("DNS rules don't work anymore on kubernetes 1.18 with cilium 1.8 · Issue #13308 · cilium/cilium")]),_:1})]),s("li",null,[a(n,{href:"https://github.com/cilium/cilium/issues/23872",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("I set ipam.operator.clusterPoolIPv4PodCIDR=10.1.0.0/16 why the pod ip allocated is still 10.0 · Issue #23872 · cilium/cilium")]),_:1})]),s("li",null,[a(n,{href:"https://github.com/kubernetes/kubernetes/issues/111105",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("When using cilium as Kubernetes network CNI, the coredns is running but not-ready, healthcheck failed and plugin/errors HINFO: read udp i/o timeout · Issue #111105 · kubernetes/kubernetes")]),_:1})]),s("li",null,[a(n,{href:"https://serverfault.com/questions/1103034/kubernetes-nodes-are-not-reachable-and-cannot-reach-local-network-after-installi",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("linux - Kubernetes Nodes are not reachable and cannot reach local network after installing cilium - Server Fault")]),_:1})]),s("li",null,[a(n,{href:"https://kubernetes.io/docs/setup/production-environment/tools/kubeadm/create-cluster-kubeadm/#pod-network",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("Creating a cluster with kubeadm | Kubernetes")]),_:1})]),s("li",null,[a(n,{href:"https://stackoverflow.com/questions/49112336/container-runtime-network-not-ready-cni-config-uninitialized",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("kubernetes - Container runtime network not ready: cni config uninitialized - Stack Overflow")]),_:1})]),s("li",null,[a(n,{href:"https://www.jianshu.com/p/896ec00b9661",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("删除cilium ebpf/bpf程序/完全卸载cilium")]),_:1})]),s("li",null,[a(n,{href:"https://gist.github.com/aliasmee/6c7e5fb433c8fd303b07f0081fc83677",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("无法彻底清理cilium留下的问题")]),_:1})]),s("li",null,[a(n,{href:"https://www.chenshaowen.com/blog/how-to-use-cilium-to-replace-calico.html",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("使用 Cilium 替换 Calico – 陈少文的网站")]),_:1})]),s("li",null,[a(n,{href:"https://kubernetes.io/docs/tasks/debug/debug-cluster/",target:"_blank",rel:"noreferrer"},{default:h(()=>[i("Troubleshooting Clusters | Kubernetes")]),_:1})])]),a(p),a(e)])}const ss=r(g,[["render",U]]);export{J as __pageData,ss as default};
