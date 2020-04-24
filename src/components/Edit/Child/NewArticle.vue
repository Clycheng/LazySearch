<template>
  <div class="edit-warp">
    <!-- 发布文章选择分类 -->
    <div class="block">
      <span class="demonstration">选择文章分类</span>
      <el-cascader v-model="options.value" :options="options"></el-cascader>
    </div>
    <!-- 发布文章选择分类 -->
    <div class="title">
      <input type="text" @blur="titlenone" v-model="title" placeholder="请输入标题：" />
    </div>
    <div id="Edit"></div>
    <button class="btnyu" @click="preview">预览效果</button>
    <button class="btnjiao" @click="submit">提交</button>
  </div>
</template>

<script>
/* eslint-disable */
import { lists } from "../../../api/text/wentext";
import E from "wangeditor";
export default {
  name: "NewArticle",
  data() {
    return {
      editor: null,
      editorContent: this.$store.state.Edit.NewArticle.content, //转换之后的html
      title: this.$store.state.Edit.NewArticle.title,
      options: [
        { value: "1", label: "前端" },
        { value: "2", label: "后端" },
        { value: "3", label: "安卓" },
        { value: "4", label: "ios" }
      ]
    };
  },
  components: {},
  methods: {
    // 标题失去焦点检查有无标题内容
    titlenone() {
      if (this.title == "") {
        this.$notify({
          message: "文章标题不能为空",
          offset: 100,
          type: "warning",
          duration: 1500
        });
      }
    },
    change(value, render) {
      // render 为 markdown 解析后的结果[html]
      this.html = render;
    },
    // 提交文章
    submit() {
      if (this.editorContent && this.title) {
        let token = sessionStorage.getItem("token");
        let UserID = sessionStorage.getItem("UserID");
        let author_name = sessionStorage.getItem("author_name");
        let author = sessionStorage.getItem("userName");
        lists({
          title: this.title,
          editorContent: this.editorContent,
          author: author,
          UserId: UserID,
          author_name: author_name,
          type: this.options.value[0],
          brief: this.editor.txt.text().substr(0, 105),
          token: token
        }).then(res => {
          if (res.data.code == 10007) {
            this.$router.go(0);
            this.$notify({
              message: "发表文章成功",
              offset: 100,
              type: "success",
              duration: 1500
            });
          } else {
            this.$notify({
              message: "发表文章失败",
              offset: 100,
              type: "warning",
              duration: 1500
            });
          }
        });
      } else {
        this.$notify({
          message: "文章内容不能为空",
          offset: 100,
          type: "warning",
          duration: 1500
        });
      }
    },
    // 预览文章
    preview() {
      if (this.editorContent) {
        this.$router.push({
          name: "Details",
          params: { id: "preview" }
        });
      } else {
        this.$notify({
          message: "文章内容不能为空",
          offset: 100,
          type: "warning",
          duration: 1500
        });
      }
    }
  },
  mounted() {
    this.editor = new E(Edit);
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.customConfig.onchange = html => {
      this.editorContent = html;
      let obj = {
        title: this.title,
        content: this.editorContent
      };
      this.$store.commit("ChangeNewArticle", obj);
      //   this.catchData(this.editorContent); // 把这个html通过catchData的方法传入父组件
    };
    this.editor.customConfig.menus = [
      // 菜单配置
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      "link", // 插入链接
      "list", // 列表
      "justify", // 对齐方式
      "quote", // 引用
      "emoticon", // 表情
      "image", // 插入图片
      "table", // 表格
      "code", // 插入代码
      "undo", // 撤销
      "redo" // 重复
    ];
    this.editor.create();
    this.editor.txt.html(this.$store.state.Edit.NewArticle.content);
  }
};
</script>

<style  scoped>
.title input {
  width: 100%;
  height: 80px;
  background: #f4f5f5;
  font-size: 30px;
  padding-left: 20px;
}
.edit-warp {
  margin-top: 35px;
}
#Edit .w-e-text-container {
  height: 700px;
}
.btnyu {
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #54a2eb;
  margin: 10px;
  background: rgb(238, 238, 238);
  color: #54a2eb;
  cursor: pointer;
  font-weight: bold;
}
.btnyu:hover {
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: none;
  margin: 10px;
  background: #54a2eb;
  color: rgb(255, 255, 255);
  cursor: pointer;
}
.btnjiao {
  width: 55px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #54a2eb;
  margin: 10px;
  background: rgb(238, 238, 238);
  color: #54a2eb;
  cursor: pointer;
  font-weight: bold;
}
.btnjiao:hover {
  width: 55px;
  height: 30px;
  border-radius: 10px;
  border: none;
  margin: 10px;
  background: #54a2eb;
  color: rgb(255, 255, 255);
  cursor: pointer;
}
.block {
  float: right;
  margin-bottom: 30px;
}
</style>