<template>
  <div class = "list-warp">
   <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      prop="title"
      label="标题"
      width="180">
    </el-table-column>
    <el-table-column
      prop="autor"
      label="作者"
      width="120">
    </el-table-column>
    <el-table-column
      prop="tag"
      label="分类"
      width="120">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期"
      width="200">
    </el-table-column>
    <el-table-column
      prop="ID"
      label="ID"
      width="100">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
         <el-button type="primary" @click="handleClick(scope.row)" icon="el-icon-edit" circle></el-button>
      <el-button type="danger" @click="handleDelete(scope.row)" icon="el-icon-delete" circle></el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
/* eslint-disable */
// import CommonList from '../../main/common/CommonList'
export default {
  name: "List",
  data() {
    return {
      tableData: [{
        date: '2016-05-03',
        autor: '王小虎',
        tag: '上海',
        city: '普陀区',
        title: '上海市普陀区金沙江路 1518 弄',
        ID: 200333
      }, {
        date: '2016-05-02',
        autor: '王小虎',
        tag: '上海',
        city: '普陀区',
        title: '上海市普陀区金沙江路 1518 qwd海市普陀区金沙江路 1518 qwdqw弄海市普陀区金沙江路 1518 qwdqw弄qw弄',
        ID: 200333
      }, {
        date: '2016-05-04',
        autor: '王小虎',
        tag: '上海',
        city: '普陀区',
        title: '上海市普陀区金沙江路 1518 弄',
        ID: 200333
      }, {
        date: '2016-05-01',
        autor: '王小虎',
        tag: '上海',
        city: '普陀区',
        title: '上海市普陀区金沙江路 1518 弄',
        ID: 200333
      },
      {
        date: '2016-05-01',
        autor: '王小虎',
        tag: '上海',
        city: '普陀区',
        title: '上海市普陀区金沙江路 1518 弄',
        ID: 200333
      },
      {
        date: '2016-05-01',
        autor: '王小虎',
        tag: '上海',
        city: '普陀区',
        title: '上海市普陀区金沙江路 1518 弄',
        ID: 200333
      },
      {
        date: '2016-05-01',
        autor: '王小虎',
        tag: '上海',
        city: '普陀区',
        title: '上海市普陀区金沙江路 1518 弄',
        ID: 200333
      }]
    };
  },
  components: {
    // CommonList
  },
  computed:{
  },
  methods:{
        handleClick(row) {
        console.log(row);
      },
      handleDelete(e){
        this.open()
      },
      open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // 此处删除
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
  }
};
</script>

<style scoped>
.list-warp{
    margin-top: 25px;
}
</style>