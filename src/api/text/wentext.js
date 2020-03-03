/* eslint-disable */
import instance from '../../../node_modules/axios';
function lists(data) {
    return instance.post('http://39.107.105.166:8081/addPostList',data);
}
function inserttext(type,start){
    return instance.get('http://39.107.105.166:8081/getCatList?type='+type+'&start='+start)
}
function inserttable(start){
    return instance.get('http://39.107.105.166:8081/getCatList?start='+start)
}
function queryAbout(id) {
    return instance.get('http://39.107.105.166:8081/getDetails?id='+id)
}
export {lists,inserttext,queryAbout,inserttable}