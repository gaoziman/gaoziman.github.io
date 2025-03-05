import{_ as a,o as i,c as t,a7 as e}from"./chunks/framework.CU6B6cvq.js";const c=JSON.parse('{"title":"Docker 其他技巧","description":"","frontmatter":{},"headers":[],"relativePath":"middleware/docker/docker-other-tips.md","filePath":"middleware/docker/docker-other-tips.md"}'),n={name:"middleware/docker/docker-other-tips.md"};function r(p,s,h,l,o,k){return i(),t("div",null,s[0]||(s[0]=[e('<h1 id="docker-其他技巧" tabindex="-1">Docker 其他技巧 <a class="header-anchor" href="#docker-其他技巧" aria-label="Permalink to &quot;Docker 其他技巧&quot;">​</a></h1><h2 id="设置和关闭容器的开机自启" tabindex="-1">设置和关闭容器的开机自启 <a class="header-anchor" href="#设置和关闭容器的开机自启" aria-label="Permalink to &quot;设置和关闭容器的开机自启&quot;">​</a></h2><p><strong>使用 restart 策略控制容器的开机自启</strong></p><p>Docker 提供了 --restart 选项来设置容器的自动重启策略，适用于 docker run 或 docker update 命令。</p><p><strong>启动容器时设置开机自启</strong></p><p>如果你希望容器在 <strong>Docker 重启或系统重启</strong> 后仍然启动，可以在 docker run 命令中使用 --restart 选项：</p><div class="language-Bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=always</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_container</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><p><strong>--restart 选项的参数：</strong></p><ul><li><p>no（默认）：容器不会在 Docker 或系统重启后自动重启。</p></li><li><p>always：无论容器是 <strong>因错误退出</strong> 还是 <strong>手动停止</strong>，都会 <strong>始终</strong> 启动。</p></li><li><p>unless-stopped：<strong>除非手动停止</strong>，否则在 Docker 或系统重启后都会自动启动。</p></li><li><p>on-failure[:N]：仅当容器非 <strong>0 退出</strong>（异常退出）时才会重新启动，N 代表最多重试次数。</p></li></ul><p>例如：</p><div class="language-Bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=on-failure:5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --name</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_container</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span></code></pre></div><p><strong>修改已运行容器的自启策略</strong></p><p><strong>如果容器已经在运行，并且你想修改它的 restart 策略，可以使用：</strong></p><div class="language-Bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=always</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_container</span></span></code></pre></div><p>这样 my_container 在 <strong>Docker 或系统重启后都会自动启动</strong>。</p><p><strong>关闭容器的开机自启</strong></p><p><strong>如果你不想让容器在开机后自动启动，可以使用：</strong></p><div class="language-Bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --restart=no</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> my_container</span></span></code></pre></div><p>或者在启动容器时不加 --restart 选项，默认 no。</p><p><strong>查看容器的开机自启状态</strong></p><div class="language-Bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> inspect</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -f</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{{ .HostConfig.RestartPolicy.Name }}&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> portainer</span></span></code></pre></div>',21)]))}const g=a(n,[["render",r]]);export{c as __pageData,g as default};
