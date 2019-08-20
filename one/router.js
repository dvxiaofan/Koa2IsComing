/*
 * @Author: DevZhang 
 * @Date: 2019-08-20 22:41:00 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-08-20 22:54:08
 */


const router = require('koa-router')()
const HomeController = require('./controller/home')

module.exports = (app) => {
    router.get('/', HomeController.index)

    router.get('/home', HomeController.home)
    
    router.get('/404', HomeController[404])
    
    router.get('/home/:id/:name', HomeController.homeParams)
    
    router.get('/user', HomeController.login)
    
    router.post('/user/register', HomeController.register)

    app.use(router.routes())
        .use(router.allowedMethods())
}