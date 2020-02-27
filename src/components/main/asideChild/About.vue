<template>
  <div class = "warp">
        <a  href="#">关于</a><span>·</span>
        <a  href="#">使用指南</a><span>·</span>
        <a  href="#">建议反馈</a><span>·</span>
        <a  href="#">加入我们</a><span>·</span>
        <a  href="#">商务合作</a><span>·</span>
        <a  href="#">友情链接</a><span>·</span>
        <a  href="#">用户协议</a><span>·</span>
        <a  href="#">京ICP备17046687号-1</a>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    name:"About",
    data(){
        return{

        }
    }
}
</script>

<style scoped>
.warp {
    width: 100%;
    margin-top: 25px;
}
span{
          margin-left: 15px;
        color: #909090
}
a:nth-child(1){
    margin-left: 10px;
}
    a{
        display: inline-block;
        margin-left: 15px;
        margin-top: 15px;
        color: #909090
    }
</style>