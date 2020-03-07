<template>
  <div class="list-warp">
    <el-table class="tableClass" :data="list" border style="width: 100%" v-loading="loading">
      <el-table-column fixed prop="ID" label="ID"></el-table-column>
      <el-table-column prop="post_author" label="用户名"></el-table-column>
      <el-table-column prop="author_name" label="作者笔名"></el-table-column>
      <el-table-column prop="post_title" label="文章标题"></el-table-column>
      <el-table-column prop="post_date" label="发布日期"></el-table-column>
      <el-table-column prop="Brief" label="文章简介"></el-table-column>
      <el-table-column prop="post_type" label="文章类型"></el-table-column>
      <el-table-column prop="comment_count" label="评论数量"></el-table-column>
      <el-table-column prop="Img_Title" label="文章缩略图"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleClick(scope.row.ID)" icon="el-icon-edit" circle></el-button>
          <el-button type="danger" @click="handleDelete(scope.row)" icon="el-icon-delete" circle></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      layout="prev, pager, next"
      :page-size="limit"
      @current-change="currentPage"
      :total="total"
    ></el-pagination>
    <!-- 分页 -->
  </div>
</template>

<script>
/* eslint-disable */
// import CommonList from '../../main/common/CommonList'
import { inserttable } from "../../../api/text/wentext";
export default {
  name: "List",
  data() {
    return {
      list: [],
      page: 1,
      limit: 5,
      total: 0,
      start: "",
      loading: true,
      author: "",
      UserId: "",
    };
  },
  beforeMount() {},
  components: {
    // CommonList
  },
  computed: {},
  methods: {
    // 发送请求数据
    currentPage(val) {
      this.page = val;
    },
    
    inserts() {
      let token=sessionStorage.getItem("token");
      let UserID=sessionStorage.getItem("UserID");
      inserttable({
        token: token,
        UserId: this.UserId=UserID,
        start:this.start = (this.page - 1) * 5
      }).then(res => {
        console.log(res.data)
        if (res.data.code == 200) {
          this.loading=false;
          this.list = res.data.data;
          this.total = res.data.total;
          // console.log(this.list);
        }
      });
    },
    // 发送请求数据
    handleClick(row) {
      this.$router.push({
        path: "../../Details",
        query: {
          id:row
        }
      });
    },
    handleDelete(e) {
      this.open();
    },
    open() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 此处删除
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  // 发送请求数据
  mounted() {
    this.inserts();
  },
  watch: {
    page() {
      //监听  点击1  2  3  上面内容切换
      this.inserts();
    }
  }
  // 发送请求数据
};
</script>

<style scoped>
.list-warp {
  margin-top: 25px;
}
.el-pagination {
  margin: 5px 0 0 300px;
}
</style>