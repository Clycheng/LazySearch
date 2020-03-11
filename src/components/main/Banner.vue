<template>
  <el-carousel :interval="4000" type="card" height="400px" width="800px">
    <el-carousel-item class="bannerimg">
      <img src="../../assets/wen1.jpeg" alt="">
    </el-carousel-item>
    <el-carousel-item class="bannerimg">
      <img src="../../assets/jgimg4.png" alt="">
    </el-carousel-item>
    <el-carousel-item class="bannerimg">
      <img src="../../assets/jgimg3.jpg" alt="">
    </el-carousel-item>
    <el-carousel-item class="bannerimg">
      <img src="../../assets/jgimg6.jpg" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
/* eslint-disable */
export default {
    name:"Banner",
    data(){
      return{
        banner:[],
      }
    }
}
</script>

<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .bannerimg{
    width: 700px;
    height: 400px;
  }
  .bannerimg  img{
    width: 100%;
    height: 100%;
  }
</style>