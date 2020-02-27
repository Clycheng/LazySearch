<template>
  <div>
    <el-dialog
  title="注册"
  :visible.sync="centerDialogVisible"
  width="30%"
  center>
  <el-form  label-width="0" :model="formLabelAlign">
  <!-- <div :model="form">
      <el-input placeholder="用户名" prefix-icon="Lazy Lazylogin_user" v-model="form.userName"></el-input>
      <el-input placeholder="密码" prefix-icon="Lazy Lazymima" v-model="form.passWord"></el-input>
  </div> -->
  <el-form-item label="">
    <el-input v-model="formLabelAlign.username" placeholder="请输入用户名"    prefix-icon="Lazy Lazyuser_login"></el-input>
  </el-form-item>
  <el-form-item label="">
    <el-input v-model="formLabelAlign.password" placeholder="请输入密码"    prefix-icon="Lazy Lazymima"></el-input>
  </el-form-item>
  <el-form-item label="">
    <el-input v-model="formLabelAlign.tell" placeholder="请输入手机号"    prefix-icon="el-icon-phone"></el-input>
  </el-form-item>
  <el-form-item label="">
    <el-input v-model="formLabelAlign.region" class = "Vcode" type="password" placeholder="请输入验证码"  prefix-icon="Lazy Lazymima"></el-input>
    <el-button type="primary">发送验证码</el-button>
  </el-form-item>
</el-form>
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="centerDialogVisible = false">注册</el-button>
  </span>
</el-dialog>

  </div>
</template>

<script>
/* eslint-disable */
export default {
    name:"LoginModel",
    data(){
        return{
            centerDialogVisible:true,
                formLabelAlign: {
                  username:'',
                  password:'',
                  tell: '',
                  region: '',
                  type: ''
                }
            }
    },
    watch:{
        centerDialogVisible(val){
            this.$store.commit("ChangeRegisterModel",this.centerDialogVisible)
        }
    },
    methods:{
        Login(){
            this.$store.commit("ChangeRegisterModel")
        }
    }
}
</script>

<style scoped>
.el-form{
    text-align: center;
}
.el-input{
    width: 70%;
}
.Vcode{
  width: 41%;
}
.dialog-footer{
  display: inline-block;
  width: 50%;
}
.dialog-footer .el-button--primary{
  display: block;
  width: 100%;
}

</style>