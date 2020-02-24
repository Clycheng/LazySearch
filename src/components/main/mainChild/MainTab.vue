<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
       <el-tab-pane label="推荐" name="recom">
        <span slot="label">
          <i class="Lazy Lazytuijian"></i> 推荐
        </span>
        <CommonList :cat="{name:'recom',type:1}" ></CommonList>
         <el-pagination
    layout="prev, pager, next"
    :total="60">
  </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="前端" name="web">
        <span slot="label">
          <i class="Lazy Lazyweb"></i> 前端
        </span>
        <CommonList :cat="{name:'web',type:1}" ></CommonList>
      </el-tab-pane>
      <el-tab-pane label= "后端" name="backEnd">
        <span slot="label">
          <i class="Lazy Lazy_houduankaifa"></i> 后端
        </span>
         <CommonList :cat="{name:'backEnd',type:1}" ></CommonList>
      </el-tab-pane>
      <el-tab-pane label="ios" name="ios">
        <span slot="label">
          <i style="font-size:15px" class="Lazy LazyiOS"></i> ios
        </span>
        <CommonList :cat="{name:'ios',type:1}"></CommonList>
      </el-tab-pane>
      <el-tab-pane label="安卓" name="Android">
        <span slot="label">
          <i style="font-size:15px" class="Lazy Lazyandroid3"></i> 安卓
        </span>
        <CommonList :cat="{name:'Android',type:1}"></CommonList>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import CommonList from "../common/CommonList";
export default {
  name: "MainTab",
  data() {
    return {
      activeName: "recom"
    };
  },
  components: {
    CommonList
  },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event);
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