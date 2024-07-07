import{_ as r,c as d,I as a,j as i,a as s,w as k,av as h,D as n,o as B}from"./chunks/framework.B0QqYF0U.js";const T=JSON.parse('{"title":"嵌套 watch 和 onEffectCleanup 的另一种实现","description":"","frontmatter":{},"headers":[],"relativePath":"笔记/🛠️ 开发/vue-vapor/嵌套 watch 和 onEffectCleanup 的另一种实现.md","filePath":"笔记/🛠️ 开发/vue-vapor/嵌套 watch 和 onEffectCleanup 的另一种实现.md"}'),g={name:"笔记/🛠️ 开发/vue-vapor/嵌套 watch 和 onEffectCleanup 的另一种实现.md"},o=i("h1",{id:"嵌套-watch-和-oneffectcleanup-的另一种实现",tabindex:"-1"},[s("嵌套 watch 和 onEffectCleanup 的另一种实现 "),i("a",{class:"header-anchor",href:"#嵌套-watch-和-oneffectcleanup-的另一种实现","aria-label":'Permalink to "嵌套 watch 和 onEffectCleanup 的另一种实现"'},"​")],-1),c=h("",2),y=i("code",null,"watchEffect",-1),E=h("",6),F=i("strong",null,"Solid",-1),C=h("",3),A=h("",1);function f(D,u,_,v,w,b){const l=n("NolebasePageProperties"),t=n("VPNolebaseInlineLinkPreview"),p=n("NolebaseGitContributors"),e=n("NolebaseGitChangelog");return B(),d("div",null,[o,a(l),c,i("p",null,[s("但是这涉及到嵌套 Watch API，但是经过简单的测试，发现目前并不支持。"),a(t,{href:"https://play.vuejs.org/#eNp9UclOwzAQ/ZXBlwQpJEK9VWklQJWAAyBA4uJLlE7SFMe2bCetFOXfGTvdDqiHLH7L+M3MwB60TvsO2ZzltjSNdmDRdXrJZdNqZRwMYLBKYFe4cnP4rKoKSwcjVEa1EJE94rJU0jpobQ0L74ijZxRCwY8yYn0T3XLJZTDH8S0sll6Y9oXoMIEJGLiEy/IHXYABfHUlMBWqjqOTN0rOdegGgJHe/smzqRlqgw4OWy0Kh3QCyDf3y2EIQccxz+gU0EbqzkF/16o1igVnxHMGGZF5duFnCXOWwlRNnW6tkjS3kJCzUrW6EWjetWsoLGfzY3bOCprE7jVgzlDLR7zcYPn7D761e49x9mHQoumRsxPnClOjm+jV1xvu6f9EUvpOkPoK+Yk0yM5nnGSPnVxT7AtdSPsStt/I+tuu9g6lPTblg4ZRBz1ntP2nK62f487SWfDRhtj4B4DCz7o=",target:"_blank",rel:"noreferrer"},{default:k(()=>[s("在 Playground 中尝试一下")]),_:1}),s("会发现 Console 中的 log 会随着输入行为变得越来越多，因为之前注册的 "),y,s(" 并没有被销毁。")]),E,i("p",null,[s("这个方式类似于 "),F,s(" 中的 "),a(t,{href:"https://www.solidjs.com/docs/latest/api#oncleanup",target:"_blank",rel:"noreferrer"},{default:k(()=>[s("onCleanup")]),_:1})]),C,i("p",null,[s("下面是实际尝试的代码（"),a(t,{href:"https://play.vuejs.org/#eNq1VEuP0zAQ/iuDL8lKIRXa26qtBEsl4ACIReJiCaXutM3i2JYfaaUq/52JnT6XLXDYQ1V75ptvvnnEO/bWmLINyO7Y2AlbGw8OfTBTrurGaOthBxaXBWwqL9ZQOfgZT4Nhtlyi8EdzuheQ/h+ENliAVvHwvnZGO4QOllY3kFHWjCuuhFbOEyjF3EusVDAwuQg7IpOSCeROByuIX8xvYDIdFByseVvothCJLgJ2XAEkDtczE4fCzanW/CZCUkweQaXz2pTzWi3S/SZCkssGleeRWsxTunPNPbaj35nyoWUTijmqTsZ8yPzyYq/rbNyK0tHY8+wDSqnhh7Zy8SqLkNTlxETAsq1kuNLuQd6Qmei1xFLqVZ6lOQ6ArICWNqVNii+W4fnoC+A5y1N89JN7X+7fey+Ctaj6cR1q/ZeyhiEfixt4/q+8geVpkWdsz8Wd4FK941H6wunbpovHxsjKI90Axus3090uDr7rxiO6RWutTPDQvm70AuWEM/JzBiNyjkcn8axgnpZMLetV+ei0oscktpAzoRtTS7RfjK9JJmd3qbm9r6LN2nyKNm9phfZ2sUbx6w/2R7ftbZx9tejQtsjZwecru0Kf3LOHz7il88FJ6oMk9BXnN6QWhl5jgr0LakGyT3BR7cf4JNZq9d3Nth6V2xfVC+2RXcRzRm/b/ZXSj3Jvy9sYRxNi3W8hy+Jb",target:"_blank",rel:"noreferrer"},{default:k(()=>[s("在 Playground 中查看")]),_:1}),s("）：")]),A,a(p),a(e)])}const m=r(g,[["render",f]]);export{T as __pageData,m as default};
