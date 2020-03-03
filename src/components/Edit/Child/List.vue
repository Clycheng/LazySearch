<template>
  <div class="list-warp">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="title" label="标题" width="180"></el-table-column>
      <el-table-column prop="autor" label="作者" width="120"></el-table-column>
      <el-table-column prop="tag" label="分类" width="120"></el-table-column>
      <el-table-column prop="date" label="日期" width="200"></el-table-column>
      <el-table-column prop="ID" label="ID" width="100"></el-table-column>
      <el-table-column fixed="right" label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="primary" @click="handleClick(scope.row)" icon="el-icon-edit" circle></el-button>
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
      count: 10,
      list: [],
      page: 1,
      limit: 5,
      total: 0,
      start: "",
    };
  },
    beforeMount(){

    },
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
      inserttable(this.start = (this.page - 1) * 5).then(
        res => {
          console.log(res.data);
          if (res.data) {
            this.list = res.data.data;
            this.total = res.data.total;
            console.log(this.list);
          }
        }
      );
    },
    // 发送请求数据
    handleClick(row) {
      console.log(row);
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