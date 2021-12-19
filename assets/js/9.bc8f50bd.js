(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{436:function(t,n,e){"use strict";e.r(n);var a=e(22),s=Object(a.a)({},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"常见的-bungeecord-开发问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见的-bungeecord-开发问题"}},[t._v("#")]),t._v(" 常见的 BungeeCord 开发问题")]),t._v(" "),e("p",[t._v("本篇教程是关于 BungeeCord 插件开发时常见的问题以及如何解决它们。")]),t._v(" "),e("h2",{attrs:{id:"创建新线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#创建新线程"}},[t._v("#")]),t._v(" 创建新线程")]),t._v(" "),e("p",[t._v("创建新的线程 （例如，创建 Thread（线程），Timer（定时器），Executor（执行器）） 在#948及其以上版本是不被鼓励的，并且在未来的版本将被禁止。")]),t._v(" "),e("p",[t._v("推荐的解决方案是使用 BungeeCord 的线程调度器（Scheduler）：")]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[t._v("  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getProxy")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getScheduler")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("runAsync")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Runnable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("run")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("如果你需要获得一个 "),e("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/util/concurrent/Future.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Future"),e("OutboundLink")],1),t._v("，包装 Callable/Runnable 在一个 "),e("a",{attrs:{href:"http://docs.oracle.com/javase/8/docs/api/java/util/concurrent/FutureTask.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("FutureTask"),e("OutboundLink")],1),t._v(" 中。")]),t._v(" "),e("p",[t._v("当你不能使用 BungeeCord 线程调度器来运行异步任务的情况下，你有以下两个选择：")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("如果 (外部) API 有能力提供一个 Executor 或 ExecutorService，那么提供它在你的\nPlugin.getExecutorService()。")])]),t._v(" "),e("li",[e("p",[t._v("在异步任务中创建对象。")])])]),t._v(" "),e("h2",{attrs:{id:"阻塞-i-o-线程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#阻塞-i-o-线程"}},[t._v("#")]),t._v(" 阻塞 I/O 线程")]),t._v(" "),e("p",[t._v("在 BungeeCord 中，绝大多数事件和指令都运行在网络I/O线程（network I/O threads）。由于 BungeeCord 的特性（在所有线程有着高复用率），执行阻塞操作（例如I/O操作，获取远端URL内容，查询数据库...）将会降低性能。")]),t._v(" "),e("p",[t._v("通常来说：")]),t._v(" "),e("ol",[e("li",[e("p",[e("strong",[t._v("总是异步运行可导致阻塞的任务。")]),t._v(" 如果你不知道什么操作可导致阻塞，绝大多数情况下访问外部资源（例如硬盘，或者数据库）是可导致阻塞的。")])]),t._v(" "),e("li",[e("p",[e("strong",[t._v("不要延迟事件或命令处理使其超过所需时间。")]),t._v(" 如果你需要延迟处理一个事件并且它继承 "),e("a",{attrs:{href:"http://ci.md-5.net/job/BungeeCord/ws/api/target/apidocs/net/md_5/bungee/api/event/AsyncEvent.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("AsyncEvent"),e("OutboundLink")],1),t._v("，使用它的 registerIntent()（在事件处理器中开始处理异步事件）和 completeIntent()（结束任务，该方法应在异步任务中调用）"),e("code",[t._v("（译者注：该方法通知事件处理器当前异步任务完成，继续处理该事件）")]),t._v("方法。"),e("strong",[t._v("你应该异步运行可导致阻塞的任务")]),t._v("，但是，这将允许事件被延迟处理，且当所有的异步操作完成时继续。")])])]),t._v(" "),e("h2",{attrs:{id:"尝试混用-bukkit-和-bungeecord-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#尝试混用-bukkit-和-bungeecord-api"}},[t._v("#")]),t._v(" 尝试混用 Bukkit 和 BungeeCord API")]),t._v(" "),e("p",[t._v("BungeeCord 不包括 Bukkit API，即使包括 Bukkit API 也是没用的，它不能操作后端的 Bukkit 服务器。此外：Spigot 也不包括 BungeeCord API，即使包括也是没用的，它也不能操作你的 BungeeCord。")]),t._v(" "),e("p",[t._v("注意 BungeeCord 的聊天组件API（Chat Component API） 是包括在 Spigot 内的，然而这个API与 BungeeCord 是分离的。")])])}),[],!1,null,null,null);n.default=s.exports}}]);