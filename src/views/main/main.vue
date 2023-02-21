<template>
  <div class="main-container">
    <div class="main-container-left">
      <div class="main-container-user_info">
        <p>
          {{ userInfo.name }}
        </p>
        <p>{{ userInfo.account }}</p>
        <p>{{ userInfo.class }}</p>
        <hr />
      </div>
      <div class="main-container-fast_track">
        <p>快速通道</p>
        <el-link style="width: 100%" type="primary" :underline="false"
          >快速通道一</el-link
        >
        <el-link style="width: 100%" type="primary" :underline="false"
          >快速通道二</el-link
        >
      </div>
      <div class="main-container-safety_manual">
        <p>安全手册</p>
        <el-link style="width: 100%" type="primary" :underline="false"
          >安全手册</el-link
        >
      </div>
    </div>
    <div class="main-container-middle">
      <div class="main-container-regulations">
        <p>
          规章制度
          <span style="float: right">
            <el-link type="primary" :underline="false">more</el-link>
          </span>
        </p>
        <div style="text-align: center">规章制度</div>
      </div>
      <div class="main-container-exam">
        <p>
          在线考试
          <span style="float: right">
            <el-link type="primary" :underline="false">more</el-link>
          </span>
        </p>
        <div style="text-align: center">在线考试</div>
      </div>
      <div class="main-container-learn">
        <p>
          在线学习
          <span style="float: right">
            <el-link type="primary" :underline="false">more</el-link>
          </span>
        </p>
        <div style="text-align: center">
          <el-tabs v-model="activeName_learn" @tab-click="handleClick">
            <el-tab-pane
              v-for="(item, index) in learnList"
              :key="index"
              :label="item[0].type"
              :name="item[0].name"
            >
              <el-link
                type="primary"
                :underline="false"
                style="width: 50%; float: left"
                v-for="(item2, index2) in item"
                :key="index2"
              >
                {{ item2.title }}</el-link
              >
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
      <div class="main-container-practice">
        <p>
          在线练习
          <span style="float: right">
            <el-link type="primary" :underline="false">more</el-link>
          </span>
        </p>
        <div style="text-align: center">
          <el-tabs v-model="activeName_practice" @tab-click="handleClick">
            <el-tab-pane
              v-for="(item, index) in practiceList"
              :key="index"
              :label="item[0].type"
              :name="item[0].name"
            >
              <el-link
                type="primary"
                :underline="false"
                style="width: 50%; float: left"
                v-for="(item2, index2) in item"
                :key="index2"
              >
                {{ item2.title }}
              </el-link>
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
    <div class="main-container-right">
      <div class="main-container-system_advisory">
        <p>
          系统公告
          <span style="float: right">
            <el-link type="primary" :underline="false">more</el-link>
          </span>
        </p>
        <div style="text-align: center">
          系统公告
          <p
            style="font-size: 10px"
            v-for="(item, index) in system_advisoryList"
            :key="index"
          >
            {{ item.title }}
            <br />
            {{ item.collage }}
          </p>
        </div>
      </div>
      <div class="main-container-security_identity">
        <p>
          常用安全标识
          <span style="float: right">
            <el-link type="primary" :underline="false">more</el-link>
          </span>
        </p>
        <div style="text-align: center">常用安全标识</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainView",
  data() {
    return {
      activeName_learn: "1-1",
      activeName_practice: "1-1",
      userInfo: {
        name: "冉智会",
        account: 2131010414,
        class: "21级计算机(专升本)4班",
      },
      system_advisoryList: [
        {
          id: 1,
          title: "通知一",
          time: "2022-02-02",
          collage: "人工智能与大数据学院",
          content:
            "sdfjkshgfdgfjsl上来块福建省李开复就是对风扇电机开发乐山大佛该函数的分",
        },
      ],
      learnList: [
        [
          {
            type: "文章类",
            name: "1-1",
            title: "化学类安全题",
            url: "1-1",
          },
          {
            type: "",
            name: "1-2",
            title: "医学生物类安全题",
            url: "1-2",
          },
          {
            type: "",
            name: "1-3",
            title: "通识类安全题",
            url: "1-3",
          },
          {
            type: "视频类",
            name: "1-4",
            title: "通识类安全题",
            url: "1-4",
          },
        ],
        [
          {
            type: "通识类题库",
            name: "2-1",
            title: "人工智能学院",
            url: "2-1",
          },
          {
            type: "通识类题库",
            name: "2-2",
            title: "土木建筑学院",
            url: "2-2",
          },
        ],
        [
          {
            type: "院校专项题库",
            name: "3-1",
            title: "Special Equipment",
            url: "3-1",
          },
          {
            type: "院校专项题库",
            name: "3-2",
            title: "Fire Safety",
            url: "3-2",
          },
        ],
      ],
      practiceList: [
        [
          {
            type: "通识类练习",
            name: "1-1",
            title: "化学类安全题",
            url: "1-1",
          },
          {
            type: "通识类练习",
            name: "1-2",
            title: "医学生物类安全题",
            url: "1-2",
          },
          {
            type: "通识类练习",
            name: "1-3",
            title: "通识类安全题",
            url: "1-3",
          },
        ],
        [
          {
            type: "院系专项练习",
            name: "2-1",
            title: "人工智能学院",
            url: "2-1",
          },
          {
            type: "院系专项练习",
            name: "2-2",
            title: "土木建筑学院",
            url: "2-2",
          },
        ],
        [
          {
            type: "英文类练习",
            name: "3-1",
            title: "Special Equipment",
            url: "3-1",
          },
          { type: "英文类练习", name: "3-2", title: "Fire Safety", url: "3-2" },
        ],
      ],
    };
  },
};
</script>

<style lang="less">
.main-container {
  display: flex;
  justify-content: space-between;
  text-align: left;
  .main-container-left {
    width: 200px;
    order: 0;
    background-color: aqua;
    .main-container-user_info {
      text-align: center;
    }
  }
  .main-container-middle {
    width: 500px;
    order: 1;
    background-color: goldenrod;
  }
  .main-container-right {
    width: 170px;
    order: 2;

    background-color: rgb(46, 212, 146);
  }
}
</style>