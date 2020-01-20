<template>
  <div class="warp">
    <h3 style="color:#409EFF">
      <i class="Lazy Lazydianzan5"></i> 作者榜
    </h3>
    <el-divider></el-divider>
    <ul>
      <li v-for="(item,index) in list " :key="index">
        <el-container>
          <el-aside width="60px">
            <img :src="item.headUrl" alt />
          </el-aside>
          <el-main>
            <h4>{{item.autor}}</h4>
            <p>{{item.explain}}</p>
          </el-main>
        </el-container>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Billboard",
  data() {
    return {
      list: [
        {
          autor: "admin",
          explain: "简介简介简介简介简介简介简介",
          headUrl:
            "https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K///it///u=3499274531,2537514426&fm=202"
        },
        {
          autor: "admin",
          explain: "简介简介简介简介简介简介简介",
          headUrl:
            "https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K///it///u=3499274531,2537514426&fm=202"
        }
      ]
    };
  }
};
</script>

<style scoped>
.warp {
  width: 80%;
  background: white;
}
h4 {
  padding-top: 10px;
  font-weight: bold;
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
}
ul li .el-aside {
  line-height: 50%;
}

ul li .el-main {
  padding: 10px;
}
</style>