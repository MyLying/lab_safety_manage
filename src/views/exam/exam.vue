<template>
  <div class="exam-container">
    <div class="exam-container-left">1</div>
    <div class="exam-container-right">
      <p>学院统一考试</p>
      <p>自主报名考试</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExamView",
};
</script>

<style lang="less">
.exam-container {
  display: flex;
  justify-content: space-between;

  text-align: left;
  .exam-container-left {
    width: 200px;
    order: 0;
    background-color: aqua;
  }
  .exam-container-right {
    width: 685px;
    order: 1;
    background-color: rgb(46, 212, 146);
  }
}
</style>