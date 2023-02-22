<template>
  <el-continer>
    <div class="new">
      <!--左边部分开始-->
      <div class="new-left">
        <div class="tz-title">
          <h1>通知公告</h1>
          <router-link style="float: right;text-decoration: none;margin-top: 25px;color: red" :to="{path:'/news-secondindex'}">More</router-link>
        </div>
        <div class="newcon">
          <!--走马灯开始-->
          <div class="newcon-left" style="margin-left: -100px;margin-top: 20px">
            <el-carousel height="300px" style="width: 300px">
              <el-carousel-item v-for="item in 2" :key="item">
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="newcon-right">
            <ul v-for="item in listQuery" style="margin-left: -20px">
              <li style="line-height:40px;text-decoration: none;color: #494646;font-size: 18px" @click="Pass(item.id)">{{ item.noticeTitle }}</li>
            </ul>
          </div>
        </div>
      </div>
      <!--左边部分结束-->
      <!--右边部分开始-->
      <div class="new-right">
        <div class="tz-title">
          <h1>快速链接</h1>
        </div>
        <div class="zj">
          <ul style="margin-left: -50px">
            <li class="li-1" style="margin-top: 70px"><router-link :to="{path:'/dashboard/dashboard'}" style="color: white">模拟考试</router-link></li>
            <li class="li-2" style="margin-top: 70px"><router-link :to="{path:'/dashboard/dashboard'}" style="color: white">正式考试</router-link></li>
            <li class="li-3"><router-link :to="{path:'/my/exam/records'}" style="color: white">证书下载</router-link></li>
            <li class="li-4"><router-link :to="{path:'/dashboard/dashboard'}" style="color: white">在线学习</router-link></li>
          </ul>
        </div>
      </div>
      <!--右边部分结束-->
    </div>
    <!--box3开始-->
    <div class="box3">
      <div class="notic">
        <div class="tz-title"><h1>法律法规</h1>
          <router-link style="float: right;text-decoration: none;margin-top: 25px;color: red" to="/law-secondindex">More</router-link></div>
        <div class="noticlist">
          <ul class="tzlist" v-for="item in laws">
            <li @click="PassLaws(item.id)" style="margin-left: -20px;height: 3px">{{item.noticeTitle}}</li>
          </ul>
        </div>
      </div>

      <div class="notic" style="margin-left: 30px">
        <div class="tz-title"><h1>规章制度</h1>
          <router-link style="float: right;text-decoration: none;margin-top: 25px;color: red" to="/rule-secondindex">More</router-link>
        </div>
        <ul class="mtlist" v-for="item in rules">
          <li @click="PassRules(item.id)" style="margin-left: -20px;height: 3px">{{item.noticeTitle}}</li>
        </ul>
      </div>

      <div class="notic lastnotic" style="margin-left: 25px">
        <div class="tz-title"><h1>安全知识</h1>
          <router-link style="float: right;text-decoration: none;margin-top: 25px;color: red" :to="{path:'/safe-secondindex'}">More</router-link>
        </div>
        <ul class="mtlist" v-for="item in safe">
          <li @click="PassSafes(item.id)" style="margin-left: -20px;height: 3px">{{item.noticeTitle}}</li>
        </ul>
      </div>
    </div>
  </el-continer>
</template>

<script>
import { selectMark } from '@/api/notice/notice'
import { passDetailId } from '@/api/notice/notice'
import {passLawDetailId, selectMark_law} from '@/api/law/law'
import { passRuleDetailId, selectMark_rule } from '@/api/rule/rule'
import { passSafeDetailId, selectMark_safe } from '@/api/safe/safe'

