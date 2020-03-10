<template>
  <!-- upload -->
  <div class="upload">
    <el-upload
      class="avatar-uploader"
      :action= domain
      :http-request = upqiniu
      :show-file-list="false"
      :before-upload="beforeUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </div>
</template>
<script>
/* eslint-disable */
import axios from 'axios'
export default {
    name:"upload",
  data () {
    return {
      imageUrl: '',
      imageOriginUrl:"",
      token: {},
      // 七牛云的上传地址，根据自己所在地区选择，我这里是华南区
      domain: 'https://upload.qiniup.com',
      // 这是七牛云空间的外链默认域名
      qiniuaddr: 'qiniu.lansouyun.com'
    }
  },
  methods: {
    // 上传文件到七牛云
    upqiniu (req) {
      const config = {
        headers: {'Content-Type': 'multipart/form-data'}
      }
      let filetype = ''
      if (req.file.type === 'image/png') {
        filetype = 'png'
      } else {
        filetype = 'jpg'
      }
      // 重命名要上传的文件
      const keyname = 'lansou' + new Date().getTime()+ '.' + filetype
      // 从后端获取上传凭证token
      axios.get('http://localhost:8081/qiniuToken',{
        params:{
          token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2x5Y2hlbmciLCJwYXNzd29yZCI6ImFkbWluIiwiaWF0IjoxNTgzNTc1NzE0fQ.zoecG2NH_uKtRxrc9WYGuhB_omA83KLo4XYPb61uZVE",
          UserId:"94210b2kdntkk"
        }
      }).then(res => {
        console.log(res)
        const formdata = new FormData()
        formdata.append('file', req.file)
        formdata.append('token', res.data.token)
        formdata.append('key', keyname)
       const imghandle = "?	imageMogr2/auto-orient/thumbnail/400x/blur/1x0/quality/75|watermark/1/image/aHR0cDovL3d3dy5sYW5zb3V5dW4uY29tL2xvZ28ucG5n/dissolve/33/gravity/Center/dx/10/dy/10"
        // 获取到凭证之后再将文件上传到七牛云空间
        new Promise((reslove,reject)=>{
           axios.post(this.domain, formdata, config).then(res => {
          console.log(res)
            this.imageOriginUrl = 'http://' + this.qiniuaddr + '/' + res.data.key
            this.imageUrl = 'http://' + this.qiniuaddr + '/' + res.data.key+imghandle
            reslove()
          })
        }).then(msg=>{
          axios.post('http://localhost:8081/updateImg',{
            UserId:"94210b2kdntkk",
            token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQ2x5Y2hlbmciLCJwYXNzd29yZCI6ImFkbWluIiwiaWF0IjoxNTgzNTc1NzE0fQ.zoecG2NH_uKtRxrc9WYGuhB_omA83KLo4XYPb61uZVE",
            imageOriginUrl:this.imageOriginUrl,
            imageUrl:this.imageUrl
          }).then(res=>{
            console.log(res)
          })
        })
       
      })
    },
    // 验证文件合法性
    beforeUpload (file) {
      const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>
<style scoped>
.upload {
  width: 600px;
  margin: 0 auto;
}
.avatar-uploader .el-upload {
  border: 5px dashed #ca1717 !important;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>