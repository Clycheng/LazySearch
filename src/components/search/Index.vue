<template>
  <div>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-main>
          <CommonList :cat="{name:this.$route.params.val,type:2}"></CommonList>
        </el-main>
        <el-aside width="350px">
            <Aside></Aside>
        </el-aside>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "../header/Head";
import CommonList from "../main/common/CommonList";
import Aside from './Child/Aside';

export default {
  name: "Search",
  data() {
    return {
      SearchVal: ""
    };
  },
  methods: {},
  components: {
    Header,
    CommonList,
    Aside
  
  }
};
</script>

<style scoped>
.el-aside{
    padding-top: 70px;
}
</style>