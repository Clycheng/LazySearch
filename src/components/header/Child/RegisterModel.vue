<template>
  <div>
    <el-dialog title="注册" :visible.sync="centerDialogVisible" width="30%" center>
      <el-form label-width="0" :model="formLabelAlign">
        <!-- <div :model="form">
      <el-input placeholder="用户名" prefix-icon="Lazy Lazylogin_user" v-model="form.userName"></el-input>
      <el-input placeholder="密码" prefix-icon="Lazy Lazymima" v-model="form.passWord"></el-input>
        </div>-->
        <el-form-item label>
          <el-input
            v-model="formLabelAlign.name"
            placeholder="请输入用户名"
            @blur="userChange(formLabelAlign.name)"
            prefix-icon="Lazy Lazyuser_login"
          ></el-input>
        </el-form-item>
        <el-form-item label>
          <el-input
            v-model="formLabelAlign.password"
            placeholder="请输入密码"
            prefix-icon="Lazy Lazymima"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item label>
          <el-input
            v-model="formLabelAlign.phone"
            placeholder="请输入手机号"
            @blur="tellChange(formLabelAlign.phone)"
            prefix-icon="el-icon-phone"
          ></el-input>
        </el-form-item>
        <el-form-item label>
          <el-input
            v-model="formLabelAlign.code"
            class="Vcode"
            type="password"
            placeholder="请输入验证码"
            prefix-icon="Lazy Lazymima"
          ></el-input>
          <el-button type="primary" @click="payphone()">发送验证码</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <!-- <el-button type="primary" @click="centerDialogVisible = false">注册</el-button> -->
        <el-button type="primary" @click="loginzhu()">注册</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable */
import {
  findUsers,
  findtell,
  logince,
  phonepay
} from "../../../api/my/userinset";
export default {
  name: "LoginModel",
  data() {
    return {
      centerDialogVisible: true,
      formLabelAlign: {
        name: "",
        password: "",
        phone: "",
        code: ""
      },
      type: "",
      // 用户名表单值发生变化触发
      unameIsExist: false,
      userFlag: ""
      // 用户名表单值发生变化触发
    };
  },
  watch: {
    centerDialogVisible(val) {
      this.$store.commit("ChangeRegisterModel", this.centerDialogVisible);
    }
  },
  methods: {
    // 手机验证码请求
    payphone() {
      phonepay({ phone: this.formLabelAlign.phone }).then(res => {
        console.log(res.data);
      });
    },
    Login() {
      this.$store.commit("ChangeRegisterModel");
    },
    // 用户名表单值发生变化触发   用户名验证是否注册
    userChange(name) {
      if (name) {
        // 使用正则来判断输入的用户名是否有汉字
        // if (/[\u4E00-\u9FA5]/g.test(name)) {
        //   this.$notify({
        //     message: "用户名不能为汉字",
        //     offset: 100,
        //     type: "warning",
        //     duration: 1500
        //   });
        // }
      }
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
                duration: 1500
              });
            } else {
              this.$notify({
                message: "用户名未注册",
                offset: 100,
                type: "success",
                duration: 1500
              });
            }
          } else {
            this.$notify({
              message: "用户名已注册",
              offset: 100,
              type: "warning",
              duration: 1500
            });
          }
        });
      }, 200);
    },
    //表单值发生变化触发    手机号验证是否注册
    tellChange(phone) {
      if (this.userFlag) {
        clearTimeout(this.userFlag);
      }
      this.userFlag = setTimeout(() => {
        findtell({ phone }).then(res => {
          if (res.data.code == 10010) {
            if (this.formLabelAlign.phone == "") {
              this.$notify({
                message: "电话号码不能为空",
                offset: 100,
                type: "warning",
                duration: 1500
              });
            } else {
              this.$notify({
                message: "电话号码未注册",
                offset: 100,
                type: "success",
                duration: 1500
              });
            }
          } else {
            this.$notify({
              message: "电话号码已注册",
              offset: 100,
              type: "warning",
              duration: 1500
            });
          }
        });
      }, 1000);
    },
    // 注册
    loginzhu() {
      logince({
        name: this.formLabelAlign.name,
        phone: this.formLabelAlign.phone,
        password: this.formLabelAlign.password,
        code: this.formLabelAlign.code
      }).then(res => {
        console.log(res.data);
        if (res.data.code == 10003) {
          this.$store.commit("ChangeRegisterModel");
          this.$store.commit("ChangeLoginModel");
          this.$notify({
            message: "注册成功",
            offset: 100,
            type: "success",
            duration: 1500
          });
        } else {
          this.$notify({
            message: "注册失败",
            offset: 100,
            type: "warning",
            duration: 1500
          });
        }
      });
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
.Vcode {
  width: 41%;
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