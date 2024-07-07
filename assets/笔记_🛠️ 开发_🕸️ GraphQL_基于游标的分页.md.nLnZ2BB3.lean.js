import{_ as h,c,I as a,j as s,a as e,w as i,av as n,D as o,o as p}from"./chunks/framework.B0QqYF0U.js";const ee=JSON.parse('{"title":"基于游标的分页","description":"","frontmatter":{"tags":["开发/后端","开发/数据","开发/API/GraphQL","计算机/数据库/postgres","计算机/数据库/postgresql","开发/语言/SQL","开发/后端/API/分页","开发/后端/API/分页/KeysetPagination","开发/后端/API/分页/CursorBasedPagination","开发/后端/API/分页/搜寻方式/Seek-Method","开发/后端/API/分页/密钥集分页/Keyset-Pagination","开发/后端/API/分页/游标分页/Cursor-Based-Pagination","开发/后端/API/分页/键集分页/Keyset-Pagination","开发/数据/慢查询","计算机/数据库/慢查询","计算机/数据库/分页","开发/前端/瀑布流"]},"headers":[],"relativePath":"笔记/🛠️ 开发/🕸️ GraphQL/基于游标的分页.md","filePath":"笔记/🛠️ 开发/🕸️ GraphQL/基于游标的分页.md"}'),k={name:"笔记/🛠️ 开发/🕸️ GraphQL/基于游标的分页.md"},f=s("h1",{id:"基于游标的分页",tabindex:"-1"},[e("基于游标的分页 "),s("a",{class:"header-anchor",href:"#基于游标的分页","aria-label":'Permalink to "基于游标的分页"'},"​")],-1),g=n("",3),_=s("sup",{class:"footnote-ref"},[s("a",{href:"#fn1",id:"fnref1"},"[1]")],-1),u=n("",41),B=s("hr",{class:"footnotes-sep"},null,-1),b={class:"footnotes"},y={class:"footnotes-list"},E={id:"fn1",class:"footnote-item"},m=s("strong",null,"ConnectionType",-1),A=s("a",{href:"#fnref1",class:"footnote-backref"},"↩︎",-1),D={id:"fn2",class:"footnote-item"},C=s("a",{href:"#fnref2",class:"footnote-backref"},"↩︎",-1),R={id:"fn3",class:"footnote-item"},F=s("code",null,"OFFSET + LIMIT",-1),v=s("code",null,"LIMIT",-1),O=s("a",{href:"#fnref3",class:"footnote-backref"},"↩︎",-1),S={id:"fn4",class:"footnote-item"},P=s("code",null,"ROW_NUNBER() OVER()",-1),q=s("code",null,"OFFET",-1),T=s("code",null,"ROW_NUNBER() OVER()",-1),I=s("code",null,"OFFET",-1),L=s("code",null,"ROW_NUNBER() OVER()",-1),w=s("code",null,"OFFET",-1),N=s("a",{href:"#fnref4",class:"footnote-backref"},"↩︎",-1),x={id:"fn5",class:"footnote-item"},Q=s("a",{href:"#fnref5",class:"footnote-backref"},"↩︎",-1),M={id:"fn6",class:"footnote-item"},W=s("a",{href:"#fnref6",class:"footnote-backref"},"↩︎",-1),V={id:"fn7",class:"footnote-item"},U=s("a",{href:"#fnref7",class:"footnote-backref"},"↩︎",-1),z={id:"fn8",class:"footnote-item"},G=s("a",{href:"#fnref8",class:"footnote-backref"},"↩︎",-1);function H(j,Y,K,J,$,X){const l=o("NolebasePageProperties"),t=o("VPNolebaseInlineLinkPreview"),r=o("NolebaseGitContributors"),d=o("NolebaseGitChangelog");return p(),c("div",null,[f,a(l),g,s("p",null,[e("在 "),a(t,{href:"https://relay.dev/graphql/connections.htm#sec-Forward-pagination-arguments",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("GraphQL 分页最佳实践")]),_:1}),_,e("中会提到两个关键的 query 查询参数，分别是：")]),u,s("p",null,[a(t,{href:"https://blog.jooq.org/faster-sql-paging-with-jooq-using-the-seek-method/",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("Faster SQL Pagination with jOOQ Using the Seek Method – Java, SQL and jOOQ.")]),_:1})]),s("p",null,[a(t,{href:"https://medium.com/easyread/how-to-do-pagination-in-postgres-with-golang-in-4-common-ways-12365b9fb528",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("How To Do Pagination in Postgres with Golang in 4 Common Ways | by Iman Tumorang | Easyread | Medium")]),_:1})]),s("p",null,[a(t,{href:"https://medium.com/@chris.czurylo/implementing-pagination-in-graphql-and-go-using-gqlgen-2ea3786a71dc",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("Implementing pagination in GraphQL and Go using gqlgen | by Chris Czurylo | Medium")]),_:1})]),s("p",null,[a(t,{href:"http://www.postgres.cn/docs/14/sql-declare.html",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("DECLARE CURSOR - PostgreSQL 中文文档")]),_:1})]),a(r),a(d),B,s("section",b,[s("ol",y,[s("li",E,[s("p",null,[a(t,{href:"https://relay.dev/graphql/connections.htm#sec-Forward-pagination-arguments",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("GraphQL Cursor Connections Specification")]),_:1}),e(" 中提到一个返回 "),m,e(" 的字段必须包括前向分页参数（first）、后向分页参数（after）或两者。这些分页参数允许客户端在返回之前对边缘集进行分页。 "),A])]),s("li",D,[s("p",null,[e("在网站 "),a(t,{href:"https://explainextended.com/2009/10/23/mysql-order-by-limit-performance-late-row-lookups/",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("MySQL ORDER BY / LIMIT performance: late row lookups at EXPLAIN EXTENDED")]),_:1}),e(" 中详细阐述了该问题的深层原因。 "),C])]),s("li",R,[s("p",null,[e("较高的偏移量是正常的，因为查询需要计算出第一个 "),F,e(" 记录（并且只取其中的 "),v,e("）。这个值越高，查询运行的时间就越长。在 "),a(t,{href:"https://stackoverflow.com/a/4502426",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("Why does MYSQL higher LIMIT offset slow the query down? - StackOverflow")]),_:1}),e(" 中由 "),a(t,{href:"https://stackoverflow.com/users/2439950/nikos-kyr",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("Nikos Kyr")]),_:1}),e(" 回答，"),a(t,{href:"https://stackoverflow.com/users/95353/elzo-valugi",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("Elzo Valugi")]),_:1}),e(" 编辑修正。 "),O])]),s("li",S,[s("p",null,[e("当数据量在 100 时，"),P,e(" 语句相较于 "),q,e(" 语句慢了 15.5 倍，当数据量在 480000 时，"),T,e(" 语句相较于 "),I,e(" 语句慢了 8.6 倍，当数据量在 999900 时，"),L,e(" 语句相较于 "),w,e(" 语句慢了 3.97 倍。在 "),a(t,{href:"https://stackoverflow.com/a/3128071",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("OFFSET vs. ROW_NUMBER() - StackOverflow")]),_:1}),e(" 中由 "),a(t,{href:"https://stackoverflow.com/users/34549/zzzeek",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("zzzeek")]),_:1}),e(" 回答。 "),N])]),s("li",x,[s("p",null,[e("在 "),a(t,{href:"https://stackoverflow.com/a/58154",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("Why is it considered bad practice to use cursors in SQL Server?")]),_:1}),e(" 由 "),a(t,{href:"https://stackoverflow.com/users/5581/josef",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("Josef")]),_:1}),e(" 回答 "),Q])]),s("li",M,[s("p",null,[e("在 "),a(t,{href:"https://stackoverflow.com/a/13149184",target:"_blank",rel:"noreferrer"},{default:i(()=>[e('pagination - Using "Cursors" for paging in PostgreSQL - Stack Overflow')]),_:1}),e(" 由 "),a(t,{href:"https://stackoverflow.com/users/398670/craig-ringer",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("Craig Ringer")]),_:1}),e(" 回答 "),W])]),s("li",V,[s("p",null,[e("在 "),a(t,{href:"https://stackoverflow.com/a/56719839",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("sql server - Generic SQL predicate to use for keyset pagination on multiple fields - Stack Overflow")]),_:1}),e(" 由 "),a(t,{href:"https://stackoverflow.com/users/6436191/the-impaler",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("The Impaler")]),_:1}),e(" 回答 "),U])]),s("li",z,[s("p",null,[e("在 "),a(t,{href:"https://stackoverflow.com/a/61809569sql",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("server - Generic SQL predicate to use for keyset pagination on multiple fields - Stack Overflow")]),_:1}),e(" 中由 "),a(t,{href:"https://stackoverflow.com/users/1532882/jake-z",target:"_blank",rel:"noreferrer"},{default:i(()=>[e("Jake Z")]),_:1}),e(" 回答 "),G])])])])])}const se=h(k,[["render",H]]);export{ee as __pageData,se as default};
