<template>
  <div class="warp">
    <h3 style="color:#409EFF">
      <i class="Lazy Lazydianzan5"></i> 作者榜
    </h3>
    <el-divider></el-divider>
    <ul>
      <li v-for="(item,index) in list " :key="index">
        <router-link :to='{ name: "auother", query: { id: item.id }}'>
        <el-container>
          <el-aside width="60px">
            <img :src="item.headUrl" alt />
          </el-aside>
          <el-main>
            <h4>{{item.autor}}</h4>
            <p class="mainp">{{item.explain}}</p>
          </el-main>
        </el-container>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Billboard",
  data() {
    return {
      list: [
        {
          autor: "南派三叔",
          explain: "南派三叔，本名徐磊，1982年2月20日出生于浙江省嘉兴市嘉善县，中国作家，编剧，南派投资董事长。2007年1月，《盗墓笔记》系列第一本出版，2011年12月，《盗墓笔记捌》出版，《盗墓笔记》系列九本完结，九部总销量超过1200万册；2010年4月《大漠苍狼—绝地勘探》出版，11月《怒江之战》出版，12月《怒江之战·大结局》出版；",
          headUrl:
            "https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K///it///u=3499274531,2537514426&fm=202"
        },
        {
          autor: "唐家三少",
          explain: "唐家三少，本名张威。1981年1月10日生于北京，中国内地网络小说作家，炫世唐门文化传媒有限公司董事长。毕业于河北大学政法学院，曾于上海社会科学院高级作家班研修。现任中国作家协会主席团委员，北京市作家协会副主席，浙江省网络作家协会名誉主席。2004年，在读写网开始创作处女座《光之子》。2005年，成为起点中文网签约作家之一。2008年，开始创作《斗罗大陆》。",
          headUrl:
            "https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K///it///u=3499274531,2537514426&fm=202"
        },
        {
          autor: "我爱吃西红柿",
          explain: "我吃西红柿（我吃番茄），又名番茄，原名朱洪志，起点白金作家。2017年11月，荣获第二届“中华文学基金会茅盾文学新人奖网络文学新人奖”。 [1]  2018年5月，第三届橙瓜网络文学奖荣获“网文之王”。",
          headUrl:
            "https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K///it///u=3499274531,2537514426&fm=202"
        },
                {
          autor: "南派三叔",
          explain: "南派三叔，本名徐磊，1982年2月20日出生于浙江省嘉兴市嘉善县，中国作家，编剧，南派投资董事长。2007年1月，《盗墓笔记》系列第一本出版，2011年12月，《盗墓笔记捌》出版，《盗墓笔记》系列九本完结，九部总销量超过1200万册；2010年4月《大漠苍狼—绝地勘探》出版，11月《怒江之战》出版，12月《怒江之战·大结局》出版；",
          headUrl:
            "https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K///it///u=3499274531,2537514426&fm=202"
        },
        {
          autor: "唐家三少",
          explain: "唐家三少，本名张威。1981年1月10日生于北京，中国内地网络小说作家，炫世唐门文化传媒有限公司董事长。毕业于河北大学政法学院，曾于上海社会科学院高级作家班研修。现任中国作家协会主席团委员，北京市作家协会副主席，浙江省网络作家协会名誉主席。2004年，在读写网开始创作处女座《光之子》。2005年，成为起点中文网签约作家之一。2008年，开始创作《斗罗大陆》。",
          headUrl:
            "https://dss3.baidu.com/-rVXeDTa2gU2pMbgoY3K///it///u=3499274531,2537514426&fm=202"
        },
      ]
    };
  }
};
</script>

<style scoped>
.warp {
  background: white;
}
h3 {
  padding-top: 10px;
  font-weight: bold;
}
h4{
  width: 100%;
  overflow: hidden;
  font-weight: bold;
}
.mainp{
text-overflow: -o-ellipsis-lastline;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
 text-indent:30px;
}
.el-divider--horizontal {
  margin: 10px 0;
}
ul li img {
  width: 50px;
  height: 50px;
  margin-top: 30%;
  margin-left: 10%;
  border-radius: 100%;
  cursor: pointer;
}
ul li .el-aside {
  line-height: 50%;
}

ul li .el-main {
  padding: 10px;
}
</style>