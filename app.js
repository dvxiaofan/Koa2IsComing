/*
 * @Author: DevZhang 
 * @Date: 2019-08-15 23:26:07 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-08-16 21:38:19
 */


const Koa = require('koa')
const app = new Koa()

// app.use(async (ctx) => {
//     ctx.body = 'hello koa2'
// })

app.use(async (ctx, next) => {
    await next()
    ctx.response.type = 'text/html'
    ctx.response.body = '<h1>你好, 亲爱的小明同学</h1>'
})

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')