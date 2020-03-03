<template>
  <div :model="pin">
    <div class="warp" :model='textwen'>
      <h1>{{textwen.post_title}}</h1>
      <el-container class="autor">
        <el-aside width="50px">
          <router-link class="autor-img" to="#">
            <img
              src="https://upload.jianshu.io/users/upload_avatars/6778531/66e3f92e-e6c0-454d-87a4-92e8377e33c5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
              alt
            />
          </router-link>
        </el-aside>
        <el-main>
          <div class="autor-message">
            <p class="autor-name">
              <router-link to="#">{{textwen.author_name}}</router-link>
              <el-button size="mini" round>关注</el-button>
              <!-- 评分 -->
              <el-rate v-model="value2" :colors="colors"></el-rate>
              <!-- 评分 -->
            </p>
            <p class="Interaction">
              <em>{{textwen.post_date}}</em>
              <!-- <em>字数 {{textwen.post_content.length}}</em> -->
              <em>阅读 {{textwen.Ready_Num}}</em>
            </p>
          </div>
        </el-main>
      </el-container>
      <div v-html="content" id="connet-warp"></div>
      <div v-html="textwen.post_content" id="connet-warp">{{textwen.post_content}}</div>
    </div>
    <!-- 评论 -->
    <div class="comment">
      <div class="_26JdYM">
        <img
          class="_3LHFA-"
          src="https://upload.jianshu.io/users/upload_avatars/6778531/66e3f92e-e6c0-454d-87a4-92e8377e33c5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
          alt
        />
        <div class="_3GKFE3">
          <textarea class="_1u_H4i" placeholder="写下你的评论..."></textarea>
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
              <div class="_3Tp4of">
                <button type="button" class="_1OyPqC _3Mi9q9 _1YbC5u" disabled>
                  <span>发布</span>
                </button>
                <button type="button" class="_1OyPqC _2nzlC_" disabled>
                  <span>取消</span>
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
      <div class="_2gPNSa" v-for="(item,index) in pin" :key="index">
        <div class="_2IUqvs _3uuww8" id="comment-54200911">
          <a class="_1OhGeD" href="/u/5330826245e3" target="_blank" rel="noopener noreferrer">
            <img
              class="_1_jhXc"
              src="https://upload.jianshu.io/users/upload_avatars/6778531/66e3f92e-e6c0-454d-87a4-92e8377e33c5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
              alt
            />
          </a>
          <div class="_1K9gkf">
            <div class="_23G05g">
              <a
                class="_1OhGeD"
                href="/u/5330826245e3"
                target="_blank"
                rel="noopener noreferrer"
              >{{item.username}}</a>
            </div>
            <div class="_1xqkrI">
              <span>{{item.num}}楼</span>
              <time datetime="2020-02-26T09:27:12.000Z">{{item.time}}</time>
            </div>
            <div class="_2bDGm4">{{item.text}}</div>
            <div class="_2ti5br">
              <div class="_3MyyYc">
                <span
                  class="_2GXD2V _1Jvkh4"
                  v-show="!showCommentInput"
                  @click="showCommentInput = !showCommentInput"
                >
                  <i aria-label="ic-like" class="anticon el-icon-thumb"></i>
                  赞
                </span>
                <span
                  class="_2GXD2V _1Jvkh4 _2GXD2Vyincang"
                  v-show="showCommentInput"
                  @click="showCommentInput = !showCommentInput"
                >
                  <i aria-label="ic-like" class="anticon el-icon-thumb"></i>
                  赞
                </span>
                <span class="_1Jvkh4">
                  <i aria-label="ic-reply" class="anticon el-icon-eleme"></i>
                  回复
                </span>
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
  import {queryAbout} from '../../../api/text/wentext';
export default {
  name: "Article",
  data() {
    return {
      title: "",
      content: "",
      textwen:[],
      // 评分
      value2: 4.5,
      colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
      // 评分
      showCommentInput: false,
      pin: [
        {
          username: "文泽",
          num: "1",
          time: "02.26 17:27",
          text: "写的很好，才女👍"
        },
        {
          username: "张浩",
          num: "2",
          time: "02.27 18:25",
          text: "你特娘的太有才了"
        },
        {
          username: "晓磊",
          num: "3",
          time: "02.27 20:03",
          text: "太好了写的，真不错啊。"
        }
      ]
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
      console.log(e);
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
    ajxa(e) {
      console.log(e);
    },
    // 获取详情
    aboutQuery(id) {
      queryAbout(id).then(res => {
        console.log(res.data)
        if (res.status == 200) {
          this.textwen=res.data[0];
          console.log(this.textwen)
        }
      });
    }
        // 获取详情
  }
};
</script>

<style scoped>
@import url("../../../assets/css/pinglun.css");
h1 {
  width: 100%;
  padding-left: 15px;
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
  padding-left: 15px;
  color: rgb(181, 184, 189);
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
#connet-warp{
  /* width: 852px; */
  padding: 24px;

    /* 自动换行 */
  word-wrap: break-word;
  white-space : normal;
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
    white-space:pre-wrap;
white-space:-moz-pre-wrap;
white-space:-pre-wrap;
white-space:-o-pre-wrap;
word-wrap:break-word;
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
    white-space:pre-wrap;
white-space:-moz-pre-wrap;
white-space:-pre-wrap;
white-space:-o-pre-wrap;
word-wrap:break-word;
  /* 自动换行 */
  overflow-x: hidden; overflow-y: auto;
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

/* 字体隐藏 赞 */
._2GXD2Vyincang {
  color: #54a2eb;
  margin: 0 10px 0 10px;
  font-weight: bold;
}
/* 字体隐藏 */
</style>