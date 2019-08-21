/*
 * @Author: DevZhang 
 * @Date: 2019-08-15 23:26:07 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-08-21 22:07:28
 */


const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const nunjucks = require('koa-nunjucks-2')
const staticFiles = require('koa-static')

const app = new Koa()
const router = require('./router')

app.use(staticFiles(path.resolve(__dirname, './public')))

app.use(nunjucks({
    ext: 'html',
    path: path.join(__dirname, 'views'), // 指定视图目录
    nunjucksConfig: {
        trimBlocks: true    // 开启转义, 防Xss
    }
}));

app.use(bodyParser());

router(app)

app.listen(3000, () => {
    console.log('[demo] start-quick is starting at port 3000')
})
