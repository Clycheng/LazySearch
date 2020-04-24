<template>
  <div :model="pin" v-loading="loading">
    <div class="warp" :model="textwen">
      <h1>{{textwen.post_title}}</h1>
      <el-container class="autor">
        <el-aside width="50px" :model="personData">
          <router-link class="autor-img" to="#">
            <img :src="personData.imageTitle" alt />
          </router-link>
        </el-aside>
        <el-main>
          <div class="autor-message">
            <p class="autor-name">
              <router-link class="authname" to="#">{{textwen.author_name}}</router-link>
              <el-button :class="state?'guan2':'guan1'" size="mini" round @click="guan">关注</el-button>
              <el-button :class="state?'guan1':'guan2'" size="mini" round>已关注</el-button>
              <!-- 评分 -->
              <el-rate v-model="value2" :colors="colors"></el-rate>
              <!-- 评分 -->
            </p>
            <p class="Interaction" :model="textlength">
              <em>{{textwen.post_date}}</em>
              <em>字数 {{textlength}}</em>
              <em>阅读 {{textwen.Ready_Num}}</em>
            </p>
          </div>
        </el-main>
      </el-container>
      <!-- <div v-html="content" id="connet-warp"></div> -->
      <div v-html="textwen.post_content" id="connet-warp">{{textwen.post_content}}</div>
    </div>
    <!-- 评论 -->
    <div class="comment" :model="personData">
      <div class="_26JdYM">
        <img class="_3LHFA-" :src="imguser" alt />
        <div class="_3GKFE3">
          <textarea class="_1u_H4i" placeholder="写下你的评论..." v-model="textpinlun"></textarea>
          <div>
            <div class="_3IXP9Q" style="display: flex;">
              <div class="SKZUyR">
                <i aria-label="icon: smile" tabindex="-1" class="anticon anticon-smile _3MkVdm">
                  <svg
                    viewBox="64 64 896 896"
                    focusable="false"
                    class
                    data-icon="smile"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M288 421a48 48 0 1 0 96 0 48 48 0 1 0-96 0zm352 0a48 48 0 1 0 96 0 48 48 0 1 0-96 0zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884c-50.3 0-99-9.8-144.8-29.2A370.4 370.4 0 0 1 248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 0 1 249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140c50.3 0 99 9.8 144.8 29.2A370.4 370.4 0 0 1 775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.89 368.89 0 0 1 775 775zM664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 0 0-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 0 0-8-8.4z"
                    />
                  </svg>
                </i>
                <span>快去和朋友交流自己的想法吧！</span>
              </div>
              <div class="_3Tp4of" @click="pingluntext">
                <button type="button" class="_1OyPqC _3Mi9q9 _1YbC5u" disabled>
                  <span>发布</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="QxT4hDbox">
      <h3 class="QxT4hD">
        <div class="_10KzV0">
          <span>全部评论</span>
          <span class="_2R7vBo">{{pin.length}}</span>
        </div>
      </h3>
      <!-- 用户评论 -->
      <div class="_2gPNSa" v-for="(item,index) in pin" :key="index" v-loading="loading">
        <div class="_2IUqvs _3uuww8" id="comment-54200911">
          <a class="_1OhGeD" href target="_blank" rel="noopener noreferrer">
            <img class="_1_jhXc" :src="item.comment_img_title" alt />
          </a>
          <div class="_1K9gkf">
            <div class="_23G05g">
              <a
                class="_1OhGeD"
                href="/u/5330826245e3"
                target="_blank"
                rel="noopener noreferrer"
              >{{item.comment_author}}</a>
            </div>
            <div class="_1xqkrI">
              <span>{{index+1}}楼</span>
              <time datetime="2020-02-26T09:27:12.000Z">{{item.comment_date}}</time>
            </div>
            <div class="_2bDGm4">{{item.comment_content}}</div>
            <div class="_2ti5br">
              <div class="_3MyyYc">
                <el-badge
                  :value="item.Fab_Num"
                  :class="zanstate?'guan2':'guan1'"
                  class="item"
                  type="primary"
                >
                  <el-button class="zanbtn" size="small" @click="fabzan(item.comment_ID)">赞</el-button>
                </el-badge>
                <el-badge
                  :value="item.Fab_Num"
                  :class="zanstate?'guan1':'guan2'"
                  class="item"
                  type="primary"
                >
                  <el-button class="zanbtn" size="small" @click="fabzan(item.comment_ID)">赞</el-button>
                </el-badge>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 用户评论 -->
    </div>
    <!-- 评论 -->
  </div>
