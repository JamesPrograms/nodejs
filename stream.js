'use strict';
var fs = require('fs');

/*打开一个流及响应流的事件*/
var rs = fs.createReadStream('files/stream.txt', 'utf-8');
// 响应流的事件：data事件，表示流的数据已经可以读取
rs.on('data', function (chunk) {
    console.log(`data:${chunk}`);
});
// 响应流的事件：end事件，表示流已经到末尾
//rs.on('end', function () {
//    console.log('END');
//});
// 响应流的事件：error事件，表示出错
rs.on('error', function (err) {
    console.log('ERROR: ' + err);
});

/*以流的形式写入文件：只需要不断调用write()方法，最后以end()结束*/
var ws1 = fs.createWriteStream('files/output1.txt', 'utf-8');
ws1.write('使用Stream写入文本数据...\n');
ws1.write('END.');
ws1.end();

/*将readableStream.txt的数据通过pipe流入writableStream.txt*/
var rs = fs.createReadStream('files/readableStream.txt');
var ws = fs.createWriteStream('files/writableStream.txt');
rs.pipe(ws);


