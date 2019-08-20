/*
 * @Author: DevZhang 
 * @Date: 2019-08-15 23:26:07 
 * @Last Modified by: zhang
 * @Last Modified time: 2019-08-20 17:40:43
 */


const Koa = require('koa');
const app = new Koa();
// require koa-router 返回的函数
const router = require('koa-router')();
const bodyParser = require('koa-bodyparser');


app.use(bodyParser());

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

router.get('/user', async (ctx, next) => {
    ctx.response.body = 
    `
        <form action="/user/register" method="post">
            <input name="name" type="text" placeholder="请输入用户名" />
            <br/>
            <input name="password" type="text" placeholder="请输入密码" />
            <br/>
            <button>gogogo</button>
        </form>
    `
})

router.post('/user/register', async (ctx, next) => {
    let {name, password} = ctx.request.body;
    if (name === 'xiaofan' && password === '123456') {
        ctx.response.body = `Hello ${name}`;
    } else {
        ctx.response.body = '账号信息错误'
    }
})

// 调用路由中间件
app.use(router.routes())

app.listen(3000, () => {
    console.log('[demo] start-quick is starting at port 3000')
})
