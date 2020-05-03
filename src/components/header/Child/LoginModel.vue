<template>
  <div>
    <el-dialog title="登录" :visible.sync="centerDialogVisible" width="30%" center>
      <el-form label-width="0" :model="formLabelAlign">
        <el-form-item label>
          <el-input
            v-model="formLabelAlign.name"
            placeholder="请输入账户名或者手机号"
            prefix-icon="Lazy Lazyuser_login"
            @blur="userChange(formLabelAlign.name)"
          ></el-input>
        </el-form-item>
        <el-form-item label>
          <el-input
            v-model="formLabelAlign.password"
            type="password"
            placeholder="请输入密码"
            prefix-icon="Lazy Lazymima"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button type="primary" @click="centerDialogVisible==false">登 录</el-button> -->
        <el-button type="primary" @click="loginok(formLabelAlign)">登 录</el-button>
        <el-row class="other-login-warp">
          <i class="Lazy Lazyweixin4" style="color:#24DB5A"></i>
          <i class="Lazy Lazyqq1" style="color:#4A9AFD"></i>
          <i class="Lazy Lazygithubb"></i>
        </el-row>
      </span>
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable */
import { loginin, findUsers } from "../../../api/my/userinset";
export default {
  name: "LoginModel",
  data() {
    return {
      centerDialogVisible: true,
      formLabelAlign: {
        name: "",
        password: ""
      }
    };
  },
  watch: {
    centerDialogVisible(val) {
      this.$store.commit("ChangeLoginModel", this.centerDialogVisible);
    }
  },
  methods: {
    // 用户名表单值发生变化触发   用户名验证是否可用
    userChange(name) {
      if (this.userFlag) {
        clearTimeout(this.userFlag);
      }
      this.userFlag = setTimeout(() => {
        findUsers({ name }).then(res => {
          if (res.data.code == 20020) {
            if (this.formLabelAlign.name == "") {
              this.$notify({
                message: "用户名不能为空",
                offset: 100,
                type: "warning",
                duration: 2000
              });
            } else {
              this.$notify({
                message: "用户名未注册不可使用！",
                offset: 100,
                type: "warning",
                duration: 2000
              });
            }
          } else {
            this.$notify({
              message: "用户名正确",
              offset: 100,
              type: "success",
              duration: 2000
            });
          }
        });
      }, 200);
    },
    // 登录
    loginok(formLabelAlign) {
      if (this.formLabelAlign.name && this.formLabelAlign.password) {
        loginin(formLabelAlign).then(res => {
          if (res.data.code == 10006) {
            window.console.log(res);
            sessionStorage.setItem("token", res.data.data[0].token); //保存token
            sessionStorage.setItem("UserID", res.data.data[0].UserID); //保存UserID author_name
            sessionStorage.setItem("userName", res.data.data[0].userName); //保存userName
            sessionStorage.setItem("author_name", res.data.data[0].author_name); //保存author_name
            sessionStorage.setItem("User_img", res.data.data[0].User_img); //保存User_img
            this.$store.commit("ChangeIsLogin");
            this.$store.commit("ChangeLoginModel");
            this.$notify({
              message: "登录成功",
              offset: 100,
              type: "success",
              duration: 2000
            });
            if (
              !res.data.data[0].author_name
            ) {
              this.$notify({
                message: "新用户必须去个人中心完善资料",
                offset: 100,
                type: "warning",
                duration: 5000
              });
            }
            this.$router.push("/");
          } else {
            this.$notify({
              message: "登录失败",
              offset: 100,
              type: "warning",
              duration: 2000
            });
          }
        });
      } else {
        this.$notify({
          message: "请将内容补全再进行登录！thinkyou！",
          offset: 100,
          type: "warning",
          duration: 2000
        });
      }
    },
    Login() {
      this.$store.commit("ChangeLoginModel");
    }
  }
};
</script>

<style scoped>
.el-form {
  text-align: center;
}
.el-input {
  width: 70%;
}
.dialog-footer {
  display: inline-block;
  width: 50%;
}
.dialog-footer .el-button--primary {
  display: block;
  width: 100%;
}
.other-login-warp.el-row {
  width: 170px;
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
}
.other-login-warp.el-row i {
  margin-left: 20%;
  font-size: 25px;
  cursor: pointer;
}
</style>