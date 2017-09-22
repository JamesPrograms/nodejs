var fn_index = async (ctx, next) => {
    ctx.response.body = `<form action="/tryPost" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
};

var fn_tryPost = async (ctx,next) => {
    var name = ctx.request.body || '',
        password = ctx.request.body || '';
    if (name == 'koa' && password == '1111') {
        ctx.response.body = `<h1>hello ${name}</h1>`;
    } else {
        ctx.response.body = `<p>Login faled!</p>
        <p><a href="/">try again please.</a></p> `;
    }
};

module.exports = {
    'GET /': fn_index,
    'POST /': fn_tryPost
};
