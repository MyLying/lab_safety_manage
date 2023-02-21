<template>
  <div class="home">
    <el-container>
      <el-header>重庆城市科技学院-实验室安全考试系统 </el-header>
      <el-main>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :router="true"
          @select="handleSelect"
        >
          <el-menu-item index="/home">首页</el-menu-item>
          <el-menu-item index="/home/learn">在线学习</el-menu-item>
          <el-menu-item index="/home/practice">在线练习</el-menu-item>
          <el-menu-item index="/home/exam">在线考试</el-menu-item>
        </el-menu>
        <el-carousel height="160px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
        <div class="main">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer>
        版权所有 © 2023-2023 Lying 重庆城市科技学院 保留所有权利
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="less">
.home {
  // background-color: aqua;
  .el-container {
    .el-header {
      background-color: red;
      line-height: 60px;
    }
    .el-main {
      background-color: yellow;
      width: 900px;
      margin: auto;
      padding: 0%;
      .el-menu {
        width: 900px;
        margin: auto;
      }
    }
    .el-footer {
      line-height: 60px;
      background-color: blue;
    }
  }
}
</style>