<template>
  <div>
    <div>
        <div id="list-container">
          <ul
            class="user-list"
            infinite-scroll-url="/users/b28e5f578c6a/following"
            data-placeholder="user"
          >
            <li v-for="(item,index) in author" :key="index">
              <a class="avatar" href="/u/37dc24d75db2">
                <img
                  src="https://upload.jianshu.io/users/upload_avatars/14776810/35256ec5-0e54-4c46-906a-f362e0b71ed6.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/180/h/180"
                  alt="180"
                />
              </a>
              <div class="info">
                <a class="name" href="/u/37dc24d75db2">{{item.username}}</a>
                <!-- <i class="el-icon-female"></i> -->
                <i class="el-icon-male"></i>
                <div class="meta">
                  <span>关注 {{item.guan}}</span>
                  <span>粉丝 {{item.fensi}}</span>
                  <span>文章 {{item.wen}}</span>
                </div>
                <div class="meta">写了 {{item.zinum}} 字，获得了 {{item.huan}} 个喜欢</div>
              </div>
              <!-- <a class="btn btn-default following">
                <i class="el-icon-check"></i>
                <span>已关注</span>
              </a> -->
              <a class="btn btn-default following">
                <span>未关注</span>
              </a>
            </li>
          </ul>
        </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { setTimeout } from "timers";
export default {
  name: "Fenlist",
  data() {
    return {
       author:[
         {username:'我爱吃西红柿',guan:'1253',fensi:'8545',wen:'8965',zinum:'98658985',huan:'52148'},
         {username:'天产土豆',guan:'3452',fensi:'456',wen:'567',zinum:'256245615',huan:'3456'},
         {username:'阿豪',guan:'34',fensi:'4135',wen:'589',zinum:'134645',huan:'3242'},
         {username:'唐家三少',guan:'234',fensi:'6546',wen:'4326',zinum:'134534236',huan:'35341'},
         {username:'王大锤他哥',guan:'124',fensi:'784',wen:'72455',zinum:'256245156',huan:'3543'},
         {username:'帙卷浩繁',guan:'6432',fensi:'342',wen:'5754',zinum:'324671',huan:'41351'},
       ]
    };
  },
  methods: {

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
.user-list li{
  list-style: none;
  clear: both;
}
ul{
  padding-left: 0;
}
.user-list li:first-child {
 padding-top:0!important
}
.user-list li {
 padding-bottom:20px;
 margin-bottom:20px;
 border-bottom:1px solid #f0f0f0;
 line-height:normal
}
.user-list .avatar,
.user-list .avatar-collection {
 width:52px;
 height:52px;
 margin-right:8px;
 vertical-align:middle;
 display:inline-block
}
.avatar {
 width:24px;
 height:24px;
 display:block;
 cursor:pointer
}
.avatar img {
 width:100%;
 height:100%;
 border:1px solid #ddd;
 border-radius:50%
}
.user-list .info {
 vertical-align:middle;
 display:inline-block;
 max-width:450px
}
.user-list .info a,
.user-list .name {
 font-size:15px;
 font-weight:700;
 color:#333
}
.ic-woman:before {
 content:"\E645";
}
.el-icon-female {
 color:#ea6f5a;
}
.el-icon-male {
 color:#3194d0
}
.iconfont {
 font-family:iconfont!important;
 font-size:inherit;
 font-style:normal;
 font-weight:400!important;
 -webkit-font-smoothing:antialiased;
 -moz-osx-font-smoothing:grayscale
}
.user-list .meta {
 padding-top:2px;
 font-size:12px;
 color:#969696
}
.user-list .meta span {
 margin-right:10px;
 padding-right:10px;
 border-right:1px solid #969696
}
.user-list .meta span:last-child {
 border:none;
}
.user-list .meta {
 padding-top:2px;
 font-size:12px;
 color:#969696
}
.user-list .follow,
.user-list .following,
.user-list .user-follow-button-item {
 float:right;
 margin-top:8px;
 padding:8px 0;
 width:100px;
 font-size:15px
}
.following {
 border:1px solid hsla(0,0%,59%,.6);
 background:none
}
.follow,
.following {
 padding:8px 22px;
 font-size:16px;
 font-weight:400;
 line-height:normal
}
.btn-default {
 border-radius:40px;
 color:#8c8c8c;
 background-color:#f0f0f0;
 border-color:#f0f0f0
}
.btn {
 display:inline-block;
 margin-bottom:0;
 font-weight:400;
 text-align:center;
 vertical-align:middle;
 -ms-touch-action:manipulation;
 touch-action:manipulation;
 cursor:pointer;
 background-image:none;
 border:1px solid transparent;
 white-space:nowrap;
 padding:6px 12px;
 font-size:14px;
 line-height:1.42857;
 border-radius:4px;
 -webkit-user-select:none;
 -moz-user-select:none;
 -ms-user-select:none;
 user-select:none
}
.following span,
.follow span {
 margin-left:2px;
 display:inline
}
.btn-default {
 border-radius:40px;
 color:#8c8c8c;
 background-color:#f0f0f0;
 border-color:#f0f0f0
}
/* 信息 */
</style>