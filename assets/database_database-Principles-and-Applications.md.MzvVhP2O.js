import{_ as i,o as a,c as t,a8 as e}from"./chunks/framework.D0fTRY1a.js";const c=JSON.parse('{"title":"数据库原理及应用","description":"","frontmatter":{"title":"数据库原理及应用","order":2,"category":["数据库"],"tag":["数据库"],"pageview":false,"date":"2023-08-29T00:00:00.000Z","comment":false,"breadcrumb":false},"headers":[],"relativePath":"database/database-Principles-and-Applications.md","filePath":"database/database-Principles-and-Applications.md","lastUpdated":null}'),o={name:"database/database-Principles-and-Applications.md"};function n(p,l,s,r,g,u){return a(),t("div",null,l[0]||(l[0]=[e('<h2 id="_1-引言" tabindex="-1">1. 引言 <a class="header-anchor" href="#_1-引言" aria-label="Permalink to &quot;1.  引言&quot;">​</a></h2><h3 id="_1-1-数据库原理及应用" tabindex="-1">1.1 数据库原理及应用 <a class="header-anchor" href="#_1-1-数据库原理及应用" aria-label="Permalink to &quot;1.1 数据库原理及应用&quot;">​</a></h3><h4 id="_1-1-1-数据库的四个基本概念" tabindex="-1">1.1.1 数据库的四个基本概念 <a class="header-anchor" href="#_1-1-1-数据库的四个基本概念" aria-label="Permalink to &quot;1.1.1 数据库的四个基本概念&quot;">​</a></h4><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517214228601.png" alt="image-20230517214228601" loading="lazy"></p><h5 id="_1-数据" tabindex="-1">1. 数据 <a class="header-anchor" href="#_1-数据" aria-label="Permalink to &quot;1. 数据&quot;">​</a></h5><p>数据简称 <strong>Data</strong></p><ul><li>数据是数据库中存储的基本对象</li><li>数据的定义：描述事物的符号记录</li><li>数据的种类：文本、图形、图像、音频、视频、学生的档案记录、货物的运输情况等</li><li>数据的特点：数据与其语义是不可分的（说明：数据的含义称为数据的语义，数据与其语义是不可分的。）</li><li>数据举例 1： <ul><li>例如 93 是一个数据</li><li>语义1：学生某门课的成绩</li><li>语义2：某人的体重</li><li>语义3：某个年级的学生人数</li><li>语义n：...</li></ul></li><li>数据举例 2： <ul><li>学生档案中的学生记录（李明，男，197205，江苏南京市，计算机系，1990）</li><li>语义：学生姓名、性别、出生年月、籍贯、所在院系、入学时间</li><li>解释：李明是个大学生，1972年5月出生，江苏南京市人，1990年考入计算机系</li></ul></li></ul><h5 id="_2-数据库" tabindex="-1">2. 数据库 <a class="header-anchor" href="#_2-数据库" aria-label="Permalink to &quot;2. 数据库&quot;">​</a></h5><p><strong>DataBase，简称 DB</strong></p><ul><li>数据库的定义：数据库（Database，简称 DB）是长期储存在计算机内、有组织的、可共享的大量数据的集合。（一个大规模集成的数据集合。）</li><li>数据库的基本特征： <ul><li>数据按一定的数据模型组织、描述和储存</li><li>可为各种用户共享</li><li>冗余度较小</li><li>数据独立性较高</li><li>易扩展</li></ul></li><li>数据库作用： <ul><li>一个数据库是对现实生活中一个企业或一个单位在计算机中的建模结果</li><li>实体</li><li>联系（实体间的关系）</li></ul></li></ul><h5 id="_3-数据库管理系统" tabindex="-1">3. 数据库管理系统 <a class="header-anchor" href="#_3-数据库管理系统" aria-label="Permalink to &quot;3. 数据库管理系统&quot;">​</a></h5><p><strong>DataBase Management System，简称 DBMS</strong></p><ul><li>DBMS的定义：是位于用户与操作系统之间的一层数据管理软件。数据库管理系统和操作系统一样是计算机的基础软件，也是一个大型复杂的软件系统。</li><li>DBMS 的用途：数据库管理系统的主要任务就是科学地组织和存储数据、高效地获取和维护数据</li><li>DBMS 的主要功能 <ul><li><strong>数据定义功能</strong><ul><li>提供数据定义语言（DDL）</li><li>定义数据库中的数据对象</li></ul></li><li><strong>数据组织、存储和管理</strong><ul><li>分类组织、存储和管理各种数据</li><li>确定组织数据的文件结构和存取方式</li><li>实现数据之间的联系</li><li>提供多种存取方法提高存取效率</li></ul></li><li><strong>数据操纵功能</strong><ul><li>提供数据操纵语言（DML）</li><li>实现对数据库的基本操作 CRUD (查询、插入、删除和修改)</li></ul></li><li><strong>数据库的事务管理和运行管理</strong><ul><li>数据库在建立、运行和维护时由 DBMS 统一管理和控制，保证事务的正确性</li><li>保证数据的安全性、完整性、多用户对数据的并发使用</li><li>发生故障后的系统恢复</li></ul></li><li>数<strong>据库的建立和维护功能（实用程序）</strong><ul><li>数据库初始数据装载转换</li><li>数据库转储</li><li>介质故障恢复</li><li>数据库的重组织</li><li>性能监视分析等</li></ul></li><li><strong>其它功能</strong><ul><li>DBMS 与网络中其它软件系统的通信</li><li>两个 DBMS 系统的数据转换</li><li>异构数据库之间的互访和互操作</li></ul></li></ul></li></ul><h5 id="_4-数据库系统" tabindex="-1">4. 数据库系统 <a class="header-anchor" href="#_4-数据库系统" aria-label="Permalink to &quot;4. 数据库系统&quot;">​</a></h5><p><strong>Database System，简称 DBS</strong></p><ul><li>数据库系统的定义：在计算机系统中引入数据库后的系统构成数据库系统。</li><li>数据库系统的构成 <ul><li>数据库</li><li>数据库管理系统（及其开发工具）</li><li>应用系统</li><li>数据库管理员 (DBA)：是负责数据库的设计、规划、协调的专职人员。是全面负责建立、维护和管理数据库系统的人员</li></ul></li></ul><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517214832448.png" alt="image-20230517214832448" loading="lazy"></p><p>下面附一张各种人员的数据视图，知道即可：</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517214846304.png" alt="image-20230517214846304" loading="lazy"></p><h4 id="_1-1-2-数据管理技术的产生和发展" tabindex="-1">1.1.2 数据管理技术的产生和发展 <a class="header-anchor" href="#_1-1-2-数据管理技术的产生和发展" aria-label="Permalink to &quot;1.1.2 数据管理技术的产生和发展&quot;">​</a></h4><h5 id="_1-什么是数据管理" tabindex="-1">1. 什么是数据管理 <a class="header-anchor" href="#_1-什么是数据管理" aria-label="Permalink to &quot;1. 什么是数据管理&quot;">​</a></h5><blockquote><p>数据管理是对数据进行分类、组织、编码、存储、检索和维护，也是数据处理的中心问题。</p></blockquote><h5 id="_2-数据管理技术的发展过程" tabindex="-1">2. 数据管理技术的发展过程 <a class="header-anchor" href="#_2-数据管理技术的发展过程" aria-label="Permalink to &quot;2. 数据管理技术的发展过程&quot;">​</a></h5><ul><li>人工管理阶段（20 世纪 40 年代中 —— 50 年代中）</li><li>文件系统阶段（20 世纪 50 年代末 —— 60 年代中）</li><li>数据库系统阶段（20 世纪 60 年代末 —— 现在）</li></ul><h4 id="_1-1-3-数据库系统的特点" tabindex="-1">1.1.3 数据库系统的特点 <a class="header-anchor" href="#_1-1-3-数据库系统的特点" aria-label="Permalink to &quot;1.1.3 数据库系统的特点&quot;">​</a></h4><ul><li><p><strong>数据结构化</strong></p><ul><li>数据库的主要特征之一，也是数据库系统与文件系统的本质区别</li></ul></li><li><p><strong>数据的共享性高，冗余度低，易扩充</strong></p><ul><li>数据共享的好处： <ul><li>减少数据冗余，节约存储空间</li><li>避免数据之间的不相容性与不一致性</li><li>使系统易于扩充</li></ul></li></ul></li><li><p><strong>数据独立性高</strong></p><ul><li>物理独立性：指用户的应用程序与存储在磁盘上的数据库中数据是相互独立的。当数据的物理存储改变了，应用程序不用改变。</li><li>逻辑独立性：指用户的应用程序与数据库的逻辑结构是相互独立的。数据的逻辑结构改变了，用户程序也可以不变。</li><li>数据独立性是由 DBMS 的二级映像功能来保证的</li></ul></li><li><p><strong>数据由 DBMS 统一管理和控制</strong></p><ul><li>DBMS 提供以下几方面的数据控制功能</li><li>数据的安全性（Security）保护：保护数据，以防止不合法的使用造成的数据的泄密和破坏。</li><li>数据的完整性（Integrity）检查：将数据控制在有效的范围内，或保证数据之间满足一定的关系。</li><li>并发（Concurrency）控制：对多用户的并发操作加以控制和协调，防止相互干扰而得到错误的结果。</li><li>数据库恢复（Recovery）：DBMS 必须具有将数据库从错误状态恢复到某一正确状态的功能</li></ul></li></ul><blockquote><p>数据库系统阶段应用程序与数据的对应关系（数据库系统）</p></blockquote><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517215228672.png" alt="image-20230517215228672" loading="lazy"></p><h3 id="_1-2-数据模型" tabindex="-1">1.2 数据模型 <a class="header-anchor" href="#_1-2-数据模型" aria-label="Permalink to &quot;1.2 数据模型&quot;">​</a></h3><p>在数据库中使用<strong>数据模型</strong>这个工具来抽象、表示和处理现实世界中的数据和信息，通俗地来讲，<strong>数据模型就是现实世界的模拟</strong>。</p><p>数据模型应满足三方面要求：</p><ul><li>能比较真实地模拟现实世界</li><li>容易为人所理解</li><li>便于在计算机上实现</li></ul><h4 id="_1-2-1-两类数据模型" tabindex="-1">1.2.1 两类数据模型 <a class="header-anchor" href="#_1-2-1-两类数据模型" aria-label="Permalink to &quot;1.2.1 两类数据模型&quot;">​</a></h4><p>数据模型分为两类（分属两个不同的层次）</p><p>① 概念模型</p><p>概念模型，也称信息模型，它是按用户的观点来对数据和信息建模，用于数据库设计。</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517215434497.png" alt="image-20230517215434497" loading="lazy"></p><p>涉及的概念：</p><ul><li><strong>实体（Entity）</strong>：客观存在并可相互区别的事物，比如一个学生，一门课，学生的一次选课</li><li><strong>属性（Attribute）</strong>：实体所具有的某一特性，比如学生的身高，一个实体可以由若干个属性来刻画。</li><li><strong>码（Key）</strong> ：唯一标识实体的属性集，比如学生的学号</li><li><strong>域（Domain）</strong>：属性的取值范围称为该属性的域。</li><li>实体型（Entity Type）： 实体名 + 属性名，比如 学生（学号，姓名，性别）就是一个实体型</li><li><strong>实体集（Entity Set）</strong>：同一类型的实体的集合，比如全体学生</li><li><strong>联系（Relationship）</strong> ：现实世界中事物内部以及事物之间的联系在信息中反映为实体内部的联系和实体之间的联系。 <ul><li>实体内部的联系通常是指组成实体的各属性之间的联系</li><li>实体之间的联系通常是指不同实体集之间的联系，（有一对一，一对多，多对多等多种类型），实体之间的联系可用 E - R 图 表示一个实例：</li></ul></li></ul><p><strong>用 E - R 图表示某个工厂物资管理的概念模型</strong></p><ul><li><p>实体：</p><ul><li>仓库： 仓库号、面积、电话号码</li><li>零件 ：零件号、名称、规格、单价、描述</li><li>供应商：供应商号、姓名、地址、电话号码、帐号</li><li>项目：项目号、预算、开工日期</li><li>职工：职工号、姓名、年龄、职称</li></ul></li><li><p>完整的 E - R 图</p></li></ul><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517215637678.png" alt="image-20230517215637678" loading="lazy"></p><p>② 逻辑模型和物理模型</p><p>逻辑模型主要包括网状模型、层次模型、关系模型、面向对象模型等，按计算机系统的观点对数据建模，用于 DBMS 实现。</p><p>物理模型是对数据最底层的抽象，描述数据在系统内部的表示方式和存取方法，在磁盘或磁带上的存储方式和存取方法。</p><ul><li><p>层次模型：层次模型用树形结构来表示各类实体以及实体间的联系。满足下面两个条件的基本层次联系的集合为层次模型：</p><ul><li>有且只有一个结点没有双亲结点，这个结点称为根结点</li><li>根以外的其它结点有且只有一个双亲结点</li></ul></li><li><p>网状模型</p><p>满足下面两个条件的基本层次联系的集合为网状模型：</p><ul><li>允许一个以上的结点无双亲</li><li>一个结点可以有多于一个的双亲</li></ul></li><li><p><strong>关系模型</strong>：关系数据库系统采用关系模型作为数据的组织方式</p></li><li><p>面向对象数据模型</p></li><li><p>对象关系数据模</p></li><li><p>半结构化数据模型</p></li></ul><blockquote><p>由于计算机厂商新推出的数据库管理系统几乎都支持关系模型，所以下面重点来说说关系模型！</p></blockquote><h4 id="_1-2-2-关系模型" tabindex="-1">1.2.2 关系模型 <a class="header-anchor" href="#_1-2-2-关系模型" aria-label="Permalink to &quot;1.2.2 关系模型&quot;">​</a></h4><p>关系模型是最重要的一种数据模型。</p><p>在用户观点下，关系模型由一组关系组成，每个关系的数据结构是一张规范化的二维表，它由行（元组）和列（属性）组成。</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517215900890.png" alt="image-20230517215900890" loading="lazy"></p><p>关系模型相关的术语：</p><ul><li><strong>关系（Relation）</strong>：一个关系对应一张表</li><li><strong>元组（Tuple）</strong>：表中的一行即一个元组</li><li>属性（Attribute）：表中的一列即一个属性，给每一个属性起一个名称即属性名</li><li><strong>主码（Key）</strong> ：表中的某个属性组，可以唯一确定一个元组，该属性组就称为主码。比如上表中的学号就就是该关系的主码</li><li>域（Domain）：域是一组具有相同数据类型的值的集合。比如人的年龄是1-120岁，属性的取值范围来自该属性对应的域</li><li><strong>分量</strong>：元组中的一个属性值。</li><li><strong>关系模式</strong>：对关系的描述，一般表示为 关系名（属性名1，属性名2....）。比如学生（学号，姓名，年龄，性别，系，年级）。关系模式必须是规范化的，不允许表中还有表，每个属性都应该是不可分的（即关系的每一个分量必须是一个不可分的数据项）</li></ul><h3 id="_1-3-数据库系统结构" tabindex="-1">1.3 数据库系统结构 <a class="header-anchor" href="#_1-3-数据库系统结构" aria-label="Permalink to &quot;1.3 数据库系统结构&quot;">​</a></h3><ul><li>从<strong>数据库最终用户角度</strong>看（数据库系统外部的体系结构） ，数据库系统的结构分为： <ul><li>单用户结构</li><li>主从式结构</li><li>客户／服务器</li><li>浏览器／应用服务器／数据库服务器多层结构等</li></ul></li><li>从<strong>数据库管理系统角度</strong>看，数据库系统通常采用三级模式结构，是数据库系统内部的系统结构</li></ul><h4 id="_1-3-1-数据库系统模式的概念" tabindex="-1">1.3.1 数据库系统模式的概念 <a class="header-anchor" href="#_1-3-1-数据库系统模式的概念" aria-label="Permalink to &quot;1.3.1 数据库系统模式的概念&quot;">​</a></h4><h5 id="_1-型和值的概念" tabindex="-1">1. 型和值的概念 <a class="header-anchor" href="#_1-型和值的概念" aria-label="Permalink to &quot;1. 型和值的概念&quot;">​</a></h5><ul><li>型（Type）：对某一类数据的结构和属性的说明</li><li>值（Value）：是型的一个具体赋值</li></ul><blockquote><p>举例：</p><p>学生记录型：（学号，姓名，性别，系别，年龄，籍贯）</p><p>一个记录值：（900201，李明，男，计算机，22，江苏</p></blockquote><h5 id="_2-模式-schema" tabindex="-1">2. 模式（Schema） <a class="header-anchor" href="#_2-模式-schema" aria-label="Permalink to &quot;2. 模式（Schema）&quot;">​</a></h5><ul><li>数据库逻辑结构和特征的描述</li><li>是型的描述</li><li>反映的是数据的结构及其联系</li><li>模式是相对稳定的</li></ul><h5 id="_3-实例-instance" tabindex="-1">3. 实例（Instance） <a class="header-anchor" href="#_3-实例-instance" aria-label="Permalink to &quot;3. 实例（Instance）&quot;">​</a></h5><ul><li>模式的一个具体值</li><li>反映数据库某一时刻的状态</li><li>同一个模式可以有很多实例</li><li>实例随数据库中的数据的更新而变动</li></ul><h4 id="_1-3-2-数据库系统的三级模式结构" tabindex="-1">1.3.2 数据库系统的三级模式结构 <a class="header-anchor" href="#_1-3-2-数据库系统的三级模式结构" aria-label="Permalink to &quot;1.3.2  数据库系统的三级模式结构&quot;">​</a></h4><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517220137995.png" alt="image-20230517220137995" loading="lazy"></p><p>① 模式（Schema）</p><p>模式（也称逻辑模式）：数据库中全体数据的逻辑结构和特征的描述，是所有用户的公共数据视图，综合了所有用户的需求</p><p>注：一个数据库只有一个模式，模式的地位是数据库系统模式结构的中间层，与数据的物理存储细节和硬件环境无关，与具体的应用程序、开发工具及高级程序设计语言无关</p><p>② 外模式（External Schema）</p><p>外模式（也称子模式或用户模式）：是数据库用户（包括应用程序员和最终用户）使用的局部数据的逻辑结构和特征的描述，是数据库用户的数据视图，是与某一应用有关的数据的逻辑表示</p><p>注：外模式的地位：介于模式与应用之间</p><p>模式与外模式的关系：一对多</p><ul><li>外模式通常是模式的子集</li><li><strong>一个数据库可以有多个外模式</strong>。反映了不同的用户的应用需求、看待数据的方式、对数据保密的要求</li><li>对模式中同一数据，在外模式中的结构、类型、长度、保密级别等都可以不同</li></ul><p>外模式与应用的关系：一对多</p><ul><li>同一外模式也可以为某一用户的多个应用系统所使用</li><li>但一个应用程序只能使用一个外模式</li></ul><blockquote><p>外模式是保证数据库安全的一个有力措施。每个用户只能看见和访问对应的外模式中的数据，数据库的其余数据是不可见的。</p></blockquote><p>③ 内模式（Internal Schema）</p><p>内模式（也称存储模式）：是数据物理结构和存储方式的描述，是数据在数据库内部的表示方式。</p><p>注：一个数据库只有一个内模式</p><p>!&gt; 数据在数据库内部的表示方式:</p><ul><li>记录的存储方式（顺序存储，按照B树结构存储， 按hash方法存储）</li><li>索引的组织方式</li><li>数据是否压缩存储</li><li>数据是否加密</li><li>数据存储记录结构的规定</li></ul><blockquote><p>最后再来回顾一下数据库系统的三级模式结构：</p></blockquote><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517220329725.png" alt="image-20230517220329725" loading="lazy"></p><h4 id="_1-3-3-数据库的二级映像功能与数据独立性" tabindex="-1">1.3.3 数据库的二级映像功能与数据独立性 <a class="header-anchor" href="#_1-3-3-数据库的二级映像功能与数据独立性" aria-label="Permalink to &quot;1.3.3 数据库的二级映像功能与数据独立性&quot;">​</a></h4><ul><li>三级模式是对数据的三个抽象级别</li><li>二级映象在 DBMS 内部实现这三个抽象层次的联系和转换 <ul><li>外模式／模式映像</li><li>模式／内模式映像</li></ul></li></ul><h2 id="_2-关系数据库" tabindex="-1">2. 关系数据库 <a class="header-anchor" href="#_2-关系数据库" aria-label="Permalink to &quot;2. 关系数据库&quot;">​</a></h2><h3 id="_2-1-关系模型的基本术语及形式化定义" tabindex="-1">2.1 关系模型的基本术语及形式化定义 <a class="header-anchor" href="#_2-1-关系模型的基本术语及形式化定义" aria-label="Permalink to &quot;2.1 关系模型的基本术语及形式化定义&quot;">​</a></h3><ul><li>数据结构 —— 静态特性</li><li>数据操作 —— 动态特性</li><li>数据的约束条件</li></ul><blockquote><p>数据结构</p></blockquote><ol><li>数据结构：描述数据库的组成对象，以及对象之间的联系</li><li>两类对象：</li></ol><ul><li>与数据类型、内容、性质有关的对象</li><li>与数据之间联系有关的对象</li></ul><ol start="3"><li>数据结构是对系统静态特性的描述</li></ol><blockquote><p>数据操作</p></blockquote><ol><li>数据操作：对数据库中各种对象（型）的实例（值）允许执行的操作及有关的操作规则</li><li>数据操作的类型 <ul><li>检索</li><li>更新（包括插入、删除、修改）</li></ul></li><li>数据模型对操作的定义 <ul><li>操作的确切含义</li><li>操作符号</li><li>操作规则（如优先级）</li><li>实现操作的语言</li></ul></li><li>数据操作是对系统动态特性的描述。</li></ol><blockquote><p>数据的完整性约束条件</p></blockquote><ol><li>数据的完整性约束条件 <ul><li>一组完整性规则的集合。</li><li>完整性规则：是给定的数据模型中数据及其联系所具有的制约和储存规则、</li><li>用以限定符合数据模型的数据库状态以及状态的变化，来保证数据的正确、有效、相容</li></ul></li><li>数据模型对约束条件的定义 <ul><li>反映和规定本数据模型必须遵守的基本的通用的完整性约束条件。例如在关系模型中，任何关系必须满足实体完整性和参照完整性两个条件。</li><li>提供定义完整性约束条件的机制，以反映具体应用所涉及的数据必须遵守的特定的语义约束条件。</li></ul></li></ol><h4 id="_2-1-1-基本术语" tabindex="-1">2.1.1 基本术语 <a class="header-anchor" href="#_2-1-1-基本术语" aria-label="Permalink to &quot;2.1.1 基本术语&quot;">​</a></h4><blockquote><p>1 域 Domain</p></blockquote><p>一组具有相同数据类型的值的集合。</p><p>比如整数、字符串等。</p><blockquote><p>2 笛卡尔积 Cartesian Product</p></blockquote><p>笛卡尔积是域上的一种集合运算</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517220804993.png" alt="image-20230517220804993" loading="lazy"></p><p>定义有点晦涩，看下面一个例子就懂了</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517220820901.png" alt="image-20230517220820901" loading="lazy"></p><blockquote><p>3 关系 Relation</p></blockquote><p>笛卡尔积 D1×D2×…×Dn 的一个子集叫作域 D1, D2, …, Dn 上的一个关系。</p><p>学生（学号，姓名，年级）就是一个关系</p><p>如果只有 1 个属性，则称为<strong>单元关系/一元关系</strong></p><p>如果有 2 个属性，则称为<strong>二元关系</strong></p><blockquote><p>4 主码 Primary Key</p></blockquote><p>有一个或一组这样的属性，它的值能确定该关系中其他所有属性的值</p><blockquote><p>5 候选码 Candidate Key</p></blockquote><p>能唯一标识元组的属性(组)，其中选择其一作为主码。</p><blockquote><p>6 主属性 Prime Attribute</p></blockquote><p>候选码中的诸属性。</p><blockquote><p>7 非主属性 Non-Key Attribute</p></blockquote><p>不出现在任何候选码中的属性。</p><blockquote><p>8 关系的型与值</p></blockquote><p>关系(表)的型：关系的结构(字段名、字段个数、域等)</p><p>关系(表)的值：关系中具体的元组，也称关系的实例(Instance)</p><h4 id="_2-1-2-关系的概念及性质" tabindex="-1">2.1.2 关系的概念及性质 <a class="header-anchor" href="#_2-1-2-关系的概念及性质" aria-label="Permalink to &quot;2.1.2 关系的概念及性质&quot;">​</a></h4><p>关系 Relation：笛卡尔积 D1×D2×…×Dn 的一个子集叫作域 D1, D2, …, Dn 上的一个关系。</p><p>学生（学号，姓名，年级）就是一个关系</p><p>如果只有 1 个属性，则称为<strong>单元关系/一元关系</strong></p><p>如果有 2 个属性，则称为<strong>二元关系</strong></p><h4 id="_2-1-3-关系模式" tabindex="-1">2.1.3 关系模式 <a class="header-anchor" href="#_2-1-3-关系模式" aria-label="Permalink to &quot;2.1.3 关系模式&quot;">​</a></h4><p>!&gt; 关系数据库中，关系模式是型，关系是值 。</p><blockquote><p>1 什么是关系模式</p></blockquote><ul><li>关系模式（Relation Schema）是型</li><li>关系是值</li><li>关系模式是对关系的描述 <ul><li>元组集合的结构 <ul><li>属性构成</li><li>属性来自的域</li><li>属性与域之间的映象关系</li></ul></li><li>元组语义以及完整性约束条件</li><li>属性间的数据依赖关系集合</li></ul></li></ul><blockquote><p>2 定义关系模式</p></blockquote><ul><li>关系的描述称为关系模式。</li><li>关系模式可以形式化地表示为：R（U，D，dom，F）</li></ul><table tabindex="0"><thead><tr><th style="text-align:left;">说明：</th><th style="text-align:left;"></th></tr></thead><tbody><tr><td style="text-align:left;">R</td><td style="text-align:left;">关系名</td></tr><tr><td style="text-align:left;">U</td><td style="text-align:left;">组成该关系的属性名集合</td></tr><tr><td style="text-align:left;">D</td><td style="text-align:left;">属性组 U 中属性所来自的域</td></tr><tr><td style="text-align:left;">dom</td><td style="text-align:left;">属性向域的映象集合</td></tr><tr><td style="text-align:left;">F</td><td style="text-align:left;">属性间的数据依赖关系集合</td></tr></tbody></table><ul><li>关系模式通常可以简记为：R (U) 或 R (A1，A2，…，An) <ul><li>R ——关系名</li><li>A1，A2，…，An ——属性名</li></ul></li></ul><p>!&gt; 注：域名及属性向域的映象常常直接说明为属性的类型、长度</p><blockquote><p>3 关系模式与关系</p></blockquote><ul><li>关系模式 <ul><li>对关系的描述</li><li>静态的、稳定的</li></ul></li><li>关系 <ul><li>关系模式在某一时刻的状态或内容</li><li>动态的、随时间不断变化的</li></ul></li><li>关系模式和关系往往统称为关系，通过上下文加以区别</li></ul><h4 id="_2-1-4-关系数据库" tabindex="-1">2.1.4 关系数据库 <a class="header-anchor" href="#_2-1-4-关系数据库" aria-label="Permalink to &quot;2.1.4 关系数据库&quot;">​</a></h4><p>关系模型由关系数据结构、关系操作集合和关系完整性约束三部分组成。</p><p>（1）单一的数据结构—关系</p><p>关系模型的数据结构非常单一。在关系模型中，现实世界的实体以及实体间的各种联系均用关系来表示。在用户看来，关系模型中数据的逻辑结构是一张二维表。</p><p>（2）关系操作</p><p>关系模型中常用的关系操作包括：选择（Select）、投影（Project）、连接（Join）、除（Divide）、并（Union）、交(Intersection）、差（Difference）等和查询（Query）操作和增加（Insert）、删除（Delete）、修改（Update）操作两大部分。</p><p>（3）关系的三类完整牲约束</p><p>关系模型允许定义三类完整性约束：实体完整性、参照完整性和用户定义的完整性。</p><h3 id="_2-2-关系的完整性" tabindex="-1">2.2 关系的完整性 <a class="header-anchor" href="#_2-2-关系的完整性" aria-label="Permalink to &quot;2.2 关系的完整性&quot;">​</a></h3><p>关系模型中可以有三类完整性约束：实体完整性、参照完整性和用户定义完整性。</p><p>其中实体完整性和参照完整性是关系模型必须满足的完整性约束条件，被称作是关系的两个不变性，应该由关系系统自动支持。</p><p>关系模型的完整性规则是对关系的某种约束条件。任何关系在任何时刻都要满足这些语义约束</p><ul><li>实体完整性</li><li>参照完整性</li><li>用户定义完整性</li></ul><h4 id="_2-2-1-实体完整性" tabindex="-1">2.2.1 实体完整性 <a class="header-anchor" href="#_2-2-1-实体完整性" aria-label="Permalink to &quot;2.2.1 实体完整性&quot;">​</a></h4><blockquote><p>Entity Integrity</p></blockquote><p>关系数据库中的每个元组应该是可区分的、唯一的。这样的约束条件用实体完整性来保证</p><p>实体完整性规则：每个关系都应有至少一个主属性，且主属性不能为空值</p><p>例如：选修（学号，课程号，成绩）关系中，学号和课程号不能为空值</p><p>!&gt; 实体完整性规则规定基本关系的所有主属性都不能取空值，而不仅是主码整体不能取空值。</p><h4 id="_2-2-2-参照完整性" tabindex="-1">2.2.2 参照完整性 <a class="header-anchor" href="#_2-2-2-参照完整性" aria-label="Permalink to &quot;2.2.2 参照完整性&quot;">​</a></h4><blockquote><p>Referential Integrity</p></blockquote><p>**参照完整性规则：**若属性 F 是基本关系R的外码，它与基本关系 S 的主码 Ks 相对应，则对于 R 中每个元组在 F 上的值必须为：</p><ul><li>或者取空值</li><li>或者等于 S 中某个元组的主码值</li></ul><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221310947.png" alt="image-20230517221310947" loading="lazy"></p><h4 id="_2-2-3-用户定义完整性" tabindex="-1">2.2.3 用户定义完整性 <a class="header-anchor" href="#_2-2-3-用户定义完整性" aria-label="Permalink to &quot;2.2.3 用户定义完整性&quot;">​</a></h4><blockquote><p>User-defined Integrity</p></blockquote><p>任何关系数据库系统都应支持实体完整性和参照完整性。除此之外，用户还可以自定义完整性约束。</p><p>用户定义的完整性是针对某一具体关系数据库的约束条件，反映某一具体应用所涉及的数据必须满足的语义要求。</p><p>例：选修（学号，课程号，成绩）成绩的取值范围在 0~100 之间</p><p>关系模型应提供定义和检验这类完整性的机制，以便用统一的系统的方法处理它们，而不要由应用程序承担这一功能。</p><h3 id="_2-3-关系代数" tabindex="-1">2.3 关系代数 <a class="header-anchor" href="#_2-3-关系代数" aria-label="Permalink to &quot;2.3 关系代数&quot;">​</a></h3><p>关系代数是一种抽象的查询语言，是关系数据操纵语言的一种传统表达方式，它是用对关系的运算来表达查询的。</p><p>关系代数的运算对象是关系，运算结果亦是关系</p><p>关系代数用到的运算符包括两类：集合运算符和专门的关系运算符</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221352192.png" alt="image-20230517221352192" loading="lazy"></p><h4 id="_2-3-1-传统的集合运算" tabindex="-1">2.3.1 传统的集合运算 <a class="header-anchor" href="#_2-3-1-传统的集合运算" aria-label="Permalink to &quot;2.3.1 传统的集合运算&quot;">​</a></h4><p>传统的集合运算是二目运算，包括并、差、交、笛卡尔积 4 种运算</p><p>① 并 Union</p><p>关系 R 与关系 S 的并记作：<code>R ∪ S = {t|t∈R ∨ t∈S}</code></p><p>其结果仍为 n 目关系，由属于 R 或属于 S 的元组组成。</p><p>例图：</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221420037.png" alt="image-20230517221420037" loading="lazy"></p><p>② 差 Difference</p><p>系R与关系S的差记作：<code>R - S = {t|t∈R ∧ tS}</code></p><p>其结果关系仍为 n 目关系，由属于 R 而不属于 S 的所有元组组成。</p><p>例图：</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221442572.png" alt="image-20230517221442572" loading="lazy"></p><p>③ 交 Intersection</p><p>关系 R 与关系 S 的交记作：<code>R ∩ S = {t|t∈R ∧ t∈S}</code></p><p>其结果关系仍为 n 目关系，由既属于 R 又属于 S 的元组组成。关系的交可以用差来表示，即 <code>R ∩ S = R-(R-S)</code></p><p>例图：</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221517689.png" alt="image-20230517221517689" loading="lazy"></p><p>④笛卡尔积 Cartesian Product</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221534248.png" alt="image-20230517221534248" loading="lazy"></p><p>例图：</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221551547.png" alt="image-20230517221551547" loading="lazy"></p><h4 id="_2-3-2-专门的关系运算" tabindex="-1">2.3.2 专门的关系运算 <a class="header-anchor" href="#_2-3-2-专门的关系运算" aria-label="Permalink to &quot;2.3.2 专门的关系运算&quot;">​</a></h4><p>专门的关系运算包括选择、投影、连接、除运算等</p><p>① 选择 selection</p><p><strong>选择元组</strong></p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221616427.png" alt="image-20230517221616427" loading="lazy"></p><p>**示例 1：**查询学生表 Student 中年龄小于 20 岁的学生的所有信息</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> σ age&lt;20 (Student)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>示例 2：</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221634135.png" alt="image-20230517221634135" loading="lazy"></p><p>示例 3：</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221647884.png" alt="image-20230517221647884" loading="lazy"></p><p>② 投影 projection</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221658819.png" alt="image-20230517221658819" loading="lazy"></p><p>投影操作主要是从列的角度进行运算，投影之后不仅取消了原关系中的某些列，而且还可能取消某些元组（避免重复行）</p><p><strong>选择列</strong></p><p>⚠ 注意：投影操作会去除列中的重复行</p><p>**示例：**查询学生表Student中都有哪些系</p><div class="language-sql vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Ⅱ Sdept (Student)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221747947.png" alt="image-20230517221747947" loading="lazy"></p><p>③ 连接 join</p><p>连接也称 θ 连接。从两个关系的笛卡尔积中选取属性间满足一定条件的元组</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221801080.png" alt="image-20230517221801080" loading="lazy"></p><p>连接运算中有两种常用连接：</p><ul><li><strong>等值连接</strong>：θ 为 = 的连接运算称为等值连接。他是从关系 R 与 S 的笛卡尔积中选取 A、B 属性值相等的那些元组</li></ul><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221812243.png" alt="image-20230517221812243" loading="lazy"></p><ul><li><strong>自然连接</strong>：自然连接是一种特殊的等值连接。它要求两个关系中进行比较的分量必须是同名的属性组，并且在结果中把重复的属性列去掉</li></ul><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221823262.png" alt="image-20230517221823262" loading="lazy"></p><p><strong>示例：</strong></p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221835766.png" alt="image-20230517221835766" loading="lazy"></p><p><strong>在做自然连接的时候</strong>，两个关系中的某些元组可能会被抛弃，这些被舍弃的元组就称为悬浮元组。</p><ul><li>如果要把悬浮元组也留在结果中，而在其他属性上填NULL，那么这种连接就叫做外连接 outer join</li><li>左外连接 left join：只保留左表的悬浮元组</li><li>右外连接 right join：只保留右表的悬浮元组</li></ul><p>④ 除运算</p><blockquote><p>象集的概念</p></blockquote><p>举例：</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221928930.png" alt="image-20230517221928930" loading="lazy"></p><blockquote><p>给除运算下定义：</p></blockquote><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221939223.png" alt="image-20230517221939223" loading="lazy"></p><p><code>R ÷ S = T</code> 表示 T 包含所有在 R 但不在 S 中的属性及其值，<strong>且 T 的元组与 S 的元组的 所有组合 都在 R中</strong></p><p>**示例：**可以理解为在 R 中查找 B、C 属性和 S 中的 B、C 属性相同的，A 属性的值</p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517221956774.png" alt="image-20230517221956774" loading="lazy"></p><ul><li><p>T 中包含所有在 R 但不在 S 中的属性及其值</p><p>A在R中而不在S中，所以保留A属性，去掉 B、C、D三个属性</p></li><li><p>且 T 的元组和 S 的元组的所有组合都在 R 中</p><p>a1: a1 b1 c2 / a1 b2 c1 / a1 b2 c3 都在 R中</p><p>a2 : a2 b1 c2 不在 R 中 PASS!</p><p>a3：a3 b1 c2 不在 R 中 PASS!</p><p>a4：a4 b1 c2 不在 R 中 PASS！</p></li></ul><h4 id="_2-3-3-关系代数习题" tabindex="-1">2.3.3 关系代数习题 <a class="header-anchor" href="#_2-3-3-关系代数习题" aria-label="Permalink to &quot;2.3.3 关系代数习题&quot;">​</a></h4><p><strong>① 设有如下四个表：S（供应商表）P（零件表）J（工程项目表）SPJ（供应情况表）</strong></p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517222109219.png" alt="image-20230517222109219" loading="lazy"></p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517222120601.png" alt="image-20230517222120601" loading="lazy"></p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517222134242.png" alt="image-20230517222134242" loading="lazy"></p><p><strong>② 设有如图所示的关系S、SC 和 C, 试用关系代数表达式表示下列查询语句:</strong></p><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517222147455.png" alt="image-20230517222147455" loading="lazy"></p><ul><li><p>检索”程军”老师所授课的课程号(C#)和课程名(CNAME)</p><p>ⅡC#,CNAME (σ TEACHER = &#39;程军&#39;(C) )</p></li><li><p>检索年龄大于21的男学生学号(S#)和姓名(SNAME)</p><p>ⅡS#,SNAME (σ AGE &gt; &#39;21&#39; ∧ SEX = &#39;男&#39;(S) )</p></li><li><p>检索至少选修”程军”老师所授全部课程的学生姓名(SNAME)</p><p>关键字：至少 —— 用除法</p><p>ⅡSNAME ( ( ⅡS#,C#(SC) ÷ ⅡC#(σ TEACHER = &#39;程军&#39;(C)) ) ⚮ S )</p></li><li><p>检索”李强”同学不学课程的课程号(C#)</p><p><strong>关键字：不 —— 用减法</strong></p><p>ⅡC#(C) - ⅡC#( σSNAME = &#39;李强&#39;(S) ⚮ SC )</p></li><li><p>检索全部学生都选修的课程的课程号(C#)和课程名(CNAME)</p><p>ⅡC#,CNAME(ⅡS#,C#(SC) ÷ ⅡS#(S) ⚮ C )</p></li><li><p>检索选修课程包含”程军”老师所授课程之一的学生学号(S#)</p><p>ⅡS#(σTEACHER = &#39;程军&#39;(C) ⚮ SC)</p></li><li><p>检索选修课程号为k1和k5的学生学号(S#)</p><p>ⅡS#,C#(SC) ÷ ⅡC#(σ C#=k1 ∨ C# = k2(C))</p></li><li><p>检索选修全部课程的学生姓名(SNAME)</p><p><strong>关键字：全部 —— 用除法</strong></p><p>ⅡSNAME( ( ⅡS#,C#(SC) ÷ ⅡC#(C) ) ⚮ S)</p></li><li><p>检索选修课程包含学号为2的学生所选修的全部课程的学生学号(S#)</p><p>ⅡS#,C#(SC) ÷ ⅡC#(σ S# = 2(SC) )</p></li><li><p>所有学号, 课程号 ÷ 学号为2的学生选修的课程号</p></li><li><p>检索选修课程名为&#39;C语言&#39;的学生学号(S#)和姓名(SNAME)</p><p>ⅡS#,SNAME(ⅡS#( SC ⚮ (σCNAME = &#39;C语言&#39;(C)) ) ⚮ S)</p></li><li><p>检索没有一门课程成绩不及格的学生学号、姓名</p><p>ⅡS#,SNAME( (ⅡS#(S) - ⅡS#(σ GRADE &lt; 60(SC) ) ⚮ S )</p></li></ul><h2 id="_3-关系数据库标准语言-sql" tabindex="-1">3. 关系数据库标准语言 SQL <a class="header-anchor" href="#_3-关系数据库标准语言-sql" aria-label="Permalink to &quot;3. 关系数据库标准语言 SQL&quot;">​</a></h2><h3 id="_3-1-sql-概述" tabindex="-1">3.1 SQL 概述 <a class="header-anchor" href="#_3-1-sql-概述" aria-label="Permalink to &quot;3.1 SQL 概述&quot;">​</a></h3><blockquote><p>SQL（Structured Query Language）：结构化查询语言</p></blockquote><p>大部分 DBMS 产品都支持 SQL，成为操作数据库的标准语言</p><h4 id="_3-1-1-sql-数据库的体系结构" tabindex="-1">3.1.1 SQL 数据库的体系结构 <a class="header-anchor" href="#_3-1-1-sql-数据库的体系结构" aria-label="Permalink to &quot;3.1.1 SQL 数据库的体系结构&quot;">​</a></h4><blockquote><p>SQL 语言支持的关系数据库的三级模式结构</p></blockquote><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517222450869.png" alt="image-20230517222450869" loading="lazy"></p><p>说明：</p><ul><li>用户可以用 SQL 语言对视图（View）和基本表（Base Table）进行查询等操作，在用户观点里，视图和表一样，都是关系。</li><li>视图是从一个或多个基本表中导出的表，本身不存储在数据库中，只有其定义，可以将其理解为一个虚表。</li><li>基本表是本身独立存在的表，一个表可以带若干索引，存储文件及索引组成了关系数据库的内模式。</li></ul><h4 id="_3-1-2-sql-的功能" tabindex="-1">3.1.2 SQL 的功能 <a class="header-anchor" href="#_3-1-2-sql-的功能" aria-label="Permalink to &quot;3.1.2 SQL 的功能&quot;">​</a></h4><ol><li><p>数据定义（DDL）</p><ul><li>定义、删除模式</li><li>定义、删除、修改关系模式（基本表）</li><li>定义、删除视图（View）</li><li>定义、删除索引（Index）</li></ul></li><li><p>数据操纵（DML）</p><ul><li>数据查询</li><li>数据增、删、改</li></ul></li><li><p>数据控制（DCL）</p><ul><li>用户访问权限的授予、收回</li></ul></li></ol><h4 id="_3-1-3-sql-的特点" tabindex="-1">3.1.3 SQL 的特点 <a class="header-anchor" href="#_3-1-3-sql-的特点" aria-label="Permalink to &quot;3.1.3 SQL 的特点&quot;">​</a></h4><ol><li><p>高度非过程化的语言</p><p>用户只需提出“干什么”，至于“怎么干”由 DBMS 解决；用户只需要在查询语句中提出需要什么，DBMS即可按路径存取，并把结果返回给用户。</p></li><li><p>面向集合的操作方式</p><p>每一个 SQL 的操作对象是一个或多个关 系，操作的结果也是一个关系。</p></li><li><p>同一种语法结构，两种使用方式</p><p>即可独立使用，又可嵌入到 宿主语言中使用，具有自主型和宿主型两种特点。</p></li><li><p>具有查询、操作、定义和控制四种语言一体化的特点</p><p>它只向用户提供一种语言，但该语言具有上述多种功能，且每种操作只需一种操作符。</p></li><li><p>语言简洁、易学易用：核心功能只有 9 个动词，语法简单， 接近英语。</p><table tabindex="0"><thead><tr><th style="text-align:left;">SQL 功能</th><th style="text-align:left;">动词</th></tr></thead><tbody><tr><td style="text-align:left;">数据库查询</td><td style="text-align:left;">SELECT</td></tr><tr><td style="text-align:left;">数据定义</td><td style="text-align:left;">CREATE，DROP ，ALTER</td></tr><tr><td style="text-align:left;">数据操纵</td><td style="text-align:left;">INSERT，UPDATE，DELETE</td></tr><tr><td style="text-align:left;">数据控制</td><td style="text-align:left;">GRANT，REVOKE</td></tr></tbody></table></li></ol><h3 id="_3-2-sql-基本语法" tabindex="-1">3.2 SQL 基本语法 <a class="header-anchor" href="#_3-2-sql-基本语法" aria-label="Permalink to &quot;3.2 SQL 基本语法&quot;">​</a></h3><h4 id="_3-2-1-数据类型" tabindex="-1">3.2.1 数据类型 <a class="header-anchor" href="#_3-2-1-数据类型" aria-label="Permalink to &quot;3.2.1 数据类型&quot;">​</a></h4><blockquote><p>SQL 语言支持的主要数据类型有：</p></blockquote><p><img src="https://gaoziman.oss-cn-hangzhou.aliyuncs.com/img/image-20230517222814376.png" alt="image-20230517222814376" loading="lazy"></p><h4 id="_3-2-2-函数" tabindex="-1">3.2.2 函数 <a class="header-anchor" href="#_3-2-2-函数" aria-label="Permalink to &quot;3.2.2 函数&quot;">​</a></h4><ul><li>数字函数：ABS(X), SQRT(X), RAND(X), LOG(X), …、</li><li>字符函数：LENGTH(X), LOWER(X), UPPER(X), SUBSTRING(expression, start, length)…</li><li>分组函数：COUNT(＊), MAX(X), MIN(X), AVG(X), SUM(X)</li></ul><h4 id="_3-2-3-运算符" tabindex="-1">3.2.3 运算符 <a class="header-anchor" href="#_3-2-3-运算符" aria-label="Permalink to &quot;3.2.3 运算符&quot;">​</a></h4><ul><li>数字函数：ABS(X), SQRT(X), RAND(X), LOG(X), …</li><li>字符函数：LENGTH(X), LOWER(X), UPPER(X), SUBSTRING(expression, start, length)</li><li>分组函数：COUNT(＊), MAX(X), MIN(X), AVG(X), SUM(X)</li></ul><h4 id="_3-2-4-sql-语句格式符号" tabindex="-1">3.2.4 SQL 语句格式符号 <a class="header-anchor" href="#_3-2-4-sql-语句格式符号" aria-label="Permalink to &quot;3.2.4 SQL 语句格式符号&quot;">​</a></h4><ul><li>大括号 { }：大括号中的内容为必选参数，其中可有多个选项，各选项之间用竖线分隔，用户必须选择其中的一项。</li><li>方括号 [ ]：方括号中的内容为可选项，用户根据需要选用。</li><li>竖线 | ：表示参数之间‘或’的关系。</li><li>省略号 “…”：表示重复前面的语法单元。</li></ul><h3 id="_3-3-数据定义" tabindex="-1">3.3 数据定义 <a class="header-anchor" href="#_3-3-数据定义" aria-label="Permalink to &quot;3.3 数据定义&quot;">​</a></h3><blockquote><p>DDL，Data Definition Language</p></blockquote><p>关系数据库系统支持三级模式结构，其模式，外模式，内模式中的基本对象有模式、表、视图和索引，所以 SQL 的数据定义功能包括模式定义、表定义、视图和索引的定义</p><h2 id="_4-参考资料" tabindex="-1">4. 参考资料 <a class="header-anchor" href="#_4-参考资料" aria-label="Permalink to &quot;4. 参考资料&quot;">​</a></h2><p>[1] 东南大学 - 徐立臻 - 数据库原理及应用（<a href="https://www.bilibili.com/video/BV1ux411G7Bs" target="_blank" rel="noreferrer">🌱 视频学习入口</a>）</p><p>[2] 小牛肉的 wiki（<a href="https://veal98.github.io/CS-Wiki/#/README?id=%F0%9F%93%98-%E6%95%B0%E6%8D%AE%E5%BA%93" target="_blank" rel="noreferrer">🌱 链接地址</a>）</p>',271)]))}const d=i(o,[["render",n]]);export{c as __pageData,d as default};
