<template>
  <div class="practice-container">
    <div class="practice-container-left">1</div>
    <div class="practice-container-right">
      <p>在线练习</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "practiceView",
};
</script>

<style lang="less">
.practice-container {
  display: flex;
  justify-content: space-between;

  text-align: left;
  .practice-container-left {
    width: 200px;
    order: 0;
    background-color: aqua;
  }
  .practice-container-right {
    width: 685px;
    order: 1;
    background-color: rgb(46, 212, 146);
  }
}
</style>