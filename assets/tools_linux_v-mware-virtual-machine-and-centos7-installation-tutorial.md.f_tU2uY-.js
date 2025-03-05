import{_ as e,o,c as l,a7 as t}from"./chunks/framework.CU6B6cvq.js";const p=JSON.parse('{"title":"VMware虚拟机以及centos7入门安装教程","description":"","frontmatter":{},"headers":[],"relativePath":"tools/linux/v-mware-virtual-machine-and-centos7-installation-tutorial.md","filePath":"tools/linux/v-mware-virtual-machine-and-centos7-installation-tutorial.md"}'),c={name:"tools/linux/v-mware-virtual-machine-and-centos7-installation-tutorial.md"};function r(s,a,i,N,n,d){return o(),l("div",null,a[0]||(a[0]=[t('<h1 id="vmware虚拟机以及centos7入门安装教程" tabindex="-1">VMware虚拟机以及centos7入门安装教程 <a class="header-anchor" href="#vmware虚拟机以及centos7入门安装教程" aria-label="Permalink to &quot;VMware虚拟机以及centos7入门安装教程&quot;">​</a></h1><h2 id="_1-vmware虚拟机的安装" tabindex="-1">1.VMware虚拟机的安装 <a class="header-anchor" href="#_1-vmware虚拟机的安装" aria-label="Permalink to &quot;1.VMware虚拟机的安装&quot;">​</a></h2><h3 id="_1-1-前言" tabindex="-1">1.1 前言： <a class="header-anchor" href="#_1-1-前言" aria-label="Permalink to &quot;1.1 前言：&quot;">​</a></h3><p>虚拟机可以在我们自己的电脑上安装一个独立的系统，在测试软件或者想要使用其他系统的场景下还是挺方便的。</p><p><strong>注意：</strong> 笔者在写文章时所用版本为VMware16，大家可以自行选择。</p><h3 id="_1-2-下载" tabindex="-1">1.2 下载 <a class="header-anchor" href="#_1-2-下载" aria-label="Permalink to &quot;1.2 下载&quot;">​</a></h3><p>进入官网的 <a href="https://www.vmware.com/cn/products/workstation-pro.html" target="_blank" rel="noreferrer">VMware Workstation Pro 页面</a>，浏览功能特性、应用场景、系统要求等。下滑页面点击 <code>试用 Workstation 17Pro</code> 下方的下载链接，跳转至<a href="https://www.vmware.com/products/workstation-pro/workstation-pro-evaluation.html" target="_blank" rel="noreferrer">下载页面</a>。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=ZmZiMjJlMTk4ODMyNGRhY2JmOWM1MzRjMWY2YjIxMDRfRGFRYXpsSXI2NElINEZ3Zjh3V2NmUzJ2N3VIYjlVTkpfVG9rZW46WnhkbWJsYTJkb0g1T2p4aWRUcWNabkttbjFmXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><p>在下载页面中下滑，根据操作系统选择合适的产品，在这里以 Windows10 系统为例，选择 <code>Workstation 17 Pro for Windows</code>，开始下载安装文件。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=NTA5Zjg1YTAzM2M3ZDYwMmU4YTBjODI3OTQ2NmYzYzRfYjhXT005MTBOa3BiVThMSlJMckxia2hISTZycjM1SGJfVG9rZW46SFpHMGJ0Tnh5b3lYQVl4N0d0Q2NKdXA5blpTXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h3 id="_1-3-vmware安装步骤" tabindex="-1">1.3 VMware安装步骤 <a class="header-anchor" href="#_1-3-vmware安装步骤" aria-label="Permalink to &quot;1.3 VMware安装步骤&quot;">​</a></h3><h4 id="_1-3-1-步骤1" tabindex="-1">1.3.1 步骤1 <a class="header-anchor" href="#_1-3-1-步骤1" aria-label="Permalink to &quot;1.3.1 步骤1&quot;">​</a></h4><p>在我们下载好的文件夹中找到安装文件，双击，等待安装程序运行。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=NzAzMjZkNmU3ZTcxYTU1YWQ3ZTFiNjU2NTAyOTVkNTFfcG44bENLR0U0SUVjcDA3OFpiTGxCTTI1SUU4NkkzY2hfVG9rZW46S0hQVmJwc3dPb1RWeTF4Y1N0a2NLMm9RbmNoXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_1-3-2-步骤2" tabindex="-1">1.3.2 步骤2 <a class="header-anchor" href="#_1-3-2-步骤2" aria-label="Permalink to &quot;1.3.2 步骤2&quot;">​</a></h4><p>点击<strong>下一步</strong>——&gt; 选中<strong>接受许可后</strong>——&gt;点击 <strong>下一步</strong>。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=MGJiNmUwODk2MDEwM2UxMGI0Y2E1NjA5ODIyNzhlNzJfcDFTRzA0VWNxNjhXcHRPQ3l0MXl6b1NVU3pob3hkOEFfVG9rZW46VHpHQmJHMmtVb3l2NmR4TWwwT2NUV09lbnVoXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=ODM1YjljMDc4MjAzNDUxNWVkYzA5ZjExNWY1ZTZmYzNfR2RYcERaT2V5S1hSZFVBTm5IcERMeWx3aTJBejF6eURfVG9rZW46UHBqVWJBQzRpb3ZwSWp4bHpzR2NmcmxDbkZlXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_1-3-3-步骤3" tabindex="-1">1.3.3 步骤3 <a class="header-anchor" href="#_1-3-3-步骤3" aria-label="Permalink to &quot;1.3.3 步骤3&quot;">​</a></h4><p>更改安装路径：把√去掉——&gt;点击右上角的“更改”，修改安装路径，默认本地C盘（这个路径看自己情况决定，最好文件名是纯英文 ）——&gt;点击确定——&gt;点击“下一步”。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=ZmZiMGFmOGEwNjEyMThmMjI3OWZkMWQ5MjVhZjM0MjRfWFBJWGhPZkNuMG1icVNsUmdrM1NKM0JSbzVqaXVVUlNfVG9rZW46TXM3QWJhMTVhb1I3TDR4VlV1ZmM2R2dxbndoXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=ODA2NzdlYjU2ZDQ4NDM1YzUwNGRjYjg2YTc5MjgyZDJfVjdFZVJ1MDQ3ZnZIU2hCaXdJc1dFQjA4QUJDdTdFek9fVG9rZW46U3B2NmIxQ3lGbzNrU0d4UzRaWmNoYzhibmxVXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=NDc1ZjU0YmUxOThlOTgxNTM5YTY2MzNkNzMyMTY4MzZfWHZ0VjFDeXdkWk9OSzlua1dCSDk5VDllQkJpRjNhSHVfVG9rZW46TkprSGJiT1ZZb1RCT0F4Tjc2V2MySmU2bnFkXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_1-3-4-步骤4" tabindex="-1">1.3.4 步骤4 <a class="header-anchor" href="#_1-3-4-步骤4" aria-label="Permalink to &quot;1.3.4 步骤4&quot;">​</a></h4><p>默认，点击下一步——&gt;点击安装，开始安装。</p><p>建议把两个“√”都取消，启动自检要是开了的话，每次一打开VW就会内存爆满，客户计划就是垃圾根本没用</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=NGE2NGJlYjAxNmRkMDJhZWMxMjJjMGM4M2IzNTA5M2VfODFnWjRqc2dORWY5RVdpZW5rbHo2SW9WMHN1SjYwN2hfVG9rZW46WXljSWJoUEozb1V5aVN4SkEzSWNtYnI4bjdnXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_1-3-5-步骤5" tabindex="-1">1.3.5 步骤5 <a class="header-anchor" href="#_1-3-5-步骤5" aria-label="Permalink to &quot;1.3.5 步骤5&quot;">​</a></h4><p>按照步骤，点击右下角许可证密钥，输入密钥——&gt;点击 输入——&gt;点击“完成”退出安装向导。</p><p>建议输入许可证密钥，可以永久使用VMware，否则就是试用版本一个月。</p><h3 id="_1-4-秘钥" tabindex="-1">1.4 秘钥 <a class="header-anchor" href="#_1-4-秘钥" aria-label="Permalink to &quot;1.4 秘钥&quot;">​</a></h3><p><strong>永久密钥获取方式</strong>：网上搜索关键词VMware16密钥，因为我的版本是16，所以关键词版本是16 ，找到后随便复制一个顺眼的输入即可。这个是不是很赞，哈哈哈。</p><p>下面是网上搜集到的可用密钥，根据自己虚拟机版本选择密钥。<strong>拿去不谢，亲测有效~~</strong></p><p>VMware Workstation16 密钥：</p><ul><li><p>ZF3R0-FHED2-M80TY-8QYGC-NPKYF</p></li><li><p>YF390-0HF8P-M81RQ-2DXQE-M2UT6</p></li><li><p>ZF71R-DMX85-08DQY-8YMNC-PPHV8</p></li></ul><p>VMware Workstation Pro 15 激活许可证：</p><ul><li><p>UY758-0RXEQ-M81WP-8ZM7Z-Y3HDA</p></li><li><p>VF750-4MX5Q-488DQ-9WZE9-ZY2D6</p></li><li><p>UU54R-FVD91-488PP-7NNGC-ZFAX6</p></li><li><p>YC74H-FGF92-081VZ-R5QNG-P6RY4</p></li><li><p>YC34H-6WWDK-085MQ-JYPNX-NZRA2</p></li></ul><h2 id="_2-安装centos7的安装" tabindex="-1">2.安装centos7的安装 <a class="header-anchor" href="#_2-安装centos7的安装" aria-label="Permalink to &quot;2.安装centos7的安装&quot;">​</a></h2><h3 id="_2-1-准备工作" tabindex="-1">2.1 准备工作 <a class="header-anchor" href="#_2-1-准备工作" aria-label="Permalink to &quot;2.1 准备工作&quot;">​</a></h3><p>笔者是在阿里云镜像站进行下载的，大家可以参考。</p><p><a href="https://mirrors.aliyun.com/centos/7/isos/x86_64/" target="_blank" rel="noreferrer">centos-7-isos-x86_64安装包下载_开源镜像站-阿里云 (aliyun.com)</a></p><ol><li><p>软件：VMware Workstation 虚拟机</p></li><li><p>镜像文件：CentOS-7-x86 64-DVD-2009.iso</p></li></ol><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWNiZWU1YWQyMzk5YTFjMGJlNGVkYTcwMGQ5NjhjYTBfZjBOQVVCb3M4OFRyOUxOZWkzbk9wYXU3ZkJCbTlHa2NfVG9rZW46Q1VUUmJJZnJBb3gzclF4VzRTNmNmazBHbnNmXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h3 id="_2-2-创建虚拟机" tabindex="-1">2.2 创建虚拟机 <a class="header-anchor" href="#_2-2-创建虚拟机" aria-label="Permalink to &quot;2.2 创建虚拟机&quot;">​</a></h3><h4 id="_2-2-1-步骤1" tabindex="-1">2.2.1 步骤1 <a class="header-anchor" href="#_2-2-1-步骤1" aria-label="Permalink to &quot;2.2.1 步骤1&quot;">​</a></h4><p>打开VMware虚拟机，文件 → 新建虚拟机 → 自定义 → 下一步。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=N2NhMWRmNDY0ODRiZGJlNzUzY2JlYTllMGI1OTYxYWJfaTg4YkxDMlBBajE0Q1lobHp1RkhWYkJDZHo1Y3k2aGlfVG9rZW46UmVHS2JBY2dtb0tjc2x4cDBUQWN0SnB6blRkXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-2-2-步骤2" tabindex="-1">2.2.2 步骤2 <a class="header-anchor" href="#_2-2-2-步骤2" aria-label="Permalink to &quot;2.2.2 步骤2&quot;">​</a></h4><p><strong>硬盘兼容性</strong>选择默认就可以，继续下一步。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=NGQ0NDBiNDJkN2Y2MDFlZjFjMzkyNTFhMmRkYzQ4MGZfbHEwR0VKQllzb1NHUU5IY0NvUW1Ma0JRRHVyMklOSXpfVG9rZW46U050dWJDSjI5b3FjbWt4S1hEd2NldkxZbnZjXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-2-3-步骤3" tabindex="-1">2.2.3 步骤3 <a class="header-anchor" href="#_2-2-3-步骤3" aria-label="Permalink to &quot;2.2.3 步骤3&quot;">​</a></h4><p>进入 <strong>客户机操作系统</strong> 选择 <strong>稍后安装操作系统</strong> （因为tfwf要在虚拟机安装完成之后，把不需要的硬件删除，所以选择稍后安装操作系统）。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTMyNDYyYjVhOGQ5Njg1YzdmZDNiNTQxMjMwNDNjM2Jfb1l0UThSRzVwSmtDYXdiY2RKdHg4MVc4WEVqSlA1QXJfVG9rZW46VXViVmI4NThCb1VuN3h4czNUZGMxejF5blZjXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-2-4-步骤4" tabindex="-1">2.2.4 步骤4 <a class="header-anchor" href="#_2-2-4-步骤4" aria-label="Permalink to &quot;2.2.4 步骤4&quot;">​</a></h4><p>选择客户端操作系统：客户机操作系统 → Linux→ 版本选 <strong>CentOS 7 64位</strong> → 下一步，注意：版本一定要对应镜像文件版本。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=OGFhYWI4MjcxNzhhNWVjZmYzMDhmMTEyZTlhMDgzMTZfRUhEOTBuRmVpZU41aW50WGJCVHgxT21PdTQyekRNUWhfVG9rZW46UXgxbWJ2dWNtb3hxVXF4YkdVZGNvNHRPbkExXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-2-5-步骤5" tabindex="-1">2.2.5 步骤5 <a class="header-anchor" href="#_2-2-5-步骤5" aria-label="Permalink to &quot;2.2.5 步骤5&quot;">​</a></h4><p>命名虚拟机，位置（G:\\Document\\Leo-test），这样可以在 <strong>VM-Mmirrors</strong>，文件夹放多个操作系统。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=MmIyOGU0ZjMxNzAyNjEyNjkxMmVjMDIwNTU4MDcyODRfNVNjcHpxYWp5aWdDWTY4Wm1aNmg5TjRyTmxwRVA3dFVfVG9rZW46UlowTmJydmtyb3hYeEZ4WG11TmNJY1ZnbldkXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTZjYWRhMjkzNjNmYzNiNmVmMGYwZGYzNTE2ZDJiNWNfM0w1VUV4eTVvRXRoYUZ2U1RJSVhuUjFKbWpkZm9VZkxfVG9rZW46UG5naWJQaDdpb0MzQVZ4VWJVYWNjeU1Fbk8wXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-2-6-步骤6" tabindex="-1">2.2.6 步骤6 <a class="header-anchor" href="#_2-2-6-步骤6" aria-label="Permalink to &quot;2.2.6 步骤6&quot;">​</a></h4><p><strong>处理器配置</strong>，可以根据您的系统选择。这里大家可以打开自己的任务管理器查看自己的电脑的配置。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=ZWRjNTk4MTU3MjFmNThkYjVhYTI4ODU0OTczMDA4NjlfVTNJOUxrTlBCZXJBMnNySmdTbDJwWVNHVjhEMmgxYlFfVG9rZW46V2p6UmJ0YTF1b0xYTVl4aXRzS2M5RW9EbmxjXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><p>这里以笔者的电脑为例，8核16个处理器，这里虚拟机的<strong>处理器的数量和每个处理器的核数</strong> 相乘不可以超过自己电脑的逻辑处理器数。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTM1YTQwMTJlM2Q5ODlkZTg1YzAwYWNhMTE4ZTllNGNfbTFCajM3S3RyMWp3cFlIMkhHVGtLcWFscXhzVkROTWdfVG9rZW46RVJtNmJ1SUw1b3JYMzJ4bFhleWNEd2hqbjdjXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-2-7-步骤7" tabindex="-1">2.2.7 步骤7 <a class="header-anchor" href="#_2-2-7-步骤7" aria-label="Permalink to &quot;2.2.7 步骤7&quot;">​</a></h4><p>笔者这里设置为4096也就是4个G，大家测试学习的话，其实两个G就够了。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=NjAzMDZlNTU0YWI0Y2MxNzU0YjU5Yzc1YmYzZTU3Y2ZfZlF6TDgwYXBzWlJDaGJmenM3MW9VeXRmOHp2WEJDQ0xfVG9rZW46QnBZVmJxNlYybzFiT0Z4b2VEcWNybzRDblZmXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-2-8-步骤8" tabindex="-1">2.2.8 步骤8 <a class="header-anchor" href="#_2-2-8-步骤8" aria-label="Permalink to &quot;2.2.8 步骤8&quot;">​</a></h4><p>网络类型 → NAT模式（可以使虚拟机与主机使用同一网络）</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=ZTE2YWNkMjQyOWMxZTllN2E3YzMxNDA0NzQxYTcwYjJfRmpKamlnSjFRUVk3N1l3U0Y1UGNaY3hqcnZQZGxOUkJfVG9rZW46QVhuNmJUQkFlb1BrM1N4VmRXdWNuTDh5bmJoXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-2-9-步骤9" tabindex="-1">2.2.9 步骤9 <a class="header-anchor" href="#_2-2-9-步骤9" aria-label="Permalink to &quot;2.2.9 步骤9&quot;">​</a></h4><p>这里默认即可</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=MzdlZGU5YzIzN2QzMzFlYzhlNzZjN2Y1YWRlMzI0ZTVfTzZ4NXRWQkRqWUdFTkh4YTBYTFF2b0dSUDdvb1dkZVVfVG9rZW46UWVxVWI0TEtIb1ZrVU54T1lSZWNUUjVUbm9nXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=NGQ4N2MzNjNlYWE2NDBmNzEwZWNlNmQ5NWVlZjhjM2NfY2I1R2Jxd1ZrVksxTjFyWmdCMFRZUm9UUFF0VGFDR0tfVG9rZW46V3FRU2JYaUY1b09nODB4MWlYS2MxbGIxblNPXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=ODRhMWYwZmUxNTFkYTllMDM3Yjg4YmJmODExMjk4MGRfN1gyZURkeXY3ZThXVkxOQ2x1OGFUWlRBU0JVY3lqTExfVG9rZW46SFhPN2JEZGlybzJaZkt4elh6WWNSTzkybmhiXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-2-10-步骤10" tabindex="-1">2.2.10 步骤10 <a class="header-anchor" href="#_2-2-10-步骤10" aria-label="Permalink to &quot;2.2.10 步骤10&quot;">​</a></h4><p>磁盘容量一般20G就够了，因为笔者后面需要装的东西比较多，这里给了50G，大家适量给就可以了。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=YzYxZDY2ZmViNDcyMmFmYWE1MWU1NmJkZDZmZDMyYzZfUHVkNEszUkJkMnR1bVF6ME1CWjZHcHFJeGRZRFVrc3NfVG9rZW46SHIwQ2IwaGpWb0NhWGl4aUdmWGNWRFV6bmpoXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-2-11-步骤11" tabindex="-1">2.2.11 步骤11 <a class="header-anchor" href="#_2-2-11-步骤11" aria-label="Permalink to &quot;2.2.11 步骤11&quot;">​</a></h4><p>指定磁盘文件（.vmdk）文件</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=NzNiMmMzYTE5ZTdiMDUwMGI2MTlhNDY3ZGVlMWI3YzRfaXMyM2Z6TjBPTURxYjJTVU5IR05pd3dCM1R5cGQ3VHZfVG9rZW46SktTVmJSZHBib3FRUVJ4djdDQ2N0Qm40bnNMXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-2-12-步骤12" tabindex="-1">2.2.12 步骤12 <a class="header-anchor" href="#_2-2-12-步骤12" aria-label="Permalink to &quot;2.2.12 步骤12&quot;">​</a></h4><p>这样虚拟机差不多就准备好了，接下来删除一些不需要的硬件。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=MjVlNGNkY2I3NTVhMTI4N2JmZDE1NTU2ZWE2YTY1ODVfNTRDcUpORm55QzRtT2RzY2lxQjBtd3NGOVhzM2hrSGdfVG9rZW46QjlIZ2IxemZJb2FTNHR4cmx2SWNFd3JnblZnXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-2-13-步骤13" tabindex="-1">2.2.13 步骤13 <a class="header-anchor" href="#_2-2-13-步骤13" aria-label="Permalink to &quot;2.2.13 步骤13&quot;">​</a></h4><p>自定义硬件 → 移除 <strong>USB控制器、声卡、打印机</strong>（这样可以让虚拟器启动的快一点）。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=ZGI3YWY2YmJjOTZmNDk3ZGNlYzIxN2RmM2U5YTAwZGZfSzIwaFFHYmV4QnJ3WDVFbk1wdWYyVUl5SDlsWWw4YkFfVG9rZW46UWgzR2JuSmVab3NOdlN4SGdqMGM4bVU5bmdmXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><p>至此，虚拟机中的硬件已经搭建完成。</p><h3 id="_2-3-镜像安装" tabindex="-1">2.3 镜像安装 <a class="header-anchor" href="#_2-3-镜像安装" aria-label="Permalink to &quot;2.3 镜像安装&quot;">​</a></h3><h4 id="_2-3-1-步骤1" tabindex="-1">2.3.1 步骤1 <a class="header-anchor" href="#_2-3-1-步骤1" aria-label="Permalink to &quot;2.3.1 步骤1&quot;">​</a></h4><p>点击 <strong>CD/DVD（IDE）</strong></p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=YzYzNGEzYTcxMmYyNTdjZTA0MmU0MzljNTliYTY5ZGJfSUs1STluU0J1R3EzQm42WXRjRW5qbmQ1RTJKdlltZWhfVG9rZW46UXczYWJNSG04b3NrZGh4OGptamNvcWg1bkQzXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-3-2-步骤2" tabindex="-1">2.3.2 步骤2 <a class="header-anchor" href="#_2-3-2-步骤2" aria-label="Permalink to &quot;2.3.2 步骤2&quot;">​</a></h4><p>在连接处选择 使用ISO映像文件 选择CentOS 7 iso文件，确定。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=MDlhOTFjNjAzZTZhMzc1MjJiNzJmM2EyZjM4N2JiMzFfajV6RU1WUXhZSTVHNmdCZ3BSc1BsRUdLQ0pRcDBZUXZfVG9rZW46RzJnRWJPNGpmb01HTGN4Z2V6NWMyQ2s2blJnXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-3-3-步骤3" tabindex="-1">2.3.3 步骤3 <a class="header-anchor" href="#_2-3-3-步骤3" aria-label="Permalink to &quot;2.3.3 步骤3&quot;">​</a></h4><p><strong>开始安装虚拟机</strong>，进入CentOS安装界面。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=OTU5NzcwYTUyYThmNGRjNDM1ZTE5NWVhMGUyYzRiYjFfdkp0ekJvdUt0ckV6Y2ViVUc4VWFodHpPY3JObGptZ1JfVG9rZW46S1paaWJVR3k1bzlWQzJ4Z0ZubGNIV2NHbmZ3XzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-3-4-步骤4" tabindex="-1">2.3.4 步骤4 <a class="header-anchor" href="#_2-3-4-步骤4" aria-label="Permalink to &quot;2.3.4 步骤4&quot;">​</a></h4><p>按方向键选择第一项 Install CentOS 7，按回车Enter键</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=MDlmZTA4NDYxZjNkZDg1ZGZmMWVkMWIyMjhlZDQ0M2FfdGhuUG5jU2xJNzJXYU1iUTZPOWVic3RRNldmT0RPZmdfVG9rZW46Wm1WTGJMT1Jqb3ZrQ1Z4TnNJWmN3akp2bkljXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-3-5-步骤5" tabindex="-1">2.3.5 步骤5 <a class="header-anchor" href="#_2-3-5-步骤5" aria-label="Permalink to &quot;2.3.5 步骤5&quot;">​</a></h4><p>CentOS欢迎界面，WELCOME TO CENTOS 7. 设置语言为中文简体。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=YmJhZjgyNDIyZjI4Mjc4ZjM4Y2JkNmZjZDhhNjc5YWVfWnVQNjkzMWxvQ0NVMHhZV29yM3lpRzdubVNVMXU5NTFfVG9rZW46T3NndWJHNUpub3ZUNHB4VWNPYWN5WFFDbkNPXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-3-6-步骤6" tabindex="-1">2.3.6 步骤6 <a class="header-anchor" href="#_2-3-6-步骤6" aria-label="Permalink to &quot;2.3.6 步骤6&quot;">​</a></h4><p>设置时区–DATE &amp; TIME</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=MjE5NjBhZGJiNmY5NjQ3OGExNGYwODEwZDU2MjM5ZGNfeXJST0gzMUw4cFBpcmpJblJvS0p4THhnOFhsdTBmeGNfVG9rZW46SllHa2JKUG1xbzhSVDZ4M2tKTGNVSXdpbmxkXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-3-7-步骤7" tabindex="-1">2.3.7 步骤7 <a class="header-anchor" href="#_2-3-7-步骤7" aria-label="Permalink to &quot;2.3.7 步骤7&quot;">​</a></h4><p><strong>软件选择最小安装即可</strong></p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=NjE3YTkwNmI1MmRmYWQ2YjViODRiMDY2YTI2ZjEyZTNfSUZTOTBIVU1DTTk1VGtDeUxrSmxWdHkxWTFxSElPNHVfVG9rZW46U3BCcGJaVjB4b1hNNm54TzhXZWM2M2JMbmVCXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><p>如果有需要也可以选择GNOME桌面，这里会有一个UI界面。</p><h4 id="_2-3-8-步骤8" tabindex="-1">2.3.8 步骤8 <a class="header-anchor" href="#_2-3-8-步骤8" aria-label="Permalink to &quot;2.3.8 步骤8&quot;">​</a></h4><p>安装位置即进行系统分区</p><p>选中我们在创建虚拟机时候的50G虚拟硬盘，点击我要配置分区</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=OWU0ZjcxZGVmMmY5MjVmMzczOTk3ZjcwZjNkOTU2OWRfVk9mR29XNWJZT0pHN2RqSFBUQzQ3Y0t3QVgySmRVTHhfVG9rZW46WFBRRWIyWVJOb21hbWR4SDRMYWN2SnZGblByXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><p>以下是笔者分区的配置，可以参考一下。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=MjEzZWEyYzlmMGIyZjA0MTkxNmE1MTQyYzgyOTMxNjlfMUp2emF6akZvNHo5c3R2QUFMWDE2dHF3Y3hzVjFkT0tfVG9rZW46V2tEU2I2WHA3bzNWZ3h4U3ZNTmNSbWU0bkhnXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-3-9-步骤9" tabindex="-1">2.3.9 步骤9 <a class="header-anchor" href="#_2-3-9-步骤9" aria-label="Permalink to &quot;2.3.9 步骤9&quot;">​</a></h4><p>打开网络配置以及修改主机名。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=MDg3OTg3YWQyZTMwMTcyZDQwZmU4MWI2NmM4MzkwZjBfWFpqYjUyYm9laWpRVVBjYWlVYW9QMmVjV3p0RnFXcFlfVG9rZW46WVlwbGJHMVdHb2pZUWd4enN0Q2NzYXJmbmNjXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><p><strong>到这里就可以点击开始安装了</strong></p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=MTgyZjUwOTA5ZGM2NjkyMTExZjhlN2M5YmFhMzIwNWRfRmpOTVpxYjVSc3hodmprdm12aHdiekRtMnlzWDl2OHVfVG9rZW46RlZxZWI5RlFFb1pBTmt4NjlvOWN6aklubmZiXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-3-10-步骤10" tabindex="-1">2.3.10 步骤10 <a class="header-anchor" href="#_2-3-10-步骤10" aria-label="Permalink to &quot;2.3.10 步骤10&quot;">​</a></h4><p>配置系统用户</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=MmE5OWU2NWExNWRkNmM0ZWYwOTMwZTE3MDM3ZWFkYjZfNDRCMXg4TU9VZzZxVWNjbHJQUlZPS0xPOU1hVGs0TndfVG9rZW46V2dDemJXU0Nqb3lRQ3Z4OHNxRmNCZzZyblliXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h4 id="_2-3-11-步骤11" tabindex="-1">2.3.11 步骤11 <a class="header-anchor" href="#_2-3-11-步骤11" aria-label="Permalink to &quot;2.3.11 步骤11&quot;">​</a></h4><p>部署完成后，点击重启 重启虚拟机。</p><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=OTllMjhmYTI4NzBmMGM5ZWNmNjg5ZjE1MzM5YTkyNTlfa2lodFNkUmRMMkpGbFFrNlZscll0RUw5MUE2UVo1dDVfVG9rZW46SGtxSmJHYUNSb0k1REZ4alN5emNJdDBYbktkXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><h3 id="_2-4-使用centos遇到的问题" tabindex="-1">2.4 使用CentOS遇到的问题 <a class="header-anchor" href="#_2-4-使用centos遇到的问题" aria-label="Permalink to &quot;2.4 使用CentOS遇到的问题&quot;">​</a></h3><h4 id="_1-ifconfig-命令不起效果-出现-command-not-found-的情况。" tabindex="-1">1. ifconfig 命令不起效果，出现 <strong>command not found</strong> 的情况。 <a class="header-anchor" href="#_1-ifconfig-命令不起效果-出现-command-not-found-的情况。" aria-label="Permalink to &quot;1. ifconfig 命令不起效果，出现 **command not found** 的情况。&quot;">​</a></h4><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=MzA4ODRjNDQwYzY5OWU0NDhjNTA2MmI2OTI4ZTdmOWJfRE1MZW5EZkNKR0J1U3c2Q2RVOXZsYUdPRkZkZGFzZzJfVG9rZW46VDJLZGJWWUI2b2NFTXd4T05RQ2MwRmRlbkRlXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><p>原因：CentOS7 已经不适用<strong>ifconfig</strong>命令了，已经用<strong>ip addr</strong>命令代替。</p><p>解决办法：检入命令<strong>ip addr</strong>。</p><h4 id="_2-vim命令找不到" tabindex="-1">2. vim命令找不到 <a class="header-anchor" href="#_2-vim命令找不到" aria-label="Permalink to &quot;2. vim命令找不到&quot;">​</a></h4><p><img src="https://oawgxwlxb5z.feishu.cn/space/api/box/stream/download/asynccode/?code=MGFiMDBkNDFjNDc3YWFjYTFjNGJlOWQ1OWJlNDQxNGVfZ3UwOGw5Q3o2WE9sdlh5SnhKNU85MHFmcjJCTGw1bHNfVG9rZW46RUZQTGJHRzROb2hySnd4bmc1VWNpeUtvbk5oXzE3NDExNTc3ODY6MTc0MTE2MTM4Nl9WNA" alt=""></p><p>这个版本默认没有安装vim，只有自带的vi，需要vim 自行安装即可</p><div class="language-Bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">Bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">yum</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vim</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -y</span></span></code></pre></div>',138)]))}const M=e(c,[["render",r]]);export{p as __pageData,M as default};
