'use strict';

var http = require('http');

/*搭建最简单的http服务器*/
// 创建http服务器,并传入回调函数
var server = http.createServer(function(request,response){
    // 回调函数接收request和response对象
    // 获取http请求的method和url
    console.log(request.method + ':' + request.url);
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html
    response.writeHead(200,{'Content-Type':'text/html'});
    // 将HTTP响应的HTML内容写入response:
    response.end('<h1>Hello james!</h1>');
});
// 让服务器监听8080端口
server.listen(8080);

/*内置的url模块*/
var url = require('url');
// 通过url.parse将一个字符串解析成一个url对象，
// 该对象包括protocol、host、hostname、port、path、pathname、query、href、hash等内容
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));

/*内置的path模块*/
var path = require('path');
// 解析当前目录
var workDir = path.resolve('.');
console.log(workDir);  // E:\gitHub\NodeJS
// 组合完整的目录路径
var filePath = path.join(workDir,'pub','index.html');
console.log(filePath); // E:\gitHub\NodeJS\pub\index.html

