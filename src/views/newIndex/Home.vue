<template>
  <div>
    <el-container id="head">
      <el-header>
        <div class="logo">
          <img src="../../assets/newIndex/top_logo.png" alt="">
        </div>
        <div class="character_logo">
          <img src="../../assets/newIndex/word.png" alt="">
        </div>
        <div class="button">
          <el-row>
            <router-link :to="{path:'/dashboard/dashboard'}"><el-button>登录</el-button></router-link>
          </el-row>
        </div>
      </el-header>
      <div id="nav">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" style="margin-left: 200px"><a href="" style="margin-left: 320px">首页</a></el-menu-item>
          <el-menu-item index="2"><router-link :to="{path:'/news-secondindex'}">通知公告</router-link></el-menu-item>
          <el-menu-item index="3"><router-link :to="{path:'/law-secondindex'}">法律法规</router-link></el-menu-item>
          <el-menu-item index="4"><router-link :to="{path:'/rule-secondindex'}">规章制度</router-link></el-menu-item>
          <el-menu-item index="4"><router-link :to="{path:'/safe-secondindex'}">安全知识</router-link></el-menu-item>
        </el-menu>
      </div>
    </el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    <el-container>
      <el-footer style="padding: 0px">
        <!--友情链接开始-->
        <div class="link">
          <div class="linkbox">
            <div style="width: 133px; float: left"><span></span></div>
            <div style="width: 1060px; float: right; padding-top: 30px">
              <ul style="width: 100%; float: left">
                <li style="list-style-type: none"><a href="http://hljit.edu.cn/" target="_blank" onClick="_addDynClicks(&quot;wburl&quot;, 1430806855, 37775)" style="text-decoration: none">黑龙江工程学院官网</a></li>
                <li style="list-style-type: none"><a href="http://www.hljit.edu.cn/Category_31/Index.aspx" target="_blank" onClick="_addDynClicks(&quot;wburl&quot;, 1430806855, 37775)" style="text-decoration: none">教务处</a></li>
                <li style="list-style-type: none"><a href="http://jw.hljit.edu.cn/" target="_blank" onClick="_addDynClicks(&quot;wburl&quot;, 1430806855, 37775)" style="text-decoration: none">期末成绩查询</a></li>
                <li style="list-style-type: none"><a href="" target="_blank" onClick="_addDynClicks(&quot;wburl&quot;, 1430806855, 37775)" style="text-decoration: none">联系我们</a></li>
                <li style="list-style-type: none"><a href="yqlj/mtlj.htm" target="_blank" onClick="_addDynClicks('wburl', 1430806855, 37787)" style="text-decoration: none">更多&gt;&gt;</a> </li>
              </ul>
            </div>
          </div>
        </div>
        <!--友情链接结束-->
        <div id="picture">
          <div class="text-center">

          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Head',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    addRoutes12() {
      this.$router.push({ path: '/dashbpard' })
    }
  }
}
</script>

<style lang="scss">
.el-header {
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 1240px;
  margin-left: 150px;
  margin-top: -30px;
  .logo {
    width: 430px;
    height: auto;
    margin-left: -110px;
    img {
      width: 100%;
    }
  }
}
body{
  margin:0px;
}
.character_logo{
  display: inline;
  padding: 10px;
  width: 680px;
  height: 180px;
  margin-left: -70px;
  img{
    width: 100%;
  }
}

.button{
  display: inline;
  padding: 10px;
  margin-right: -100px;
  margin-top: 10px;
}
#head{
  margin-top:40px;
}
#nav{
  ul{
    background-color: #114e84;
  }
  padding: 0px;
  margin-top: 30px;
  a{
    font-size: large;
    font-weight: normal;
    text-decoration: none;
    color: white;
  }
}
//修改背景颜色
.el-menu-item:hover{
  background-color: #114e84 !important;
}
//修改悬停时候的颜色
.el-menu-item.is-active {
  background-color: #114e84 !important;
}
//修改二级菜单背景颜色
.el-submenu__title:hover {
  background-color: #114e84 !important;
}

//修改二级菜单子菜单悬停时的颜色

//去除下划线
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}
//友情链接设置
.link{ width:100%; height:97px; background:#114e84;}
.linkbox{ width:1200px; margin:0 auto;}
.linkbox span{ float:left; width:113px; height:96px; background:url("../../assets/newIndex/link.png") left center no-repeat; margin-right:20px;}
.linkbox ul li{ float:left; padding:0 50px; height:45px; line-height:45px;}
.linkbox ul li a{ color:#fff;font-size: 15px;}
//尾部照片设置
#picture{
  width: auto;
  height: 150px;
  background: url('../../assets/newIndex/footbg.png');
}
.text-center{
  text-align: center;
}
</style>
