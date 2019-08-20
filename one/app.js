/*
 * @Author: DevZhang 
 * @Date: 2019-08-15 23:26:07 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-08-20 22:46:19
 */


const Koa = require('koa');
const app = new Koa();
const bodyParser = require('koa-bodyparser');
const router = require('./router');


app.use(bodyParser());

router(app)

app.listen(3000, () => {
    console.log('[demo] start-quick is starting at port 3000')
})
