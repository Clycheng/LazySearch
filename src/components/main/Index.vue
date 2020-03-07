<template>
  <div>
    <Banner></Banner>
    <el-container>
      <el-main>
          <MainTab></MainTab>
      </el-main>
      <el-aside width="300px">
          <Byingimg></Byingimg>
          <About></About>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
import Banner from "./Banner";
import Breadcrumb from "./common/Breadcrumb";
import MainTab from './mainChild/MainTab'
import About from './asideChild/About'
import Byingimg from './asideChild/Byingimg'
export default {
  name: "Main",
  components: {
    Breadcrumb,
    Banner,
    MainTab,
    About,
    Byingimg
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