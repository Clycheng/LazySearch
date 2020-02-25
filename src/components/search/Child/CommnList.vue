<template>
  <div>
      <ul>
          <li v-for="(item,index) of list" :key = "index">
              <router-link  :to="{path:'/Details/'+item.id}">{{item.title}}</router-link>
              <p><i class = "Lazy Lazyziyuan"></i><span>{{item.num}}</span> <i class = "Lazy Lazyyuedu"></i> <span>{{item.num}}</span></p>
          </li>
      </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
    name:"CommnList",
    props:[
        "tab"
    ],
    data(){
        return{
            ActiveClass:{
                "Fab":"",
                "ready":""
            },
             list:[
                {
                    title:"vue中cookie的使用和date对象的使用",
                    id:1,
                    type:"hot",
                    num:123
                },
                {
                    title:"高级前端面试题目大全(一)",
                     id:2,
                    type:"Fab",
                       num:123
                },
                {
                    title:"js 中splice()详解(插入、删除或替换数组的元素)",
                     id:3,
                     type:"ready",
                        num:123
                }
            ]
        }
    },
    computed:{
        // TitleSpilce(e){
        //     return function(e){
        //         return e.substr(0,15)
        //     }
        // }
    },
    beforeMount(){
         console.log(this.tab)
         this.list[0].type = this.tab
    }
}
</script>

<style scoped>
a{
    display: inline-block;
    padding: 15px 15px 0px 15px
}
    a:hover{
        text-decoration: underline;
    }
    p{
        padding-top: 5px;
        padding-left: 10px;
         color:rgb(184, 183, 183)
    }
    p i {
        font-size: 12px;
        margin-left: 10px;
    }
    p span{
        font-size: 12px;
        color:rgb(184, 183, 183)
    }
</style>