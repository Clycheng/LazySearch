<template>
  <div v-loading="loading">
    <ul
      class="infinite-list"
      infinite-scroll-distance="1010px"
      style="overflow:auto"
    >
          <!-- v-infinite-scroll="load"   在ul中-->
      <li v-for="(item,index) in list" :key="index" class="list-item infinite-list-item">
        <el-container>
          <el-aside width="200px">
            <img class="aside-img" :src="item.Img_Title" alt />
          </el-aside>
          <el-main>
          <router-link :to='{ name: "Details", query: { id: item.ID }}'> <h2>{{item.post_title}}</h2></router-link>
            <p>{{item.Brief}}</p>
            <div class="details-warp">
              <span style="color:#66B1FF;font-size:12px">
                <i class="Lazy Lazyyuedu1"></i>
                123
              </span>
              <router-link to="#">{{item.author_name}}</router-link>
              <span style="color:#B4BBCE;font-size:12px">
                <i class="Lazy Lazypinglun2"></i>
                {{item.comment_count}}
              </span>
            </div>
          </el-main>
        </el-container>
      </li>
    </ul>
    <el-pagination
    layout="prev, pager, next"
    :page-size='limit'
    @current-change="currentPage"
    :total="total">
  </el-pagination>
  </div>
</template>

<script>
/* eslint-disable */
import {mytext} from "../../../api/text/wentext";
export default {
  name: "CommonList",
  data() {
    return {
      list: [],
      page: 1,
      limit: 5,
      total: 0,
      start: "",
      loading: true,
      author: "",
      UserId: "",
    };
  },
    methods: {
    currentPage(val){
       this.page=val;
    },
    // ,this.start=(this.page-1)*5
    // 获取我的文章
 inserts(){
      let token=sessionStorage.getItem("token");
      let UserID=sessionStorage.getItem("UserID");
      mytext({
        token: token,
        UserId: this.UserId=UserID,
        start:this.start = (this.page - 1) * 5
      }).then(res => {
        if (res.data.code == 200) {
          this.loading=false;
          this.list = res.data.data;
          this.total = res.data.total;
        }
      });
    },
// 获取我的文章
  },
mounted() {
  this.inserts();
},
  watch:{
    page(){       //监听  点击1  2  3  上面内容切换
       this.inserts();
    }
},
  computed: {
    // titleSubstr(e) {
    //     return function(e){
    //             return e=e.substr(10,50)
    //         }
    //     },
    innerSubstr(e) {
      return function(e) {
        return (e = e.substr(10, 100) + "...");
      };
    }
  },
};
</script>

<style scoped>
.list-item {
  width: 100%;
  background: white;
  height: auto;
  margin-top: 35px;
  margin-bottom: 15px;
  box-shadow: 5px 4px 5px #eee9e9;
}
.list-item h2 {
  width: 90%;
  color: #2f2f2f;
  font-weight: bold;
  font-size: 17px;
}
.list-item h2:hover {
  cursor: pointer;
  text-decoration: underline;
}
.list-item p {
  margin-top: 2%;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  font-size: 12px;
  width: 90%;
  color: #999;
  text-overflow: ellipsis;
  text-indent: 25px;
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.el-main {
  padding: 25px;
  margin-left: 15px;
}
.el-aside {
  position: relative;
  width: 200px;
  height: 120px;
  margin: 20px;
  left: 0;
  overflow: hidden;
  transition: 0.2s;
  text-align: center;
}
.el-aside:hover {
  left: 10px;
}
.aside-img {
  object-fit: cover;
  cursor: pointer;
}

.details-warp {
  margin-top: 2%;
  max-height: 25px;
}
.details-warp span {
  letter-spacing: 1px;
  margin-left: 15px;
}
.details-warp span i {
  font-size: 12px;
}
.details-warp a {
  margin-left: 15px;
  font-size: 12px;
  color: #b4bbce;
}
.el-pagination{
  text-align: center;
}
</style>