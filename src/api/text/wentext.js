/* eslint-disable */
import instance from '../../../node_modules/axios';
function lists(data) {
    return instance.post('http://39.107.105.166:8081/addPostList',data);
}
function inserttext(type,start){
    return instance.get('http://39.107.105.166:8081/getCatList?type='+type+'&start='+start)
}
function inserttable(data){
    return instance.post('http://39.107.105.166:8081/myart',data)
}
function queryAbout(data) {
    return instance.get('http://39.107.105.166:8081/getDetails',{
        params:data
    })
}
function ordersget(val,start){
    return instance.get('http://39.107.105.166:8081/globalSearch?content='+val+'&start='+start)
}
// 获取我的文章
function mytext(data){
    return instance.post('http://39.107.105.166:8081/myart',data)
}
// 删除文章
function delecttext(data){
    return instance.post('http://39.107.105.166:8081/delPostList',data)
}
export {lists,inserttext,queryAbout,inserttable,ordersget,mytext,delecttext}