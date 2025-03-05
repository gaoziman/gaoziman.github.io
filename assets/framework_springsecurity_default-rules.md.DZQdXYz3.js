import{_ as i,o as a,c as n,a7 as t}from"./chunks/framework.CU6B6cvq.js";const g=JSON.parse('{"title":"自定义认证规则","description":"","frontmatter":{"title":"自定义认证规则","order":12,"category":["springsecurity"],"tag":["springsecurity"],"pageview":false,"date":"2023-12-13T15:31:06.000Z","comment":false,"breadcrumb":false},"headers":[],"relativePath":"framework/springsecurity/default-rules.md","filePath":"framework/springsecurity/default-rules.md"}'),l={name:"framework/springsecurity/default-rules.md"};function e(h,s,p,r,k,E){return a(),n("div",null,s[0]||(s[0]=[t(`<h1 id="springsecurity6-自定义认证规则" tabindex="-1">SpringSecurity6 | 自定义认证规则 <a class="header-anchor" href="#springsecurity6-自定义认证规则" aria-label="Permalink to &quot;SpringSecurity6 | 自定义认证规则&quot;">​</a></h1><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312091750103.png" alt="image-20231030235443828"></p><h2 id="_1-前言" tabindex="-1">1.前言 <a class="header-anchor" href="#_1-前言" aria-label="Permalink to &quot;1.前言&quot;">​</a></h2><p>大家好，我是Leo哥🫣🫣🫣，接到<a href="https://gaoziman.blog.csdn.net/article/details/134864581" target="_blank" rel="noreferrer">上一节</a>，我们学习了如何修改SpringSecurity默认用户，使用我们自己的自定义的用户名和密码来进行认证登录。但是有时候我们的开发者可能并不是所有的接口都需要进行拦截，就比如，登录，注册接口等这些是不是要进行拦截的，那么如何修改并自定义这些规则。没错这就是我们本节的重点。好了，话不多说让我们开始吧😎😎😎。</p><h2 id="_2-环境搭建" tabindex="-1">2.环境搭建 <a class="header-anchor" href="#_2-环境搭建" aria-label="Permalink to &quot;2.环境搭建&quot;">​</a></h2><p>本篇我们开始搭建一个新的模块，并取名为custom。具体搭建过程大家可以自行搭建，我这里就不在赘述了哈。</p><p>我已经搭建好了基本工程，并定义好了两个接口，以及自定义我们的登录用户名以及密码。</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312091758147.png" alt="image-20231209175808107"></p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312091758866.png" alt="image-20231209175827845"></p><p>下面我们直接启动SpringBoot工程。</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312091759271.png" alt="image-20231209175918237"></p><p>通过<a href="http://localhost:8600/test%E8%AE%BF%E9%97%AEtest%E6%8E%A5%E5%8F%A3" target="_blank" rel="noreferrer">http://localhost:8600/test访问test接口</a></p><p>通过<a href="http://localhost:8600/hello%E8%AE%BF%E9%97%AEhello%E6%8E%A5%E5%8F%A3" target="_blank" rel="noreferrer">http://localhost:8600/hello访问hello接口</a></p><p>发现他都经过认证，至此我们基本环境介绍就到这里。</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312091936305.png" alt="image-20231209193647262"></p><h2 id="_3-自定义规则" tabindex="-1">3.自定义规则 <a class="header-anchor" href="#_3-自定义规则" aria-label="Permalink to &quot;3.自定义规则&quot;">​</a></h2><h3 id="_3-1-概述" tabindex="-1">3.1 概述 <a class="header-anchor" href="#_3-1-概述" aria-label="Permalink to &quot;3.1 概述&quot;">​</a></h3><p>在SpringSecurity6中，我们原本在原来SpringSecurity实现的方法已经被抛弃,已经完全不能用了。我们在SpringSecurity6可以这样进行实现。</p><ol><li>首先自定义一个配置类，我这里命名为MySecurityConfig.java。</li><li>然后实现@EnableWebSecurity注解，并向Spring中注入一个Bean对象SecurityFilterChain。</li><li>后面我们都是通过这样实现方式的。</li><li>最后我们就可以开始自定义我们的规则了。</li></ol><h3 id="_3-2-规则" tabindex="-1">3.2 规则 <a class="header-anchor" href="#_3-2-规则" aria-label="Permalink to &quot;3.2 规则&quot;">​</a></h3><ol><li>放行hello接口。</li><li>除了hello接口，其他接口都需要进行认证。</li><li>开启表单认证。</li></ol><p><strong>直接上代码。</strong></p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">package</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.javatop.custom.config;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.context.annotation.Bean;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.context.annotation.Configuration;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.security.config.annotation.web.builders.HttpSecurity;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.springframework.security.web.SecurityFilterChain;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@author</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> : Leo</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@version</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 1.0</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @date 2023-12-09 17:45</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * @description :</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Configuration</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">@</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">EnableWebSecurity</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MySecurityConfig</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    @</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">Bean</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SecurityFilterChain </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">securityFilterChain</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HttpSecurity </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">http</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">throws</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Exception {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        http.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">authorizeRequests</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">requestMatchers</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">permitAll</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 放行改资源，不用认证可以直接访问</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">anyRequest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">authenticated</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 所有请求都需要认证</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">and</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">().</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">formLogin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 开启表单登录</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> http.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>最后我们重启项目然后看效果是不是按照我们配置这样的。</p><p>首先访问<a href="http://localhost:8600/hello%E6%8E%A5%E5%8F%A3%EF%BC%8C%E5%8F%91%E7%8E%B0%E7%A1%AE%E5%AE%9E%E6%B2%A1%E6%9C%89%E9%80%9A%E8%BF%87%E8%AE%A4%E8%AF%81%E5%8F%AF%E4%BB%A5%E7%9B%B4%E6%8E%A5%E8%AE%BF%E9%97%AE%EF%BC%8C%E8%AF%B4%E6%98%8E%E6%88%91%E4%BB%AC%E7%9A%84%E9%85%8D%E7%BD%AE%E7%B1%BB%E7%94%9F%E6%95%88%E4%BA%86%E3%80%82" target="_blank" rel="noreferrer">http://localhost:8600/hello接口，发现确实没有通过认证可以直接访问，说明我们的配置类生效了。</a></p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312091945185.png" alt="image-20231209194520148"></p><p>然后访问<a href="http://localhost:8600/test%E6%8E%A5%E5%8F%A3%EF%BC%8C%E5%8F%91%E7%8E%B0%E6%88%91%E4%BB%AC%E9%9C%80%E8%A6%81%E8%BF%9B%E8%A1%8C%E7%99%BB%E5%BD%95%E8%AE%A4%E8%AF%81%E4%B9%8B%E5%90%8E%E6%89%8D%E5%8F%AF%E4%BB%A5%E8%AE%BF%E9%97%AE%E3%80%82" target="_blank" rel="noreferrer">http://localhost:8600/test接口，发现我们需要进行登录认证之后才可以访问。</a></p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312091948929.gif" alt=""></p><h3 id="_3-3-拓展" tabindex="-1">3.3 拓展 <a class="header-anchor" href="#_3-3-拓展" aria-label="Permalink to &quot;3.3 拓展&quot;">​</a></h3><p>当然也不是需要通过一个一个加然后进行配置，我们如果需要放行多个接口，我们可以通过进行以下配置。</p><p>直接在后面加上你需要放行的接口路径即可。</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202312091950858.png" alt="image-20231209195016819"></p><h2 id="_4-总结" tabindex="-1">4.总结 <a class="header-anchor" href="#_4-总结" aria-label="Permalink to &quot;4.总结&quot;">​</a></h2><p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p><p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>`,35)]))}const c=i(l,[["render",e]]);export{g as __pageData,c as default};
