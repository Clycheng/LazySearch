<template>
  <div class = "warp">
    <h1>{{title}}</h1>
    <el-container class = "autor">
  <el-aside width="50px">
       <router-link class="autor-img" to="#">
        <img
          src="https://upload.jianshu.io/users/upload_avatars/6778531/66e3f92e-e6c0-454d-87a4-92e8377e33c5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
          alt
        />
      </router-link>
  </el-aside>
  <el-main>
      <div class = "autor-message">
          <p class = "autor-name">
          <router-link to="#">每日心选</router-link>
          <el-button size="mini" round>关注</el-button>
          <!-- 评分 -->
          <el-rate
          v-model="value2"
          :colors="colors">
        </el-rate>
          <!-- 评分 -->
      </p>
      <p class = "Interaction">
          <em>2020.01.30 11:44:02</em>
          <em>字数 1,050</em>
          <em>阅读 268</em>
      </p>
      </div>
  </el-main>
</el-container>
    <div v-html = "content" id = "connet-warp"></div>
<!-- 标记 -->
  <el-badge :value="3" class="item"  type="primary">
    <el-button size="small">回复</el-button>
  </el-badge>
  <el-badge :value="1" class="item" type="primary">
    <el-button size="small">评论</el-button>
  </el-badge>
  <!-- 标记 -->
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Article",
  data() {
    return {
        title:"",
      content: "",
      // 评分
       value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      // 评分
    };
  },
  props:["category"],
  beforeMount(){
  
   
      switch(this.category){
          case "preview":
              this.title=this.$store.state.Edit.NewArticle.title;
              this.content =this.$store.state.Edit.NewArticle.content;
              break; 
            default:
                this.ajxa(this.category)
                break;
      }
  },
  mounted(){
    document.addEventListener("copy",function(e){
      console.log(e)
    })
  },
  updated(){
      // let warp = document.getElementById("connet-warp")
      // let tag_img = warp.getElementsByTagName("img")
      //  img[0].style.width = "100px"
      // console.log(tag_img)
  },
  methods:{
      ajxa(e){
          console.log(e)
      }
  }
};
</script>

<style scoped>
h1 {
  width: 100%;
  padding-left: 15px;
  line-height: 45px;
  height: 45px;
  font-size: 25px;
  font-weight: bold;
}
.warp{
  background: white;
}
.autor{
  padding-left: 15px;
    color:rgb(181, 184, 189) 
}
.autor-img{

    display: block;
    width: 50px;
    height: 50px;
     position: relative; /*脱离文档流*/
    top: 25%; /*偏移*/

}
.autor-img img{

    width: 100%;
      border-radius: 100%;
}
.Interaction {
    color: rgb(167, 165, 162);
    font-size: 12px;
}
.Interaction em {
    font-style: normal;
    display: inline-block;
    margin-left: 5px;
}
.Interaction em:nth-child(1){
     margin-left: 0px;
}
#connet-warp >>> img{
    display: block;
    width: 55%;
    margin-top: 20px;
    margin:0 auto;
}
#connet-warp >>> p {
  margin-top: 5px;
  line-height: 160%;
  padding: 15px;
}
#connet-warp >>> code {
  display: block;
  padding: 15px;
  width: 100%;
  background: #F3F4F5;
overflow: scroll;
}
div {
    line-height: 25px;
}
a {
    text-decoration: underline;
}
.warp div pre code  {
  display: block;
  width: 100%;
  background: red;
}
.item {
  margin:10px 40px 30px 20px;
}
</style>