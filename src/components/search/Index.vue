<template>
  <div>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-main>
          <CommonList :cat="{name:this.$route.params.val}"></CommonList>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
import Header from "../header/Head";
import CommonList from "./Child/CommnList";
export default {
  name: "Search",
  data() {
    return {
      SearchVal: ""
    };
  },
  methods: {

  },
  components: {
    Header,
    CommonList,
  }
};
</script>

<style scoped>
.el-main{
  padding-top: 55px;
}
.el-aside{
    padding-top: 90px;
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
</style>