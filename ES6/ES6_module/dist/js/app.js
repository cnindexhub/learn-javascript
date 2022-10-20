"use strict";

var _module = require("./module1.js");

var m1 = _interopRequireWildcard(_module);

var _module2 = require("./module2.js");

var m2 = _interopRequireWildcard(_module2);

var _module3 = require("./module3.js");

var m3 = _interopRequireWildcard(_module3);

var _jquery = require("jquery");

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// 统一暴露

// 部分暴露
console.log(m1); // 默认暴露
//入口文件

//模块引入

console.log(m2);
console.log(m3);

m1.work();
m2.default.work();
m3.work();

//修改背景颜色为粉色
// const $ = require("jquery");
(0, _jquery2.default)('body').css('background', 'pink');