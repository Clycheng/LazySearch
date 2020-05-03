<template>
  <div>
    <ul
      class="infinite-list"
      infinite-scroll-distance="1010px"
      style="overflow:auto"
      :mode='list'
      v-if="list.length"
      v-loading="loading"
    >
          <!-- v-infinite-scroll="load"   在ul中-->
      <li v-for="(item,index) in list" :key="index" class="list-item infinite-list-item">
        <el-container>
          <el-aside width="200px">
            <img class="aside-img" width="200px" :src="item.Img_Title" alt />
          </el-aside>
          <el-main>
          <router-link :to='{ name: "Details", query: { id: item.ID }}'> <h2>{{item.post_title}}</h2></router-link>
            <p>{{item.Brief}}</p>
            <div class="details-warp">
              <span style="color:#66B1FF;font-size:12px">
                <i class="Lazy Lazyyuedu1"></i>
                {{item.Ready_Num}}
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
  <el-pagination
    layout="prev, pager, next"
    :page-size='limit'
    @current-change="currentPage"
    :total="total">
  </el-pagination>
    </ul>
    <div class="elsetext" v-else>暂无搜索内容</div>
  </div>
</template>

<script>
/* eslint-disable */
import {ordersget} from "../../../api/text/wentext";
export default {
  name: "CommnList",
  props: ["tab"],
  data() {
    return {
      ActiveClass: {
        Fab: "",
        ready: ""
      },
      list: [],
      page: 1,
      limit: 5,
      total: 0,
      start: "",
      val:"",
      loading:true,
    };
  },
  computed: {
    // TitleSpilce(e){
    //     return function(e){
    //         return e.substr(0,15)
    //     }
    // }
  },
  methods: {
    payquery(val) {
      this.start=(this.page-1)*5
      ordersget(val,this.start).then(res => {
      if(res.data.code==200){
              this.loading=false;
              this.list=res.data.data;
              this.total=res.data.total;
          }
      });
    },
    currentPage(val) {
      this.page = val;
    }
  },
  mounted() {
    //   接受搜索框中值
    this.val = this.$route.params.val;
    //   接受搜索框中值
    this.payquery(this.val);
    // 在本页面中搜索 
    this.bus.$on('message',res=>{
      this.val=res
      this.payquery(this.val);
    })
    // 在本页面中搜索
  },
  watch: {
    page() {
      //监听  点击1  2  3  上面内容切换
      this.payquery(this.val);
    }
  },
//   beforeMount() {
//     console.log(this.tab);
//     this.list[0].type = this.tab;
//   }
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
.elsetext{
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 200px;
    font-size: 50px;
    color: #2f2f2f;
    font-weight: 700;
}
.el-pagination{
  text-align: center;
}
</style>