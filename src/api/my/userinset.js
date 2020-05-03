/* eslint-disable */
import instance from '../../../node_modules/axios';
// 登录
function loginin(data) {
    return instance.post('http://39.107.105.166:8081/login',data)
}
// 注册
function logince(data) {
    return instance.post('http://39.107.105.166:8081/register',data)
}
// 验证用户名
function findUsers(data){
    return instance.get('http://39.107.105.166:8081/queryName',{
        params:data
    })
}
// 验证手机号
function findtell(data){
    return instance.get('http://39.107.105.166:8081/phone',{
        params:data
    })
}
// 手机验证码请求
function phonepay(data){
    return instance.post('http://39.107.105.166:8081/VCode',data)
}
// 获取个人信息
function usersinsert(data){
    return instance.get('http://39.107.105.166:8081/getPersonMsg',{
        params:data
    })
}
// 修改个人信息 
function usersup(data){
    return instance.post('http://39.107.105.166:8081/updatePerson',data)
}
export {loginin,findUsers,findtell,logince,phonepay,usersinsert,usersup,uploadtu}