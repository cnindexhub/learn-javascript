//入口文件

//模块引入
import * as m1 from "./module1.js";  // 部分暴露
import * as m2 from "./module2.js";  // 默认暴露
import * as m3 from "./module3.js";  // 统一暴露

// console.log(m1);
// console.log(m2);
// console.log(m3);
//
// m1.work();
// m2.default.work();
// m3.work()

//修改背景颜色为粉色
import $ from 'jquery';// const $ = require("jquery");
$('body').css('background','pink');


