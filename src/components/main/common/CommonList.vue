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
            "“胡歌老婆”身份曝光：人生实苦，但你很甜",
          introduction:
            "前几天，武汉方舱医院的一位护士，发了这样一条微博：“今天又出院一个患者，好嗨哟。”配图是自己穿着防护服的照片，背上写着“胡歌老婆”，还画了一个笑脸。没想到，胡歌竟转发了她的微博，夸她是最美丽的小光头，期待早日掀起她的“盖头”来。",
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
            "朋友圈大型人设崩塌现场：求求你，别装了",
          introduction:
            "电影《天气预报员》中有一句经典台词：“成年人的生活，没有容易二字”。生活不是电影，没那么多奇迹发生。或许今天好好睡一觉，明天又要与领导同事斗智斗勇；或许你在这一年弄丢了最爱的人，每一个无人的深夜都还是会分外想念；或许你在无数个深夜崩溃，醒来之后还是不得不咬牙坚持，在风雨中为生活奔波；或许你这一年真的失去了很多，丢盔卸甲、狼狈不堪。明天会不会更好，我们都不知道。但抛开生活的A面和B面，总有无数个小确幸的瞬间，让我们感受到幸福。",
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
            "[书摘]一句一经典",
          introduction:
            "你脸上云淡风轻，谁也不知道你的牙咬得多紧。你走路带风，谁也不知道你膝盖上仍有曾摔伤的淤青。你笑得没心没肺，没人知道你哭起来只能无声落泪。要让人觉得不费力，只能背后极其努力。我们没有改变不了的未来，只有不想改变的过去。 ---------刘同《你的孤独虽败犹荣》",
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
  cursor: pointer;
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