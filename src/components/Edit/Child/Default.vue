<template>
  <div>
      <!-- 文章动画效果 -->
    <div class="cube">
      <div class="cuboid slice">
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
      </div>
      <div class="cuboid slice">
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
      </div>
      <div class="cuboid slice">
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
      </div>
      <div class="cuboid slice">
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
        <div class="cuboid__face"></div>
      </div>
      <div class="drop">
        <div class="shadow slice"></div>
        <div class="shadow slice"></div>
        <div class="shadow slice"></div>
        <div class="shadow slice"></div>
      </div>
    </div>
     <!-- 文章动画效果 -->
    <div class="connet">
      <p>用代码重塑人生</p>
      <p>用文章改变生活</p>
      <p>----懒搜科技</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Default",
  data() {
    return {};
  }
};
</script>

<style scoped>
/*动画css */
@import url("../../../assets/css/zhengxiao.css");
/*动画css */
.connet {
  /* height: 665px; */
  padding-top: 50px;
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: 30px;
  color: #000000;
  text-shadow: 1px 1px 1px #111;
  position: relative;
  left: 100px;
}
p {
  padding-top: 20px;
}
.connet p:nth-child(3) {
  font-size: 25px;
  float: right;
}
</style>