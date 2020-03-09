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
export {pingluned,guanzuo,followmy,zanfab}