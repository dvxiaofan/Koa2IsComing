/*
 * @Author: DevZhang 
 * @Date: 2019-08-20 22:56:58 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-08-21 22:17:32
 */


module.exports = {
    register: async (name, pwd) => {
        let data
        if (name === 'xiaofan' && pwd === '123456') {
            data = {
                status: 0,
                data: {
                    title: '个人中心',
                    content: '欢迎进入个人中心'
                }
            }
        } else {
            data = {
                status: -1,
                data: {
                    title: '登陆失败',
                    content: '请输入正确的账号信息'
                }
            }
        }
        return data
    }
}