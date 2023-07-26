(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{290:function(v,_,t){"use strict";t.r(_);var a=t(10),l=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"http面试题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http面试题"}},[v._v("#")]),v._v(" HTTP面试题")]),v._v(" "),_("h3",{attrs:{id:"html语义化"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#html语义化"}},[v._v("#")]),v._v(" HTML语义化")]),v._v(" "),_("p",[v._v("HTML语义化：更容易读懂、没有CSS样式的情况，也能呈现很好的内容结构、代码结构")]),v._v(" "),_("h3",{attrs:{id:"script标签的defer和async"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#script标签的defer和async"}},[v._v("#")]),v._v(" script标签的defer和async")]),v._v(" "),_("p",[v._v("script标签会"),_("strong",[v._v("阻碍HTML解析")]),v._v("，下载好脚本并执行完才会继续解析HTML")]),v._v(" "),_("ul",[_("li",[v._v("async：异步下载，下载成功后"),_("strong",[v._v("立即执行")]),v._v("，阻断HTML的解析")]),v._v(" "),_("li",[v._v("defer：完全不会阻碍HTML的解析，"),_("strong",[v._v("解析完成后")]),v._v("再按照顺序执行脚本")])]),v._v(" "),_("h3",{attrs:{id:"浏览器输入url到请求返回发生了什么"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器输入url到请求返回发生了什么"}},[v._v("#")]),v._v(" 浏览器输入URL到请求返回发生了什么？")]),v._v(" "),_("ul",[_("li",[v._v("解析协议、主机、端口、路径信息，构造一个HTTP请求√")]),v._v(" "),_("li",[v._v("DNS域名解析√")]),v._v(" "),_("li",[v._v("TCP连接："),_("strong",[v._v("三次握手确认双方的发送和接收能力")])]),v._v(" "),_("li",[v._v("http请求√")]),v._v(" "),_("li",[v._v("服务器处理请求并返回HTTP报文√")]),v._v(" "),_("li",[v._v("浏览器渲染页面√")]),v._v(" "),_("li",[v._v("断开TCP连接")])]),v._v(" "),_("h3",{attrs:{id:"文档流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文档流"}},[v._v("#")]),v._v(" 文档流")]),v._v(" "),_("p",[v._v("HTML文档流是指HTML文档从元素按照"),_("strong",[v._v("从左到右，从上到下")]),v._v("的顺序依次排列形成的一种"),_("strong",[v._v("布局方式")]),v._v("。浏览器解析HTML文档时，会按照文档流的顺序依次生成元素并排列。")]),v._v(" "),_("p",[v._v("如果设置了定位或浮动，就有可能脱离文档流，影响其他元素的位置和排列方式")]),v._v(" "),_("p",[_("strong",[v._v("它为页面的布局和排版提供基础。")])]),v._v(" "),_("h3",{attrs:{id:"脱离文档流的方式-3种"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#脱离文档流的方式-3种"}},[v._v("#")]),v._v(" 脱离文档流的方式(3种)")]),v._v(" "),_("ul",[_("li",[v._v("设置元素position属性absolute或fixed")]),v._v(" "),_("li",[v._v("设置元素浮动")]),v._v(" "),_("li",[v._v("设置元素属性为非block属性")])]),v._v(" "),_("h3",{attrs:{id:"web存储"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#web存储"}},[v._v("#")]),v._v(" WEB存储")]),v._v(" "),_("p",[v._v("cookie：")]),v._v(" "),_("ul",[_("li",[v._v("存储大小限制4kb")]),v._v(" "),_("li",[v._v("http请求时需要发送到服务器，增加请求数量")]),v._v(" "),_("li",[v._v("只能用document.cookie来修改")])]),v._v(" "),_("p",[v._v("localStorage和sessionStorage:")]),v._v(" "),_("ul",[_("li",[v._v("H5专门为存储设计的，最大5M")]),v._v(" "),_("li",[v._v("API简单易用，setItem,getItem")]),v._v(" "),_("li",[v._v("不会随着http请求发送到服务器端")])]),v._v(" "),_("p",[v._v("区别：")]),v._v(" "),_("ul",[_("li",[v._v("localStorage是永久存储，除非手动删除")]),v._v(" "),_("li",[v._v("sessionStorage存在于当前回话，浏览器关闭就会清空")]),v._v(" "),_("li",[v._v("一般用localStorage多一些")])]),v._v(" "),_("h2",{attrs:{id:"css面试题"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css面试题"}},[v._v("#")]),v._v(" CSS面试题")]),v._v(" "),_("h3",{attrs:{id:"css选择器和优先级"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css选择器和优先级"}},[v._v("#")]),v._v(" CSS选择器和优先级")]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("内联>ID选择器>类选择器>标签选择器\n")])])]),_("p",[v._v("优先级是由A、B、C、D的值决定的，计算规则如下：")]),v._v(" "),_("ol",[_("li",[v._v("如果存在内联样式，那么"),_("strong",[v._v("A=1")]),v._v(",否则"),_("strong",[v._v("A=0")])]),v._v(" "),_("li",[v._v("B的值等于"),_("strong",[v._v("ID选择器")]),v._v("出现的次数；")]),v._v(" "),_("li",[v._v("C的值等于"),_("strong",[v._v("类选择器")]),v._v("和"),_("strong",[v._v("属性选择器")]),v._v("和"),_("strong",[v._v("伪类")]),v._v("出现的总次数")]),v._v(" "),_("li",[v._v("D的值等于"),_("strong",[v._v("标签选择器")]),v._v("和"),_("strong",[v._v("伪元素")]),v._v("出现")])]),v._v(" "),_("p",[v._v("ABCD从左往右依次进行，较大者胜出，如果相等，继续往右移动一位。如果四位全部相等，后面的会覆盖前面的。")]),v._v(" "),_("p",[v._v("两个样式比较四元数的大小")]),v._v(" "),_("h3",{attrs:{id:"回流和重绘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回流和重绘"}},[v._v("#")]),v._v(" 回流和重绘")]),v._v(" "),_("h4",{attrs:{id:"基本概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[v._v("#")]),v._v(" 基本概念")]),v._v(" "),_("ul",[_("li",[v._v("回流：元素的"),_("strong",[v._v("几何信息")]),v._v("改变，浏览器需要"),_("strong",[v._v("重新计算")]),v._v("元素在视口的几何属性")]),v._v(" "),_("li",[v._v("重绘：通过构造渲染树和重排，将渲染树的每个节点转换为屏幕的"),_("strong",[v._v("实际像素")])])]),v._v(" "),_("h4",{attrs:{id:"何时会发生回流重绘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#何时会发生回流重绘"}},[v._v("#")]),v._v(" 何时会发生回流重绘")]),v._v(" "),_("p",[v._v("当页面布局和几何信息发生变化的时候。")]),v._v(" "),_("ul",[_("li",[v._v("DOM的添加和删除")]),v._v(" "),_("li",[v._v("元素位置和尺寸变化")]),v._v(" "),_("li",[v._v("浏览器窗口尺寸变化")])]),v._v(" "),_("h4",{attrs:{id:"浏览器的优化机制"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器的优化机制"}},[v._v("#")]),v._v(" 浏览器的优化机制")]),v._v(" "),_("p",[v._v("浏览器将修改操作放在队列中，直到过了一段时间或者到达一个阈值才会"),_("strong",[v._v("清空队列")]),v._v("。")]),v._v(" "),_("p",[v._v("在获取布局信息时，会强制队列刷新")]),v._v(" "),_("h4",{attrs:{id:"如何减少重排和重绘-注意"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#如何减少重排和重绘-注意"}},[v._v("#")]),v._v(" 如何减少重排和重绘？(注意)")]),v._v(" "),_("ol",[_("li",[v._v("最小化重绘和重排，如"),_("strong",[v._v("样式集中改变")])]),v._v(" "),_("li",[_("strong",[v._v("批量操作")]),v._v("DOM，隐藏元素、应用修改、重新显示")]),v._v(" "),_("li",[v._v("对于复杂动画，用绝对定位使其"),_("strong",[v._v("脱离文档流")])]),v._v(" "),_("li",[v._v("避免触发同步布局事件")]),v._v(" "),_("li",[v._v("CSS硬件加速(GPU加速)\n"),_("ul",[_("li",[v._v("transform、opacity、filters这些动画不会回流重绘")]),v._v(" "),_("li",[v._v("其他属性会提升性能")]),v._v(" "),_("li",[v._v("但会带来占用内存的性能问题")])])])]),v._v(" "),_("h3",{attrs:{id:"bfc"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#bfc"}},[v._v("#")]),v._v(" BFC")]),v._v(" "),_("p",[v._v("BFC（Block Formatting Context）即块级格式上下文，每个BFC都是一个独立的渲染区域，使得开发者能够更好的控制页面布局和元素显示")]),v._v(" "),_("p",[v._v("每个盒子的布局由尺寸、类型、定位、盒子的子元素或兄弟元素，视口的尺寸和位置等")]),v._v(" "),_("p",[_("strong",[v._v("margin塌陷是CSS1.0引入的一个规则")])]),v._v(" "),_("p",[_("strong",[v._v("css2.0的BFC就是为了解决margin塌陷的问题")])]),v._v(" "),_("p",[v._v("视觉格式化模型：")]),v._v(" "),_("ul",[_("li",[v._v("块级元素：display:block table list-item，块级盒：竖直排列")]),v._v(" "),_("li",[v._v("行内级元素：display为inline，inline-block，inline-table，行内盒：多行排列")])]),v._v(" "),_("p",[v._v("定位方案：")]),v._v(" "),_("ul",[_("li",[v._v("普通流：浏览器默认的HTML布局方式\n"),_("ul",[_("li",[v._v("浮动元素不会被父元素计算高度 √")]),v._v(" "),_("li",[v._v("非浮动元素会覆盖浮动元素的位置 √")]),v._v(" "),_("li",[v._v("margin会传递给父级 √")]),v._v(" "),_("li",[v._v("两个相邻的元素上下margin会重叠 √")])])]),v._v(" "),_("li",[v._v("浮动：盒位于当前行的开头或结尾，普通流环绕在浮动盒周围")]),v._v(" "),_("li",[v._v("定位技术\n"),_("ol",[_("li",[v._v("静态定位：默认定位方式")]),v._v(" "),_("li",[v._v("相对定位：position:relative"),_("strong",[v._v("相对于自身")]),v._v("的偏移量")]),v._v(" "),_("li",[v._v("绝对定位：position为absolute或fixed，"),_("strong",[v._v("脱离文档流")]),v._v("，"),_("strong",[v._v("相对于它的包含块")])]),v._v(" "),_("li",[v._v("固定定位：包含块是浏览器视窗")])])])]),v._v(" "),_("h4",{attrs:{id:"主要特性"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#主要特性"}},[v._v("#")]),v._v(" 主要特性")]),v._v(" "),_("ul",[_("li",[v._v("BFC内部块级盒在垂直方向一个接一个排列")]),v._v(" "),_("li",[v._v("浮动盒的区域不会和BFC重叠")]),v._v(" "),_("li",[v._v("计算BFC的高度时，浮动元素也会参与计算")])]),v._v(" "),_("h4",{attrs:{id:"创建方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#创建方法"}},[v._v("#")]),v._v(" 创建方法")]),v._v(" "),_("ul",[_("li",[v._v("body根元素")]),v._v(" "),_("li",[v._v("float 属性"),_("strong",[v._v("left")]),v._v("或"),_("strong",[v._v("right")]),v._v("√ 浮动元素本身是一个BFC")]),v._v(" "),_("li",[v._v("position 属性为 "),_("strong",[v._v("absolute 或 fixed")]),v._v(" √")]),v._v(" "),_("li",[v._v("display 属性为 inline-block, table-cell, flex, inline-flex "),_("strong",[v._v("等非 block 属性")]),v._v("√")]),v._v(" "),_("li",[v._v("overflow 属性为auto，hidden，overlay")])]),v._v(" "),_("p",[v._v("注意：position:relative 相对定位不会脱离文档流")]),v._v(" "),_("h4",{attrs:{id:"使用场景"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用场景"}},[v._v("#")]),v._v(" 使用场景")]),v._v(" "),_("ul",[_("li",[v._v("清除浮动带来的影响，防止父元素高度塌陷。√ 父元素开启BFC")]),v._v(" "),_("li",[v._v("解决外边距合并问题，使得相邻元素的外边距不会互相影响。√ 两个元素分别开启BFC")]),v._v(" "),_("li",[v._v("实现多列布局，防止列高不一的问题。父元素和中间开启BFC，左右子元素浮动√")]),v._v(" "),_("li",[v._v("防止元素被浮动元素覆盖。√ 被覆盖的元素开启BFC")])]),v._v(" "),_("h3",{attrs:{id:"布局方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#布局方式"}},[v._v("#")]),v._v(" 布局方式")]),v._v(" "),_("h4",{attrs:{id:"实现两栏布局"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#实现两栏布局"}},[v._v("#")]),v._v(" 实现两栏布局")]),v._v(" "),_("ul",[_("li",[v._v("左浮动+右margin-left")]),v._v(" "),_("li",[v._v("左浮动+右BFC")]),v._v(" "),_("li",[v._v("flex")]),v._v(" "),_("li",[v._v("利用绝对定位，左absolute，右margin-left设置为左宽度")])]),v._v(" "),_("h4",{attrs:{id:"圣杯布局"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#圣杯布局"}},[v._v("#")]),v._v(" 圣杯布局")]),v._v(" "),_("p",[v._v("目的：")]),v._v(" "),_("ul",[_("li",[v._v("三栏布局，中间最先加载")]),v._v(" "),_("li",[v._v("两侧固定，中间内容随着宽度自适应")]),v._v(" "),_("li",[v._v("一般用于PC网页")])]),v._v(" "),_("p",[v._v("技术总结：")]),v._v(" "),_("ul",[_("li",[v._v("使用float布局")]),v._v(" "),_("li",[v._v("两次使用margin负值，以便和中间内容横向重叠")]),v._v(" "),_("li",[v._v("圣杯布局用padding，双飞翼布局用margin")])]),v._v(" "),_("h4",{attrs:{id:"水平垂直居中方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#水平垂直居中方式"}},[v._v("#")]),v._v(" 水平垂直居中方式")]),v._v(" "),_("ul",[_("li",[v._v("绝对定位到中心+translate移动")]),v._v(" "),_("li",[v._v("flex：justify-content，align-items")])]),v._v(" "),_("h3",{attrs:{id:"flex布局"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#flex布局"}},[v._v("#")]),v._v(" Flex布局")]),v._v(" "),_("p",[v._v("flex弹性布局，设置flex之后，子元素的float、clear、vertical-align属性将失效")]),v._v(" "),_("p",[v._v("容器的属性：")]),v._v(" "),_("ul",[_("li",[v._v("flex-direction：决定主轴的方向")]),v._v(" "),_("li",[v._v("flex-wrap：设置换行方式")]),v._v(" "),_("li",[v._v("flex-flow：是flex-direction和flex-wrap的简写")]),v._v(" "),_("li",[v._v("justify-content：项目在主轴上的对齐方式")]),v._v(" "),_("li",[v._v("align-items：项目在交叉轴上的对齐方式")]),v._v(" "),_("li",[v._v("align-content：多跟轴线的对齐方式")])]),v._v(" "),_("p",[v._v("项目属性：")]),v._v(" "),_("ul",[_("li",[v._v("order:定义项目的排列顺序")]),v._v(" "),_("li",[v._v("flex-grow：定义项目的放大比例，"),_("strong",[v._v("默认为0")]),v._v(",如果有剩余空间，也不会放大")]),v._v(" "),_("li",[v._v("flex-shrink：项目的缩小比例，"),_("strong",[v._v("默认为1")]),v._v("，空间不足时，缩小")]),v._v(" "),_("li",[v._v("flex-basis：分配多余空间之前，项目占据主轴的空间，"),_("strong",[v._v("默认0%")])]),v._v(" "),_("li",[v._v("flex："),_("strong",[v._v("是flex-grow、flex-shrink、flex-basis的简写，默认值为0 1 auto")])])])])}),[],!1,null,null,null);_.default=l.exports}}]);