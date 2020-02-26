<template>
  <div>
    <el-dialog title="登录" :visible.sync="centerDialogVisible" width="30%" center>
      <el-form label-width="0" :model="formLabelAlign">
        <el-form-item label>
          <el-input
            v-model="formLabelAlign.name"
            placeholder="请输入账户名或者手机号"
            prefix-icon="Lazy Lazyuser_login"
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
      </span>
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable */
import {loginin} from "../../../api/my/userinset";
export default {
  name: "LoginModel",
  data() {
    return {
      centerDialogVisible: true,
      formLabelAlign: {
        name: "",
        password: "",
        type: ""
      }
    };
  },
  watch: {
    centerDialogVisible(val) {
      this.$store.commit("ChangeLoginModel", this.centerDialogVisible);
    }
  },
  methods: {
    // 登录
    loginok(formLabelAlign){
      loginin(formLabelAlign).then(res => {
        if (res.code == 200) {
          alert(res.message);
        } else {
          alert(res.message);
        }
      });
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
</style>