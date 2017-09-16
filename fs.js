/**fs为NodeJS内置的文件系统模块，负责读写文件，分为同步和异步两种方法**/

/*异步读取文件*/
var fs = require('fs');
fs.readFile('files/sample.txt','utf-8',function (err,data) { // Node.js回调函数参数：第一个参数代表错误信息，第二个参数代表结果
   if (err) {
       console.log(err);
   } else {
       console.log(data); // sample.txt文件内容：sample to test fs module.
   }
});

/*同步读取文件*/
var data = fs.readFileSync('files/sample.txt','utf-8');
console.log(data);      // sample.txt文件内容：sample to test fs module.
// 同步读取文件不接受回调函数，如果同步读取文件发生错误，则需要用try...catch捕获该错误
/*try {
    var data1 = fs.readFileSync('files/sample.txt', 'utf-8');
    console.log(data1);
} catch (err) {
    console.log(err)
}*/

/*异步写入文件*/
/*var writeData = 'hello james!';
fs.writeFile('files/sample.txt',writeData,function (err){
   if (err) {
       console.log(err);
   }
});*/

/*同步写入文件*/
/*var writeSyncdata = 'Hello, Node.js';
fs.writeFileSync('files/sample.txt', writeSyncdata);*/

/*获取文件信息*/
fs.stat('files/sample.txt', function (err, stat) {
    if (err) {
        console.log(err);
    } else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});

/*在fs模块中，提供同步方法是为了方便使用。那我们到底是应该用异步方法还是同步方法呢？
 异步：由于Node环境执行的JavaScript代码是服务器端代码，所以，绝大部分需要在服务器运行期反复执行业务逻辑的代码，
       必须使用异步代码，否则，同步代码在执行时期，服务器将停止响应，因为JavaScript只有一个执行线程。
 同步：服务器启动时如果需要读取配置文件，或者结束时需要写入到状态文件时，可以使用同步代码，
       因为这些代码只在启动和结束时执行一次，不影响服务器正常运行时的异步执行*/

