<template>
  <div>
    <!-- 已登录状态 -->
    <div class="already-login-menu-warp" :class="this.$store.state.header.IsLogin?'active':''">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="3">
          <i class="Lazy Lazypinglun13" style="margin-right:5px"></i> 写文章
        </el-menu-item>
        <el-submenu index="4">
          <template slot="title">
            <i class="Lazy Lazylogin_user" style="margin-right:5px"></i>个人中心
          </template>
          <el-menu-item index="4-1">
            <i class="Lazy Lazyyuedu" style="margin-right:15px"></i>
            <router-link to="/MyArticle">我的文章</router-link>
          </el-menu-item>
          <el-menu-item index="4-2">
            <i class="Lazy Lazytianchongxing-" style="margin-right:15px"></i>
            <router-link to="/Users">个人设置</router-link>
          </el-menu-item>
          <el-menu-item index="4-3" @click="LogOut">
            <i class="Lazy Lazyloginout" style="margin-right:15px"></i>log out
          </el-menu-item>
        </el-submenu>
        <el-menu-item index="5">
          <i class="el-icon-s-custom" style="margin-right:5px"></i> 极光会员
        </el-menu-item>
      </el-menu>
    </div>
    <!-- 未登录状态 -->
    <div class="not-login-menu-warp" :class="this.$store.state.header.IsLogin?'':'active'">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <i class="Lazy Lazylogin" style="margin-right:10px"></i>登录
        </el-menu-item>
        <el-menu-item index="2">
          <i class="Lazy Lazyzhucehuiyuan" style="margin-right:10px"></i>注册
        </el-menu-item>
      </el-menu>
      <LoginModel v-if="this.$store.state.header.LoginModel"></LoginModel>
      <RegisterModel v-if="this.$store.state.header.RegisterModel"></RegisterModel>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import LoginModel from "./Child/LoginModel";
import RegisterModel from "./Child/RegisterModel";
export default {
  name: "Menu",
  data() {
    return {
      isLogin: true,
      activeIndex: "1"
    };
  },
  components: {
    LoginModel,
    RegisterModel
  },
  methods: {
    handleSelect(key, keyPath) {
      switch (key) {
        case "1":
          this.$store.commit("ChangeLoginModel");
          break;
        case "2":
          this.$store.commit("ChangeRegisterModel");
          break;
        case "3":
          this.$router.push("/Edit");
          break;
        case "5":
          this.$router.push("/VIP");
          break;
        default:
          break;
      }
    },
    LogOut() {
      this.$store.commit("ChangeIsLogin");
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('UserID');
      sessionStorage.removeItem('userName');
      sessionStorage.removeItem('author_name');
      sessionStorage.removeItem('User_img');
      this.$router.push("/");
    },
    // 刷新之后 根据本地存储的数据判断用户是否在线
    shuaxin(){
      let token=sessionStorage.getItem("token");
      let UserID=sessionStorage.getItem("UserID");
      let userName=sessionStorage.getItem("userName");
      if(token&&UserID&&userName){
        this.$store.commit("ChangeIsLoginss");
      }
    }
  },
  created(){
    this.shuaxin();
  }
};
</script>

<style scoped>
.el-menu {
  display: none;
  height: 64px;
  margin-left: 10%;
}
.active .el-menu {
  display: block;
}
.el-menu--horizontal {
  width: 90%;
}
</style>