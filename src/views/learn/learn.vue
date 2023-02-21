<template>
  <div class="learn-container">
    <div class="learn-container-left">1</div>
    <div class="learn-container-right">
      <p>在线学习</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "LearnView",
};
</script>

<style lang="less">
.learn-container {
  display: flex;
  justify-content: space-between;

  text-align: left;
  .learn-container-left {
    width: 200px;
    order: 0;
    background-color: aqua;
  }
  .learn-container-right {
    width: 685px;
    order: 1;
    background-color: rgb(46, 212, 146);
  }
}
</style>