/*搭建文本服务器fileServer*/
// 获取相应模块
var fs = require('fs'),
    http = require('http'),
    url = require('url'),
    path = require('path');

// 从命令行参数获取root目录，默认是当前目录:
var root = path.resolve(process.argv[2] || '.');
console.log('Static root dir: ' + root); // Static root dir: E:\gitHub\NodeJS

// 创建服务器：
var server = http.createServer(function(request,response){
    // 获得URL的pathname，类似 '/css/bootstrap.css'
    var pathname = url.parse(request.url).pathname; // index.html
    // 获得对应的本地文件路径，类似 '/srv/www/css/bootstrap.css'
    var filepath = path.join(root,pathname); // E:\gitHub\NodeJS\index.html
    // 获取文件状态
    fs.stat(filepath,function(err,stat){
        if (!err && stat.isFile()) {
            // 没有出错并且文件存在
            console.log('200 '+request.url);
            // 发送200响应
            response.writeHead(200);
            // 将文件流导向response
            // 由于response对象本身是一个Writable Stream，直接用pipe()方法就实现了自动读取文件内容并输出到HTTP响应
            fs.createReadStream(filepath).pipe(response);
        } else {
            // 出错了或者文件不存在
            console.log('404 '+request.url);
            // 发送404响应
            response.writeHead(404);
            response.end('404 Not Found!');
        }
    })
});
// 监听8080
server.listen(8080);