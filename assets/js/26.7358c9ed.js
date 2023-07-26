(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{301:function(v,_,t){"use strict";t.r(_);var a=t(10),s=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"性能指标"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#性能指标"}},[v._v("#")]),v._v(" 性能指标")]),v._v(" "),_("p",[v._v("三大核心指标：")]),v._v(" "),_("ul",[_("li",[v._v("LCP：页面速度指标")]),v._v(" "),_("li",[v._v("FID：交互体验指标")]),v._v(" "),_("li",[v._v("CLS：页面稳定指标")])]),v._v(" "),_("h3",{attrs:{id:"fp-fcp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fp-fcp"}},[v._v("#")]),v._v(" FP&FCP")]),v._v(" "),_("p",[v._v("FP (First Paint) 首次绘制，记录页面第一次绘制像素的时间")]),v._v(" "),_("p",[v._v("FCP(First Contentful Paint) "),_("strong",[v._v("首次内容绘制")]),v._v("，记录页面首次绘制文本、图片、非空白Canvas或SVG的时间")]),v._v(" "),_("p",[v._v("FP<=FCP")]),v._v(" "),_("h3",{attrs:{id:"lcp"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#lcp"}},[v._v("#")]),v._v(" LCP")]),v._v(" "),_("p",[v._v("Largest Contentful Paint,最大内容绘制，用于记录视窗内"),_("strong",[v._v("最大的元素")]),v._v("绘制的时间，会随着页面渲染变化而变化，会在用户第一次交互后停止记录")]),v._v(" "),_("h3",{attrs:{id:"tti"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tti"}},[v._v("#")]),v._v(" TTI")]),v._v(" "),_("p",[v._v("Time to Interactive"),_("strong",[v._v("首次可交互时间")])]),v._v(" "),_("ul",[_("li",[v._v("从FCP后开始计算")]),v._v(" "),_("li",[v._v("持续秒内无长任务，且无两个以上进行中的GET请求")]),v._v(" "),_("li",[v._v("往前回溯至5秒前的最后一个长任务结束的时间")])]),v._v(" "),_("h3",{attrs:{id:"fid"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#fid"}},[v._v("#")]),v._v(" FID")]),v._v(" "),_("p",[v._v("First Input Delay，首次输入延迟，用户首次与页面交互到浏览器实际响应该事件的时间")]),v._v(" "),_("p",[v._v("用户交互事件触发到页面响应中间耗时多少，推荐100ms以内")]),v._v(" "),_("h3",{attrs:{id:"tbt"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tbt"}},[v._v("#")]),v._v(" TBT")]),v._v(" "),_("p",[v._v("Total Blocking Time，阻塞总时间。记录FCP到TTI之间所有长任务的阻塞时间总和")]),v._v(" "),_("p",[v._v("长任务(执行时间大于50ms)")]),v._v(" "),_("p",[v._v("每个长任务的阻塞时间="),_("strong",[v._v("执行时间-50ms")])]),v._v(" "),_("h3",{attrs:{id:"cls"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cls"}},[v._v("#")]),v._v(" CLS")]),v._v(" "),_("p",[v._v("Cumulative Layout Shift ，累计位移偏移，记录了页面上非预期的位移波动")]),v._v(" "),_("p",[v._v("页面渲染过程中突然插入巨大的图片等等")]),v._v(" "),_("p",[v._v("计算方式："),_("strong",[v._v("位移影响的面积*位移距离")]),v._v("，用屏幕面积百分比表示")]),v._v(" "),_("p",[v._v("推荐值低于0.1")]),v._v(" "),_("h2",{attrs:{id:"获取指标工具"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#获取指标工具"}},[v._v("#")]),v._v(" 获取指标工具")]),v._v(" "),_("ul",[_("li",[v._v("lighthouse")]),v._v(" "),_("li",[v._v("web-vitals-extension Chrome插件")]),v._v(" "),_("li",[v._v("Chrome Devtools的Performance选项卡")])]),v._v(" "),_("h2",{attrs:{id:"页面的渲染过程"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#页面的渲染过程"}},[v._v("#")]),v._v(" 页面的渲染过程")]),v._v(" "),_("p",[v._v("输入网址、解析URL、检查浏览器缓存、DNS解析、TCP/IP解析、HTTP请求、服务器请求并返回http报文、浏览器渲染页面、断开连接")]),v._v(" "),_("h3",{attrs:{id:"输入网址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#输入网址"}},[v._v("#")]),v._v(" 输入网址")]),v._v(" "),_("p",[v._v("用户输入查询关键词时，地址栏会判断输入的是"),_("strong",[v._v("关键字是搜索内容还是URL")])]),v._v(" "),_("ul",[_("li",[v._v("如果是搜索内容，会合成带搜索关键字的URL")]),v._v(" "),_("li",[v._v("如果符合URL，会添加协议合称为完整的URL")])]),v._v(" "),_("h3",{attrs:{id:"解析url"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#解析url"}},[v._v("#")]),v._v(" 解析URL")]),v._v(" "),_("p",[v._v("协议、主机、端口、路径、查询参数、锚点")]),v._v(" "),_("h3",{attrs:{id:"dns解析"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dns解析"}},[v._v("#")]),v._v(" DNS解析")]),v._v(" "),_("p",[v._v("获取目标网页IP地址的过程")]),v._v(" "),_("ol",[_("li",[v._v("先递归查询DNS缓存")]),v._v(" "),_("li",[v._v("查询根域名服务器")]),v._v(" "),_("li",[v._v("查询com顶级域名服务器")]),v._v(" "),_("li",[v._v("查询google.com域名服务器")]),v._v(" "),_("li",[v._v("查询结果缓存")])]),v._v(" "),_("p",[v._v("优化：")]),v._v(" "),_("ul",[_("li",[v._v("DNS预解析：有多个不同的服务器资源时，可提前解析，避免卡顿")]),v._v(" "),_("li",[v._v("DNS负载均衡：把访问引导到不同的服务器上")])]),v._v(" "),_("h3",{attrs:{id:"tcp-ip连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#tcp-ip连接"}},[v._v("#")]),v._v(" TCP/IP连接")]),v._v(" "),_("p",[v._v("三次握手的过程")]),v._v(" "),_("h3",{attrs:{id:"检查浏览器缓存-补充"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#检查浏览器缓存-补充"}},[v._v("#")]),v._v(" 检查浏览器缓存(补充)")]),v._v(" "),_("p",[v._v("网络进程会查找本地缓存是否缓存了该资源，如果有，直接返回给浏览器进程。")]),v._v(" "),_("p",[v._v("浏览器缓存：")]),v._v(" "),_("ul",[_("li",[v._v("浏览器发送请求，会根据请求头expires和"),_("strong",[v._v("cache-control")]),v._v("判断是否命中"),_("strong",[v._v("强缓存策略")])]),v._v(" "),_("li",[v._v("未命中，会发送请求，根据"),_("strong",[v._v("If-Modified-Since")]),v._v("和If-None-Match判断是否命中"),_("strong",[v._v("协商缓存")])]),v._v(" "),_("li",[v._v("离线缓存，service worker")])]),v._v(" "),_("p",[v._v("第三方库公共模块抽取：")]),v._v(" "),_("ul",[_("li",[v._v("设置较长的强缓存时间")])]),v._v(" "),_("h3",{attrs:{id:"http请求-重点看"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http请求-重点看"}},[v._v("#")]),v._v(" HTTP请求(重点看)")]),v._v(" "),_("p",[v._v("建立连接之后，浏览器会构建请求行、请求头等信息，并把cookie数据附加到请求头，然后发送请求。")]),v._v(" "),_("p",[v._v("开启HTTP2：")]),v._v(" "),_("ul",[_("li",[v._v("HTTP1用文本，HTTP2用二进制分帧通信")]),v._v(" "),_("li",[v._v("HTTP2可以多路复用，HTTP1会有并发限制")]),v._v(" "),_("li",[v._v("HTTP2可以头部压缩，节省消息头占用的网络流量")]),v._v(" "),_("li",[v._v("HTTP2可以服务端推送")])]),v._v(" "),_("h3",{attrs:{id:"服务器请求并返回http报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务器请求并返回http报文"}},[v._v("#")]),v._v(" 服务器请求并返回http报文")]),v._v(" "),_("h2",{attrs:{id:"浏览器渲染页面"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#浏览器渲染页面"}},[v._v("#")]),v._v(" 浏览器渲染页面")]),v._v(" "),_("h3",{attrs:{id:"dom树"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#dom树"}},[v._v("#")]),v._v(" DOM树")]),v._v(" "),_("p",[v._v("字节->字符->令牌->节点->对象模型")]),v._v(" "),_("p",[v._v("构建流程：")]),v._v(" "),_("ul",[_("li",[v._v("转换：根据HTML原始字节，根据指定编码转换为字符 √")]),v._v(" "),_("li",[v._v("令牌化：将字符串转换为H5标准的各种令牌，从而识别每个元素 √")]),v._v(" "),_("li",[v._v("词法分析：发出的令牌转换为定义属性和规则的对象 √")]),v._v(" "),_("li",[v._v("DOM构建：构建树结构 √")])]),v._v(" "),_("h3",{attrs:{id:"css对象模型"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css对象模型"}},[v._v("#")]),v._v(" CSS对象模型")]),v._v(" "),_("p",[v._v("构建过程：")]),v._v(" "),_("ul",[_("li",[v._v("解析CSS样式表：浏览器加载CSS样式后，会解析成一组样式规则")]),v._v(" "),_("li",[v._v("创建StyleSheet对象,表示"),_("strong",[v._v("整个样式表")]),v._v(" √")]),v._v(" "),_("li",[v._v("创建CSSRule对象，表示样式规则，包括"),_("strong",[v._v("选择器和声明块")]),v._v(" √")]),v._v(" "),_("li",[v._v("创建CSSStyleDeclaration"),_("strong",[v._v("声明块对象")]),v._v("，表示声明块、样式属性和值")]),v._v(" "),_("li",[v._v("构建CSSOM树")])]),v._v(" "),_("p",[v._v("CSSOM的每个节点代表一个CSS规则，包括选择器和声明块")]),v._v(" "),_("h3",{attrs:{id:"布局树layout-tree"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#布局树layout-tree"}},[v._v("#")]),v._v(" 布局树Layout Tree")]),v._v(" "),_("ul",[_("li",[v._v("DOM树和CSSOM树合并形成渲染树 √")]),v._v(" "),_("li",[v._v("渲染树只包含网页所需的节点")]),v._v(" "),_("li",[v._v("布局计算每个对象精确位置和大小 √")]),v._v(" "),_("li",[v._v("使用最终渲染树将像素渲染在屏幕上 √")])]),v._v(" "),_("h3",{attrs:{id:"渲染"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#渲染"}},[v._v("#")]),v._v(" 渲染")]),v._v(" "),_("p",[v._v("渲染流程：")]),v._v(" "),_("ul",[_("li",[v._v("获取DOM后分割为多个图层，通过"),_("strong",[v._v("浏览器Layer")]),v._v("图层查看 √ 以下情况浏览器会将其分配到单个图层：\n"),_("ul",[_("li",[v._v("应用CSS 3D变换和透视属性")]),v._v(" "),_("li",[v._v("视频、canvas和webgl元素，"),_("strong",[v._v("动态更新")])]),v._v(" "),_("li",[v._v("具有滚动、动画和滑动效果的元素，"),_("strong",[v._v("频繁重绘")])])])]),v._v(" "),_("li",[v._v("对每个图层的节点计算样式结果 √")]),v._v(" "),_("li",[v._v("为每个节点生成图形和位置 √")]),v._v(" "),_("li",[v._v("将每个节点绘制填充到图层位图中")]),v._v(" "),_("li",[v._v("图层作为纹理上传至GPU")]),v._v(" "),_("li",[v._v("组合多个图层到页面上生成最终图像")])]),v._v(" "),_("h3",{attrs:{id:"回流和重绘"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#回流和重绘"}},[v._v("#")]),v._v(" 回流和重绘")]),v._v(" "),_("ul",[_("li",[v._v("重绘")])]),v._v(" "),_("p",[v._v("页面中元素样式改变不影响在文档流中的位置时，例如color,bgc,visibility等等，浏览器会将新的样式赋予该元素并重新绘制。")]),v._v(" "),_("ul",[_("li",[v._v("回流")])]),v._v(" "),_("p",[v._v("当渲染树中部分或者全部元素的尺寸、结构、或者某些属性发生改变时，浏览器重新渲染部分或全部文档的过程成为回流。")]),v._v(" "),_("p",[_("strong",[v._v("引起回流的方式：")]),v._v("(页面排版发生了变化)")]),v._v(" "),_("ol",[_("li",[v._v("页面首次渲染 √")]),v._v(" "),_("li",[v._v("浏览器窗口大小发生变化 √")]),v._v(" "),_("li",[v._v("元素尺寸或者位置发生变化 √")]),v._v(" "),_("li",[v._v("元素内容和字体变化 √")]),v._v(" "),_("li",[v._v("添加、删除DOM √")]),v._v(" "),_("li",[v._v("激活CSS伪类")]),v._v(" "),_("li",[v._v("查询某些属性或调用某些方法")])]),v._v(" "),_("p",[_("strong",[v._v("引起回流的属性和方法：")])]),v._v(" "),_("ul",[_("li",[v._v("clientWidth、clientHeight、clientTop、clientLeft")]),v._v(" "),_("li",[v._v("offsetWidth、offsetHeight、offsetTop、offsetLeft")]),v._v(" "),_("li",[v._v("scrollWidth、scrollHeight、scrollTop、scrollLeft")]),v._v(" "),_("li",[v._v("scrollIntoView()、scrollIntoViewIffNeeded()")]),v._v(" "),_("li",[v._v("getComputedStyle()")]),v._v(" "),_("li",[v._v("getBoundingClientRect()")]),v._v(" "),_("li",[v._v("scrollTo()")])]),v._v(" "),_("h2",{attrs:{id:"性能优化-雅虎军规"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#性能优化-雅虎军规"}},[v._v("#")]),v._v(" 性能优化(雅虎军规)")]),v._v(" "),_("h3",{attrs:{id:"页面内容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#页面内容"}},[v._v("#")]),v._v(" 页面内容")]),v._v(" "),_("h4",{attrs:{id:"减少http请求数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#减少http请求数"}},[v._v("#")]),v._v(" 减少HTTP请求数")]),v._v(" "),_("ul",[_("li",[v._v("合并JS/CSS文件 √")]),v._v(" "),_("li",[v._v("使用CSS Sprite将背景图片合并成一个文件√")]),v._v(" "),_("li",[v._v("行内图片，使用Data URI scheme将图片嵌入HTML和CSS，用于小图标、小图片等等")])]),v._v(" "),_("h4",{attrs:{id:"减少dns查询"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#减少dns查询"}},[v._v("#")]),v._v(" 减少DNS查询")]),v._v(" "),_("ul",[_("li",[v._v("配置DNS缓存")]),v._v(" "),_("li",[v._v("减少不同主机名，避免DNS查找。但是会减少并行下载数量，会增加响应时间。将组件分散在2-4个主机名下。")])]),v._v(" "),_("h4",{attrs:{id:"避免重定向"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#避免重定向"}},[v._v("#")]),v._v(" 避免重定向")]),v._v(" "),_("p",[v._v("重定向是指用户在访问一个网址时，服务器会将用户的请求重定向到另一个网址的过程。")]),v._v(" "),_("p",[v._v("重定向方式：")]),v._v(" "),_("ul",[_("li",[v._v("永久重定向 301")]),v._v(" "),_("li",[v._v("临时重定向 302")]),v._v(" "),_("li",[v._v("JS重定向，window.location.href")]),v._v(" "),_("li",[v._v("Meta Refresh")])]),v._v(" "),_("p",[v._v("发生重定向的场景：")]),v._v(" "),_("ul",[_("li",[v._v("URL末尾的/并未添加")]),v._v(" "),_("li",[v._v("网站域名变更")])]),v._v(" "),_("h4",{attrs:{id:"缓存ajax请求"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#缓存ajax请求"}},[v._v("#")]),v._v(" 缓存Ajax请求")]),v._v(" "),_("ul",[_("li",[v._v("服务器端通过设置HTTP相应头来控制缓存cache-control，expires")])]),v._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[v._v("no-cache：表示不使用缓存\nno-store：不缓存响应内容，也不允许缓存设备缓存响应内容\nmax-age(单位为秒)：缓存响应内容的最大时间\nmust-revalidate：缓存过期后，缓存设备需要向服务器发送请求\npublic：响应内容可以被任何缓存设备缓存\nprivate：只能被客户端缓存\n")])])]),_("ul",[_("li",[v._v("浏览器本地缓存")])]),v._v(" "),_("h4",{attrs:{id:"延迟加载"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#延迟加载"}},[v._v("#")]),v._v(" 延迟加载")]),v._v(" "),_("ul",[_("li",[v._v("非首屏使用的数据、样式、脚本、图片")]),v._v(" "),_("li",[v._v("用户交互才会显示的内容")])]),v._v(" "),_("h4",{attrs:{id:"预加载"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#预加载"}},[v._v("#")]),v._v(" 预加载")]),v._v(" "),_("p",[v._v("使用浏览器的空闲时间请求将来要使用的资源")]),v._v(" "),_("ul",[_("li",[v._v("无条件预先加载")]),v._v(" "),_("li",[v._v("有条件预加载：根据用户行为判断")])]),v._v(" "),_("h4",{attrs:{id:"减少dom元素的数量"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#减少dom元素的数量"}},[v._v("#")]),v._v(" 减少DOM元素的数量")]),v._v(" "),_("p",[v._v("移除不必要的标记：")]),v._v(" "),_("ul",[_("li",[v._v("是否还在使用表格布局？")]),v._v(" "),_("li",[v._v("使用div仅仅为了解决布局问题，也需要更好、更语义化的标记")]),v._v(" "),_("li",[v._v("能通过伪元素实现的功能，就没必要添加额外元素")])]),v._v(" "),_("h4",{attrs:{id:"减少iframe的使用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#减少iframe的使用"}},[v._v("#")]),v._v(" 减少iframe的使用")]),v._v(" "),_("p",[v._v("ifame优点：")]),v._v(" "),_("ul",[_("li",[v._v("加载速度较慢的第三方资源，如广告、徽章")]),v._v(" "),_("li",[v._v("安全沙箱")]),v._v(" "),_("li",[v._v("可以并行下载脚本")])]),v._v(" "),_("p",[v._v("iframe缺点：")]),v._v(" "),_("ul",[_("li",[v._v("加载代价昂贵")]),v._v(" "),_("li",[v._v("阻塞页面load事件触发")]),v._v(" "),_("li",[v._v("无法获取外层页面的DOM元素")])]),v._v(" "),_("h3",{attrs:{id:"服务器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#服务器"}},[v._v("#")]),v._v(" 服务器")]),v._v(" "),_("h4",{attrs:{id:"使用cdn"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#使用cdn"}},[v._v("#")]),v._v(" 使用CDN")]),v._v(" "),_("p",[v._v("用户与服务器的距离影响响应时间，使用CDN可以提升加载速度")]),v._v(" "),_("h4",{attrs:{id:"添加expires或cache-control响应头"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#添加expires或cache-control响应头"}},[v._v("#")]),v._v(" 添加Expires或Cache-Control响应头")]),v._v(" "),_("ul",[_("li",[v._v("静态内容：永不过期")]),v._v(" "),_("li",[v._v("动态内容，有条件发起请求")])]),v._v(" "),_("h4",{attrs:{id:"启用gzip"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#启用gzip"}},[v._v("#")]),v._v(" 启用Gzip")]),v._v(" "),_("p",[v._v("Gzip压缩通常可以减少70%的响应大小，可以对HTML、CSS、JS、XML、JSON等文本类型。")]),v._v(" "),_("h4",{attrs:{id:"配置etag"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#配置etag"}},[v._v("#")]),v._v(" 配置Etag")]),v._v(" "),_("h3",{attrs:{id:"cookie"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#cookie"}},[v._v("#")]),v._v(" Cookie")]),v._v(" "),_("ul",[_("li",[v._v("减少cookie大小")]),v._v(" "),_("li",[v._v("去除不必要的cookie")]),v._v(" "),_("li",[v._v("设置合适的过期时间")]),v._v(" "),_("li",[v._v("注意设置cookie的domain级别")])]),v._v(" "),_("p",[v._v("静态资源无需使用cookie")]),v._v(" "),_("h3",{attrs:{id:"css"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#css"}},[v._v("#")]),v._v(" CSS")]),v._v(" "),_("ul",[_("li",[v._v("把样式表放在"),_("head",[v._v("中")])]),v._v(" "),_("li",[v._v("不要使用css表达式")]),v._v(" "),_("li",[v._v("使用link代替@import")])]),v._v(" "),_("h3",{attrs:{id:"javascript"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#javascript"}},[v._v("#")]),v._v(" Javascript")]),v._v(" "),_("ul",[_("li",[v._v("把脚本放在页面底部")]),v._v(" "),_("li",[v._v("使用外部的Js和Css")]),v._v(" "),_("li",[v._v("压缩JS和CSS")]),v._v(" "),_("li",[v._v("移除重复脚本")]),v._v(" "),_("li",[v._v("使用高效的事件处理，事件委托，尽早处理事件")])]),v._v(" "),_("h3",{attrs:{id:"图片"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#图片"}},[v._v("#")]),v._v(" 图片")]),v._v(" "),_("ul",[_("li",[v._v("优化图片，GIF转PNG")]),v._v(" "),_("li",[v._v("优化CSS Sprite，"),_("strong",[v._v("水平排列")]),v._v("Sprite的图片，Sprite图像中间不要有较大空隙")]),v._v(" "),_("li",[v._v("不要在HTML中缩放图片，使用相应大小的图片")]),v._v(" "),_("li",[v._v("使用体积小可缓存的favicon.ico")])]),v._v(" "),_("h3",{attrs:{id:"移动端"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#移动端"}},[v._v("#")]),v._v(" 移动端")]),v._v(" "),_("ul",[_("li",[v._v("保证组件都小于25k")]),v._v(" "),_("li",[v._v("打包内容为分段文档")])])])}),[],!1,null,null,null);_.default=s.exports}}]);