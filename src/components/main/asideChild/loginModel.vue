<template>
  <div>
    <div class="not-login-warp" :class="this.$store.state.header.IsLogin?'active':''">
      <el-card :body-style="{ padding: '0px' }">
        <h4><i class = ""></i></h4>
      </el-card>
    </div>
    <div class="readly-login-warp" :class="this.$store.state.header.IsLogin?'':'active'">
      <el-card class="register-card" shadow="always" :body-style="{ padding: '0px' }">
        <h3>懒搜 - lansou.com</h3>
        <p>一个帮助开发者解决bug的社区</p>
        <div :model="form">
        <el-input placeholder="用户名" prefix-icon="Lazy Lazylogin_user" v-model="form.userName"></el-input>
        <el-input placeholder="密码" prefix-icon="Lazy Lazymima" v-model="form.passWord"></el-input>
        </div>
        <el-button class = "register" type="primary" @click="zhuce(form)">注册</el-button>
     <el-row class="other-login-warp">
      <i class = "Lazy Lazyweixin4" style="color:#24DB5A"></i>
      <i class = "Lazy Lazyqq1" style="color:#4A9AFD"></i>
      <i class = "Lazy Lazygithubb" ></i>
    </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import {userinset} from "../../../api/my/userinset";
export default {
  name: "AsideLoginModel",
  data() {
    return {
      currentDate: new Date(),
      isLogin: this.$store.state.header.IsLogin,
      activeName: "first",
      form:{
      userName: "",
      passWord: "",
      }
    };
  },
  methods: {
      zhuce(form){
        userinset(form).then(res=>{
          if (res.code == 200){
             alert(res.message);
          }else {
              this.$toast(res.message);
          }
          })
  },
    handleClick(tab, event) {}
  }
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.el-card {
  width: 80%;
  display: none;
  border: none;
}
.active .el-card {
  display: block;
}
h3 {
  margin-top: 10px;
  margin-left: 10px;
  /* color: #2e3135; */
  font-weight: bold;
}
p {
  margin-left: 10px;
  margin-top: 5px;
}
.el-tabs {
  padding: 10px;
}
.register-card input {
  width: 80%;
  margin-top: 15px;
  margin-left: 5%;
 
}
.register-card span {
  height: 135%;
  left: 23px;
}
.register-card .register {
  width: 80%;
  margin-top: 15px;
  margin-left: 5%;
 
}
.other-login-warp.el-row {
  margin-top: 15px;
}
.other-login-warp.el-row i{
  margin-left:14%;
  font-size: 24px;
  cursor: pointer;
}
</style>