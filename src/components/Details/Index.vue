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
    margin: 0 auto;
    padding-top: 25px;
}
</style>