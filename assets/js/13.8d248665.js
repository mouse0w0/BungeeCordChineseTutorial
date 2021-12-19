(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{442:function(e,s,a){"use strict";a.r(s);var n=a(22),t=Object(n.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"聊天组件-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#聊天组件-api"}},[e._v("#")]),e._v(" 聊天组件 API")]),e._v(" "),a("p",[e._v("使用 BungeeCord 聊天 API 构建消息。")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://ci.md-5.net/job/BungeeCord/ws/chat/target/apidocs/overview-summary.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chat API Javadoc"),a("OutboundLink")],1)]),e._v(" "),a("h2",{attrs:{id:"基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[e._v("#")]),e._v(" 基础")]),e._v(" "),a("p",[e._v("最简单的组件是 TextComponent（文本组件），在 BungeeCord 的使用方法如下:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('player.sendMessage( new TextComponent( "Hello world" ) );\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("或者你想在 Spigot 中使用:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('player.spigot().sendMessage( new TextComponent( "Hello world" ) );\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("这是一个简单的消息，没有格式和颜色。")]),e._v(" "),a("h2",{attrs:{id:"颜色与格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#颜色与格式"}},[e._v("#")]),e._v(" 颜色与格式")]),e._v(" "),a("p",[e._v("每个组件都支持如下功能:")]),e._v(" "),a("ul",[a("li",[e._v("颜色（Color）")]),e._v(" "),a("li",[e._v("粗体（Bold）")]),e._v(" "),a("li",[e._v("斜体（Italic）")]),e._v(" "),a("li",[e._v("下划线（Underline）")]),e._v(" "),a("li",[e._v("删除线（Strikethrough）")]),e._v(" "),a("li",[e._v("乱码（Obfuscate）")]),e._v(" "),a("li",[e._v("事件（Events）（在下文中会详细介绍）")])]),e._v(" "),a("p",[e._v("举个例子:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('TextComponent message = new TextComponent( "Hello world" );\nmessage.setColor( ChatColor.RED );\nmessage.setBold( true );\nplayer.sendMessage( message );\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v('这将显示 "Hello World"（红色，加粗）. 任何格式和事件也应用于子组件，除非子组件覆盖设置。例如:')]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('TextComponent message = new TextComponent( "Hello " );\nmessage.setColor( ChatColor.RED );\nmessage.setBold( true );\nTextComponent world = new TextComponent( "world" );\nworld.setColor( ChatColor.BLUE );\nmessage.addExtra( world );\nmessage.addExtra( "!" );\nplayer.sendMessage( message );\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br")])]),a("p",[e._v('将会显示 "Hello world!"（全文为粗体，"Hello"和"!"为红色，"world"为蓝色）')]),e._v(" "),a("h2",{attrs:{id:"事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件"}},[e._v("#")]),e._v(" 事件")]),e._v(" "),a("p",[e._v('事件允许当文本被操作（点击或鼠标悬浮）时执行动作。目前 Minecraft 仅支持两个事件，分别是 HoverEvent（鼠标悬浮事件）和 ClickEvent（点击事件）。两个事件都有一个动作（当事件发生之后执行什么）和一个数值（这个动作的参数）。例如，如果一个点击事件的动作是 OPEN_URL（打开URL），那么它的值必须是一个有效的URL，例如"http://spigotmc.org"。')]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('TextComponent message = new TextComponent( "Click me" );\nmessage.setClickEvent( new ClickEvent( ClickEvent.Action.OPEN_URL, "http://spigotmc.org" ) );\nmessage.setHoverEvent( new HoverEvent( HoverEvent.Action.SHOW_TEXT, new ComponentBuilder("Goto the Spigot website!").create() ) );\nplayer.spigot().sendMessage( message );\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("h2",{attrs:{id:"客户端翻译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#客户端翻译"}},[e._v("#")]),e._v(" 客户端翻译")]),e._v(" "),a("p",[e._v("TranslatableComponent（可翻译组件）可以用来发送翻译键（key）让客户端翻译，这意味着你只能使用 Minecraft 提供的文本（"),a("a",{attrs:{href:"https://github.com/SpigotMC/BungeeCord/blob/master/chat/src/main/resources/mojang-translations/en_US.properties",target:"_blank",rel:"noopener noreferrer"}},[e._v("这里查看"),a("OutboundLink")],1),e._v("），除非使用一个资源包来添加更多文本。一些支持参数的翻译的参数可以是TranslatableComponent（或者只是 TextComponent）。")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('TranslatableComponent giveMessage = new TranslatableComponent( "commands.give.success" );\nTranslatableComponent item = new TranslatableComponent( "item.swordDiamond.name" );\nitem.setColor( ChatColor.GOLD );\ngiveMessage.addWith( item );\ngiveMessage.addWith( "32" );\nTextComponent username = new TextComponent( "Thinkofdeath" );\nusername.setColor( ChatColor.AQUA );\ngiveMessage.addWith( username );\nplayer.sendMessage( giveMessage );\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v('以上的代码在客户端使用的语言为en_US（美式英语）时将会显示"Given Diamond Sword * 32 to Thinkofdeath"， 但如果客户端使用的语言为zh_CN（简体中文）时将会显示"成功将 钻石剑 * 32 给予 Thinkofdeath"。')]),e._v(" "),a("h2",{attrs:{id:"组件建造者-component-builder"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#组件建造者-component-builder"}},[e._v("#")]),e._v(" 组件建造者（Component Builder）")]),e._v(" "),a("p",[e._v("简单的消息可以使用 ComponentBuilder（组件建造者）节省很多工作。ComponentBuilder 是一个链式结构的对象，允许快速创建消息。例如：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('player.sendMessage( new ComponentBuilder( "Hello " ).color( ChatColor.RED ).bold( true ).append( "world" ).color( ChatColor.BLUE ).append( "!" ).color( ChatColor.RED ).create() );\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v('这将显示 "Hello world!"')]),e._v(" "),a("h2",{attrs:{id:"常见的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见的问题"}},[e._v("#")]),e._v(" 常见的问题")]),e._v(" "),a("p",[e._v("直接创建 BaseComponent 实例是没用的 (例如 player.sendMessage( new BaseComponent(){} )😉。 应使用 TextComponent 或 TranslatableComponent。"),a("br"),e._v('\n使用旧版的颜色代码 (例如 player.sendMessage( new TextComponent( ChatColor.RED + "😦" ) )😉 将会不能很好的显示甚至导致客户端异常。使用 TextComponent.fromLegacyText() 方法将旧格式转换为新格式')]),e._v(" "),a("h2",{attrs:{id:"动作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动作"}},[e._v("#")]),e._v(" 动作")]),e._v(" "),a("p",[e._v("所有的 ClickEvent（点击事件） 和 HoverEvent（悬浮事件）的动作如下所示：")]),e._v(" "),a("h3",{attrs:{id:"点击事件动作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#点击事件动作"}},[e._v("#")]),e._v(" 点击事件动作")]),e._v(" "),a("p",[e._v("当用户点击消息时，这些动作将会执行：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Action.OPEN_URL //在用户的浏览器打开指定URL\n\nAction.OPEN_FILE //在用户的电脑打开指定文件\n\nAction.RUN_COMMAND //让用户运行指令\n\nAction.SUGGEST_COMMAND //在用户的输入框设置文字\n\nAction.CHANGE_PAGE //改变书本的页码\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("h3",{attrs:{id:"悬浮事件动作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#悬浮事件动作"}},[e._v("#")]),e._v(" 悬浮事件动作")]),e._v(" "),a("p",[e._v("当用户鼠标指针悬浮在消息上时，这些动作将会执行：")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("Action.SHOW_TEXT //显示一个文本\n\nAction.SHOW_ACHIEVEMENT //显示一个成就及其介绍\n\nAction.SHOW_ITEM //显示一个物品的名字和其他信息\n\nAction.SHOW_ENTITY //显示一个实体的名字，ID和其他信息\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])])])}),[],!1,null,null,null);s.default=t.exports}}]);