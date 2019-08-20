/*
 * @Author: DevZhang 
 * @Date: 2019-08-20 22:56:58 
 * @Last Modified by: DevZhang
 * @Last Modified time: 2019-08-20 23:02:09
 */


module.exports = {
    register: async (name, pwd) => {
        let data
        if (name === 'xiaofan' && pwd === '123456') {
            data = `Hello ${name}`;
        } else {
            data = '账号信息错误'
        }
        return data
    }
}