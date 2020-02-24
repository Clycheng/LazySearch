<template>
  <div class="header-warp">
    <el-row>
      <el-col :span="8">
        <div class="logo-warp">
          <img src="http://www.chengxiaolei.top/wp-content/uploads/2018/11/logo-1.png" alt />
        </div>
      </el-col>
      <el-col :span="8">
        <div class="search-warp">
          <el-input size="small" blur = "search"  @change = "Onchange" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="searchInput"></el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <Menu></Menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Menu from './Menu'
export default {
  name: "Header",
  data() {
    return {
      searchInput: "",
      
    };
  },
  components:{
      Menu
  },
  methods:{
    Onchange(){
      this.$router.push(
        {name:"Search",
          params:{
            val:this.searchInput
          }
        }
      )
    }
  }
};
</script>

<style scoped>
.header-warp {
  background: white;
  padding: 0 0;
  transition: 0.3s;
  box-shadow: 1px 1px 1px rgb(221, 216, 216);
}
.header-warp img {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.search-warp {
    margin-top: 3.5%;
    text-align: right;
}
.search-warp .el-input--prefix{
    width: 45%;
    height: 35px;
}
</style>  