</template>

<script>
/* eslint-disable */
import { queryAbout } from "../../../api/text/wentext";
import { pingluned, guanzuo, zanfab } from "../../../api/text/pin";
export default {
  name: "Article",
  data() {
    return {
      id: "",
      loading: true,
      title: "",
      content: "",
      textwen: [],
      textlength: "",
      // 关注状态码
      state: "",
      // 点赞状态
      zanstate: "",
      // 用户信息
      users: [
        {
          username: "",
          name: "",
          age: "",
          motto: "",
          email: "",
          phone: "",
          sex: ""
        }
      ],
      post_id: "",
      // 评分
      value2: 4.5,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      // 评分
      // 评论的内容
      textpinlun: "",
      // 评论的内容
      pin: [],
      user: {
        username: "",
        UserId: "",
        token: ""
      },
      follow: {
        username: "",
        UserId: ""
      },
      // g个人信息
      personData: [],
      // 当前用户的头像
      imguser: []
    };
  },
  props: ["category"],
  beforeMount() {
    switch (this.category) {
      case "preview":
        this.title = this.$store.state.Edit.NewArticle.title;
        this.content = this.$store.state.Edit.NewArticle.content;
        break;
      default:
        this.ajxa(this.category);
        break;
    }
  },
  mounted() {
    document.addEventListener("copy", function(e) {
      // console.log(e);
    });
    // 接收id
    this.id = this.$route.query.id;
    this.aboutQuery(this.id);
    // 接收id
  },
  updated() {
    // let warp = document.getElementById("connet-warp")
    // let tag_img = warp.getElementsByTagName("img")
    //  img[0].style.width = "100px"
    // console.log(tag_img)
  },
  methods: {
    // 获取详情
    async aboutQuery(id) {
      let UserID = sessionStorage.getItem("UserID"); // 唯一表示id
      let User_img = sessionStorage.getItem("User_img");
      this.imguser = User_img;
      window.console.log(this.imguser)
      this.post_id = id;
      let res = await queryAbout({
        id: this.post_id,
        userId: UserID
      });
      if (res.status == 200) {
        this.loading = false;
        this.textwen = res.data.data[0];
        this.pin = res.data.commmentData;
        this.personData = res.data.personData;
        if (res.data.isMy == true) {
          this.state = res.data.isMy;
        } else {
          this.state = res.data.isMyFollow;
        }
        this.textlength = res.data.data[0].post_content.length;
      }
    },
    // 获取详情
    // 关注
    guan() {
      let token = sessionStorage.getItem("token"); // token
      let UserID = sessionStorage.getItem("UserID"); // 唯一表示id
      let userName = sessionStorage.getItem("userName"); // 用户名
      if (userName && token && UserID) {
        let user = {
          username: userName,
          UserId: UserID,
          token: token
        };
        let follow = {
          username: this.textwen.post_author,
          UserId: this.textwen.Author_Id
        };
        guanzuo({ user, follow }).then(res => {
          if (res.data.code == 100010 || res.data.code == 100011) {
            this.state = true;
          } else {
            this.state = false;
          }
        });
      } else {
        this.$notify({
          message: "登录之后才可以关注",
          offset: 100,
          type: "warning",
          duration: 1500
        });
      }
    },
    // 发布评论
    async pingluntext() {
      let userName = sessionStorage.getItem("userName"); // 用户名
      let token = sessionStorage.getItem("token");
      let UserId = sessionStorage.getItem("UserID");
      let author_name = sessionStorage.getItem("author_name");
      let User_img = sessionStorage.getItem("User_img");
      if (userName && token && UserId) {
        if (this.textpinlun == "") {
          this.$notify({
            message: "评论不能为空",
            offset: 100,
            type: "warning",
            duration: 1500
          });
          return;
        }
        let res = await pingluned({
          post_id: this.post_id,
          comment_content: this.textpinlun,
          author: author_name,
          token: token,
          UserId: UserId,
          imgTitle: User_img
        });
        if (res.data.code == 10010) {
          this.loading = false;
          this.pin = res.data.Comments;
          this.textpinlun = null;
        }
      } else {
        this.$notify({
          message: "登录之后才可以评论",
          offset: 100,
          type: "warning",
          duration: 1500
        });
      }
    },
    // 点赞
    async fabzan(comment_ID) {
      let token = sessionStorage.getItem("token");
      let UserId = sessionStorage.getItem("UserID");
      let author_name = sessionStorage.getItem("author_name");
      if (token && UserId) {
        let res = await zanfab({
          userId: UserId,
          author: author_name,
          token: token,
          comments_id: comment_ID
        });
        if (res.data.code == 10010) {
          this.$notify({
            message: "点赞成功",
            offset: 100,
            type: "success",
            duration: 1500
          });
          this.zanstate == true;
          this.aboutQuery(this.id);
        }
      } else {
        this.$notify({
          message: "登录之后才可以点赞",
          offset: 100,
          type: "warning",
          duration: 1500
        });
      }
    },
    ajxa(e) {}
  }
};
</script>

