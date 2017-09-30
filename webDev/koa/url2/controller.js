const fs = require('fs');

function addMapping(router,mapping){
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
function addControllers(router,dir){
    fs.readdirSync(__dirname + '/' + dir).filter((f) => {
        return f.endsWith('.js');
    }).forEach((f) => {
        console.log(`process controller: ${f}...`);
        let mapping = require(__dirname + '/' + dir + '/' + f);
        addMapping(router, mapping);
    });
}

module.exports = function (dir) {
    let controllers_dir = dir || 'controllers', // 如果不传参数，扫描目录默认为'controllers'
        router = require('koa-router')();
    addControllers(router,controllers_dir);
    return router.routes();
    };
