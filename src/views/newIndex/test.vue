<template>
  <h1>{{ listQuery.length }}</h1>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      listQuery: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      var obj = JSON.parse(this.$route.params.data)
      this.listQuery = obj
    }
  }
}
</script>

<style scoped>

</style>
