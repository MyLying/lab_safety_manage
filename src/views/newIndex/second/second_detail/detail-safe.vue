<template>
  <el-container>
    <h1>{{postForm.noticeTitle}}</h1>
    <el-main v-html="this.postForm.noticeContent"></el-main>
    <el-footer style="text-align: center"><p>发布日期：{{postForm.noticeDate}}</p><p>点击次数: {{postForm.noticeView}}</p></el-footer>
  </el-container>


</template>

<script>
import { selectDetailId } from '@/api/safe/safe'

export default {
  name: 'DetailSafes',
  data() {
    return {
      postForm: [],
      content: ''
    }
  },
  created() {
    this.select()
  },
  methods: {
    select() {
      selectDetailId().then(response => {
        this.postForm = response.data
      })
    }
  }
}
</script>

<style scoped>
h1{
  text-align: center;
}
</style>
