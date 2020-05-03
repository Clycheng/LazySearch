<template>
  <div>
    <el-dialog title="注册" :visible.sync="centerDialogVisible" width="30%" center>
      <el-form label-width="0" :model="formLabelAlign">
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
          <el-button v-show="show" type="primary" @click="payphone()">发送验证码</el-button>
          <el-button
            v-show="!show"
            type="primary"
            :loading="true"
            style="width:112px;height:40px;margin-left:0;"
          >{{count}}秒</el-button>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
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
      // 倒数
      show: true,
      count: "",
      timer: null,
      // 倒数
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
      if (!this.formLabelAlign.phone == "") {
        // 倒数
        const TIME_COUNT = 60;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);
              this.timer = null;
            }
          }, 1000);
        }
        // 倒数
        phonepay({ phone: this.formLabelAlign.phone }).then(res => {
          if (res.data.code == 101010) {
            this.$notify({
              message: "300秒内禁止发送",
              offset: 100,
              type: "warning",
              duration: 2000
            });
            return;
          }
        });
      } else {
        this.$notify({
          message: "手机号不能为空",
          offset: 100,
          type: "warning",
          duration: 2000
        });
      }
    },
    Login() {
      this.$store.commit("ChangeRegisterModel");
    },
    // 用户名表单值发生变化触发   用户名验证是否注册
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
                message: "用户名未注册",
                offset: 100,
                type: "success",
                duration: 2000
              });
            }
          } else {
            this.$notify({
              message: "用户名已注册",
              offset: 100,
              type: "warning",
              duration: 2000
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
                duration: 2000
              });
            } else {
              this.$notify({
                message: "电话号码未注册",
                offset: 100,
                type: "success",
                duration: 2000
              });
            }
          } else {
            this.$notify({
              message: "电话号码已注册",
              offset: 100,
              type: "warning",
              duration: 2000
            });
          }
        });
      }, 1000);
    },
    // 注册
    loginzhu() {
      if (
        this.formLabelAlign.name &&
        this.formLabelAlign.phone &&
        this.formLabelAlign.password &&
        this.formLabelAlign.code
      ) {
        logince({
          name: this.formLabelAlign.name,
          phone: this.formLabelAlign.phone,
          password: this.formLabelAlign.password,
          code: this.formLabelAlign.code
        }).then(res => {
          if (res.data.code == 10003) {
            this.$store.commit("ChangeRegisterModel");
            this.$store.commit("ChangeLoginModel");
            this.$notify({
              message: "注册成功",
              offset: 100,
              type: "success",
              duration: 2000
            });
          } else {
            this.$notify({
              message: "注册失败",
              offset: 100,
              type: "warning",
              duration: 2000
            });
          }
        });
      } else {
        this.$notify({
          message: "请将内容补全再进行注册！thinkyou！",
          offset: 100,
          type: "warning",
          duration: 2000
        });
      }
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