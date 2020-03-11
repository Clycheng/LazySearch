<template>
  <div class="warp">
    <h3 style="color:#409EFF;margin-left:20px">
      作者榜
    </h3>
    <el-divider></el-divider>
    <ul>
      <li v-for="(item,index) in list " :key="index">
        <!-- <router-link :to='{ name: "auother", query: { id: item.id }}'> -->
        <el-container>
          <el-aside width="60px">
            <img :src="item.imageTitle" alt />
          </el-aside>
          <el-main>
            <h4>{{item.name}}</h4>
            <p class="mainp">{{item.motto}}</p>
          </el-main>
        </el-container>
        <!-- </router-link> -->
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
import{authers} from '../../../api/text/pin'
export default {
  name: "Billboard",
  data() {
    return {
      list: []
      };
  },
  methods:{
      getauthers(){
        authers().then(res=>{
          if(res.data.code==10001){
          this.list=res.data.data
          }
        })
      }
  },
  mounted(){
    this.getauthers();
  },
};
</script>

<style scoped>
.warp {
  background: white;
  margin-right: 150px;
}
h3 {
  padding-top: 10px;
  font-weight: bold;
}
h4{
  width: 100%;
  overflow: hidden;
  font-weight: bold;
}
.mainp{
text-overflow: -o-ellipsis-lastline;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
 text-indent:30px;
}
.el-divider--horizontal {
  margin: 10px 0;
}
ul li img {
  width: 50px;
  height: 50px;
  margin-top: 30%;
  margin-left: 10%;
  border-radius: 100%;
  cursor: pointer;
}
ul li .el-aside {
  line-height: 50%;
}

ul li .el-main {
  padding: 10px;
}
</style>