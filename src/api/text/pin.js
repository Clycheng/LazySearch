/* eslint-disable */
import instance from '../../../node_modules/axios';
function pingluned(data) {
    return instance.post('http://39.107.105.166:8081/addComments',data);
}
// 关注
function guanzuo(data){
    return instance.post('http://39.107.105.166:8081/follow',data)
}
// 获取我的关注
function followmy(data){
    return instance.post('http://39.107.105.166:8081/getFollow',data)
}
// 点赞
function zanfab(data){
    return instance.post('http://39.107.105.166:8081/addFab',data)
}
// 热门推荐首页
function hotmen(){
    return instance.get('http://39.107.105.166:8081/getHotList')
}
// 作者排行榜
function authers(){
    return instance.get('http://39.107.105.166:8081/getAuthorList')
}
// 获取我的粉丝
function fenmy(data){
    return instance.post('http://39.107.105.166:8081/getFollow',data)
}
export {pingluned,guanzuo,followmy,zanfab,hotmen,authers,fenmy}