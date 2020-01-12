<template>
  <div>
    <div class="not-login-warp" :class="isLogin?'active':''">
      <el-card :body-style="{ padding: '0px' }">
        <h4>已登录</h4>
      </el-card>
    </div>
    <div class="readly-login-warp" :class="isLogin?'':'active'">
      <el-card :body-style="{ padding: '0px' }">
        <h3>懒搜 - lansou.com</h3>
        <p>一个帮助开发者成长的社区</p>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="登录" name="first">
            <div style="margin: 20px;"></div>
            <el-input placeholder="请输入内容" prefix-icon="el-icon-info" v-model="userName"></el-input>
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="passWord"></el-input>
          </el-tab-pane>
          <el-tab-pane label="注册" name="second">注册</el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "AsideLoginModel",
  data() {
    return {
      currentDate: new Date(),
      isLogin: false,
      activeName: "first",
      userName: "",
      passWord: ""
    };
  },
  methods: {
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
  width: 100%;
  display: none;
  border: none;
}
.active .el-card {
  display: block;
}
h3 {
  margin-top: 10px;
  margin-left: 10px;
  color: #2e3135;
  font-weight: bold;
}
p {
  margin-left: 10px;
  margin-top: 5px;
}
.el-tabs {
  padding: 10px;
}
</style>