<style scoped>
@import url("../../../assets/css/pinglun.css");
h1 {
  width: 100%;
  padding-left: 25px;
  padding-top: 20px;
  line-height: 45px;
  height: 45px;
  font-size: 25px;
  font-weight: bold;
}
.warp {
  background: white;
  margin-bottom: 15px;
}
.autor {
  padding-left: 25px;
  color: rgb(181, 184, 189);
  margin-top: 15px;
}
.autor-img {
  display: block;
  width: 50px;
  height: 50px;
  position: relative; /*脱离文档流*/
  top: 25%; /*偏移*/
}
.autor-img img {
  width: 100%;
  border-radius: 100%;
}
.Interaction {
  color: rgb(167, 165, 162);
  font-size: 12px;
}
.Interaction em {
  font-style: normal;
  display: inline-block;
  margin-left: 5px;
}
.Interaction em:nth-child(1) {
  margin-left: 0px;
}
#connet-warp {
  /* width: 852px; */
  padding: 0 30px 30px 30px;

  /* 自动换行 */
  word-wrap: break-word;
  white-space: normal;
  /* 自动换行 */
}
#connet-warp >>> img {
  display: block;
  width: 55%;
  margin-top: 20px;
  margin: 0 auto;
}
#connet-warp >>> p {
  margin-top: 5px;
  line-height: 160%;
  padding: 15px;
  background: #ffffff;
  /* 自动换行 */
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  /* 自动换行 */
}
#connet-warp >>> code {
  box-sizing: border-box;
  display: block;
  padding: 15px;
  width: 100%;
  background: #ffffff;
  overflow: scroll;
  /* 自动换行 */
  white-space: pre-wrap;
  white-space: -moz-pre-wrap;
  white-space: -pre-wrap;
  white-space: -o-pre-wrap;
  word-wrap: break-word;
  /* 自动换行 */
  overflow-x: hidden;
  overflow-y: auto;
}
div {
  line-height: 25px;
}
a {
  text-decoration: underline;
}
.warp div pre code {
  display: block;
  width: 100%;
  background: red;
}
.item {
  margin: 10px 40px 30px 20px;
}
.authname {
  font-weight: 700;
  font-size: 20px;
}
/* 字体隐藏 赞 */
._2GXD2Vyincang {
  color: #54a2eb;
  margin: 0 10px 0 10px;
  font-weight: bold;
}
/* 字体隐藏 */
/* 关注 */
.guan1 {
  color: #54a2eb;
}
.guan2 {
  display: none;
}
.zanbtn {
  font-size: 14px;
  font-weight: 700;
  border-radius: 10px;
  border: none;
}
</style>