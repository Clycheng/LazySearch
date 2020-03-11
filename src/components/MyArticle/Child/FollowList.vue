<template>
  <div>
    <div>
      <div id="list-container">
        <ul
          class="user-list"
          infinite-scroll-url="/users/b28e5f578c6a/following"
          data-placeholder="user"
        >
          <li v-for="(item,index) in author" :key="index" :class="state?'guan2':'guan1'">
            <a class="avatar" href="/u/37dc24d75db2">
              <img
                :src="item.imageTitle"
                alt="180"
              />
            </a>
            <div class="info">
              <a class="name" href="/u/37dc24d75db2">{{item.name}}</a>
              <i v-show="item.sex =='女'" class="el-icon-female"></i>
              <i v-show="item.sex =='男'" class="el-icon-male"></i>
              <div class="meta">
                <span>关注 {{item.Follownum}}</span>
                <span>粉丝 {{item.Fansnum}}</span>
                <span>性别 {{item.sex}}</span>
              </div>
              <div class="meta">
                <span>关注 {{item.age}}</span>
                <span>电话 {{item.phone}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { followmy } from "../../../api/text/pin";
import { setTimeout } from "timers";
export default {
  name: "FollowList",
  data() {
    return {
      state: null,
      author: [
        {
          name: "",
          Follownum: "",
          Fansnum: "",
          sex: "",
          age: "",
          phone: ""
        }
      ]
    };
  },
  methods: {
    // 获取关注的用户信息
    myfollow() {
      let username = sessionStorage.getItem("userName");
      let UserID = sessionStorage.getItem("UserID");
      followmy({
        username: username,
        userId: UserID
      }).then(res => {
        if (res.data.data == "您还没有一个关注哦") {
          this.$notify({
            message: "还没有人关注您哦",
            offset: 100,
            type: "warning",
            duration: 1500
          });
          this.state = true;
        } else {
          this.author = res.data.data;
        }
      });
    }
  },
  mounted() {
    this.myfollow();
  }
};
</script>
<style  scoped>
.InfiniteScroll {
  overflow: scroll;
}
.InfiniteScroll::-webkit-scrollbar {
  width: 0px;
}
.InfiniteScroll li {
  padding: 20px;
}
.left-warp {
  float: left;
}

/* 信息 */
.user-list li {
  list-style: none;
  clear: both;
}
ul {
  padding-left: 0;
}
.user-list li:first-child {
  padding-top: 0 !important;
}
.user-list li {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
  line-height: normal;
}
.user-list .avatar,
.user-list .avatar-collection {
  width: 52px;
  height: 52px;
  margin-right: 8px;
  vertical-align: middle;
  display: inline-block;
}
.avatar {
  width: 24px;
  height: 24px;
  display: block;
  cursor: pointer;
}
.avatar img {
  width: 100%;
  height: 100%;
  border: 1px solid #ddd;
  border-radius: 50%;
}
.user-list .info {
  vertical-align: middle;
  display: inline-block;
  max-width: 450px;
}
.user-list .info a,
.user-list .name {
  font-size: 15px;
  font-weight: 700;
  color: #333;
}
.ic-woman:before {
  content: "\E645";
}
.el-icon-female {
  color: #ea6f5a;
}
.el-icon-male {
  color: #3194d0;
}
.iconfont {
  font-family: iconfont !important;
  font-size: inherit;
  font-style: normal;
  font-weight: 400 !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.user-list .meta {
  padding-top: 2px;
  font-size: 12px;
  color: #969696;
}
.user-list .meta span {
  margin-right: 10px;
  padding-right: 10px;
  border-right: 1px solid #969696;
}
.user-list .meta span:last-child {
  border: none;
}
.user-list .meta {
  padding-top: 2px;
  font-size: 12px;
  color: #969696;
}
.user-list .follow,
.user-list .following,
.user-list .user-follow-button-item {
  float: right;
  margin-top: 8px;
  padding: 8px 0;
  width: 100px;
  font-size: 15px;
}
.following {
  border: 1px solid hsla(0, 0%, 59%, 0.6);
  background: none;
}
.follow,
.following {
  padding: 8px 22px;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
}
.btn-default {
  border-radius: 40px;
  color: #8c8c8c;
  background-color: #f0f0f0;
  border-color: #f0f0f0;
}
.btn {
  display: inline-block;
  margin-bottom: 0;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  cursor: pointer;
  background-image: none;
  border: 1px solid transparent;
  white-space: nowrap;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  border-radius: 4px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.following span,
.follow span {
  margin-left: 2px;
  display: inline;
}
.btn-default {
  border-radius: 40px;
  color: #8c8c8c;
  background-color: #f0f0f0;
  border-color: #f0f0f0;
}
.guan2 {
  display: none;
}
/* 信息 */
</style>