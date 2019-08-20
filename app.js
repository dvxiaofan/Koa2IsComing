/*
 * @Author: DevZhang 
 * @Date: 2019-08-15 23:26:07 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-08-20 16:55:38
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

router.all('/', async (ctx, next) => {
    console.log('match all method');
    await next();
})

// 调用路由中间件
app.use(router.routes())

app.listen(3000, () => {
    console.log('[demo] start-quick is starting at port 3000')
})
