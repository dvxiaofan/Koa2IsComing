/*
 * @Author: DevZhang 
 * @Date: 2019-08-15 23:26:07 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-08-19 23:01:45
 */


const Koa = require('koa')
const app = new Koa()

app.use(async (ctx, next) => {
    if (ctx.request.path === '/') {
        ctx.response.body = '<h1>index page</h1>';
    } else {
        await next();
    }
});

app.use(async (ctx, next) => {
    if (ctx.request.path === '/home') {
        ctx.response.body = '<h1>home page</h1>';
    } else {
        await next();
    }
});

app.use(async (ctx, next) => {
    if (ctx.request.path === '/404') {
        ctx.response.body = '<h1>404 Not Found</h1>';
    } else {
        await next();
    }
});


app.listen(3000, () => {
    console.log('[demo] start-quick is starting at port 3000')
})
