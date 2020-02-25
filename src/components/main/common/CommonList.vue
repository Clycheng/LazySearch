<template>
  <div>
    <ul
      class="infinite-list"
      infinite-scroll-distance="1010px"
      v-infinite-scroll="load"
      style="overflow:auto"
    >
      <li v-for="(item,index) in list" :key="index" class="list-item infinite-list-item">
        <el-container>
          <el-aside width="200px">
            <img class="aside-img" :src="item.ownerImg" alt />
          </el-aside>
          <el-main>
          <router-link :to='{ name: "Details", query: { id: item.id }}'> <h2>{{item.title}}</h2></router-link>
            <p>{{innerSubstr(item.introduction)}}</p>
            <div class="details-warp">
              <span style="color:#66B1FF;font-size:12px">
                <i class="Lazy Lazyyuedu1"></i>
                {{item.reader}}
              </span>
              <router-link to="#">{{item.owner}}</router-link>
              <span style="color:#B4BBCE;font-size:12px">
                <i class="Lazy Lazypinglun2"></i>
                {{item.ReplyNumber}}
              </span>
              <span style="color:#B4BBCE;font-size:12px">
                <i class="Lazy Lazydianzan1"></i>
                {{item.star}}
              </span>
            </div>
          </el-main>
        </el-container>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "CommonList",
  data() {
    return {
      count: 10,
      list: [
        {
          title:
            "标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123",
          introduction:
            "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介",
          owner: "admin",
          star: "1",
          id: 1,
          reader: "120",
          ReplyNumber: "12",
          ownerImg:
            "https://tpc.googlesyndication.com/simgad/17189442304751175642?sqp=4sqPyQQ7QjkqNxABHQAAtEIgASgBMAk4A0DwkwlYAWBfcAKAAQGIAQGdAQAAgD-oAQGwAYCt4gS4AV_FAS2ynT4&rs=AOga4qnV6VTPjl8_-peVL0vAyl1aalN8lQ"
        },
        {
          title:
            "标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123",
          introduction:
            "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介",
          owner: "admin",
          star: "1",
          id: 2,
          reader: "120",
          ReplyNumber: "12",
          ownerImg:
            "https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K///it///u=3499274531,2537514426&fm=202"
        },
        {
          title:
            "标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123标题123",
          introduction:
            "简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介",
          owner: "admin",
          star: "1",
          id: 3,
          reader: "120",
          ReplyNumber: "12",
          ownerImg:
            "https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K///it///u=3499274531,2537514426&fm=202"
        }
      ]
    };
  },
  beforeMount() {
    console.log(this.$attrs.cat.type, this.$attrs.cat.name);
  },
  computed: {
    // titleSubstr(e) {
    //     return function(e){
    //             return e=e.substr(10,50)
    //         }
    //     },
    innerSubstr(e) {
      return function(e) {
        return (e = e.substr(10, 100) + "...");
      };
    }
  },
  methods: {
    load() {}
  }
};
</script>

<style scoped>
.list-item {
  width: 100%;
  background: white;
  height: auto;
  margin-top: 35px;
  margin-bottom: 15px;
  box-shadow: 5px 4px 5px #eee9e9;
}
.list-item h2 {
  width: 90%;
  color: #2f2f2f;
  font-weight: bold;
  font-size: 17px;
}
.list-item h2:hover {
  cursor: pointer;
  text-decoration: underline;
}
.list-item p {
  margin-top: 2%;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  font-size: 12px;
  width: 90%;
  color: #999;
  text-overflow: ellipsis;
  text-indent: 25px;
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.el-main {
  padding: 25px;
  margin-left: 15px;
}
.el-aside {
  position: relative;
  width: 200px;
  height: 120px;
  margin: 20px;
  left: 0;
  overflow: hidden;
  transition: 0.2s;
  text-align: center;
}
.el-aside:hover {
  left: 10px;
}
.aside-img {
  object-fit: cover;
  /* min-width: 150px;
    min-height: 100px;
    max-height: 150px;
    max-width: 150px; */
}

.details-warp {
  margin-top: 2%;
  max-height: 25px;
}
.details-warp span {
  letter-spacing: 1px;
  margin-left: 15px;
}
.details-warp span i {
  font-size: 12px;
}
.details-warp a {
  margin-left: 15px;
  font-size: 12px;
  color: #b4bbce;
}
</style>