<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
       <el-tab-pane label="推荐" name="recom">
        <span slot="label">
          <i class="Lazy Lazytuijian"></i> 推荐
        </span>
        <CommonList v-if="type==0" :cat="{name:'recom',type:0}" ></CommonList>
      </el-tab-pane>
      <el-tab-pane label="前端" name="web">
        <span slot="label">
          <i class="Lazy Lazyweb"></i> 前端
        </span>
        <CommonList v-if="type==1" :cat="{name:'web',type:1}" ></CommonList>
      </el-tab-pane>
      <el-tab-pane label= "后端" name="backEnd">
        <span slot="label">
          <i class="Lazy Lazy_houduankaifa"></i> 后端
        </span>
         <CommonList v-if="type==2" :cat="{name:'backEnd',type:2}" ></CommonList>
      </el-tab-pane>
      <el-tab-pane label="安卓" name="ios">
        <span slot="label">
          <i style="font-size:15px" class="Lazy LazyiOS"></i> 安卓
        </span>
        <CommonList v-if="type==3" :cat="{name:'ios',type:3}"></CommonList>
      </el-tab-pane>
      <el-tab-pane label="ios" name="Android">
        <span slot="label">
          <i style="font-size:15px" class="Lazy Lazyandroid3"></i> ios
        </span>
        <CommonList v-if="type==4" :cat="{name:'Android',type:4}"></CommonList>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
/* eslint-disable */
import CommonList from "../common/CommonList";
export default {
  name: "MainTab",
  data() {
    return {
      activeName: "recom",
      type:0,
    };
  },
  components: {
    CommonList
  },
  methods: {
    handleClick(tab, event) {
      this.type=tab.$data.index
    }
  }
};
</script>

<style scoped>
.el-tabs__content div {
  padding: 1px;
}
.el-tabs__nav-wrap .is-top{
  background: white;
}
</style>