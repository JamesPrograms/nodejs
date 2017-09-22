// 获取koa模块
const Koa = require('koa');
// 获取路由模块，因为require('koa-router')返回的是函数，所以需要加()
const router = require('koa-router')();
// 获取解析request.body的koa-bodyparser模块
const bodyParser = require('koa-bodyparser');
const app = new Koa();

/*路由模块的get请求*/
router.get('/tryGet/:name',async(ctx,next) => {
    // 用ctx.params.name获取url中的参数
   var name = ctx.params.name;
    console.log(name);
    ctx.response.body = `<h1>hello,${name}</h1>`;
});

/*路由模块的post请求*/
// post请求通常发送表单或则JSON数据，在request的body中发送，但Node.js的原始
// request对象和koa的request对象都不提供解析request body的功能，需要引入解析
// request的middleware koa-bodyparser
router.get('/',async (ctx,next) => {
    ctx.response.body = `<form action="/tryPost" method="post">
    <p>Name:<input name="name" value="koa"></p>
    <p>Password:<input name="password" type="password"></p>
    <p><input type="submit" value="Submit"></p>
    </form>`;
});
router.post('/tryPost',async (ctx,next) => {
    var name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name == 'koa' && password == '1111') {
        ctx.response.body = `<h1>Welcome,${name}</h1>`;
    } else {
        ctx.response.body = `<h1>login failed!</h1>
        <p><a href="/">Try again please.</a></p>`;
    }
});

// 使用koa-bodyparser，koa-bodyparser必须在router之前被注册到app对象上
app.use(bodyParser());
// 使用路由
app.use(router.routes());
// 在3000端口开启监听
app.listen(3000);