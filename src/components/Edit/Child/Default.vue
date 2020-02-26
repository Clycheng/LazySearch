<template>
  <div class = "connet">
      <p>用代码重塑人生</p>
      <p>用文章改变生活</p>
      <p>--懒搜科技</p>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    name:'Default',
    data(){
        return{

        }
    },
}
</script>

<style scoped>
    .connet {
        height: 600px;
        padding-top: 50px;
        text-align: center;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        font-size: 35px;
        color: #000000;
        text-shadow: 1px 1px 1px #111;
        background: url('../../../assets/zhubg.png')
    }
    p{
        padding-top: 20px;
        padding-right: 200px;
    }
    .connet p:nth-child(3){
        font-size: 25px;
        padding-right: 300px;
        text-align: right;
    }
</style>