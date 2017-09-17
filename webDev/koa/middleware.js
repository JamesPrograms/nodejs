const Koa = require('koa');
// 创建一个Koa对象表示web app本身
const app = new Koa();
app.use(async (ctx, next) => {
    console.log(`${ctx.request.method} ${ctx.request.url}`); // 打印URL
    await next(); // 调用下一个middleware
});

app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    console.log(`Time: ${ms}ms`); // 打印耗费时间
});

app.use(async (ctx, next) => {
    await next(); // 调用下一个middleware
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>Hello, koa2!</h1>';
    console.log(1)
});
// 在端口3000监听:
app.listen(3000);

/*
* 以上的打印顺序为GET /    1    Time:30ms
* 原因：koa会把很多async函数组成处理链，每个async函数都可以做一些自己的事情，然后用await next()来调用下一个async函数。
* 每一个async函数被称为一个middleware
* /
