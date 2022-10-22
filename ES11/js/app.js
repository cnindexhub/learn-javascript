// 固定导入 hello.js
// import * as helloJs from './hello.js';

let btn = document.getElementById("btn");

btn.addEventListener('click', function () {
    // 动态导入module
    import('./hello.js').then(module => {
        module.hello();
    })
})