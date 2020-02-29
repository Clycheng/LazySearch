<template>
  <div class="warp">
    <h3 style="color:#409EFF;margin-left:20px">
      热门排行
    </h3>
    <el-divider></el-divider>
    <div class="container">
      <div class="card" v-for="(item,index) in list" :key="index">
        <div class="content">
          <h2>{{item.painum}}</h2>
          <p>{{item.username}}</p>
         <router-link :to='{ name: "Details", query: { id: item.id }}'>Read More</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Byingimg",
  data() {
    return {
        list:[
            {username:'唐家三少',painum:'1'},
            {username:'天产土豆',painum:'2'},
            {username:'我爱吃西红柿',painum:'3'},
            {username:'王大锤玄机',painum:'4'},
        ]
    };
  }
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