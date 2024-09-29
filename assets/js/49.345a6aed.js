(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{333:function(s,t,a){"use strict";a.r(t);var e=a(10),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"mysql进阶"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql进阶"}},[s._v("#")]),s._v(" MySQL进阶")]),s._v(" "),t("h2",{attrs:{id:"事务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[s._v("#")]),s._v(" 事务")]),s._v(" "),t("h3",{attrs:{id:"引子"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引子"}},[s._v("#")]),s._v(" 引子")]),s._v(" "),t("p",[s._v("转账操作，中间步骤出错，会导致数据不同步")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" account "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 张三账户-1000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" account "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 模拟程序抛出异常")]),s._v("\n程序执行报错"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 李四账户+1000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" account "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'李四'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("执行结束后，张三账户减了1000，李四账户没有加1000，采用事务的原子性可以解决这个问题")]),s._v(" "),t("h3",{attrs:{id:"事务操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务操作"}},[s._v("#")]),s._v(" 事务操作")]),s._v(" "),t("ul",[t("li",[s._v("查看设置事务提交方式，mysql默认自动提交")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@autocommit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@autocommit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("开启事务（推荐）")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("start")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("begin")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("提交事务")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("回滚事务,(一般在事务代码块中使用)")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rollback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("查询正在执行的事务")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" information_schema"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("INNODB_TRX"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"使用事务解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用事务解决"}},[s._v("#")]),s._v(" 使用事务解决")]),s._v(" "),t("p",[s._v("方式一：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@autocommit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 当前会话设置为手动提交")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@autocommit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" account "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 张三账户-1000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" account "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 模拟程序抛出异常")]),s._v("\n程序执行报错"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 李四账户+1000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" account "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'李四'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 提交事务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 回滚事务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rollback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("方式二：")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@autocommit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@autocommit")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("start")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" account "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 张三账户-1000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" account "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'张三'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n模拟出错"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 李四账户+1000")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("update")]),s._v(" account "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" money "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'李四'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 提交事务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("commit")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 回滚事务")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("rollback")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"事务四大特性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务四大特性"}},[s._v("#")]),s._v(" 事务四大特性")]),s._v(" "),t("ul",[t("li",[s._v("原子性：事务是不可分割的最小操作单元")]),s._v(" "),t("li",[s._v("一致性：事务完成时，必须使所有数据保持一致")]),s._v(" "),t("li",[s._v("隔离性：不同事物同时操作相同的数据，每个事务都有各自的完整数据空间")]),s._v(" "),t("li",[s._v("持久性：事务一旦提交，他对数据库中的数据改变是永久的，并不会被回滚")])]),s._v(" "),t("h3",{attrs:{id:"并发事务问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#并发事务问题"}},[s._v("#")]),s._v(" 并发事务问题")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("脏读（读取未提交数据）：一个事务读到另一个事务还没有提交的数据")])]),s._v(" "),t("li",[t("p",[s._v("不可重复读（多次读取，数据内容不一致）：一个事务先后读取同一条记录，但是两次读取的数据不同。这是由于查询时其他事务修改的提交。")])]),s._v(" "),t("li",[t("p",[s._v("幻读（多次读取，数据总量不一致）：一个事务按条件查询时，没有对应数据行，但是在插入数据时，又发现了这行数据，好像出现了幻影")])]),s._v(" "),t("li",[t("p",[s._v("丢失更新：两个事务同时读取一条记录，A先修改、B再修改，B提交后覆盖了A的提交。")])])]),s._v(" "),t("h3",{attrs:{id:"事物的隔离级别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事物的隔离级别"}},[s._v("#")]),s._v(" 事物的隔离级别")]),s._v(" "),t("p",[s._v("在不同隔离级别下，并发事务问题是否会出现？")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("隔离级别")]),s._v(" "),t("th",[s._v("脏读")]),s._v(" "),t("th",[s._v("不可重复读")]),s._v(" "),t("th",[s._v("幻读")]),s._v(" "),t("th")])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("read uncommitted")]),s._v(" "),t("td",[s._v("✓")]),s._v(" "),t("td",[s._v("✓")]),s._v(" "),t("td",[s._v("✓")]),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("read committed")]),s._v(" "),t("td",[s._v("×")]),s._v(" "),t("td",[s._v("✓")]),s._v(" "),t("td",[s._v("✓")]),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("repeatable read(默认)")]),s._v(" "),t("td",[s._v("×")]),s._v(" "),t("td",[s._v("×")]),s._v(" "),t("td",[s._v("✓")]),s._v(" "),t("td")]),s._v(" "),t("tr",[t("td",[s._v("serializable")]),s._v(" "),t("td",[s._v("×")]),s._v(" "),t("td",[s._v("×")]),s._v(" "),t("td",[s._v("×")]),s._v(" "),t("td")])])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("read uncommitted：性能最高，数据安全性最差（不使用）")])]),s._v(" "),t("li",[t("p",[s._v("read commited：可以解决脏读，(Oracle和Sql Server默认)")])]),s._v(" "),t("li",[t("p",[s._v("repeatable read：可以解决脏读和不可重复读")])]),s._v(" "),t("li",[t("p",[s._v("serializable：可以解决脏读、不可重复读和幻读，相当于表锁")])])]),s._v(" "),t("h3",{attrs:{id:"事务隔离级别的作用范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务隔离级别的作用范围"}},[s._v("#")]),s._v(" 事务隔离级别的作用范围")]),s._v(" "),t("blockquote",[t("p",[s._v("全局级：对所有会话有效")]),s._v(" "),t("p",[s._v("会话级：只对当前会话有效")])]),s._v(" "),t("p",[t("strong",[s._v("查询和设置事务隔离级别：")])]),s._v(" "),t("ol",[t("li",[s._v("查询全局事务隔离级别")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" variables "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%isolation%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@transaction_isolation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("查询会话事务隔离级别")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("session")]),s._v(" variables "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%isolation%'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" @"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("@transaction_isolation")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[s._v("设置全局事务隔离级别")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("global")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("isolation")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("level")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("read")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("committed")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[s._v("设置会话事务隔离级别")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("set")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("session")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("transaction")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("isolation")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("level")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("read")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("committed")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("p",[s._v("黑马P57")])])}),[],!1,null,null,null);t.default=r.exports}}]);