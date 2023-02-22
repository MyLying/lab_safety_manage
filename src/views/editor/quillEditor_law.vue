<template>
  <div class="app-container">

    <el-form ref="postForm" :model="postForm" :rules="rules" label-position="top" label-width="100%">

      <el-card>
        <p style="margin-left: 380px;color: red">请尽量控制标题的字数(如果标题过长会减少展示到首页的个数)</p>
        <el-form-item label="法律法规标题" prop="noticeTitle">
          <el-input v-model="postForm.noticeTitle" />
        </el-form-item>

        <el-form-item label="法律法规正文" prop="noticeContent">
          <quill-editor v-model="postForm.noticeContent" />
        </el-form-item>

        <el-form-item label="法律法规时间" prop="noticeDate">
          <el-input v-model="postForm.noticeDate" type="textarea" />
        </el-form-item>
        <p style="margin-left: 500px;color: red">注意日期格式为YYYY-MM-DD</p>
      </el-card>

      <div style="margin-top: 20px">
        <el-button type="primary" @click="submitForm">保存</el-button>
        <el-button type="info" @click="onCancel">返回</el-button>
      </div>

    </el-form>
  </div>
</template>

<script>

import { quillEditor } from 'vue-quill-editor'
import { addQuillTitle } from '@/quill-title'
import { insert } from '@/api/law/law'
import { selectId } from '@/api/law/law'

export default {
  components: {
    quillEditor
  },
  data() {
    return {
      isOrno: false,
      postForm: {
      },
      listQuery: {
      }
    }
  },
  mounted() {
    addQuillTitle()
  },
  created() {
    const id = { id: this.$route.params.id }
    if (typeof id.id !== 'undefined') {
      this.getData(id)
    }
  },
  methods: {
    submitForm() {
      console.log(JSON.stringify(this.postForm))

      insert(this.postForm).then(() => {
        this.$notify({
          title: '成功',
          message: '法律法规保存成功！',
          type: 'success',
          duration: 2000
        })

        this.$router.push({ name: 'Laws' })
      })
    },
    getData(id) {
      selectId(id).then(response => {
        this.postForm = response.data
      })
    },
    onCancel() {
      this.$router.push({ name: 'Laws' })
    }
  }
}
</script>
