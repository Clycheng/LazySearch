<template>
  <div>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main id = "main">
        <el-container>
            <el-main width = "600px">
                <div class = "main-top">
                    <div class ="main-top-left">
                        <img src="https://upload.jianshu.io/users/upload_avatars/18010683/3567d0a8-0ca2-4066-8281-956bc1467db2?imageMogr2/auto-orient/strip|imageView2/1/w/240/h/240" alt="">
                    </div>
                    <div class = "main-top-right">
                        <h1>admin   </h1>
                        <div class = "message">
                              <el-tooltip class="item" effect="dark" :content= "num" placement="top-start">   <router-link to=""><i class = "Lazy Lazyguanzhu3"></i>关注<span>123</span></router-link>   </el-tooltip>
                           <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">   <router-link to=""><i class = "Lazy Lazyfensi1"></i>粉丝<span>123</span></router-link> </el-tooltip>
                         <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">  <router-link to=""><i class = "Lazy Lazywenzhang1"></i>文章<span>123</span></router-link></el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">   <router-link to=""><i class = "Lazy Lazyz-like"></i>点赞<span>123</span></router-link></el-tooltip>
                        <el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">   <router-link to=""><i class = "Lazy Lazyhuabanfuben"></i>收获喜欢<span>123</span></router-link></el-tooltip>
                        </div>
                        <h3>个人说明个人说明个人说明个人说明个人说明个人说明个人说明个人说明个人说明个人说明个人说明个人说明个人说明个人说明个人说明个人说明个人说明个人说明</h3>
                    </div>
                </div>
                <div class = "content">
                    <MainTab></MainTab>
                </div>
            </el-main>
            <el-aside width="400px">Aside</el-aside>
        </el-container>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "../header/Head";
import MainTab from './Child/MainTab'
export default {
  name: "MyArticle",
  data() {
    return {};
  },
  components: {
    Header,
    MainTab,
    num:1231231//填充数字 可删
  }
};
</script>

<style scoped>
.el-header {
    padding: 0px;
    text-align: center;
}
.main-top{
    padding-left: 25px;
    height: 115px;
    /* background: blue; */
}
.main-top-left{
    float: left;
    width: 10%; 
    text-align: center;
    height: 100%;
    line-height: 100%;
}
.main-top-left img{
    margin-left: 12px;
    margin-top: 20px;
    
    width: 80px;
    height:80px;
    border-radius: 50%;

}
.main-top-right{
    float: left;
  width: 90%;
    overflow: hidden;
    padding-left: 25px;
}
.main-top-right h1{
    font-weight: bold;
    margin-top: 10px;
    font-size: 25px;
}
.main-top-right .message a:nth-child(1){
    margin-left: 0px;
}
.main-top-right .message a {
    display: inline-block;
    height: 25px; vertical-align:middle;
    line-height: 25px;
    margin-left: 15px;
    font-size: 14px;
}
.main-top-right .message a i{
    margin-right: 4px;
    font-size: 20px;
}
.main-top-right .message a span {
    margin-left: 5px;
    font-size: 12px;
}
.main-top-right h3 {
  
    margin-top: 12px;
    font-weight: 100px;
    font-size: 12px;
    color:rgb(182, 182, 182) 
}
.content{
    padding-left: 55px;
    margin-top: 45px;
}
</style>