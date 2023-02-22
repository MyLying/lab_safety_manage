<template>
  <div>
    <el-table
      ref="multipleTable"
      :data="postForm"
      tooltip-effect="dark"
      style="width: 100%"
      :default-sort="{prop: 'noticeDate', order: 'descending'}"
    >
      <el-table-column
        type="selection"
      />
      <el-table-column
        label="通知公告日期"
        sortable
        prop="noticeDate"
        min-width="20%"
      />
      <el-table-column
        label="通知公告标题"
      >
        <template slot-scope="scope">
          <p @click="Pass(scope.row.id)">{{ scope.row.noticeTitle }}</p>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 30px;float: right">
      <router-link to="/File/Editor"><el-button type="success" round style="margin-right: 13px">添加</el-button></router-link>
      <el-button type="primary" round @click="getCheck">发布到首页</el-button>
      <el-button type="danger" round @click="deleteNotice">删除</el-button>
    </div>
  </div>
</template>

<script>
import {passDetailId, select} from '@/api/notice/notice'
import { passIds } from '@/api/notice/notice'
import { deleteId } from '@/api/notice/notice'

export default {
  name: 'Notice',
  data() {
    return {
      // 显示所有的通知公告的信息
      postForm: {},
      // 传递给HomePage页面的信息
      refs: '',
      // 传递给后端的ids
      ids: []
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
    // 获得勾选的数据和已经勾选数据的id  并且传递ids给后台
    getCheck() {
      const _this = this
      this.refs = _this.$refs.multipleTable.selection
      console.log(this.refs)
      this.ids.length = 0
      for (let i = 0; i < this.refs.length; i++) {
        this.ids[i] = this.refs[i].id
      }
      console.log(this.ids)
      passIds(this.ids).then(() => {
        this.$notify({
          title: '成功',
          message: '发布首页！',
          type: 'success',
          duration: 2000
        })
      })
    },
    deleteNotice() {
      const _this = this
      this.refs = _this.$refs.multipleTable.selection
      this.ids.length = 0
      for (let i = 0; i < this.refs.length; i++) {
        this.ids[i] = this.refs[i].id
      }
      deleteId(this.ids).then(() => {
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success',
          duration: 2000
        })
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
