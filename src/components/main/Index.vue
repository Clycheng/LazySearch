<template>
  <div>
    <Banner></Banner>
    <el-container>
      <el-main>
          <MainTab></MainTab>
      </el-main>
      <el-aside width="300px">
          <AsideLoginModel></AsideLoginModel>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import Banner from "./Banner";
import Breadcrumb from "./common/Breadcrumb";
import MainTab from './mainChild/MainTab'
import AsideLoginModel from './asideChild/loginModel'
export default {
  name: "Main",
  components: {
    Breadcrumb,
    Banner,
    MainTab,
    AsideLoginModel
  }
};
</script>

<style scoped>
    .el-main{
        padding: 35px;
    }
</style>