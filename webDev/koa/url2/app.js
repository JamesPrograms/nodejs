/**使用koa的js**/
// 先导入fs模块，然后用readdirSync列出文件
// 这里可以用sync是因为启动时只运行一次，不存在性能问题
var files = fs.readdirSync(__dirname +'controllers');
// 过滤出.js文件
var js_files = files.filter((f) => {
    return f.endsWith('.js');
});

// 处理每个js文件
for (var f of js_files){
    console.log(f);
    // 导入js文件
    let mapping = require(__dirname +'/controllers/'+f);
    for (var url in mapping) {
        if (url.startsWith('GET ')) {
            // 如果url类似"GET XXX"
            var path = url.substring(4);   // path: /
            router.get(path,mapping[url]); // mapping[url]: fn_index
        } else if (url.startsWith('POST')) {
            // 如果url类似"POST XXX"
            var path = url.substring(5);   // path: /
            router.post(path,mapping[url]) // mapping[url]: fn_tryPost
        } else {
            console.log(`invalid URL: ${url}`);
        }
    }
}