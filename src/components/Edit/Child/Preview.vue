<template>
  <div>
    <el-container>
      <el-header>
        <h1>{{title}}</h1>
      </el-header>
      <el-main class="connet">
        <div v-html="connet"></div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Preview",
  data() {
    return {
      title: "",
      connet: "",
      tag_p: null,
      tag_img: null
    };
  },
  beforeMount() {
    console.log(1);
    (this.title = this.$route.params.title),
      (this.connet = this.$route.params.connet);
  },
  mounted() {
    console.log(1);
    this.tag_p = document.getElementsByTagName("p");
    this.tag_img = document.getElementsByTagName("img");
    console.log(this.tag_img);
  }
};
</script>

<style  scoped>
.el-main.connet {
  background: white;
}
</style>