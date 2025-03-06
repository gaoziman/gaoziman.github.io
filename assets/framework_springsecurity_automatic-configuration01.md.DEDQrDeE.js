import{_ as o,B as n,o as s,c as r,j as i,a as e,G as p,a8 as l}from"./chunks/framework.D0fTRY1a.js";const b=JSON.parse('{"title":"SpringSecurity6 | 自动配置(上)","description":"","frontmatter":{},"headers":[],"relativePath":"framework/springsecurity/automatic-configuration01.md","filePath":"framework/springsecurity/automatic-configuration01.md","lastUpdated":null}'),c={name:"framework/springsecurity/automatic-configuration01.md"};function g(h,a,u,d,m,y){const t=n("ArticleMetadata");return s(),r("div",null,[a[0]||(a[0]=i("h1",{id:"springsecurity6-自动配置-上",tabindex:"-1"},[e("SpringSecurity6 | 自动配置(上) "),i("a",{class:"header-anchor",href:"#springsecurity6-自动配置-上","aria-label":'Permalink to "SpringSecurity6 | 自动配置(上)"'},"​")],-1)),p(t),a[1]||(a[1]=l(`<p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311162323552.png" alt="image-20231030235443828" loading="lazy"></p><h2 id="_1-前言" tabindex="-1">1.前言 <a class="header-anchor" href="#_1-前言" aria-label="Permalink to &quot;1.前言&quot;">​</a></h2><p>大家好，我是Leo哥🫣🫣🫣，上一节我们了解了SpringSecurity中一些核心过滤器。后面我们将逐渐揭开为什么引入依赖之后就会进行登录鉴权这一神秘面纱。那就是通过SpringBoot的一些自动配置为我们动态的加入了鉴权配置。但是我们真正的了解他，还是需要了解我们SpringBoot项目的自动配置。但是我们这里会简单介绍一下，如果想要深入学习SpringBoot的自动配置，<a href="https://gaoziman.blog.csdn.net/article/details/132266024" target="_blank" rel="noreferrer">请看这篇</a>。好了，话不多说让我们开始吧😎😎😎。</p><h2 id="_2-问题回顾" tabindex="-1">2.问题回顾 <a class="header-anchor" href="#_2-问题回顾" aria-label="Permalink to &quot;2.问题回顾&quot;">​</a></h2><p>还记得我们之前的问题吗，为什么我们引入了SpringSecurity依赖之后，我们项目所有的请求都需要做登录认证才可以进行访问呢。在了解到这个问题之前，我们需要学习了解一下关于SpringBoot自动装配。</p><h2 id="_3-简述springboot自动配置" tabindex="-1">3.简述SpringBoot自动配置 <a class="header-anchor" href="#_3-简述springboot自动配置" aria-label="Permalink to &quot;3.简述SpringBoot自动配置&quot;">​</a></h2><p>这里我画了一张图让大家更清晰地了解关于SpringBoot配置的整合流程。</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311171016375.png" alt="自动配置" loading="lazy"></p><h3 id="_3-1-springbootapplication" tabindex="-1">3.1 @SpringBootApplication <a class="header-anchor" href="#_3-1-springbootapplication" aria-label="Permalink to &quot;3.1 @SpringBootApplication&quot;">​</a></h3><ul><li><p>自动导入配置包</p></li><li><p>点进去查看代码：</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311171022906.png" alt="image-20231117102228841" loading="lazy"></p></li></ul><p><code>@Import</code> 为spring的注解，导入一个配置文件，在springboot中为给容器导入一个组件，而导入的组件由 AutoConfigurationPackages.class的内部类<code>Registrar.class</code> 执行逻辑来决定是如何导入的。</p><p><strong>@Import({Registrar.class})</strong></p><p>点Registrar.class进去查看源码如下：</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311171024623.png" alt="image-20231117102431579" loading="lazy"></p><p>注：Registrar实现了<code>ImportBeanDefinitionRegistrar</code>类，就可以被注解@Import导入到spring容器里。</p><h3 id="_3-2-import" tabindex="-1">3.2 @Import <a class="header-anchor" href="#_3-2-import" aria-label="Permalink to &quot;3.2 @Import&quot;">​</a></h3><p>作用：AutoConfigurationImportSelector<code>开启自动配置类的导包的选择器</code>，即是带入哪些类，有选择性的导入</p><p>点AutoConfigurationImportSelector.class进入查看源码，这个类中有两个方法见名知意：</p><ol><li><p><strong>selectImports：</strong> 选择需要导入的组件</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311171027896.png" alt="image-20231117102740858" loading="lazy"></p></li><li><p><strong>getAutoConfigurationEntry：</strong> 根据导入的@Configuration类的AnnotationMetadata返回AutoConfigurationImportSelector.AutoConfigurationEntry</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311171029443.png" alt="image-20231117102910319" loading="lazy"></p></li></ol><blockquote><p>this.getCandidateConfigurations(annotationMetadata, attributes)这里断点查看</p></blockquote><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311171035061.png" alt="image-20231117103534021" loading="lazy"></p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311171034607.png" alt="image-20231117103459562" loading="lazy"></p><p>configurations数组长度为127，并且文件后缀名都为 <code>**AutoConfiguration</code></p><p>结论： <strong>这些都是候选的配置类，经过去重，去除需要的排除的依赖，最终的组件才是这个环境需要的所有组件。有了自动配置，就不需要我们自己手写配置的值了，配置类有默认值的。</strong></p><h3 id="_3-3-自动配置核心" tabindex="-1">3.3 自动配置核心 <a class="header-anchor" href="#_3-3-自动配置核心" aria-label="Permalink to &quot;3.3 自动配置核心&quot;">​</a></h3><p>我们继续往下看看是如何返回需要配置的组件的</p><h4 id="_1-getcandidateconfigurations" tabindex="-1">1.getCandidateConfigurations <a class="header-anchor" href="#_1-getcandidateconfigurations" aria-label="Permalink to &quot;1.getCandidateConfigurations&quot;">​</a></h4><p>方法如下：</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311171038477.png" alt="image-20231117103839447" loading="lazy"></p><p><code>getCandidateConfigurations</code>方法从给定的注解元数据和属性中获取候选项配置，并返回一个包含自动配置类的列表。它首先从AnnotationMetadata中获取<code>AutoConfiguration</code>的导入属性，然后使用这些导入属性从AutoConfiguration类的META-INF/spring/org.springframework.boot.autoconfigure目录中加载自动配置类的候选项。如果候选项为空，则会抛出一个异常。最后，它返回候选项列表。</p><p>那么是从哪里加载出来的呢，我们接下来点进去load方法打一个断点进行查看。</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311171043456.png" alt="image-20231117104302312" loading="lazy"></p><p>load是一个静态方法，用于加载指定注解类型的候选项。它接受两个参数：<strong>注解类型</strong>和<strong>类加载器</strong>。函数首先检查注解是否为空，然后根据给定的类加载器决定使用哪个类加载器。接下来，它根据注解的名称构建一个URL路径，并在类路径中查找该路径下的所有URL。然后，它遍历所有的URL，读取候选配置信息，并将其添加到一个列表中。最后，函数将该列表封装到一个<code>ImportCandidates</code>对象中，并返回它。</p><h4 id="_2-getspringfactoriesloaderfactoryclass" tabindex="-1">2.getSpringFactoriesLoaderFactoryClass() <a class="header-anchor" href="#_2-getspringfactoriesloaderfactoryclass" aria-label="Permalink to &quot;2.getSpringFactoriesLoaderFactoryClass()&quot;">​</a></h4><p>我们点进去发现：this.getSpringFactoriesLoaderFactoryClass()返回的是<code>EnableAutoConfiguration.class</code>这个注解。这个注解和@SpringBootApplication下标识注解是同一个注解。</p><div class="language-java vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">protected</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getSpringFactoriesLoaderFactoryClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EnableAutoConfiguration.class;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">protected</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> getSpringFactoriesLoaderFactoryClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> EnableAutoConfiguration.class;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>结论：<strong>获取一个能加载自动配置类的类，即SpringBoot默认自动配置类为EnableAutoConfiguration</strong></p><h3 id="_3-4-springsecurity核心配置" tabindex="-1">3.4 SpringSecurity核心配置 <a class="header-anchor" href="#_3-4-springsecurity核心配置" aria-label="Permalink to &quot;3.4 SpringSecurity核心配置&quot;">​</a></h3><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311171044390.png" alt="image-20231117104438334" loading="lazy"></p><p>此时就会加载这两个组件：SpringBootWebSecurityConfiguration.class, SecurityDataConfiguration.class 尤其是第一个。</p><h3 id="_3-5-springbootwebsecurityconfiguration" tabindex="-1">3.5 SpringBootWebSecurityConfiguration <a class="header-anchor" href="#_3-5-springbootwebsecurityconfiguration" aria-label="Permalink to &quot;3.5 SpringBootWebSecurityConfiguration&quot;">​</a></h3><p>终于在最后SpringBootWebSecurityConfiguration我们有了重大发现。</p><p>这里边只有一个@Bean注解，最终会创建一个对象：SecurityFilterChain，为什么最终引入了SpringSecurity依赖之后就会所有的请求都会被拦截答案就在这个方法里边。可算揭开了他的神秘面纱。</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/LeoPic202311171047324.png" alt="image-20231117104759287" loading="lazy"></p><h3 id="_3-6-小结" tabindex="-1">3.6 小结 <a class="header-anchor" href="#_3-6-小结" aria-label="Permalink to &quot;3.6 小结&quot;">​</a></h3><p>基于SpringBoot的自动装配，由于SpringSecurity的装配配置在SpringBoot配置环境中，所以它默认会被加载，加载完毕之后defaultSecurityFilterChain被调用，SecurityFilterChain对象被创创建。所有的方法都会被被鉴权。</p><p>具体的方法调用路径或者叫配置路径是这样的：首先是三个核心的注解：</p><blockquote><p>@SpringBootApplication-&gt; @EnableAutoConfiguration&gt;@Import(AutoConfigurationImportSelector)</p></blockquote><p>然后通过@Import注解去加载他的所有配置文件到SpringBoot中。这样加载到SpringSecurity的核心文件。最终调用到上边的方法，导致所有的方法都得进行登录认证。</p><h2 id="_4-参考文献" tabindex="-1">4.参考文献 <a class="header-anchor" href="#_4-参考文献" aria-label="Permalink to &quot;4.参考文献&quot;">​</a></h2><ul><li><a href="https://springdoc.cn/spring-security/servlet/architecture.html" target="_blank" rel="noreferrer">https://springdoc.cn/spring-security/servlet/architecture.html</a></li></ul><h2 id="_5-总结" tabindex="-1">5.总结 <a class="header-anchor" href="#_5-总结" aria-label="Permalink to &quot;5.总结&quot;">​</a></h2><p>以上便是本文的全部内容，本人才疏学浅，文章有什么错误的地方，欢迎大佬们批评指正！我是<strong>Leo</strong>，一个在互联网行业的小白，立志成为更好的自己。</p><p>如果你想了解更多关于<strong>Leo</strong>，可以关注公众号-程序员Leo，后面文章会首先同步至公众号。</p>`,54))])}const f=o(c,[["render",g]]);export{b as __pageData,f as default};
