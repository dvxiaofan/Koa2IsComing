/*
 * @Author: DevZhang 
 * @Date: 2019-08-15 23:26:07 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-08-19 23:20:55
 */


const Koa = require('koa');
const app = new Koa();
// require koa-router 返回的函数
const router = require('koa-router')();

// 添加路由
router.get('/', async (ctx, next) => {
    ctx.response.body = `<h1>index page</h1>`
})

router.get('/home', async (ctx, next) => {
    ctx.response.body = `<h1>home home</h1>`
})

router.get('/404', async (ctx, next) => {
    ctx.response.body = `<h1>404 404</h1>`
})

// 调用路由中间件
app.use(router.routes())

app.listen(3000, () => {
    console.log('[demo] start-quick is starting at port 3000')
})
