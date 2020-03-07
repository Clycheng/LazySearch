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
                <span>对个人信息进行修改</span>
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
                <td class="top-line">
                  <div class="avatar">
                    <img
                      src="https://upload.jianshu.io/users/upload_avatars/21067682/2f134b0f-29c6-400a-9c3d-d12ee5a32871?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/300"
                    />
                  </div>
                </td>
                <td class="top-line">
                  <a class="btn btn-hollow">
                    <input unselectable="on" type="file" class="hide" />
                    更改头像
                  </a>
                </td>
              </tr>
              <tr>
                <td class="setting-title">昵称</td>
                <td>
                  <input type="text" placeholder="请输入昵称" :value="users.name" />
                </td>
              </tr>
              <tr>
                <td class="setting-title">邮箱</td>
                <td>
                  <input type="text" placeholder="请输入email" :value="users.email" />
                  <!---->
                </td>
              </tr>
              <tr>
                <td class="setting-title">手机</td>
                <td>
                  <input type="text" placeholder="请输入手机号" :value="users.phone" />
                </td>
              </tr>
              <tr>
                <td class="setting-title">年龄</td>
                <td>
                  <input type="text" placeholder="请输入年龄" :value="users.age" />
                </td>
              </tr>
              <tr>
                <td class="setting-title">性别</td>
                <td>
                  <input type="text" placeholder="请输入性别" :value="users.sex" />
                </td>
              </tr>
              <tr>
                <td class="setting-title">座右铭</td>
                <td>
                  <input type="text" placeholder="请输入座右铭" :value="users.motto" />
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" class="btn btn-success setting-save" value="保存" />
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
import { usersinsert } from "../../api/my/userinset";
import Header from "../header/Head";
export default {
  name: "Users",
  data() {
    return {
      users:[],
    };
  },
  components: {
    Header
  },
  methods: {
    inserusers(){
       let username =sessionStorage.getItem('userName');
       let userid=sessionStorage.getItem('UserID');
       usersinsert({
          username:username,
          userid:userid
       }).then(res=>{
         if(res.data.code==10001){
           this.users=res.data.data
         }
       })
    }
  },
  mounted(){
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
 .el-header{
     padding:0;
     text-align: center;
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     z-index: 9999;
 }
</style>  