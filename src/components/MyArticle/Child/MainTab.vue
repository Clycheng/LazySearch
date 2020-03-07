<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane name = "Article">
        <span slot="label">
          <i class="Lazy Lazywenzhang1"></i> 我的文章
        </span>
        <CommonList :cat="{name:'Article'}" ></CommonList>
      </el-tab-pane>
      <el-tab-pane name = "Follow">
        <span slot="label">
          <i class="Lazy Lazyguanzhu3"></i> 我的关注
        </span>
        <FollowList></FollowList>
      </el-tab-pane>
      <el-tab-pane name = "Fans">
        <span slot="label">
          <i class="Lazy Lazyfensi1"></i> 我的粉丝
        </span>
        <Fenlist></Fenlist>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
/* eslint-disable */
import CommonList from './CommonList'
import FollowList from './FollowList'
import Fenlist from './Fenlist'
export default {
  name: "MainTab",
  data() {
    return {
      activeName: "Article"
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  components:{
      CommonList,
      FollowList,
      Fenlist
  }
};
</script>

<style scoped>
    .is-top span i{
        font-size: 14px;
    }
</style>