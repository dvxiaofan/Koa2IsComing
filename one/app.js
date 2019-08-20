/*
 * @Author: DevZhang 
 * @Date: 2019-08-15 23:26:07 
 * @Last Modified by: zhang
 * @Last Modified time: 2019-08-20 17:22:47
 */


const Koa = require('koa');
const app = new Koa();
// require koa-router 返回的函数
const router = require('koa-router')();

// 添加路由
router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`
    // await next();
})

router.get('/home', async (ctx, next) => {
    console.log(ctx.request.query);
    console.log(ctx.request.querystring);
    ctx.response.body = `<h1>HOME page</h1>`
})

router.get('/404', async (ctx, next) => {
    ctx.response.body = `<h1>404 page</h1>`
})

router.get('/home/:id/:name', async (ctx, next) => {
    console.log(ctx.params);
    ctx.response.body = `<h1>HOME page</h1>`
})

// 调用路由中间件
app.use(router.routes())

app.listen(3000, () => {
    console.log('[demo] start-quick is starting at port 3000')
})
