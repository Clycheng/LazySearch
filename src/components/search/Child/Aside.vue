<template>
  <div>
    <el-card class="box-card">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="热门推荐" name="first">
                <span slot="label">
                <i class="Lazy Lazytuijian"></i> 热门
                </span>
                <CommnList tab="hot"></CommnList></el-tab-pane>
            <el-tab-pane label="点赞最多" name="second">
                 <span slot="label">
                <i class="Lazy Lazydianzan1"></i> 点赞
                </span>
                <CommnList tab="Fab"></CommnList></el-tab-pane>
            <el-tab-pane label="阅读最多" name="third">
                  <span slot="label">
                <i class="Lazy Lazyyuedu3"></i> 阅读
                </span>
                <CommnList tab="ready"></CommnList></el-tab-pane>
        </el-tabs>
    </el-card>
  </div>
</template>

<script>
import CommnList from './CommnList'
export default {
  name: "Aside",
  data() {
    return {
         activeName: 'first',
        
    };
  },
   methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    },
    components:{
        CommnList
    }
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
}

.box-card {
  width: 100%;
  
}
.el-card{
    display: block;
}
</style>