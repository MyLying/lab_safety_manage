<template>
  <div class="pdf-demo">
    <button @click="handleDown">PDF下载</button>
    <div id="demo">
      <article class="contract" style="position: relative">
        <h1>黑龙江工程学院证书</h1>
        <div id="pdfDom">
          <div class="proBox">
            <p class="tit">荣誉证书</p>
            <p class="con">
              <span>恭喜</span>
              <span class="con-name" >
                {{this.$route.params.realName}}
              </span>
              同学于<span>{{paperList[0].createTime.substring(0,10)}}</span>通过<span>{{this.$route.params.title}}</span>，特发此奖状，以资鼓励！
            </p>
            <div class="con-unit">
              <p>黑龙江工程学院</p>
              <p class="time">{{ nowTime }}</p>
            </div>
            <p class=" con-footer">奇创 监制</p>

            <div v-show="isShow" class="chapter">
              <canvas id="chapterCanvas" width="150" height="150" />
            </div>
          </div>
        </div>
        <!--
        img标签  增加 crossorigin="anonymous" 属性 允许 canvas内跨域请求 外部图片
        img标签使用注意：
        如果你要用来生成canvas的dom中包含的img图片，之前已经被你的用户访问过（例如你是在对线上现有的业务进行改造），显然之前你应该没有给<img>标签添加crossorigin="anonymous"属性，那么请注意，这时候你的用户的浏览器已经把这些图片缓存在了本地，所以即便你按照上面的步骤都做了也没用，因为访问图片时读到的都是不带Access-Control-Allow-Origin等响应头的缓存数据。这个时候你要做的，就是给要生成canvas的dom中的所有<img>标签的src添加一个任意的字符串，只要能起到重新发起图片读取请求，从而避免读取到浏览器缓存数据即可，
        如下所示：'http://h0.hucdn.com/open/201819/9404b56f97e7df8a_750x1334.png?any_string_is_ok'
        注意，不要添加随机字符串，那会击穿CDN缓存的，随便添加一个固定的字符串，能够避免读取到浏览器的缓存数据就可以了。这是本人血的教训！所以请大家千万千万不要忽视这一点！
        详见：文章&#45;&#45;》 https://www.jianshu.com/p/22bd5b98e38a
        使用方式： 见本代码开头的 第一注释。

        -->
      </article>
    </div>
  </div>
</template>

<script>

import htmlToPdf from '@/unit/htmlToPdf'
import { listPaper } from '@/api/paper/paper'

export default {
  name: 'PdfDemo',
  props: {
    examId: {
      type: String,
      defaultValue: ''
    },
    userId: {
      type: String,
      defaultValue: ''
    }
  },
  data() {
    return {
      nowTime: '',
      value1: null,
      currentNumber: '',
      paperList: []
    }
  },
  watch: {

    // 检测查询变化
    examId: {
      handler() {
        this.fetchPaperList()
      },
      deep: true
    },

    // 检测查询变化
    userId: {
      handler() {
        this.fetchPaperList()
      },
      deep: true
    }
  },
  created() {
    this.fetchPaperList()
    this.getTime()
  },
  methods: {

    fetchPaperList() {
      listPaper(this.userId, this.examId).then(response => {
        this.currentNumber = response.data.current
        this.paperList = response.data.records
      })
    },

    handleDown() {
      htmlToPdf.downloadPDF(document.querySelector('#demo'), '荣誉证书')
    },
    getTime() {
      setInterval(() => {
        this.nowTime = new Date().toLocaleDateString()
      }, 1000)
    },

    handleWindowPrint(ele, fileName) {
      // 留存原来的 html
      // let bdHtml = window.document.body.innerHTML;
      // let bdHtml = document.querySelector('#app').innerHTML;
      // 要打印的 内容 html
      // document.body.innerHTML =  document.querySelector('#demo').innerHTML;
      // document.body.innerHTML =  document.querySelector('#demo').outerHTML;
      // document.querySelector('#app').innerHTML =  document.querySelector('#demo').outerHTML;
      // document.querySelector('#main').innerHTML =  document.querySelector('#demo').outerHTML;
      console.log(666)
      // 去除页面不必要的 head 标签内  内容， 避免影响打印页 ， title 为保存为 pdf 的文件时的 文件名
      document.head.innerHTML = '<meta charset="utf-8">\n' +
          ' <title> ' + fileName + '</title>\n' +
          ' <link rel="shortcut icon" href="http://192.168.29.50:8081/favicon.ico" type="image/x-icon" />\n' +
          ' <meta name="format-detection" content="telephone=no">\n' +
          ' <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">\n' +
          ' <meta name="viewport" content="width=device-width,initial-scale=1.0">\n' +
          ' <link rel="stylesheet" href="./static/css/contract.css"/>' // 生成pdf的外部css样式
      // document.body.innerHTML =  document.querySelector('#demo').outerHTML;
      // document.querySelector('#main').innerHTML =  document.querySelector('#demo').outerHTML;
      // document.body.innerHTML =  document.querySelector('#demo').outerHTML;
      document.body.innerHTML = document.querySelector(ele).outerHTML

      // window.print();

      // 转异步 等待dom元素渲染（样式）完毕在打印
      setTimeout(() => {
        // 打印
        window.print()
        // 刷新页面
        window.location.reload()
      }, 20)

      // 重新设会当前页面
      // window.document.body.innerHTML = bdHtml;
      // document.querySelector('#app').innerHTML =  bdHtml;
      // 刷新页面
      // window.location.reload();
    }

  }
}
</script>

