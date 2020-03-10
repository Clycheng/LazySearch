<template>
  <div class="edit-warp">
    <el-table>
      <el-table-column label="网络缩略图" prop>
        <template slot-scope="scope">
          <img width="100" :src="scope.row.gthumb" title="scope.row.gthumb" />
        </template>
      </el-table-column>
      <el-table-column label="图片地址" prop></el-table-column>
    </el-table>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "imgtable",
  data() {
    return {

    };
  },
  components: {},
  methods: {
  },
  mounted() {}
};
</script>
<style  scoped>
.edit-warp {
  margin-top: 35px;
}
.btnsc {
  margin: 30px 0 30px 30px;
}
</style>