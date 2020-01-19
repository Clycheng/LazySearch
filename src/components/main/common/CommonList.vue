<template>
  <div>
    <ul>
      <li v-for="(item,index) in list" :key="index" class="list-item">
          <el-container>
        <el-aside width="200px">
            <img class = "aside-img" :src="item.ownerImg" alt="">
        </el-aside>
        <el-main>  <h2>{{item.title}}</h2>
        <p>{{innerSubstr(item.introduction)}}</p></el-main>
        </el-container>
      
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CommonList",
  data() {
    return {
      count: 10,
      list:[
          {
            title:"标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123",
            introduction:"简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介",
            owner:"admin",
            star:"1",
            id:5,
            reader:"120",
            ReplyNumber:"12",
            ownerImg:"https://tpc.googlesyndication.com/simgad/17189442304751175642?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnV6VTPjl8_-peVL0vAyl1aalN8lQ",

          }
      ]
    };
  },
  computed: {
    innerSubstr(e) {
        return function(e){
                return e=e.substr(50,90)+"..."
            }
        },
  },
  methods: {
    load() {
      this.loading = true;
      setTimeout(() => {
        this.count += 2;
        this.loading = false;
      }, 2000);
    }
  }
};
</script>

<style scoped>
.list-item {
  width: 100%;
  height: auto;
  margin-top: 10px;
  box-shadow: 4px 4px 5px #eee9e9;
}
.list-item h2{
    width: 90%;
    font-size: 17px;
}
.list-item h2:hover{
    
    cursor: pointer;
    text-decoration:underline
}
.list-item p {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  font-size: 12px;
  width: 90%;
  color:#999;
  text-overflow: ellipsis;
 text-indent:25px;
 line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.el-main{
    padding: 0;
}
.el-main .el-aside{
    height: 180px;
    overflow: hidden
}
.el-main .aside-img{
    transform: scale(-10)
}
</style>