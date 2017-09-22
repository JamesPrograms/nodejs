const fs = require('fs');

function addMapping(router,mapping){

}
function addControllers(router,dir){

}

module.exports = function (dir) {
    let controllers_dir = dir || 'controllers', // 如果不传参数，扫描目录默认为'controllers'
        router = require('koa-router')();
    addControllers(router,controllers_dir);
    return router.routes();
    };
