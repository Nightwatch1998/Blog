(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{384:function(a,t,s){"use strict";s.r(t);var e=s(10),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"gdal教程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gdal教程"}},[a._v("#")]),a._v(" GDAL教程")]),a._v(" "),t("h2",{attrs:{id:"背景介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景介绍"}},[a._v("#")]),a._v(" 背景介绍")]),a._v(" "),t("p",[a._v("GDAL（Geospatial Data Abstraction library）是一个开源的地理空间数据抽象库，提供了读写和转换地理空间数据的工具和库函数。支持python、C/C++、Java、C#、Ruby、Perl等语言。")]),a._v(" "),t("p",[a._v("主要功能如下：")]),a._v(" "),t("ul",[t("li",[a._v("数据格式支持：支持常见的GeoTIFF、shapefile、KML、NetCDF、GeoJSon等等")]),a._v(" "),t("li",[a._v("数据转换和投影：支持在不同地理坐标系和投影坐标系进行转换")]),a._v(" "),t("li",[a._v("栅格数据处理：提供剪切、融合、重采样、地理参考和颜色校正等操作")]),a._v(" "),t("li",[a._v("矢量数据处理：空间查询、缓冲区分析、转换等操作")])]),a._v(" "),t("p",[t("img",{attrs:{src:"https://stag-blog.oss-cn-beijing.aliyuncs.com/picture/GDAL-summary.png",alt:"GDAL-summary"}})]),a._v(" "),t("h2",{attrs:{id:"环境配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境配置"}},[a._v("#")]),a._v(" 环境配置")]),a._v(" "),t("p",[a._v("本文主要在windows环境下安装")]),a._v(" "),t("h3",{attrs:{id:"使用-whl文件本地安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-whl文件本地安装"}},[a._v("#")]),a._v(" 使用.whl文件本地安装")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://www.lfd.uci.edu/~gohlke/pythonlibs/#gdal",target:"_blank",rel:"noopener noreferrer"}},[a._v("gdal二进制包下载"),t("OutboundLink")],1),a._v("，找到对应的GDAL版本和python版本的whl文件，例如我这里下载是的GDAL3.4.3，python3.9")]),a._v(" "),t("p",[a._v("进入下载文件路径的终端")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd F:\\ChromeDownload\npip install GDAL-3.4.3-cp39-cp39-win_amd64.whl\npip list\n")])])]),t("h3",{attrs:{id:"添加命令行工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加命令行工具"}},[a._v("#")]),a._v(" 添加命令行工具")]),a._v(" "),t("p",[a._v("首先查看gdal包所在路径")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("pip show gdal\n")])])]),t("p",[a._v("然后将gdal包所在路径下的osgeo和osgeo_utils文件夹添加到path环境变量")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("E:\\Program Files x86\\Python3.10\\Lib\\site-packages\\osgeo\nE:\\Program Files x86\\Python3.10\\Lib\\site-packages\\osgeo_utils\n")])])]),t("p",[a._v("命令行测试")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("ogr2ogr --version\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);