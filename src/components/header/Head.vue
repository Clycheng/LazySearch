<template>
  <div class="header-warp">
    <el-row>
      <el-col :span="8">
        <div class="logo-warp">
          <router-link to="/">
            <img src="../../assets/极光logo.png" alt />
          </router-link>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="search-warp">
          <el-input
            size="small"
            blur="search"
            @change="Onchange"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="searchInput"
          ></el-input>
        </div>
      </el-col>
      <el-col :span="8">
        <Menu></Menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/* eslint-disable */
import Menu from "./Menu";
export default {
  name: "Header",
  data() {
    return {
      searchInput: ""
    };
  },
  components: {
    Menu
  },
  methods: {
    Onchange() {
      if(this.$route.name=='Search'){
        this.bus.$emit('message',this.searchInput)
      }else{
        this.$router.push({
          name: "Search",
          params: {
            val: this.searchInput
          }
        });
      }
    },
        // 刷新之后 根据本地存储的数据判断用户是否在线
    shuaxin(){
      let token=sessionStorage.getItem("token");
      let UserID=sessionStorage.getItem("UserID");
      let userName=sessionStorage.getItem("userName");
      if(token&&UserID&&userName){
        this.$store.commit("ChangeIsLoginss");
      }
    }
  },
    created(){
    this.shuaxin();
  }
};
</script>

<style scoped>
.header-warp {
  background: white;
  padding: 0 0;
  transition: 0.3s;
  box-shadow: 1px 1px 1px rgb(221, 216, 216);

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
}
.header-warp img {
  width: 140px;
  height: 63px;
  background: rgba(255, 255, 255, 0.2);
}
.search-warp {
  margin-top: 3.5%;
  text-align: right;
}
.search-warp .el-input--prefix {
  width: 45%;
  height: 35px;
}
</style>  