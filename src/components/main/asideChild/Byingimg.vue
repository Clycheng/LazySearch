<template>
  <div class="warp">
    <h3 style="color:#409EFF;margin-left:20px">
      <i class="el-icon-s-data"></i>
      热门排行
    </h3>
    <el-divider></el-divider>
    <div class="container">
      <div class="card" v-for="(item,index) in list" :key="index">
        <div class="content">
          <h2>{{index+1}}</h2>
          <p>{{item.post_title}}</p>
         <router-link :to='{ name: "Details", query: { id: item.ID }}'>Read More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import {hotmen} from '../../../api/text/pin'
export default {
  name: "Byingimg",
  data() {
    return {
        list:[]
    };
  },
  methods:{
    gethot(){
      hotmen().then(res=>{
      if(res.data){
        this.list=res.data
      }
      })
    }
  },
  mounted(){
    this.gethot();
  },
};
</script>

<style scoped>
@import url('../../../assets/css/ceimg.css');
.warp {
  background: white;
}
h3 {
  padding-top: 10px;
  font-weight: bold;
}
</style>