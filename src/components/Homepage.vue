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

<style scoped>
/* banner */
.banner{
    /* border: 1px solid red; */
    width: 100%;
    height: calc(95vh - 50px);
    background-image: url(../assets/img/banner.jpg);
    background-position: center;
    background-size: cover;
}
.banner-search{
    /* border: 1px solid red; */
    text-align: center;
    width: 520px;
    height: 80px;
    margin: 0 auto;
    /* margin-top: 65vh; */
    transform: translateY(60vh);
    padding-top: 22px;
    background-color: rgba(255,255,255,.7);
    border-radius: 5px;
}
.banner-search > input{
    position: relative;
    width: 400px;
    padding: 6px 8px;
    background-color: #eeeeee;
    outline: none;
    border: 1px solid gray;
    font-size: 16px;
}
.banner-search > button{
    font-size: 16px;
    height: 36px;
    width: 80px;
    outline: none;
    border: 1px solid rgb(19,64,153);
    background-color: rgb(19,64,153);
    color: white;
    transition-duration: .3s;
    border-radius: 3px;
}
.banner-search > button:hover{
    background-color: rgb(54,54,199);
    cursor: pointer;
}

/* scroll down btn */
.scrollDownBtn{
    transform: translateY(67vh);
}
.scrollDownBtn a{
    padding-top: 60px;
}
.scrollDownBtn a:hover{
    cursor: pointer;
}
.scrollDownBtn a span{
    position: absolute;
    top: 0;
    left: 50%;
    width: 46px;
    height: 46px;
    margin-left: -23px;
    border: 1px solid #fff;
    border-radius: 100%;
    box-sizing: border-box;
}
.scrollDownBtn a span::after{
    position: absolute;
    top: 50%;
    left: 50%;
    content: '';
    width: 16px;
    height: 16px;
    margin: -12px 0 0 -8px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    box-sizing: border-box;
}
.scrollDownBtn a span::before{
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    content: '';
    width: 44px;
    height: 44px;
    box-shadow: 0 0 0 0 rgba(255,255,255,.1);
    border-radius: 100%;
    opacity: 0;
    -webkit-animation: sdb03 3s infinite;
    animation: sdb03 3s infinite;
    box-sizing: border-box;
}
@-webkit-keyframes sdb03{
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      box-shadow: 0 0 0 60px rgba(255,255,255,.1);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
}
@keyframes sdb03{
    0% {
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    60% {
      box-shadow: 0 0 0 60px rgba(255,255,255,.1);
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
}


/* 2nd-screen */
.secondScreen-bg{
    /* border: 1px solid red; */
    background-color: rgb(233, 233, 233);
}
.secondScreen{
    /* border: 1px solid red; */
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
}
.secondScreen > h2{
    font-size: 24px;
    margin-left: 100px;
}
.secondScreen > hr{
    border-top: 1px dashed gray;
}
.secondScreen-news{
    /* border: 1px solid red; */
    width: 1000px;
    margin: 0 auto;
    font-size: 16px;
    color: rgb(16, 105, 189);
}
.secondScreen-newsLeft, .secondScreen-newsRight{
    width: 47.5%;
    display: inline-block;
    vertical-align: top;
    margin: 0 1%;
}
.secondScreen-newsLeft img, .secondScreen-newsRight img{
    width: 20px;
    transform: translateY(3px);
    margin-right: 5px;
}
.secondScreen-newsLeftContent{
    border-bottom: 1px solid gray;
    padding: 8px 0 3px 0;
    transition-duration: .3s;
}
.secondScreen-newsLeftContent:hover{
    color: rgb(13, 81, 145);
    cursor: pointer;
}
.secondScreen-newsRightContent{
    border-bottom: 1px solid gray;
    padding: 8px 0 3px 0;
    transition-duration: .3s;
}
.secondScreen-newsRightContent:hover{
    color: rgb(13, 81, 145);
    cursor: pointer;
}

/* 3rd-screen */
.thirdScreen{
    /* border: 1px solid red; */
    width: 1200px;
    margin: 0 auto;
    padding: 50px 0;
}
.thirdScreen > h2{
    font-size: 24px;
    margin-left: 100px;
}
.thirdScreen > hr{
    border-top: 1px dashed gray;
    margin-bottom: 30px;
}
.box{
    height: 750px;
    width: 1050px;
    margin: 0 auto;
    margin-bottom: 50px;
    position: relative;
    box-shadow: 0 10px 50px 5px black;
    overflow: hidden;
    padding: 15px;
    position: relative;
    background: -webkit-gradient(linear, 0% 20%, 0% 92%, from(#fff), to(#f3f3f3), color-stop(.1, #fff));
    border-top: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    -webkit-border-bottom-right-radius: 60px 60px;
    -webkit-box-shadow: 0px 0px 12px rgba(0,0,0,0.3);
}
.box:before{
    content: '';
    width: 25px;
    height: 20px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    -webkit-border-bottom-right-radius: 30px;
    -webkit-box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.3);
    -webkit-transform:
      rotate(-20deg) skew(-40deg, -3deg) translate(-13px, -13px);
    z-index: 20;
    background-color: white;
}
.box:after{
    content: '';
    z-index: -10;
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.2);
    display: inline-block;
    -webkit-box-shadow: 20px 20px 8px rgba(0, 0, 0, 0.2);
    -webkit-transform: rotate(0deg) translate(-45px, -20px) skew(20deg);
} 
.boxMask{
    height: 97%;
    width: 97%;
    background-position: center;
    background-size: cover;
    display: table;
    background-attachment: fixed;
    z-index: 10;
    position: absolute;
    box-shadow: 0 0 80px 15px #ffffff inset;
}
.boxContent{
    /* border: 1px solid blue; */
    z-index: 30;
    height: 658px;
    width: 530px;
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
    text-align: center;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 0px rgb(43, 43, 43);
}
.textContent{
    /* border: 1px solid purple; */
    color: white;
    font-size: 20px;
    z-index: 48;
    display: inline-block;
    box-sizing: border-box;
    height: 197.52px;
    width: 530px;
    position: absolute;
    right: 5%;
    top: 68%;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
}
.boxContent2{
    /* border: 1px solid blue; */
    z-index: 30;
    height: 658px;
    width: 530px;
    position: absolute;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
    overflow: hidden;
    text-align: center;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 0px rgb(43, 43, 43);
}
.textContent2{
    /* border: 1px solid purple; */
    color: white;
    font-size: 20px;
    z-index: 48;
    display: inline-block;
    box-sizing: border-box;
    height: 197.52px;
    width: 530px;
    position: absolute;
    left: 5%;
    top: 68%;
    border-radius: 0 0 10px 10px;
    overflow: hidden;
}
.maskContent{
    /* border: 1px solid blue; */
    background: linear-gradient(to bottom, black, transparent 150%);
    display: inline-block;
    height: 100%;
    width: 100%;
    position: absolute;
    overflow: hidden;
    z-index: -10;
    overflow: hidden;
    border-radius: 0 0 10px 10px;
}
.textContent > p{
    /* border: 1px solid blue; */
    height: 85px;
    width: 85%;
    margin-top: 25px;
    margin-bottom: 0;
    margin-left: 40px;
    margin-right: 40px;
    font-size: 20px;
    line-height: 30px;
}
.textContent2 > p{
    /* border: 1px solid blue; */
    height: 85px;
    width: 85%;
    margin-top: 25px;
    margin-bottom: 0;
    margin-left: 40px;
    margin-right: 40px;
    font-size: 20px;
    line-height: 30px;
}
.book_rightnow{
    border: 1px solid rgb(201, 16, 16);
    font-size: 16px;
    transition-duration: .3s;
    color: white;
    background-color: rgb(201, 16, 16);
    border-radius: 3px;
    display: inline-block;
    padding: 10px 15px 10px;
    text-decoration: none;
    text-align: center;
    margin-top: 15px;
    margin-left: 40px;
}
.book_rightnow:hover{
    background-color: rgb(185, 15, 15);
}
.check_detail{
    width: 100px;
    height: 100px;
    position: absolute;
    top: 145px;
    left: 200px;
    color: white;
    transition-duration: .3s;
    font-size: 16px;
}
.check_detail:hover{
    color: rgb(228, 228, 228);
}
</style>
