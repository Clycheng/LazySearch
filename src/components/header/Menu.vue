<template>
  <div>
      <!-- 已登录状态 -->
      <div class="already-login-menu-warp" :class="isLogin?'active':''">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">
              <a href="https://www.ele.me" target="_blank">订单管理</a>
            </el-menu-item>
          </el-menu>
        </div>
        <!-- 未登录状态 -->
        <div class = "not-login-menu-warp" :class="isLogin?'':'active'">
            <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
          >
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="2">处理中心</el-menu-item>
          </el-menu>
        </div>
  </div>
</template>

<script>
export default {
    name:"Menu",
    data(){
        return{
            isLogin:true,
            activeIndex: '1',
        }
    },
    methods:{
        handleSelect(key, keyPath) {
    console.log(key, keyPath);
    }
    }
}
</script>

<style scoped>
 .el-menu{
     display: none;
     height: 64px;
     margin-left: 10%
    }
  .active  .el-menu{
      display: block;
  }
</style>