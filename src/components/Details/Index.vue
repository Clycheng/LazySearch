<template>
  <div>
    <el-container>
      <el-container>
        <el-header>
          <Header></Header>
        </el-header>
        <el-container class = "connet">
          <el-main>
              <Article :category ="this.$route.params.id||this.$route.query.id"></Article>
          </el-main>
          <el-aside  width="400px">
            <Billboard></Billboard>
          </el-aside>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
import Header from "../header/Head";
import Article from './Child/Article';
import Billboard from '../main/asideChild/Billboard';
export default {
  name: "Details",
  data() {
    return {};
  },
  beforeMount() {
    console.log(this.$route.query.id)
  },
  components: {
    Header,
    Article,
    Billboard
  }
};
</script>

<style scoped>
.el-container.connet{
    width: 85%;
    margin: 60px auto;
    padding-top: 25px;
}
.el-header{
      padding:0;
     text-align: center;
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     z-index: 9999;  
}
.warp{
  position:fixed;
  top:105px;
}
</style>