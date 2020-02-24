<template>
  <div>
    <Banner></Banner>
    <el-container>
      <el-main>
          <MainTab></MainTab>
      </el-main>
      <el-aside width="300px">
          <AsideLoginModel></AsideLoginModel>
          <Billboard></Billboard>
          <About></About>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import Banner from "./Banner";
import Breadcrumb from "./common/Breadcrumb";
import MainTab from './mainChild/MainTab'
import AsideLoginModel from './asideChild/loginModel'
import Billboard from './asideChild/Billboard'
import About from './asideChild/About'
export default {
  name: "Main",
  components: {
    Breadcrumb,
    Banner,
    MainTab,
    AsideLoginModel,
    Billboard,
    About
  }
};
</script>

<style scoped>
    .el-main{
        padding: 35px;
        background: white;
    }
    .el-aside{
      margin-left: 1%;
    }
</style>