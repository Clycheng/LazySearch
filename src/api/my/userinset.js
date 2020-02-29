/* eslint-disable */
import instance from '../../../node_modules/axios';
function userinset(data) {
    return instance.post('http://47.98.213.151:8081/register',data);
}
function loginin(data) {
    return instance.post('http://47.98.213.151:8081/login',data)
}
function findUsers(data){
    return instance.get('http://47.98.213.151:8081/queryName',{
        params:data
    })
}
export {userinset,loginin,findUsers}