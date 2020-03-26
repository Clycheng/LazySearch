<template>
  <div class="usermain">
    <el-header>
      <Header></Header>
    </el-header>
    <div class="container setting">
      <div class="row">
        <div class="aside">
          <ul>
            <li class="router-link-exact-active active">
              <a href="/settings/basic">
                <div class="setting-icon">
                  <i class="iconfont ic-settings-basic"></i>
                </div>
                <span>个人设置</span>
                <span>----</span>
                <span>可在表单中直接对个人信息进行修改</span>
                <!---->
              </a>
            </li>
          </ul>
          <!---->
        </div>
        <div class="col-xs-16 col-xs-offset-8 main" :model="users">
          <table>
            <thead>
              <tr>
                <th class="setting-head responsive-head"></th>
                <th></th>
              </tr>
            </thead>
            <tbody class="base">
              <tr>
                <td class="head_img">
                  <img :src="users.imageTitle" />
                </td>
                <!-- <div class="setting_right" @click.stop="uploadHeadImg">
                  <div class="caption">更改头像</div>
                </div>-->
                <td class="top-line">
                  <a class="btn btn-hollow">
                    <input unselectable="on" @click.stop="uploadHeadImg" class="hide" />
                    更改头像
                  </a>
                </td>
                <td class="top-line">
                  <a class="btn btn-hollow">
                    <input type="file" accept="image/*" @change="handleFile" class="hiddenInput" />
                  </a>
                </td>
              </tr>
              <!-- <tr>
                <td class="top-line">
                  <div class="avatar hiddenInput">
                    <img :src="users.imageTitle" />
                  </div>
                </td>
                <td class="top-line">
                  <a class="btn btn-hollow">
                    <input unselectable="on" @click="uploadHeadImg" type="file" class="hide" />
                    更改头像
                  </a>
                </td>
              </tr>-->
              <tr>
                <td class="setting-title">用户名</td>
                <td>
                  <input
                    type="text"
                    @focus="usernone"
                    placeholder="用户名不可修改"
                    v-model="users.username"
                  />
                </td>
              </tr>
              <tr>
                <td class="setting-title">作者笔名</td>
                <td>
                  <input type="text" placeholder="请输入笔名" v-model="users.name" />
                </td>
              </tr>
              <tr>
                <td class="setting-title">邮箱</td>
                <td>
                  <input type="text" placeholder="请输入email" v-model="users.email" />
                  <!---->
                </td>
              </tr>
              <tr>
                <td class="setting-title">手机</td>
                <td>
                  <input type="text" placeholder="请输入手机号" v-model="users.phone" />
                </td>
              </tr>
              <tr>
                <td class="setting-title">年龄</td>
                <td>
                  <input type="text" placeholder="请输入年龄" v-model="users.age" />
                </td>
              </tr>
              <tr>
                <td class="setting-title">性别</td>
                <td>
                  <input type="text" placeholder="请输入性别" v-model="users.sex" />
                </td>
              </tr>
              <tr>
                <td class="setting-title">个人简介</td>
                <td>
                  <input type="text" placeholder="请输入座右铭" v-model="users.motto" />
                </td>
              </tr>
            </tbody>
          </table>
          <input
            type="submit"
            class="btn btn-success setting-save"
            @click="updata(users)"
            value="保存"
          />
          <!---->
          <!---->
          <div class="setting_tip" style="display: none;">由于系统特殊维护，暂时无法修改。</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { usersinsert, usersup, uploadtu } from "../../api/my/userinset";
import Header from "../header/Head";
export default {
  name: "Users",
  data() {
    return {
      iaimg:"",
      users: {
        imageTitle: "",
        username: "",
        name: "",
        age: "",
        motto: "",
        email: "",
        phone: "",
        sex: ""
      }
    };
  },
  components: {
    Header
  },
  methods: {
    // 打开图片上传
    uploadHeadImg: function() {
      // this.$el.querySelector('.hiddenInput').click()
      let userid = sessionStorage.getItem("UserID");
      let token = sessionStorage.getItem("token");
      console.log(this.users.imageTitle)
      uploadtu({
        file: this.iaimg,
        userid: userid,
        token: token
      }).then(res => {
        console.log(res.data);
      });
    },
    // 将头像显示  获取路径给iaimg
    handleFile: function(e) {
      let $target = e.target || e.srcElement;
      let file = $target.files[0];
      this.iaimg=file.name;
      var reader = new FileReader();
      reader.onload = data => {
        let res = data.target || data.srcElement;
        this.users.imageTitle = res.result;
      };
      reader.readAsDataURL(file);
    },
    // 上传头像
    // uploadHeadImg(e) {
    //   if (e.target.files[0]) {
    //     this.$notify({
    //       message: "系统正在校验中，请重新选择图片",
    //       offset: 100,
    //       type: "warning",
    //       duration: 3000
    //     });
    //     this.iaimg = e.target.files[0].name;
    //     let userid = sessionStorage.getItem("UserID");
    //     let token = sessionStorage.getItem("token");
    //     uploadtu({
    //       iaimg: this.iaimg,
    //       userid: userid,
    //       token: token
    //     }).then(res => {
    //       console.log(res.data);
    //     });
    //   } else {
    //     this.$notify({
    //       message: "请再次点击进行上传",
    //       offset: 100,
    //       type: "warning",
    //       duration: 3000
    //     });
    //   }
    // },
    // 获取个人信息
    inserusers() {
      let username = sessionStorage.getItem("userName");
      let userid = sessionStorage.getItem("UserID");
      usersinsert({
        username: username,
        userid: userid
      }).then(res => {
        if (res.data.code == 10001) {
          console.log(res.data);
          this.users = res.data.data;
        }
      });
    },
    // 修改个人信息   待做
    updata(users) {
      let token = sessionStorage.getItem("token");
      let UserId = sessionStorage.getItem("UserID");
      let userName = sessionStorage.getItem("userName");
      usersup({
        name: users.name,
        age: users.age,
        motto: users.motto,
        email: users.email,
        phone: users.email,
        sex: users.sex,
        token: token,
        UserId: UserId,
        userName: userName
      }).then(res => {
        this.$notify({
          message: "修改个人信息成功",
          offset: 100,
          type: "success",
          duration: 1500
        });
      });
    },
    // 修改用户名，获取焦点粗发提示
    usernone() {
      this.$notify({
        message: "用户名禁止修改！",
        offset: 100,
        type: "warning",
        duration: 1500
      });
    }
  },
  mounted() {
    this.inserusers();
  }
};
</script>

<style scoped>
@import url("../../assets/css/usercss1.css");
@import url("../../assets/css/usercss2.css");
.usermain {
  background: #ffffff;
  margin-top: 50px;
}
.el-header {
  padding: 0;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}

/* 头像 */
.item_bock {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 94px;
  width: 300px;
  padding: 0px 24px 0px 38px;
  border-bottom: 1px solid #f7f7f7;
  background: #fff;
}
.head_p {
  height: 132px;
}
.head_img {
  height: 90px;
}
.head_img img {
  width: 90px;
  height: 90px;
  border-radius: 50px;
}
.setting_right {
  display: flex;
  height: 37px;
  justify-content: flex-end;
  align-items: center;
}
.hiddenInput {
  display: none;
}
.caption {
  color: #8f8f8f;
  font-size: 26px;
  height: 37px;
}
</style>  