import{_ as e,c as k,I as s,j as a,w as r,a as n,av as d,D as i,o as g}from"./chunks/framework.B0QqYF0U.js";const b=JSON.parse('{"title":"Prometheus 配置","description":"","frontmatter":{"tags":["开发/云原生/可观测","开发/云原生/可观测/监控","开发/云原生/可观测/指标","运维/云原生/可观测/Prometheus","开源/软件/Prometheus"],"status":"尚未完成"},"headers":[],"relativePath":"笔记/🧱 基础设施/📈 指标监控/Prometheus/Prometheus 配置.md","filePath":"笔记/🧱 基础设施/📈 指标监控/Prometheus/Prometheus 配置.md"}'),y={name:"笔记/🧱 基础设施/📈 指标监控/Prometheus/Prometheus 配置.md"},o=a("h1",{id:"prometheus-配置",tabindex:"-1"},[n("Prometheus 配置 "),a("a",{class:"header-anchor",href:"#prometheus-配置","aria-label":'Permalink to "Prometheus 配置"'},"​")],-1),C=d(`<div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://github.com/prometheus/prometheus/releases/download/v2.28.1/prometheus-2.28.1.linux-amd64.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> prometheus-2.28.1.linux-amd64.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> prometheus-2.28.1.linux-amd64.tar.gz</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/local/prometheus</span></span></code></pre></div><p>用户与 Systemd</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> groupadd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> prometheus</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> useradd</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> prometheus</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /var/lib/prometheus</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /sbin/nologin</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> prometheus</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> vim</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /usr/lib/systemd/system/prometheus.service</span></span></code></pre></div><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">Description</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">prometheus</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">After</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">network.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">Type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">simple</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">User</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">prometheus</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">ExecStart</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">/usr/local/prometheus/prometheus --</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">config.file</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">/usr/local/prometheus/prometheus.yml --</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">storage.tsdb.path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">/var/lib/prometheus</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">Restart</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">on-failure</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">WantedBy</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">multi-user.target</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> epel-release</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gcc-c++</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> make</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -sL</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://dl.yarnpkg.com/rpm/yarn.repo</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> tee</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /etc/yum.repos.d/yarn.repo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yarn</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gcc-c++</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pcre</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pcre-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> zlib</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> zlib-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> openssl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> openssl-devel</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> zip</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> unzip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> epel-release</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> certbot</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> python3-certbot-nginx</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> python3-certbot-dns-cloudflare</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> libxml2</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> libxml2-devel</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> libxslt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> libxslt-devel</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gd-devel</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> perl-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> perl-ExtUtils-Embed</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yum</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -y</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> GeoIP</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> GeoIP-devel</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> GeoIP-data</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> yum</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> gperftools-devel</span></span></code></pre></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">./configure</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --prefix=/usr/share/nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --sbin-path=/usr/sbin/nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --modules-path=/usr/lib64/nginx/modules</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --conf-path=/etc/nginx/nginx.conf</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --error-log-path=/var/log/nginx/error.log</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --http-log-path=/var/log/nginx/access.log</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --http-client-body-temp-path=/var/lib/nginx/tmp/client_body</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --http-proxy-temp-path=/var/lib/nginx/tmp/proxy</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --http-fastcgi-temp-path=/var/lib/nginx/tmp/fastcgi</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --http-uwsgi-temp-path=/var/lib/nginx/tmp/uwsgi</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --http-scgi-temp-path=/var/lib/nginx/tmp/scgi</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --pid-path=/run/nginx.pid</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --lock-path=/run/lock/subsys/nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --user=nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --group=nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-file-aio</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-ipv6</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_ssl_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_v2_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_realip_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_addition_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_xslt_module=dynamic</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_image_filter_module=dynamic</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_sub_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_dav_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_flv_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_mp4_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_gunzip_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_gzip_static_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_random_index_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_secure_link_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_degradation_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_slice_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_stub_status_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_perl_module=dynamic</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-http_auth_request_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-mail=dynamic</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-mail_ssl_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-pcre</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-pcre-jit</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-stream=dynamic</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-stream_ssl_module</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-debug</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-cc-opt=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;-O2 -g -pipe -Wall -Werror=format-security -Wp,-D_FORTIFY_SOURCE=2 -Wp,-D_GLIBCXX_ASSERTIONS -fexceptions -fstack-protector-strong -grecord-gcc-switches -specs=/usr/lib/rpm/redhat/redhat-hardened-cc1 -specs=/usr/lib/rpm/redhat/redhat-annobin-cc1 -m64 -mtune=generic -fasynchronous-unwind-tables -fstack-clash-protection -fcf-protection&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --with-ld-opt=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;-Wl,-z,relro -Wl,-z,now -specs=/usr/lib/rpm/redhat/redhat-hardened-ld -Wl,-E&#39;</span></span></code></pre></div><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">Description</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">The nginx HTTP and reverse proxy server</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">After</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">network.target remote-fs.target nss-lookup.target</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">Type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">forking</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">PIDFile</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">/run/nginx.pid</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># Nginx will fail to start if /run/nginx.pid already exists but has the wrong</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># SELinux context. This might happen when running \`nginx -t\` from the cmdline.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># https://bugzilla.redhat.com/show_bug.cgi?id=1268621</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">ExecStartPre</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">/usr/bin/rm -f /run/nginx.pid</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">ExecStartPre</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">/usr/sbin/nginx -t</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">ExecStart</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">/usr/sbin/nginx</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">ExecReload</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">/bin/kill -s HUP $MAINPID</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">KillSignal</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">SIGQUIT</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">TimeoutStopSec</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">5</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">KillMode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">mixed</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">PrivateTmp</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">true</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">WantedBy</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#98C379;">multi-user.target</span></span></code></pre></div>`,7);function c(F,u,m,A,D,_){const t=i("NolebasePageProperties"),h=i("VPNolebaseInlineLinkPreview"),l=i("NolebaseGitContributors"),p=i("NolebaseGitChangelog");return g(),k("div",null,[o,s(t),C,a("p",null,[s(h,{href:"https://www.notion.so/sub1-ff049922dcb34664bc78d14966d8bc79",target:"_blank",rel:"noreferrer"},{default:r(()=>[n("sub1")]),_:1})]),s(l),s(p)])}const B=e(y,[["render",c]]);export{b as __pageData,B as default};