<style scoped>

  #demo {
    background-color: #fff;
    width: 1000px;
    /* height: 400px; */
    margin: auto;
  }

  article {
    background: #fff;
  }

  #demo .contract {
    background: #fff;
    /*padding: 76px 76px 114px;*/
    padding: 86px 86px 114px;
    position: relative;

  }

  #demo .contract .key-info {
    display: flex;
  }

  #demo .contract .key-info > aside {
    flex: 1;
  }

  #demo .contract > h1 {
    text-align: center;
    margin-top: 0;
  }

  #demo .contract > p:first-child {
    margin-top: 0;
  }

  #demo .contract .key-info .info-left .info-row > span:first-child,
  #demo .contract .key-info .info-right .info-row > span:first-child {
    font-weight: 600;
  }

  #demo .contract .signature {
    position: absolute;
    right: 86px;
    bottom: 0;
  }

  #demo .contract .signature > img {
    width: 200px;
  }

  #demo {
    color: #000;
    font-family: "Microsoft YaHei";
  }

  h1 {
    font-size: 24px;
    font-weight: 700;
  }

  h3 {
    font-size: 18.72px;
    font-weight: 700;
    margin: 18.720px 0;
  }

  p {
    margin: 16px 0;
  }
  #pdfDom {
    /* 要想pdf周边留白，要在这里设置 */
    padding: 20px;
    width: 750px;

  }
  .proBox {
    background: url("../../assets/pdfBg/pdfbg.png")repeat;
    width: 750px;
    height: 525px;
    padding: 90px 94px;
    box-sizing: border-box;
    margin: 0 auto;
    position: relative;
    color: #000;
    font-family: SimSun;
  }
  .tit {
    color: #cf0c0c;
    font-size: 36px;
    font-weight: 700;
    position: relative;
    top: -6px;
    left: 8px;
    letter-spacing: 20px;
    font-family: STHeiti;
    margin: 20px 0;
    text-align: center;
  }
  .proid {
    text-align: right;
    margin: 0;
    font-weight: 500;
    /* margin-right: 5px; */
  }
  .con {
    font-size: 20px;
    font-weight: 700;
    text-align: left;
    margin: 10px 0;
    line-height: 32px;
    text-indent: 2em;
  }
  .con-name {
    font-family: 华文行楷, STXingkai;
    border-bottom: 2px solid #000;
  }
  .con-unit {
    font-size: 18px;
    font-weight: 700;
    position: absolute;
    right: 100px;
    bottom: 100px;
    text-align: center;
    letter-spacing: 3px;
  }
  .con-unit p {
    margin: 5px 0;
  }
  .con-footer {
    font-size: 18px;
    font-weight: 700;
    position: absolute;
    bottom: 45px;
    left: 0;
    right: 0;
    text-align: center;
  }
  .chapter {
    border-radius: 50%;
    position: absolute;
    bottom: 75px;
    right: 134px;
  }

</style>
