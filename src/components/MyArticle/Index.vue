<template>
  <div>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main id="main">
        <el-container>
          <el-main width="600px"  :model="user">
            <div class="main-top">
              <div class="main-top-left">
                <img
                  :src="user.imageTitle"
                  alt
                />
              </div>
              <div class="main-top-right">
                <h1>{{user.name}}</h1>
                <div class="message">
                  <el-tooltip class="item" effect="dark" content="邮箱信息" placement="top-start">
                    <router-link to>
                      <i class="el-icon-platform-eleme"></i>邮箱
                      <span>{{user.email}}</span>
                    </router-link>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="联系方式" placement="top-start">
                    <router-link to>
                      <i class="el-icon-phone"></i>电话
                      <span>{{user.phone}}</span>
                    </router-link>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="性别" placement="top-start">
                    <router-link to>
                      <i class="el-icon-user-solid"></i>性别
                      <span>{{user.sex}}</span>
                    </router-link>
                  </el-tooltip>
                  <el-tooltip class="item" effect="dark" content="年龄" placement="top-start">
                    <router-link to>
                      <i class="el-icon-s-data"></i>年龄
                      <span>{{user.age}}</span>
                    </router-link>
                  </el-tooltip>
                </div>
                <h3>简介：{{user.motto}}</h3>
              </div>
            </div>
            <div class="content">
              <MainTab></MainTab>
            </div>
          </el-main>
          <el-aside>
            <!-- 个人中心的侧内容 -->
            <div data-v-398d293d data-v-93a60a52 class="sticky-section">
              <div data-v-398d293d data-v-93a60a52 class="section">
                <div data-v-398d293d data-v-93a60a52 class="slogan">
                  <div data-v-398d293d data-v-93a60a52 class="title">极光科技是什么？</div>
                  <div data-v-398d293d data-v-93a60a52 class="desc">拥有最多的资源、最牛的团队、最广阔的平台</div>
                </div>
                <div data-v-398d293d data-v-93a60a52 class="wechat-qr">
                  <div data-v-398d293d data-v-93a60a52 class="title">扫码支援 成为会员</div>
                  <div data-v-398d293d data-v-93a60a52 class="qr-img"></div>
                </div>
              </div>
              <div data-v-398d293d data-v-93a60a52 class="section help">
                <a
                  data-v-398d293d
                  href="/"
                  target="_blank"
                  rel
                  class="items author"
                  data-v-93a60a52
                >
                  <img
                    data-v-398d293d
                    src="https://b-gold-cdn.xitu.io/v3/static/img/author.c5d975e.png"
                  />
                  <div data-v-398d293d class="title">成为作者</div>
                </a>
                <a
                  data-v-398d293d
                  href="/"
                  target="_blank"
                  rel
                  class="items feedback"
                  data-v-93a60a52
                >
                  <img
                    data-v-398d293d
                    src="https://b-gold-cdn.xitu.io/v3/static/img/feedback.1230fb5.png"
                  />
                  <div data-v-398d293d class="title">建议反馈</div>
                </a>
              </div>
              <div class="asdieimg">
                <img src="../../assets/banner1.png" alt />
              </div>
              <div class="asdieimg">
                <img src="../../assets/viptop.png" alt />
              </div>
            </div>
            <!-- 个人中心的侧内容 -->
          </el-aside>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
import { usersinsert } from "../../api/my/userinset";
import Header from "../header/Head";
import MainTab from "./Child/MainTab";
export default {
  name: "MyArticle",
  data() {
    return {
      user:[],
    };
  },
  components: {
    Header,
    MainTab,
  },
  methods: {
    // 获取个人信息
    inserusers() {
      let username = sessionStorage.getItem("userName");
      let userid = sessionStorage.getItem("UserID");
      usersinsert({
        username: username,
        userid: userid
      }).then(res => {
        if (res.data.code == 10001) {
          this.user = res.data.data;
        }
      });
    }
  },
  mounted(){
    this.inserusers();
  }
};
</script>

<style scoped>
.el-header {
  padding: 0px;
  text-align: center;
}
.main-top {
  padding-left: 25px;
  height: 115px;
  /* background: blue; */
}
.main-top-left {
  float: left;
  width: 10%;
  text-align: center;
  height: 100%;
  line-height: 100%;
}
.main-top-left img {
  margin-left: 12px;
  margin-top: 20px;

  width: 80px;
  height: 80px;
  border-radius: 50%;
}
.main-top-right {
  float: left;
  width: 90%;
  overflow: hidden;
  padding-left: 25px;
}
.main-top-right h1 {
  font-weight: bold;
  margin: 10px 0;
  font-size: 25px;
}
.main-top-right .message a:nth-child(1) {
  margin-left: 0px;
}
.main-top-right .message a {
  display: inline-block;
  height: 25px;
  vertical-align: middle;
  line-height: 25px;
  margin-left: 15px;
  font-size: 14px;
}
.main-top-right .message a i {
  margin-right: 4px;
  font-size: 20px;
}
.main-top-right .message a span {
  margin-left: 5px;
  font-size: 12px;
}
.main-top-right h3 {
  margin-top: 12px;
  font-weight: 100px;
  font-size: 12px;
  color: rgb(182, 182, 182);
}
.content {
  padding-left: 55px;
  margin-top: 45px;
  height: 1076px;
}

/* 个人中心 侧内容 */

.sticky-section[data-v-398d293d] {
  position: fixed;
  top: 127px;
}
.sticky-section .section[data-v-398d293d] {
  width: 240px;
  overflow: hidden;
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgba(4, 5, 13, 0.23);
  background-color: #fff;
}
.sticky-section .section .slogan[data-v-398d293d] {
  padding: 15px 16px;
  border-bottom: 1px solid #e6e8e8;
}
.sticky-section .section .slogan .title[data-v-398d293d] {
  font-size: 15px;
  color: #000;
}
.sticky-section .section .slogan .desc[data-v-398d293d] {
  margin-top: 8px;
  line-height: 1.4;
  font-size: 14px;
  color: #646464;
}
.sticky-section .section .wechat-qr[data-v-398d293d] {
  padding: 12px 16px;
}
.sticky-section .section .wechat-qr .title[data-v-398d293d] {
  font-size: 15px;
}
.sticky-section .section .wechat-qr .qr-img[data-v-398d293d] {
  margin-top: 9px;
  height: 95px;
  background: url("../../assets/shouw.png") no-repeat center 0;
  background-size: contain;
  border-radius: 2px;
}
.sticky-section .help[data-v-398d293d] {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.sticky-section .help .items[data-v-398d293d] {
  flex-grow: 1;
  display: flex;
  height: 90px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #71777b;
}
.sticky-section .help .items[data-v-398d293d]:hover {
  background-color: #f9f9f9;
}
.sticky-section .help .items[data-v-398d293d]:first-child {
  position: relative;
}
.sticky-section .help .items[data-v-398d293d]:first-child:after {
  content: "";
  position: absolute;
  width: 0;
  height: 45px;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  border-right: 1px solid #efefef;
}
.sticky-section .help .items img[data-v-398d293d] {
  width: auto;
  height: 28px;
}
.sticky-section .help .items .title[data-v-398d293d] {
  margin-top: 8px;
  font-size: 14px;
}
.sticky-section .book-new-user-ticket-for-book-index[data-v-398d293d] {
  margin-top: 10px;
}
.top .sticky-section[data-v-398d293d] {
  top: 67px;
}
.asdieimg {
  width: 240px;
  height: 80px;
  margin-top: 10px;
}
.asdieimg img {
  width: 100%;
  height: 100%;
}
/* 个人中心 侧内容 */
</style>