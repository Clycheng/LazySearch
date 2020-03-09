<template>
  <div class="edit-warp">
    <el-upload action="#" list-type="picture-card" :auto-upload="false">
      <i slot="default" class="el-icon-plus"></i>
      <div slot="file" slot-scope="{file}">
        <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
        <span class="el-upload-list__item-actions">
          <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
            <i class="el-icon-zoom-in"></i>
          </span>
        </span>
      </div>
    </el-upload>
    <!-- 图片放大功能开发时候对element-ui原样式进行了修改 -->
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt />
    </el-dialog>
    <el-button class="btnsc" type="primary" round>上传</el-button>
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
  name: "Intimg",
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  components: {},
  methods: {
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
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