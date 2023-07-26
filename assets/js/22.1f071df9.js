(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{297:function(t,v,_){"use strict";_.r(v);var s=_(10),a=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"框架设计概览"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#框架设计概览"}},[t._v("#")]),t._v(" 框架设计概览")]),t._v(" "),v("h3",{attrs:{id:"权衡的艺术"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#权衡的艺术"}},[t._v("#")]),t._v(" 权衡的艺术")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("命令式和声明式：")]),t._v(" "),v("p",[t._v("命令式关注过程，声明式关注结果。Vue的内部实现是命令式，暴露给用户是声明式。")])]),t._v(" "),v("li",[v("p",[t._v("性能和可维护性：")]),t._v(" "),v("p",[t._v("性能上命令式更优，声明式多了查找变更的性能消耗。但是声明式可维护性高。")])]),t._v(" "),v("li",[v("p",[t._v("虚拟DOM的性能："),v("strong",[t._v("增量更新")])]),t._v(" "),v("p",[t._v("虚拟DOM为了最小化"),v("strong",[t._v("找出差异的性能消耗")]),t._v("。")]),t._v(" "),v("p",[t._v("与innerHTML对比：")]),t._v(" "),v("ul",[v("li",[t._v("创建页面差距不大")]),t._v(" "),v("li",[v("strong",[t._v("更新页面")]),t._v("时差异较大，innerHTML需要销毁旧DOM元素，全量创建新的DOM元素。")])])]),t._v(" "),v("li",[v("p",[t._v("运行时和编译时：")]),t._v(" "),v("ul",[v("li",[t._v("纯运行时：灵活性高，性能和安全性低")]),t._v(" "),v("li",[v("strong",[t._v("运行时+编译时")]),t._v("：保留灵活性，尽可能优化性能")]),t._v(" "),v("li",[t._v("纯编译时：性能高，但灵活性较低")])])])]),t._v(" "),v("h3",{attrs:{id:"框架设计的额核心要素"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#框架设计的额核心要素"}},[t._v("#")]),t._v(" 框架设计的额核心要素")]),t._v(" "),v("ul",[v("li",[t._v("提升用户的开发体验：控制台信息")]),t._v(" "),v("li",[t._v("控制框架代码的体积：__DEV__区分开发环境")]),t._v(" "),v("li",[t._v("做到良好的Tree-Shaking")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("/*#__PURE__*/  //告诉rollup.js没有副作用，可以放心删除\n")])])]),v("ul",[v("li",[t._v("框架的构建产物：IIFE、ESM")]),t._v(" "),v("li",[t._v("特性开关：使用rollup.js的预定义常量插件实现")]),t._v(" "),v("li",[t._v("错误处理：统一错误处理接口")])]),t._v(" "),v("h3",{attrs:{id:"vue3的设计思路"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue3的设计思路"}},[t._v("#")]),t._v(" vue3的设计思路")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("虚拟DOM")]),t._v("就是用JS对象来描述DOM，"),v("strong",[t._v("渲染函数")]),t._v("返回的结果就是虚拟DOM")]),t._v(" "),v("li",[v("strong",[t._v("渲染器")]),t._v("的作用是将虚拟DOM渲染成真实DOM")]),t._v(" "),v("li",[t._v("组件的本质：组件就是一组虚拟DOM元素的封装，可以是"),v("strong",[t._v("函数或者JS对象")])]),t._v(" "),v("li",[v("strong",[t._v("编译器")]),t._v("：作用是将template模板编译为渲染函数，并添加在script标签块的组件对象上")])]),t._v(" "),v("h2",{attrs:{id:"响应系统"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应系统"}},[t._v("#")]),t._v(" 响应系统")]),t._v(" "),v("h3",{attrs:{id:"响应式系统的作用与实现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应式系统的作用与实现"}},[t._v("#")]),t._v(" 响应式系统的作用与实现")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("副作用函数effect，执行会直接或间接影响其他函数的执行。√")])]),t._v(" "),v("li",[v("p",[t._v("通过拦截字段的读取和设置操作，读取时，将effect放置在桶中，设置时，拿出effect并执行。需要将一个effrct函数绑定在一个某个对象的某个属性上。√")])]),t._v(" "),v("li",[v("p",[t._v("数据结构使用了"),v("strong",[t._v("weakMap")]),t._v("、Map和Set。weakMap的键为对象，值为对一个map，存储该对象所有属性的依赖；Map中的key为对象的属性，值为key相关的响应函数集合set。把副作用函数收集到桶里的逻辑封装为track，把触发副作用函数执行的逻辑封装到trigger中。变量"),v("strong",[t._v("activeEffect")]),t._v("至关重要√")])]),t._v(" "),v("li",[v("p",[t._v("分支切换带来的effect函数遗留问题：为effect添加"),v("strong",[t._v("依赖集合deps")]),t._v("，每次执行时先把所有的相关依赖删除，这部分逻辑封装在"),v("strong",[t._v("cleanup")]),t._v("里面，trigger中用一个新的set防止一直循环√")])]),t._v(" "),v("li",[v("p",[t._v("嵌套的effect和"),v("strong",[t._v("effect栈")]),t._v("，避免相互影响√")])]),t._v(" "),v("li",[v("p",[t._v("避免无限递归循环，在同一个effect中读取和设置时会触发，"),v("strong",[t._v("trigger前添加守卫")]),t._v("。√")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("调度执行")]),t._v("，让用户控制trigger的"),v("strong",[t._v("执行方式、执行次数")]),t._v("、"),v("strong",[t._v("执行时机")]),t._v("√")])]),t._v(" "),v("li",[v("p",[t._v("计算属性computed和lazy,添加值"),v("strong",[t._v("缓存")]),t._v("、懒执行的副作用函数√")])]),t._v(" "),v("li",[v("p",[t._v("watch的实现原理，"),v("strong",[t._v("基于调度器实现")]),t._v("，"),v("strong",[t._v("递归地watch对象的所有属性")]),t._v("，"),v("strong",[t._v("获取旧值和新值")]),t._v("√")])]),t._v(" "),v("li",[v("p",[t._v("立即执行的watch和回调执行时机，"),v("strong",[t._v("immediate")]),t._v("指定回调是否立即执行，"),v("strong",[t._v("flush")]),t._v("指定同步和异步执行√")])]),t._v(" "),v("li",[v("p",[t._v("副作用过期，"),v("strong",[t._v("OnInvalidate")]),t._v("注册过期回调，通过闭包exppired实现的")])])]),t._v(" "),v("h3",{attrs:{id:"非原始值的响应式方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#非原始值的响应式方案"}},[t._v("#")]),t._v(" 非原始值的响应式方案")]),t._v(" "),v("h4",{attrs:{id:"基本原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本原理"}},[t._v("#")]),t._v(" 基本原理")]),t._v(" "),v("ol",[v("li",[t._v("Proxy能够拦截对象的基本操作，例如读取、复制、函数调用。")]),t._v(" "),v("li",[t._v("Reflect.get()，可以绕过对象的getter函数获取属性值。"),v("strong",[t._v("不改变语言原本行为的情况下进行扩展和定制")]),t._v("，是一种元编程")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Reflect.get(target, propertyKey [, receiver])\n")])])]),v("p",[t._v("target为对象，propertyKey为属性名，receiver表示 getter 函数的执行上下文对象")]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[v("p",[t._v("常规对象和异质对象。函数对象会部署[[call]]内部方法，普通对象则不会。")]),t._v(" "),v("p",[t._v("常规对象：内部方法用"),v("strong",[t._v("ECMA规范")]),t._v("10.1给出的定义实现、[[call]]通过10.2.1实现、[[construct]]10.2.2实现；其他的都是异质对象，如Proxy")])])]),t._v(" "),v("h4",{attrs:{id:"代理对象"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代理对象"}},[t._v("#")]),t._v(" 代理对象")]),t._v(" "),v("p",[t._v("要重点处理for...in的读取、添加、更新、删除操作。")]),t._v(" "),v("p",[v("strong",[t._v("读取操作")]),t._v("：不同的读取，根据ECMA规范中使用的基本方法区分")]),t._v(" "),v("ul",[v("li",[t._v("访问属性:obj.foo，"),v("strong",[t._v("用拦截get")])]),t._v(" "),v("li",[t._v("判断是否存在指定key：key in obj，"),v("strong",[t._v("has拦截函数")])]),t._v(" "),v("li",[t._v("for...in循环，"),v("strong",[t._v("ownkeys拦截")])])]),t._v(" "),v("p",[v("strong",[t._v("设置/添加操作：")])]),t._v(" "),v("ul",[v("li",[t._v("set拦截函数，区分添加和更新")])]),t._v(" "),v("p",[v("strong",[t._v("删除操作：")])]),t._v(" "),v("ul",[v("li",[t._v("delete p.foo")])]),t._v(" "),v("p",[v("strong",[t._v("合理的触发响应：")])]),t._v(" "),v("ul",[v("li",[t._v("值是否真的发生了变化")]),t._v(" "),v("li",[t._v("屏蔽原型带来的更新")])]),t._v(" "),v("p",[t._v("**深响应与浅响应：**是否递归地把所有子属性也设置为可响应")]),t._v(" "),v("p",[t._v("**只读与浅只读：**递归实现，拦截设置和删除操作")]),t._v(" "),v("h4",{attrs:{id:"代理数组-异质对象"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代理数组-异质对象"}},[t._v("#")]),t._v(" 代理数组(异质对象)")]),t._v(" "),v("p",[v("strong",[t._v("读取操作")]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("通过索引访问：arr[0]")]),t._v(" "),v("li",[t._v("访问数组长度: arr.length")]),t._v(" "),v("li",[t._v("for...in")]),t._v(" "),v("li",[t._v("for...of")]),t._v(" "),v("li",[t._v("原型方法，concat/join/every/some/find/findIndex/includes")])]),t._v(" "),v("p",[v("strong",[t._v("设置操作")]),t._v("：")]),t._v(" "),v("ul",[v("li",[t._v("索引修改:arr[0]=0")]),t._v(" "),v("li",[t._v("修改长度:arr.length = 0")]),t._v(" "),v("li",[t._v("栈方法")]),t._v(" "),v("li",[t._v("原型方法:split/fill/sort")])]),t._v(" "),v("ol",[v("li",[v("p",[t._v("数组的索引与length")]),t._v(" "),v("ol",[v("li",[t._v("设置索引时可能会修改length，设置length时可能会影响数组元素")])])]),t._v(" "),v("li",[v("p",[t._v("遍历数组")]),t._v(" "),v("ul",[v("li",[t._v("for...in和遍历对象时相同，使用"),v("strong",[t._v("length")]),t._v("属性作为追踪的key")]),t._v(" "),v("li",[t._v("for...of遍历可迭代对象的，数组内建了Symbol.iterator方法的实现")])])]),t._v(" "),v("li",[v("p",[t._v("数组的查找方法,incodes/indexOf/lastIndexOf，通过apply实现的,将this指向代理对象。"),v("strong",[t._v("实现了对原始对象和代理对象的查找")]),t._v("。")])]),t._v(" "),v("li",[v("p",[t._v("栈方法通过设置是否追踪，实现对track的屏蔽")])])]),t._v(" "),v("h4",{attrs:{id:"代理set和map-有空了再看"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#代理set和map-有空了再看"}},[t._v("#")]),t._v(" 代理Set和Map(有空了再看)")]),t._v(" "),v("h3",{attrs:{id:"原始值的响应式方案"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#原始值的响应式方案"}},[t._v("#")]),t._v(" 原始值的响应式方案")]),t._v(" "),v("ol",[v("li",[t._v("使用一个非原始值"),v("strong",[t._v("包裹")]),t._v("原始值，")])]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 封装一个ref函数")]),t._v("\nfuction "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("ref")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 内部创建一个包裹对象")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),v("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("value")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("val\n\t"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将包裹对象变成响应式数据")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactive")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("wrapper"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("p",[t._v("区分包裹对象和非原始值的响应式对象")]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[v("strong",[t._v("响应丢失")]),t._v("问题：...展开运算符，将响应式数据转换成类似于ref结构的数据")]),t._v(" "),v("li",[v("strong",[t._v("自动脱ref")]),t._v("："),v("strong",[t._v("去掉.value")]),t._v(",通过Proxy代理实现，如果访问的属性是ref，直接返回它的value")])]),t._v(" "),v("h2",{attrs:{id:"渲染器renderer"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#渲染器renderer"}},[t._v("#")]),t._v(" 渲染器renderer")]),t._v(" "),v("h3",{attrs:{id:"渲染器的设计"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#渲染器的设计"}},[t._v("#")]),t._v(" 渲染器的设计")]),t._v(" "),v("p",[t._v("利用响应系统，自动调用渲染器，实现页面的渲染和更新。")]),t._v(" "),v("p",[t._v("渲染器吧虚拟DOM节点渲染成真实DOM节点的过程叫做"),v("strong",[t._v("挂载")]),t._v("。")]),t._v(" "),v("p",[v("strong",[t._v("自定义渲染器")]),t._v("，将依赖于浏览器的API进行抽离。这样可以在NodeJs中执行。")]),t._v(" "),v("h3",{attrs:{id:"挂载与更新"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#挂载与更新"}},[t._v("#")]),t._v(" 挂载与更新")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("挂载子节点和元素的属性，setAttribute")])]),t._v(" "),v("li",[v("p",[t._v("HTML attributes作用是DOM properties的"),v("strong",[t._v("初始值")])])]),t._v(" "),v("li",[v("p",[t._v("正确地设置"),v("strong",[t._v("元素属性")]),t._v("：优先使用DOM properties，封装为一个"),v("strong",[t._v("pathProps")]),t._v("函数")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("class")]),t._v("的特殊处理，结构转换，"),v("strong",[t._v("el.className")]),t._v("/el.classList/setAttribute性能更好")])]),t._v(" "),v("li",[v("p",[t._v("卸载操作：渲染null空内容时发生")]),t._v(" "),v("p",[t._v("innerHTML清空的缺点：")]),t._v(" "),v("ul",[v("li",[t._v("不能正确的调用子组件的生命周期钩子函数")]),t._v(" "),v("li",[t._v("不会触发自定义指令的钩子函数")]),t._v(" "),v("li",[t._v("不会移除DOM元素上的事件处理函数")])])])]),t._v(" "),v("p",[t._v("​\t"),v("strong",[t._v("让vnode.el引用真实的DOM元素")]),t._v("，并封装为unmount函数")]),t._v(" "),v("ol",{attrs:{start:"6"}},[v("li",[t._v("区分vnode的类型")]),t._v(" "),v("li",[v("strong",[t._v("事件")]),t._v("的处理：约定以on开头的属性是事件；伪造一个事件处理函数"),v("strong",[t._v("invoker")]),t._v("，把它的值指向具体的事件，避免更新事件时移除上一个事件，单一事件可以有多个处理函数，使用"),v("strong",[t._v("数组")])]),t._v(" "),v("li",[t._v("事件的冒泡和更新时机，需要屏蔽所有绑定时间"),v("strong",[t._v("晚于")]),t._v("事件触发时间的事件处理函数的执行")]),t._v(" "),v("li",[v("strong",[t._v("更新子节点")]),t._v("，子节点的类型有三种：文本/空/其他，将逻辑封装为"),v("strong",[t._v("patchChildren")]),t._v("，理清判断逻辑，总共有9种情况")]),t._v(" "),v("li",[t._v("文本节点和注释节点")]),t._v(" "),v("li",[t._v("Fragment 本身不会渲染任何DOM元素，只需要渲染Fragment的所有子节点")])]),t._v(" "),v("h3",{attrs:{id:"简单diff算法-从头到尾"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#简单diff算法-从头到尾"}},[t._v("#")]),t._v(" 简单diff算法(从头到尾)")]),t._v(" "),v("ol",[v("li",[t._v("减少DOM操作的性能开销，"),v("strong",[t._v("遍历较短的一组")]),t._v("，如果新的长，说明需要挂载，旧的长，说明需要卸载")]),t._v(" "),v("li",[t._v("DOM的复用和Key的作用，引入额外的"),v("strong",[t._v("key")]),t._v("作为vnode的标识，key相同进行patch")]),t._v(" "),v("li",[t._v("找到需要移动的元素")]),t._v(" "),v("li",[v("strong",[t._v("如何移动元素")]),t._v("，遍历新的子节点，根据在旧子节点中的引用，移动真实DOM，记录最大索引，"),v("strong",[t._v("核心是移动到前一个对应的真实DOM后面")]),t._v("，")]),t._v(" "),v("li",[t._v("添加新元素，在旧的中找不到时find=false")]),t._v(" "),v("li",[t._v("移除不存在的元素。在新的中遍历完旧的之后，需要"),v("strong",[t._v("反过来遍历一次")]),t._v("，查找需要删除的元素。")])]),t._v(" "),v("h3",{attrs:{id:"双端diff算法-从头尾到中间"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#双端diff算法-从头尾到中间"}},[t._v("#")]),t._v(" 双端diff算法(从头尾到中间)")]),t._v(" "),v("p",[t._v("同时对新旧子节点的两个端点进行扫描，需要"),v("strong",[t._v("四个索引值")])]),t._v(" "),v("p",[t._v("每一轮步骤：以新的数组为移动依据")]),t._v(" "),v("ul",[v("li",[t._v("比较旧的起始与新的起始，如果key匹配，patch后,newstart++，oldstart++")]),t._v(" "),v("li",[t._v("比较旧的结束语新的结束，如果key匹配，patch后,newend--,oldend--")]),t._v(" "),v("li",[v("strong",[t._v("比较旧的开始与新的结束")]),t._v("，如果key匹配，patch后，"),v("strong",[t._v("oldstart的真实DOM移动到oldend真实DOM之后")]),t._v("，,newstart++，oldend--")]),t._v(" "),v("li",[v("strong",[t._v("比较旧的结束与新的开始")]),t._v("，如果key匹配，patch后，"),v("strong",[t._v("oldend的真实DOM移动到oldstart真实DOM之前")]),t._v("，,oldstart++，newend--")])]),t._v(" "),v("p",[t._v("​\t每一轮移动两个指针,直至新旧两组指针相遇")]),t._v(" "),v("p",[t._v("非理想情况：")]),t._v(" "),v("ul",[v("li",[t._v("找到newstart在old中的索引，并移动到最前面，old中的原来的位置变为undefined")]),t._v(" "),v("li",[t._v("old中遇到undefined，跳过")])]),t._v(" "),v("p",[t._v("添加新元素：diff完之后，再遍历一次new节点，每次都插在oldstart之前")]),t._v(" "),v("p",[t._v("移除不存在的元素：遍历old，依次卸载剩余的。")]),t._v(" "),v("h3",{attrs:{id:"快速diff算法"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#快速diff算法"}},[t._v("#")]),t._v(" 快速diff算法")]),t._v(" "),v("p",[t._v("类似于文本diff，先对前缀，后缀进行预处理")]),t._v(" "),v("p",[t._v("预处理流程：")]),t._v(" "),v("ul",[v("li",[t._v("判断前缀，指针j")]),t._v(" "),v("li",[t._v("判断后缀，newend，oldend")])]),t._v(" "),v("p",[t._v("非理想情况：预处理结束后，new、old都有剩余，用"),v("strong",[t._v("source")]),t._v("记录new的剩余，source存储new中的节点在old中的索引。建立"),v("strong",[t._v("索引表")]),t._v("，时间复杂度降为O(n)")]),t._v(" "),v("ul",[v("li",[t._v("在source中寻找最长递增子序列(可以不连续)，从后向前遍历source[i]及其最长递增子序列seq[s]。\n"),v("ul",[v("li",[t._v("source[i]==-1，则挂载该节点")]),t._v(" "),v("li",[t._v("i!=seq[s]，需要移动节点")])])])]),t._v(" "),v("p",[v("strong",[t._v("最长递增子序列")]),t._v("中的节点位置是不需要移动的")]),t._v(" "),v("h2",{attrs:{id:"组件化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件化"}},[t._v("#")]),t._v(" 组件化")]),t._v(" "),v("h3",{attrs:{id:"组件的实现原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件的实现原理"}},[t._v("#")]),t._v(" 组件的实现原理")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("渲染组件用"),v("strong",[t._v("vnode.type存储组件对象")])])]),t._v(" "),v("li",[v("p",[t._v("组件状态与自更新")]),t._v(" "),v("ul",[v("li",[t._v("执行data()函数，并用reactive()包装为响应式对象")]),t._v(" "),v("li",[t._v("调用render函数，this指向state")]),t._v(" "),v("li",[t._v("将渲染任务包装在effect中")]),t._v(" "),v("li",[t._v("通过调度器，将任务缓冲到"),v("strong",[t._v("微任务队列")]),t._v("中，这样就有机会对任务进行去重")])])]),t._v(" "),v("li",[v("p",[t._v("组件实例与组件的生命周期")]),t._v(" "),v("p",[t._v("组件实例是一个"),v("strong",[t._v("状态合集")]),t._v("，维护者组件运行过程中的所有信息")]),t._v(" "),v("ul",[v("li",[t._v("state：组件自身状态数据")]),t._v(" "),v("li",[t._v("isMounted：表示是否被挂载")]),t._v(" "),v("li",[t._v("subTree：渲染函数返回的虚拟DOM")])])]),t._v(" "),v("li",[v("p",[t._v("props与组件的被动更新")]),t._v(" "),v("ul",[v("li",[t._v("将MyComponent.props和vnode.props结合，解析出props和attrs，其中attrs是MyComponent中没有定义的props")]),t._v(" "),v("li",[v("strong",[t._v("被动更新")]),t._v("就是父组件更新引起的子组件更新")]),t._v(" "),v("li",[t._v("封装一个渲染上下文对象"),v("strong",[t._v("renderContext")]),t._v("，并优先从上下文中读取，实质上是"),v("strong",[t._v("组件实例的代理对象")])])])]),t._v(" "),v("li",[v("p",[t._v("setup函数的作用与实现（只会在被挂载时执行一次）")]),t._v(" "),v("ul",[v("li",[t._v("配合组合式API，建立组合逻辑、创建响应式数据、创建函数、注册生命周期钩子等等")]),t._v(" "),v("li",[t._v("接受两个参数"),v("strong",[t._v("props，setupContext")]),t._v(",后者存储着slots、emit、attrs、expose")]),t._v(" "),v("li",[t._v("如果返回"),v("strong",[t._v("数据对象")]),t._v("，则需要暴露在渲染上下文中。")])])]),t._v(" "),v("li",[v("p",[t._v("注册事件和emit的实现")]),t._v(" "),v("p",[t._v("通过v-on指令为组件绑定的事件，经过编译后，会以"),v("strong",[t._v("OnXXX")]),t._v("形式存储在props属性中。")]),t._v(" "),v("p",[t._v("触发自定义事件的本质就是，根据事件名称去"),v("strong",[t._v("props数据对象")]),t._v("中寻找相应的事件处理函数并执行。")])]),t._v(" "),v("li",[v("p",[t._v("插槽的工作原理和实现")]),t._v(" "),v("p",[t._v("组件模板的插槽内容会被编译为插槽函数，插槽函数执行的返回值就是具体的插槽内容")])]),t._v(" "),v("li",[v("p",[t._v("注册生命周期")]),t._v(" "),v("p",[t._v("维护一个当前组件实例currentInstance和mount数组")])])]),t._v(" "),v("h3",{attrs:{id:"异步组件与函数式组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异步组件与函数式组件"}},[t._v("#")]),t._v(" 异步组件与函数式组件")]),t._v(" "),v("h4",{attrs:{id:"异步组件的实现原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异步组件的实现原理"}},[t._v("#")]),t._v(" 异步组件的实现原理")]),t._v(" "),v("ul",[v("li",[t._v("封装defineAsyncComponent函数，判断是否加载成功")]),t._v(" "),v("li",[t._v("加载器、超时时间、并可以指定出错是渲染的模块。把错误对象传递到Error组件中")]),t._v(" "),v("li",[t._v("loading组件，delay后加载loading")]),t._v(" "),v("li",[t._v("重试机制，为用户提供重试的能力")])]),t._v(" "),v("h4",{attrs:{id:"函数式组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#函数式组件"}},[t._v("#")]),t._v(" 函数式组件")]),t._v(" "),v("p",[t._v("函数式组件本质就是一个普通函数，返回值是一个虚拟DOM")]),t._v(" "),v("h3",{attrs:{id:"内建组件和模块"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内建组件和模块"}},[t._v("#")]),t._v(" 内建组件和模块")]),t._v(" "),v("h4",{attrs:{id:"keepalive组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#keepalive组件"}},[t._v("#")]),t._v(" KeepAlive组件")]),t._v(" "),v("p",[v("strong",[t._v("本质是缓存管理，加上特殊的挂载、卸载逻辑。")])]),t._v(" "),v("p",[t._v("在内部组件的vnode对象上添加一些属性，以便渲染器能够据此执行特定的逻辑。")]),t._v(" "),v("ul",[v("li",[t._v("shouldKeepAlive：渲染之卸载内部组件时可以判断是否需要被keepalive")]),t._v(" "),v("li",[t._v("keepAliveInstance：便于卸载时访问失活函数")]),t._v(" "),v("li",[t._v("KeptAlive：标记已经被缓存")])]),t._v(" "),v("p",[t._v("include与exclude")]),t._v(" "),v("p",[t._v("缓存管理：Map")]),t._v(" "),v("ul",[v("li",[t._v("map的键是组件选项对象，vnode.type，值是vnode对象，虚拟DOM")]),t._v(" "),v("li",[t._v("设置缓存的阈值，超出时修剪，策略"),v("strong",[t._v("最新一次访问")])])]),t._v(" "),v("h4",{attrs:{id:"teleport组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#teleport组件"}},[t._v("#")]),t._v(" Teleport组件")]),t._v(" "),v("p",[v("strong",[t._v("将执行内容渲染到特定容器中，不受DOM层级的限制。")])]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Teleportt "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),v("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("__isTeleport")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("process")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("n1"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("n2"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("container"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("anchor")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 渲染逻辑")]),t._v("\n    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),v("h4",{attrs:{id:"transition组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#transition组件"}},[t._v("#")]),t._v(" Transition组件")]),t._v(" "),v("p",[t._v("帮助制作基于状态变化的过渡和动画")]),t._v(" "),v("p",[t._v("核心原理：")]),t._v(" "),v("ul",[v("li",[t._v("当DOM元素被挂载时，将动效附加在该DOM上")]),t._v(" "),v("li",[t._v("当DOM元素被卸载时，不立即卸载，而是等到附加在DOM上的动效执行完成后在卸载")])]),t._v(" "),v("h2",{attrs:{id:"编译器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译器"}},[t._v("#")]),t._v(" 编译器")]),t._v(" "),v("h3",{attrs:{id:"编译器核心技术概览-3步"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译器核心技术概览-3步"}},[t._v("#")]),t._v(" 编译器核心技术概览(3步)")]),t._v(" "),v("p",[t._v("完整的编译：词法分析、语法分析、语义分析、中间代码生成、优化、目标代码生成")]),t._v(" "),v("p",[t._v("vue的编译是DSL，将vue编译为渲染函数")]),t._v(" "),v("p",[t._v("vue的编译：模板、词法分析、语法分析、"),v("strong",[t._v("模板AST、Transformer、JS AST")]),t._v("、代码生成、渲染函数")]),t._v(" "),v("p",[t._v("模板AST：")]),t._v(" "),v("ul",[v("li",[t._v("type区分不同节点")]),t._v(" "),v("li",[t._v("标签节点的子节点在children中")]),t._v(" "),v("li",[t._v("属性和指令在props数组")]),t._v(" "),v("li",[t._v("不同节点的对象属性不同")])]),t._v(" "),v("p",[t._v("语义分析：")]),t._v(" "),v("ul",[v("li",[t._v("检查v-else是否存在对应的v-if")]),t._v(" "),v("li",[t._v("分析属性值是否是静态的")])]),t._v(" "),v("div",{staticClass:"language-js extra-class"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" templateAST "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("template"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" jsAST "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("transform")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("templateAST"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" code "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("generate")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jsAST"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),v("h4",{attrs:{id:"parser的实现原理与状态机"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#parser的实现原理与状态机"}},[t._v("#")]),t._v(" parser的实现原理与状态机")]),t._v(" "),v("p",[t._v("解析器逐个读取字符串模板的字符，根据一定规则，切割成一个个"),v("strong",[t._v("token")])]),t._v(" "),v("p",[v("strong",[t._v("有限状态自动机")]),t._v("，随着字符的输入，解析器会在不同状态间迁移，将模板解析为一个一个的token")]),t._v(" "),v("h4",{attrs:{id:"构造模板ast"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#构造模板ast"}},[t._v("#")]),t._v(" 构造模板AST")]),t._v(" "),v("p",[t._v("递归下降算法，")]),t._v(" "),v("p",[t._v("栈+token列表可以实现")]),t._v(" "),v("h4",{attrs:{id:"ast的转换"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#ast的转换"}},[t._v("#")]),t._v(" AST的转换")]),t._v(" "),v("ul",[v("li",[t._v("深度优先遍历")]),t._v(" "),v("li",[t._v("对节点的操作和访问解耦，存放在"),v("strong",[t._v("上下文context")]),t._v("中\n"),v("ul",[v("li",[t._v("currentNode： 当前正转换的节点")]),t._v(" "),v("li",[t._v("childIndex：当前节点在父节点的children中的位置索引")]),t._v(" "),v("li",[t._v("parent：用来存储当前转换的父节点")])])]),t._v(" "),v("li",[t._v("元素的进入与退出")])]),t._v(" "),v("h4",{attrs:{id:"生成js-ast"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生成js-ast"}},[t._v("#")]),t._v(" 生成JS AST")]),t._v(" "),v("p",[t._v("函数声明语句：")]),t._v(" "),v("ul",[v("li",[t._v("id 函数名称")]),t._v(" "),v("li",[t._v("params：函数的参数")]),t._v(" "),v("li",[t._v("body:函数体")])]),t._v(" "),v("h3",{attrs:{id:"解析器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#解析器"}},[t._v("#")]),t._v(" 解析器")]),t._v(" "),v("h3",{attrs:{id:"编译优化"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#编译优化"}},[t._v("#")]),t._v(" 编译优化")]),t._v(" "),v("h2",{attrs:{id:"服务端渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#服务端渲染"}},[t._v("#")]),t._v(" 服务端渲染")]),t._v(" "),v("h3",{attrs:{id:"同构渲染"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#同构渲染"}},[t._v("#")]),t._v(" 同构渲染")])])}),[],!1,null,null,null);v.default=a.exports}}]);