/*
 * @Author: DevZhang 
 * @Date: 2019-08-20 22:48:02 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-08-21 15:55:31
 */


const HomeService = require('../service/home')

module.exports = {
    index: async(ctx, next) => {
        ctx.response.body = `<h1>index page</h1>`
    },

    404: async (ctx, next) => {
        ctx.response.body = `<h1>404 page</h1>`
    },

    home: async (ctx, next) => {
        console.log(ctx.request.query);
        console.log(ctx.request.querystring);
        ctx.response.body = `<h1>HOME page</h1>`
    },

    homeParams: async (ctx, next) => {
        console.log(ctx.params);
        ctx.response.body = `<h1>HOME page</h1>`
    },

    login: async (ctx, next) => {
        await ctx.render('home/login', {
            btnName: '登录'
        })
    },

    register: async(ctx, next) => {
        let {
            name,
            password
        } = ctx.request.body

        let data = await HomeService.register(name, password)
        ctx.response.body = data;
    }
}