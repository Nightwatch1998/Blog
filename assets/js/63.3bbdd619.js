(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{339:function(a,t,s){"use strict";s.r(t);var e=s(10),l=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"linux命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux命令"}},[a._v("#")]),a._v(" Linux命令")]),a._v(" "),t("h2",{attrs:{id:"网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网络"}},[a._v("#")]),a._v(" 网络")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('显示附近的无线网络信息\nsudo nmcli device wifi\n连接WiFi\nsudo nmcli device wifi connect "wifi_name" password "wifi_password"\n修改为自动连接\nsudo nmcli connection modify "wifi_name" connection.autoconnect yes \n开启关闭服务 查看状态\nsudo systemctl stop/start/status filter.service\n\n')])])]),t("h2",{attrs:{id:"系统服务命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#系统服务命令"}},[a._v("#")]),a._v(" 系统服务命令")]),a._v(" "),t("p",[a._v("debain 查看已安装服务")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("systemctl list-units --all --type=service_debian\n")])])]),t("h2",{attrs:{id:"防火墙管理工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#防火墙管理工具"}},[a._v("#")]),a._v(" 防火墙管理工具")]),a._v(" "),t("h3",{attrs:{id:"utw"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#utw"}},[a._v("#")]),a._v(" utw")]),a._v(" "),t("p",[a._v("首先必须要先启动SSL端口 ，不然直接打开ufw，会覆盖22端口的配置，无法访问")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo ufw allow ssh\nsudo ufw enable\n")])])]),t("p",[a._v("打开端口号")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo ufw allow http #如果http服务存在\nsudo ufw allow 'Nginx HTTP' #如果Nginx服务存在\nsudo ufw allow 80 #tcp和udp 80\nsudo ufw allow 80/tcp #仅tcp 80\nsudo ufw allow 7100:7200/tcp #端口范围\n")])])]),t("p",[a._v("关闭端口")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("sudo ufw deny 80\n")])])]),t("h3",{attrs:{id:"iptables-补充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iptables-补充"}},[a._v("#")]),a._v(" iptables(补充)")]),a._v(" "),t("h3",{attrs:{id:"firewalld-补充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firewalld-补充"}},[a._v("#")]),a._v(" firewalld(补充)")])])}),[],!1,null,null,null);t.default=l.exports}}]);