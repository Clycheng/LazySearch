<template>
  <div>
      <el-container>
    <el-header>
        <Header></Header>
    </el-header>
    <div class="bai"></div>
    <el-main>
        <Main/>
    </el-main>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
import Header from './header/Head'
import Main from './main/Index'
export default {
    name:"Index",
    data(){
        return{

        }
    },
    components:{
        Header,
        Main
    }
}
</script>

<style scoped>
 .el-header{
     padding:0;
     text-align: center;
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     z-index: 9999;
 }
 .el-main{
     padding: 60px;
 }
 .bai{
     width: 100%;
     height: 40px;
     background: #ffffff;
 }
</style>