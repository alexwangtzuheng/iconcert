<template>
  <div class="homepage">
    <!-- banner -->
    <div class="banner" id="banner">
      <div class="banner-search">
        <input type="text" placeholder="searching for...">
        <button>搜尋</button>
      </div> 
      <section class="scrollDownBtn">
        <a @click="scrollDown"><span></span></a>
      </section> 
    </div>

    <!-- 2nd-screen -->
    <div class="secondScreen-bg">
      <div class="secondScreen" id="secondScreen">
        <h2>最新消息</h2>
        <hr>
        <div class="secondScreen-news">
          <div class="secondScreen-newsLeft">
            <div class="secondScreen-newsLeftContent" v-for="item in newsLefts"><img src="../assets/img/ticket.png">[{{item.type}}]&nbsp;{{item.content}}</div>
          </div>
          <div class="secondScreen-newsRight">
            <div class="secondScreen-newsRightContent" v-for="item in newsRights"><img src="../assets/img/ticket.png">[{{item.type}}]&nbsp;{{item.content}}</div>
          </div>
        </div>
      </div>
    </div>

    <!-- 3rd-screen -->
    <div class="thirdScreen">
      <h2>節目資訊</h2>
      <hr>
      <div class="box" v-for="item in programs">
        <div class="boxMask" :style="{backgroundImage:'url(' +item.bgPhoto+ ')'}"></div>
        <!-- right -->
        <div v-if="item.place == 'right'" class="boxContent" :style="{backgroundImage:'url(' +item.photo+ ')'}"></div>
        <div v-if="item.place == 'right'" class="textContent">
          <div class="maskContent"></div>
          <p>{{item.time}}<br>{{item.name}}<br></p>
          <a href="#" class="book_rightnow">立即訂購</a>
          <a href="#" class="check_detail">查看詳情</a>
        </div>
        <!-- left -->
        <div v-if="item.place == 'left'" class="boxContent2" :style="{backgroundImage:'url(' +item.photo+ ')'}"></div>
        <div v-if="item.place == 'left'" class="textContent2">
          <div class="maskContent"></div>
          <p>{{item.time}}<br>{{item.name}}<br></p>
          <a href="#" class="book_rightnow">立即訂購</a>
          <a href="#" class="check_detail">查看詳情</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'HelloWorld',
  data () {
    return {
      newsLefts: [
        {
          type: '置頂公告',
          content: 'iconcert會員加入辦法'
        },
        {
          type: '置頂公告',
          content: '退票作業延長公告'
        },
        {
          type: '置頂公告',
          content: 'iconcert售票app上架囉！'
        },
        {
          type: '最新消息',
          content: '售票延期-[蔡健雅 給世界最優長的吻]'
        },
        {
          type: '最新消息',
          content: '節目延期-[郭富城 舞林密碼-台北站]'
        },
      ],
      newsRights: [
        {
          type: '最新消息',
          content: '節目延期-[陳小春 STOP ANGRY巡迴演唱會]'
        },
        {
          type: '重要通知',
          content: '取票注意事項'
        },
        {
          type: '重要通知',
          content: '預防詐騙提醒'
        }
      ],
      programs: [
        {
          place: 'right',
          time: '2019/06/13 (六)',
          name: 'IU 十週年巡迴演唱會 dlwlrma 10th Anniversary Tour Concert',
          bgPhoto: require('../assets/img/iu_back.jpg'),
          photo: require('../assets/img/iu.jpeg')
        },
        {
          place: 'left',
          time: '2019/12/07 (六)',
          name: '陳小春 Stop Angry 巡回演唱會',
          bgPhoto: require('../assets/img/spring3.jpg'),
          photo: require('../assets/img/spring2.jpg')
        },
        {
          place: 'right',
          time: '2020/05/09 (六)',
          name: 'Tanya蔡健雅 給世界最悠長的吻 2020巡迴演唱會',
          bgPhoto: require('../assets/img/tsai_back.jpg'),
          photo: require('../assets/img/tsai.jpg')
        },
        {
          place: 'left',
          time: '2019/07/28 (日)',
          name: 'A-lin 聲吶 世界巡回演唱會 Sonar World Tour Concert',
          bgPhoto: require('../assets/img/alin_sonarb.jpg'),
          photo: require('../assets/img/alin.jpeg')
        }
      ]
    }
  },
  methods: {
      scrollDown () {
          $('html,body').animate({
            scrollTop: $('#secondScreen').offset().top
          },800);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/homepage.css";
</style>
