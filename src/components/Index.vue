<template>
  <div>
      <el-container>
    <el-header>
        <Header></Header>
    </el-header>
    <el-main>
        <Main/>
    </el-main>
    </el-container>
  </div>
</template>

<script>
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

<style>
 .el-header{
     padding:  0;
     text-align: center
 }
 .el-main{
     padding: 35px;
 }
</style>