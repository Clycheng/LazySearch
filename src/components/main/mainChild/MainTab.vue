<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="前端" name="first"><CommonList></CommonList></el-tab-pane>
    <el-tab-pane label="后端" name="second">配置管理</el-tab-pane>
    <el-tab-pane label="ios" name="third">角色管理</el-tab-pane>
    <el-tab-pane label="安卓" name="fourth">定时任务补偿</el-tab-pane>
  </el-tabs>
  </div>
</template>

<script>
import CommonList from '../common/CommonList'
export default {
  name: "MainTab",
  data() {
    return {
      activeName: "first"
    };
  },
  components:{
    CommonList
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  }
};
</script>

<style scoped>
.el-tabs__content div{
  padding: 1px;
}
</style>