export default {
  name: 'News',
  data() {
    return {
      // notice传过来的勾选的所有信息
      listQuery: [],
      // 法律法规
      laws: [],
      // 规章制度
      rules: [],
      // 安全知识
      safe: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      selectMark().then(response => {
        this.listQuery = response.data
      }),
      selectMark_law().then(response => {
        this.laws = response.data
      }),
      selectMark_rule().then(response => {
        this.rules = response.data
      }),
      selectMark_safe().then(response => {
        this.safe = response.data
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
    },
    PassLaws(id) {
      passLawDetailId(id).then(() => {
        this.$notify({
          title: '成功',
          message: '查看成功！',
          type: 'success',
          duration: 2000
        }),
          this.$router.push({ name: 'Detail_Laws' })
      })
    },
    PassRules(id) {
      passRuleDetailId(id).then(() => {
        this.$notify({
          title: '成功',
          message: '查看成功！',
          type: 'success',
          duration: 2000
        }),
          this.$router.push({ name: 'Detail_Rules' })
      })
    },
    PassSafes(id) {
      passSafeDetailId(id).then(() => {
        this.$notify({
          title: '成功',
          message: '查看成功！',
          type: 'success',
          duration: 2000
        }),
        this.$router.push({ name: 'Detail_Safes' })
      })
    }
  }
}
</script>

<style lang="scss">
//title style
.tz-title{
  height: 50px;
  color: aqua;
  background: url("../../assets/newIndex/ty_title_bg.png")repeat-x left bottom;
  h1{
    font-size: 20px;
    color: #0372d0;
    padding-left: 20px;
    font-weight: bold;
    line-height: 35px;
    display: block;
    float: left;
    cursor: pointer;
    background: url("../../assets/newIndex/h1_bg.png") no-repeat 8px center;
  }
}

.newcon-left{
  float: left;
  width: 215px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 300px;
  text-align: center;
  margin: 0;
}

.el-carousel__indicator--horizontal{
  padding: 0px;
  margin-left: 6px;
}


.el-carousel__item:nth-child(3) {
  background: url("../../assets/background/3.png");
}

.el-carousel__item:nth-child(4) {
  background: url("../../assets/background/4.png");
}


.newcon-right{
  float: right;
  width: 450px;
  height: 330px;
  overflow: hidden;
  ul{
    li{
      a{
        line-height: 45px;
        margin-top: 50px;
      }
    }
  }
}
//new style
.new{
  width: 1200px;
  margin: 20px auto 30px auto;
  overflow: hidden;

}
.new-left{
  float: left;
  width: 765px;
  overflow: hidden;
}
.new-right{
  float: left;
  width: 400px;
  margin-left: 35px;
}
.zj{
}
.zj ul li{
  width: 140px;
  height: 60px;
  line-height: 60px;
  marker: none ;
  float: left;
  text-align: center;
  list-style-type: none;
  margin-top: 22px;
  margin-left: 50px;
  margin-bottom: 10px;
}
.zj ul li.li-1{background:#2787ca;}
.zj ul li.li-2{background:#7d7b7c;}
.zj ul li.li-3{background:#c26623;}
.zj ul li.li-4{background:#903932;}
.zj ul li.li-5{background:#a0bc94;}
.zj ul li.li-6{background:#95a7bd;}
.zj ul li.li-7{background:#a88b61;}
.zj ul li.li-8{background:#8a9046;}

//box3 style
.box3{
  width: 1200px;
  margin: 35px auto 0 auto;
  overflow: hidden;
}
.notic{
  float: left;
  width: 380px;
  overflow: hidden;
}
.noticlist{
  margin-top: 20px;
}
.tzlist{
  overflow: hidden;
}
.tzlist li{
  height: 22px;
  line-height: 22px;
  margin-bottom: 21px;
  list-style-type: none;
}
.tzlist li span{
  float: left;
  width: 95px;
  border-right: solid 1px #9c9c9c;
  color: #9c9c9c;
}
.tzlist li a{
  float: right;
  width: 225px;
  font-size: 15px;
  text-decoration: none;
  color: #23221c;
}
.tzlist li:hover span{
  border-right: solid 1px #2F4056;
  color: #2f4056;
}
.mtlist{
  overflow: hidden;
  margin: 20px 0;
}
.mtlist li{
  height: 22px;
  margin-bottom: 21px;
  list-style-type: none;
}
.mtlist li a{
  float: left;
  border-left: solid 3px #821212;
  padding-left: 10px;
  font-size: 15px;
  width: 370px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #23221c;
  text-decoration: none;
}
.mtlist li span{
  float: right;
  color: #76c4c4;
}
</style>
