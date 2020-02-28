<template>
  <div>
    <el-container>
      <el-aside width="300px">
          <el-button @click="Back"  round>回首页</el-button>
          <ul>
            <li @click="Jump('new')"><h3><i class = "Lazy Lazyplus"></i>新建文章</h3></li>
            <li @click="Jump('list')" ><h3><i class = "Lazy Lazycaidan4"></i>文章列表</h3></li>
          </ul>
      </el-aside>
      <el-container>
        <el-header class = "head">
          {{tab[this.$route.fullPath]||"文章中心"}}
        </el-header>
        <el-main>
          <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/Edit' }">文章中心</el-breadcrumb-item>
          <el-breadcrumb-item :to ="{ path: this.$route.fullPath}">{{BreadList[this.$route.fullPath]}}</el-breadcrumb-item>
        </el-breadcrumb>
             <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name:"Edit",
  data(){
    return{
        BreadList:{
          "/Edit/new":"新建文章",
          "/Edit/list":"文章列表"
        },
        tab:{
              "/Edit":"文章中心",
              "/Edit/new":"新建文章",
              "/Edit/list":"文章列表"
          }
    }
  },
  components:{
  },
  beforeMount(){
  },
  methods:{
    Back(){
      this.$router.push('/')
    },
    Jump(e){
      if(this.$route.fullPath == "/Edit/"+e){
        return;
      }
      this.$router.push('/Edit/'+e)
    },
  }
};
</script>

<style scoped>
.el-container{
  height: 750px;
}
.el-aside{
  background:#404040;
  color: #f2f2f2;
}
.el-main{
  background: rgb(238, 238, 238)
}
.el-button--default.is-round{
    display: block;
    width: 55%;
    margin: 0 auto;
    margin-top: 15px;
    border: 2px solid #54a2eb;
    background: #404040;
    color: #54a2eb;
    font-weight: bold;
    cursor:pointer;
}
.el-button--default.is-round:hover{
    display: block;
    width: 55%;
    margin: 0 auto;
    margin-top: 15px;
    background: #54a2eb;
    color: #ffffff;
    font-weight: bold;
    cursor:pointer;
}
h3{
  box-sizing: border-box;
  width: 100%;
  height: 45px;
  line-height: 45px;
  font-weight: bold;
  padding-left: 45px;
  margin-left: 0px;
  margin-top: 25px;

}
h3 i{
  margin-right: 10px;
}
h3:hover{
  cursor: pointer;
  background: #777777;
}
 .head {
   width: 1300px;
   line-height: 60px;
  text-align: center;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 45px;
  color: #404040;
  text-shadow: 0 1px 0 #fff;
  /* margin-left: 300px; */
}
</style>