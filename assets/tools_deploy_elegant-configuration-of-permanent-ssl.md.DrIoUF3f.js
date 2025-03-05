import{_ as i,o as a,c as n,a7 as p}from"./chunks/framework.CU6B6cvq.js";const c=JSON.parse('{"title":"优雅的配置永久SSL","description":"","frontmatter":{},"headers":[],"relativePath":"tools/deploy/elegant-configuration-of-permanent-ssl.md","filePath":"tools/deploy/elegant-configuration-of-permanent-ssl.md"}'),l={name:"tools/deploy/elegant-configuration-of-permanent-ssl.md"};function t(h,s,e,k,r,F){return a(),n("div",null,s[0]||(s[0]=[p(`<h1 id="优雅的配置永久ssl" tabindex="-1">优雅的配置永久SSL <a class="header-anchor" href="#优雅的配置永久ssl" aria-label="Permalink to &quot;优雅的配置永久SSL&quot;">​</a></h1><h2 id="acem-sh" tabindex="-1">acem.sh <a class="header-anchor" href="#acem-sh" aria-label="Permalink to &quot;acem.sh&quot;">​</a></h2><p><a href="https://www.codefather.cn/post/1878997489747013633#heading-7" target="_blank" rel="noreferrer">https://www.codefather.cn/post/1878997489747013633#heading-7</a></p><h2 id="_1panel" tabindex="-1">1panel <a class="header-anchor" href="#_1panel" aria-label="Permalink to &quot;1panel&quot;">​</a></h2><p><a href="https://www.nxcoding.com/archives/1panel-https-auto-renew" target="_blank" rel="noreferrer">https://www.nxcoding.com/archives/1panel-https-auto-renew</a></p><h2 id="encrypt免费证书" tabindex="-1">Encrypt免费证书 <a class="header-anchor" href="#encrypt免费证书" aria-label="Permalink to &quot;Encrypt免费证书&quot;">​</a></h2><p>这里使用 <strong>Let’s Encrypt</strong> 提供的免费 SSL 证书，并通过 Certbot 工具自动获取和安装。以下是具体步骤：</p><p>由于 Certbot 无法直接与 Docker 部署的 Nginx 交互，你可以使用 Certbot 的 standalone 模式，这需要暂时停止占用 80 端口的 Nginx 容器。</p><p>在获取证书之前，停止 Nginx 容器以释放 80 端口：</p><div class="language-Bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> down</span></span></code></pre></div><p>使用以下命令获取证书：</p><div class="language-Bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certbot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certonly</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --standalone</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> leocoder.cn</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> picture.leocoder.cn</span></span></code></pre></div><ul><li><p>certonly：仅获取证书，不自动配置。</p></li><li><p>--standalone：Certbot 启动一个临时的 web 服务来完成验证。</p></li><li><p>-d：指定域名。</p></li></ul><p>获取成功后，证书将存储在 /etc/letsencrypt/live/ 目录中。</p><p><strong>然后将证书复制到 Nginx 可访问的目录</strong></p><p>Certbot 生成的证书通常位于 /etc/letsencrypt/live/yourdomain.com/ 目录下。您需要将这些证书文件复制到 Nginx 配置目录 /etc/ssl/certs/ 和 /etc/ssl/private/：</p><div class="language-Bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/letsencrypt/live/leocoder.cn/fullchain.pem</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/ssl/certs/leocoder.cn.crt</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/letsencrypt/live/leocoder.cn/privkey.pem</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/ssl/private/leocoder.cn.key</span></span></code></pre></div><p>首先，您需要确保目标目录存在。你可以通过以下命令创建所需的目录：</p><div class="language-Bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/ssl/private</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mkdir</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/ssl/certs</span></span></code></pre></div><h3 id="修改nginx-conf-文件" tabindex="-1"><strong>修改</strong>nginx.conf 文件 <a class="header-anchor" href="#修改nginx-conf-文件" aria-label="Permalink to &quot;**修改**nginx.conf 文件&quot;">​</a></h3><div class="language-Bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">events</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    worker_connections</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 最大连接数</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">http</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/nginx/mime.types</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 载入文件类型</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    default_type</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> application/octet-stream</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 默认文件类型</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    sendfile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启用文件发送</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    keepalive_timeout</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 65</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 设置保持连接时间</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 主域名网站</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        server_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> leocoder.cn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 301</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$host$request_uri;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 强制 HTTP 重定向到 HTTPS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 443</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        server_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> leocoder.cn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ssl_certificate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/ssl/certs/leocoder.cn.crt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ssl_certificate_key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/ssl/private/leocoder.cn.key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/share/nginx/blog</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        index</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            try_files</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $uri $uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /index.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 二级域名网站</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 80</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        server_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> picture.leocoder.cn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 301</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$host$request_uri;  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 强制 HTTP 重定向到 HTTPS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    server</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        listen</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 443</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ssl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        server_name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> picture.leocoder.cn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ssl_certificate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/ssl/certs/leocoder.cn.crt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        ssl_certificate_key</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/ssl/private/leocoder.cn.key</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 前端服务</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/share/nginx/picture/frontend</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            index</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> index.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            try_files</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $uri $uri</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /index.html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        # 后端服务代理</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        location</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /api/</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            proxy_pass</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://picture-backend:18888/api/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $host;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> X-Real-IP</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $remote_addr;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            proxy_set_header</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> X-Forwarded-For</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $proxy_add_x_forwarded_for;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                                                                                                                                                           63,1</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          Bot</span></span></code></pre></div><h3 id="修改-docker-compose-文件" tabindex="-1"><strong>修改 docker-compose 文件</strong> <a class="header-anchor" href="#修改-docker-compose-文件" aria-label="Permalink to &quot;**修改 docker-compose 文件**&quot;">​</a></h3><div class="language-Bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">version:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;3.9&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">services:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  nginx:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx:latest</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    container_name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx-proxy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    ports:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;80:80&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;443:443&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    volumes:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/software/data/nginx/nginx.conf:/etc/nginx/nginx.conf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/software/data/blog/dist:/usr/share/nginx/blog</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/software/data/picture/frontend/dist:/usr/share/nginx/picture/frontend</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/letsencrypt/live/leocoder.cn/fullchain.pem:/etc/ssl/certs/leocoder.cn.crt:ro</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /etc/letsencrypt/live/leocoder.cn/privkey.pem:/etc/ssl/private/leocoder.cn.key:ro</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    networks:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> proxy_network</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    restart:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> always</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  picture-backend:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    image:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> openjdk:17</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    container_name:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> picture-backend</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    volumes:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/software/data/picture/backend:/app</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    working_dir:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /app</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    command</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;java&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;-jar&quot;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;lg-picture-backend-1.0-SNAPSHOT.jar&quot;,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;--server.port=18888&quot;]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    networks:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">      -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> proxy_network</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    restart:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> always</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">networks:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  proxy_network:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    driver:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> bridge</span></span></code></pre></div><p>完成上述步骤后，重新部署服务</p><div class="language-Bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker-compose</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> up</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span></span></code></pre></div><p>可以看到，此时就是安全的连接了，大功告成！</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=MGVmNjA3ZWJkMTMxNTBhN2ZiYzQ1NGI5ZjU4MWM1NDVfMG5pS2h2YzNmYXY0bEIxMnhEN3N3OENmMGRyMkd5UExfVG9rZW46Skpyd2JuU01Yb0xBZHN4Rmx3aWM0TmthblNjXzE3NDExNDU5NzQ6MTc0MTE0OTU3NF9WNA" alt=""></p><h3 id="配置自动续期" tabindex="-1">配置自动续期 <a class="header-anchor" href="#配置自动续期" aria-label="Permalink to &quot;配置自动续期&quot;">​</a></h3><p>Let’s Encrypt 的证书有效期为 90 天，因此需要配置自动续期。</p><p>编辑定时任务：</p><div class="language-Bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> crontab</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span></span></code></pre></div><p>添加以下行，每月自动续期并重启 Nginx：</p><div class="language-Bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> certbot</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> renew</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --quiet</span></span></code></pre></div>`,33)]))}const g=i(l,[["render",t]]);export{c as __pageData,g as default};
