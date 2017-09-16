/*process.nextTick()表示在下一轮事件循环中调用*/
//global.process = process
process.nextTick(function () {
    console.log('nextTick callback!');
});
console.log('nextTick was set!');
// 打印结果顺序 nextTick was set!先于nextTick callback!

/*判断js在浏览器还是nodeJS环境中执行*/
if (typeof (window) === 'undefined') {
    console.log('nodeJS环境中执行');
} else {
    console.log('浏览器中执行');
}


