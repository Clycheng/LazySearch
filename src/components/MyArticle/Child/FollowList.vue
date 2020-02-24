<template>
  <div>
    <div>
      <ul
        v-loading="loading"
        class="InfiniteScroll"
        @scroll.passive="load($event)"
        style="height:550px;"
      >
        <li v-for="(item,index) in count" :key="index">
          <div class = "left-warp">
                 <el-avatar :size="size" :src="circleUrl"></el-avatar>
          </div>
          <div class = "right-warp">

          </div>
     
        </li>
        <div
          v-loading="loading"
          element-loading-text="拼命加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="#F4F5F5"
          style="width: 100%;height:50px"
        ></div>
      </ul>
    </div>
  </div>
</template>

<script>
import { setTimeout } from "timers";
export default {
  name: "FollowList",
  data() {
    return {
      count: 25,
      size:50,
      circleUrl:
        "https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2557414929,1586734827&fm=58",
      loading: false
    };
  },
  methods: {
    load(e) {
      let top = e.target.scrollTop;
      let wheight = e.target.offsetHeight;
      let diffValue = wheight - top;
      console.log(diffValue);
      if (diffValue <= -20) {
        this.loading = true;
        if (this.count >= 50) {
          this.count = 50;
          console.log("加载完毕");
        }
        setTimeout(() => {
          this.count += 1;
          this.loading = false;
        }, 1000);
      }
    }
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
.left-warp{
  float: left;
}
</style>