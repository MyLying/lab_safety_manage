<template>
  <div id="app">
    <!-- <HomeView></HomeView> -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style lang="less">
* {
  margin: 0%;
  padding: 0%;
}
::-webkit-scrollbar {
  // display: none;
  width: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
  /* background-color: aqua; */
  position: relative;
  padding: 0%;
  min-width: 900px;
}
</style>
