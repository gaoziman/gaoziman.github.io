import{_ as r,B as d,o,c as n,j as a,a as l,G as i,a8 as c}from"./chunks/framework.D0fTRY1a.js";const m=JSON.parse('{"title":"记录一次IDEA非法字符报错","description":"","frontmatter":{},"headers":[],"relativePath":"tools/bugs/record-idea-illegal-character-ufeff-and-report-an-error-once.md","filePath":"tools/bugs/record-idea-illegal-character-ufeff-and-report-an-error-once.md","lastUpdated":null}'),s={name:"tools/bugs/record-idea-illegal-character-ufeff-and-report-an-error-once.md"};function h(p,t,b,u,x,_){const e=d("ArticleMetadata");return o(),n("div",null,[t[0]||(t[0]=a("h1",{id:"记录一次idea非法字符报错",tabindex:"-1"},[l("记录一次IDEA非法字符报错 "),a("a",{class:"header-anchor",href:"#记录一次idea非法字符报错","aria-label":'Permalink to "记录一次IDEA非法字符报错"'},"​")],-1)),i(e),t[1]||(t[1]=c('<blockquote><p>UTF8 与 UTF8-BOM，大端与小端等编码到底有何不同</p></blockquote><h2 id="_1-问题发现" tabindex="-1">1. 问题发现 <a class="header-anchor" href="#_1-问题发现" aria-label="Permalink to &quot;1. 问题发现&quot;">​</a></h2><blockquote><p>最近在运行一个开源项目的时候，后端SpringBoot工程运行时，报了一个错，截图如下</p></blockquote><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309081353221.png" alt="image-20230908135357992" loading="lazy"></p><h3 id="bom" tabindex="-1">BOM <a class="header-anchor" href="#bom" aria-label="Permalink to &quot;BOM&quot;">​</a></h3><p>出于好奇，我们查一下这个编码<code>\\\\ufeff</code>是个什么东东，查询得知，这是一个标识字节存储顺序的编码。</p><p>这个涉及到一个名词：<code>BOM</code>。</p><p>BOM：<strong>Byte Order Mark，</strong> 中文名译作“字节顺序标记”。我们知道一个UNICODE编码中一个汉字大多数占用2个字节，那个这两个字节哪个存储在存储地址高位，哪个存储在低位呢？</p><p>Unicode编码中，FEFF表明字节流是Big-Endian（大端序，内存低地址存放高位数据），FFFE则表明字节流是Little- Endian（小端序，内存的低地址存放低位数据）。</p><p>(可以巧妙区分为：内存低地址存的是低位就是小端序，内存低地址存的是高位就是大端序)</p><p>如“0x11223344”，这个变量的高字节是”0x11“，最低字节是为”0x44“，大端存储时为：</p><table tabindex="0"><thead><tr><th>内存地址</th><th>数据</th><th></th></tr></thead><tbody><tr><td>0x0010</td><td>0x11</td><td>低内存地址，高位数据</td></tr><tr><td>0x0011</td><td>0x22</td><td></td></tr><tr><td>0x0012</td><td>0x33</td><td></td></tr><tr><td>0x0013</td><td>0x44</td><td>高内存地址</td></tr></tbody></table><p>而小端时数据的顺序则是相反的：</p><table tabindex="0"><thead><tr><th>内存地址</th><th>数据</th><th></th></tr></thead><tbody><tr><td>0x0010</td><td>0x44</td><td>低内存地址，低位数据</td></tr><tr><td>0x0011</td><td>0x33</td><td></td></tr><tr><td>0x0012</td><td>0x22</td><td></td></tr><tr><td>0x0013</td><td>0x11</td><td>高内存地址</td></tr></tbody></table><h2 id="_2-思路" tabindex="-1">2. 思路 <a class="header-anchor" href="#_2-思路" aria-label="Permalink to &quot;2. 思路&quot;">​</a></h2><blockquote><p>解决的思路是将文件编码格式由其他编码格式转为 UTF-8格式。</p></blockquote><h2 id="_3-解决方式" tabindex="-1">3. 解决方式 <a class="header-anchor" href="#_3-解决方式" aria-label="Permalink to &quot;3. 解决方式&quot;">​</a></h2><h3 id="_3-1-方式一" tabindex="-1">3.1 方式一 <a class="header-anchor" href="#_3-1-方式一" aria-label="Permalink to &quot;3.1 方式一&quot;">​</a></h3><p>选择一个其他编码，如GBK。（我选的是GBK）。<strong>如下图</strong></p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/cisyam/202309081355247.webp" alt="image.png" loading="lazy"></p><p>第二步：重复步骤一，再将编码选择回来，即第二次选择UTF-8编码。</p><p>第三步：嗯，没有第三步，这时候问题应该已经解决了。</p><h3 id="_3-2-方式二" tabindex="-1">3.2 方式二 <a class="header-anchor" href="#_3-2-方式二" aria-label="Permalink to &quot;3.2 方式二&quot;">​</a></h3><p>使用编辑器软件/IDE（windows记事本程序除外）将文件内容复制一份重新保存，并删除旧文件。</p>',24))])}const g=r(s,[["render",h]]);export{m as __pageData,g as default};
