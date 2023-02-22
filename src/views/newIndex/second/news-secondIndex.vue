<template>
  <el-table
    :data="postForm"
    style="width: 100%"
  >
    <el-table-column
      label="通知公告日期"
      width="300"
      style="text-align: center"
    >
      <template slot-scope="scope">
       {{ scope.row.noticeDate }}
      </template>
    </el-table-column>

    <el-table-column
      label="通知公告标题"
      width="1170"
    >
      <template slot-scope="scope">
        <p @click="Pass(scope.row.id)">{{ scope.row.noticeTitle }}</p>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import {passDetailId, select} from '@/api/notice/notice'

export default {
  data() {
    return {
      postForm: {}
    }
  },
  created() {
    this.getSelect()
  },
  methods: {
    // 获得数据库的数据显示到页面上
    getSelect() {
      select().then(response => {
        this.postForm = response.data
      })
    },
    Pass(id) {
      passDetailId(id).then(() => {
        this.$notify({
          title: '成功',
          message: '查看成功！',
          type: 'success',
          duration: 2000
        }),
        this.$router.push({ name: 'Detail' })
      })
    }
  }
}
</script>

<style lang="scss">

</style>
