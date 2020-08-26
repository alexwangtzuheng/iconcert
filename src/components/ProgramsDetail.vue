<template>
  <div class="programBg"> 
    <div class="program">
    <h2 class="programTitle">&nbsp;&nbsp;節目資訊</h2>
    <hr>
    <br>
    <div class="programMain">
      <div class="programImgBox">
        <img class="programImg" :src="programsData.programs[$route.params.id].bgPhoto"><br>
      </div>
      <div class="programContent">
        <h3>{{ programsData.programs[$route.params.id].date }}<br>{{ programsData.programs[$route.params.id].name }}</h3>
        <router-link :to="{name:'ProgramsSelectSeats', params:{ id:$route.params.id }}" class="bookRightnow">立即訂購</router-link>
        <div @click="seeDetail" class="ai1_quastion_list">
          <div class="rectangle"></div>節目資訊<img :class="{ rotateTriangle:isrotateTriangle }" class="triangle_right" src="../assets/img/triangle_right2.png">
        </div>
        <p :class="{ preopen:ispreopen }" class="ai1_quastion_list_answer">出道十八年，戴愛玲唱了無數關於「愛」的歌曲，<br>
          首首都是我們在KTV裡必點的招牌熱唱歌。<br><br>
          等愛、追愛男女永遠的主題曲「對的人」，<br>
          搖滾 吶喊 勇敢唱出女人的心聲「他是跳蚤」、「壞壞惹人愛」，<br>
          勇敢投入愛情時唱「愛了就知道」、「可惜你不在」，<br>
          情傷的時候唱「空港」、「累格」、「跳痛」，<br>
          想測試高音極限的人挑戰「千年之戀」，<br>
          曾經一度覺得自己得了憂鬱症還要為自己打氣的「一無所懼」、「我不離開」，<br>
          希望能用歌聲療癒，那些曾經被愛情傷到的你們所唱的「了不起寂寞」、「為你幸福過<br>
          的我」。<br><br>
          這兩年，在製作《失物招領》專輯時，<br>
          戴愛玲經歷了一段探索自我的過程，<br>
          她學會了先愛自己才能愛人，重新找回自己、開放自己，<br>
          她說：「我覺得現在的自己，有無限的可能！」<br><br>
          戴愛玲 愛戴2020演唱會，<br>
          她將回到源頭，唱出自己一路以來的經歷，<br>
          是這些歌成就了現在的戴愛玲，感動了時光中的你，<br>
          一路上，用愛串連。<br><br>
          讓我們一起踏上尋找愛的旅程。<br>
          你的肺活量 準備好了嗎？<br><br><br>
          演出資訊<br>
          演唱會名稱：戴愛玲 愛戴2020演唱會<br>
          開賣時間：2020年1月13日中午12點<br>
          演出日期：2020年5月23日(六)<br>
          演出時間：19:30<br>
          地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;點：台北國際會議中心TICC(110台北市信義區信義路五段1號)<br>
          票&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;價：3280/2880/2480/2080/1680/1280/880<br>
          主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;辦：媒體棧國際行銷事業股份有限公司<br>
          協&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;辦：Sony Music 傑慶娛樂<br>
          場地示意圖：<br>
          <img class="eggSeat" src="../assets/img/egg_seat.png" alt=""> </p>
        <div @click="seeDetail2" class="ai1_quastion_list">
          <div class="rectangle"></div>場次<img :class="{ rotateTriangle:isrotateTriangle2 }" class="triangle_right" src="../assets/img/triangle_right2.png">
        </div>
        <p :class="{ preopen2:ispreopen2 }" class="ai1_quastion_list_answer">2020/05/23(六)19:30 台北小巨蛋</p>
        <div @click="seeDetail3" class="ai1_quastion_list">
          <div class="rectangle"></div>購票方式<img :class="{ rotateTriangle:isrotateTriangle3 }" class="triangle_right" src="../assets/img/triangle_right2.png">
        </div>
        <p :class="{ preopen3:ispreopen3 }" class="ai1_quastion_list_answer">1.&nbsp; 每人限購4張，可支援行動裝置購票。購票時可選擇【電腦配位】加速購票流程。<br>
          2.&nbsp;付款方式可選擇【ibon付款】或【線上刷卡】。<br>
          3.&nbsp;不論付款(刷卡、ATM、便利商店)時出現訊息為何，付款成功與否，請務必登入並到<br>
          &nbsp;&nbsp;【訂單查詢】頁面，確認其【訂單狀態】，依訂單查詢顯示為主。<br>
          4.【ibon付款】<br>
          &nbsp;&nbsp;&nbsp;請至全台7-11門市內的ibon機台付款，請在訂單成立20分鐘後再至ibon機台付款(例：<br>
          &nbsp;&nbsp;&nbsp;11:00完成訂票，請在11:20後再到ibon機台繳費)，需於訂單成立1小時內完成付款(例<br>
          &nbsp;&nbsp;&nbsp;:11:00完成訂票，請在12:00前至ibon機台完成付款)。 <br>
          5.【信用卡刷卡】<br>
          &nbsp;&nbsp;&nbsp;信用卡僅限VISA、MasterCard、JCB（無法使用AE、大來、銀聯卡），購票前請先<br>
          &nbsp;&nbsp;&nbsp;確認信用卡額度是否足夠，進入刷卡頁面後，請勿點選上一頁或是關閉刷卡頁面，避<br>
          &nbsp;&nbsp;&nbsp;免刷卡失敗，刷卡資料送出前請檢查是否正確。<br>
          6.&nbsp;訂購者帳號中若有未完成付款或刷卡失敗的訂單，該帳號之購票額度需等待系統自動<br>
          &nbsp;&nbsp;&nbsp;清除訂單後才會釋出，並請重新訂購。故售票日之後，如釋出較為前面座位之票券屬<br>
          &nbsp;&nbsp;&nbsp;正常情形。<br>
          7.&nbsp;付款完成之訂單代表已售出，表示台端同意支付本次交易的內容與價格，請至"訂單<br>
          &nbsp;&nbsp;&nbsp;查詢"核對訂購內容，台端不得以任何理由拒付本次交易費用。(如需退票，請另依退<br>
          &nbsp;&nbsp;&nbsp;票規則辦理。)</p>
        <div @click="seeDetail4" class="ai1_quastion_list">
          <div class="rectangle"></div>取票方式<img :class="{ rotateTriangle:isrotateTriangle4 }" class="triangle_right" src="../assets/img/triangle_right2.png">
        </div>
        <p :class="{ preopen4:ispreopen4 }" class="ai1_quastion_list_answer">1. 取票方式為【ibon取票】，取票時每筆將酌收$30手續費，於7-11超商門市付款時以<br>
          &nbsp;&nbsp;&nbsp;現金方式支付。<br>
          2.【ibon取票】流程說明：<br>
          &nbsp;&nbsp;&nbsp;請於ibon機台點選：票券中心→售票系統→取票→拓元售票系統。<br>
          &nbsp;&nbsp;&nbsp;請依照系統畫面指示，分別輸入【取票序號、取票號碼】，並列印取票繳費單。（取<br>
          &nbsp;&nbsp;&nbsp;票序號及取票號碼，可於【訂單查詢】中查看）請持取票繳費單至該門市櫃台付款及<br>
          &nbsp;&nbsp;&nbsp;取票。<br>
          3.&nbsp;現場票務服務處恕無法提供ibon取票服務，請於開演前自行至7-11超商完成取票。<br>
          4.&nbsp;付款完成之訂單，逾期未取票者視同售出，恕不接受退票或退費。<br>
          5.&nbsp;ibon票券為感熱紙張，請妥善保管，並遠離熱源，避免紙張整張變黑，造成辨識不易<br>
          &nbsp;&nbsp;&nbsp;，影響您的入場。</p>
        <div @click="seeDetail5" class="ai1_quastion_list">
          <div class="rectangle"></div>退票方式<img :class="{ rotateTriangle:isrotateTriangle5 }" class="triangle_right" src="../assets/img/triangle_right2.png">
        </div>
        <p :class="{ preopen5:ispreopen5 }" class="ai1_quastion_list_answer">本節目退換票請依照iconcert網站退票方案一規定辦理<br>
          開演前10日內(不含演出當日)恕不接受退換票，退票期限為5/12， 退換票均需酌收票面<br>
          價10%手續費。 </p>
        <div @click="seeDetail6" class="ai1_quastion_list">
          <div class="rectangle"></div>注意事項<img :class="{ rotateTriangle:isrotateTriangle6 }" class="triangle_right" src="../assets/img/triangle_right2.png">
        </div>
        <p :class="{ preopen6:ispreopen6 }" class="ai1_quastion_list_answer">110 公分以下兒童不得入場</p>
      </div>
    </div>
  </div>
</div>
    
</template>

<script>
import programsData from '../fakeData/programsData.js'

export default {
    data () {
        return {
            programsData,
            ispreopen: true,
            ispreopen2: false,
            ispreopen3: false,
            ispreopen4: false,
            ispreopen5: false,
            ispreopen6: false,
            isrotateTriangle: false,
            isrotateTriangle2: true,
            isrotateTriangle3: true,
            isrotateTriangle4: true,
            isrotateTriangle5: true,
            isrotateTriangle6: true,
        }
    },
    methods: {
        seeDetail () {
            this.ispreopen = !this.ispreopen
            this.isrotateTriangle = !this.isrotateTriangle
        },
        seeDetail2 () {
            this.ispreopen2 = !this.ispreopen2
            this.isrotateTriangle2 = !this.isrotateTriangle2
        },
        seeDetail3 () {
            this.ispreopen3 = !this.ispreopen3
            this.isrotateTriangle3 = !this.isrotateTriangle3
        },
        seeDetail4 () {
            this.ispreopen4 = !this.ispreopen4
            this.isrotateTriangle4 = !this.isrotateTriangle4
        },
        seeDetail5 () {
            this.ispreopen5 = !this.ispreopen5
            this.isrotateTriangle5 = !this.isrotateTriangle5
        },
        seeDetail6 () {
            this.ispreopen6 = !this.ispreopen6
            this.isrotateTriangle6 = !this.isrotateTriangle6
        }
    }
}
</script>

<style scoped>
.programBg{
    background-color: rgb(245, 245, 245);
    padding-bottom: 150px; 
}
.program{
    /* border: 1px solid red; */
    position: relative;
    width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
}
.programTitle{
    font-size: 24px;
}
.program > hr{
    border-top: 1px dashed gray;
}
.programMain{
    width: 1200px;
    margin: 0 auto;
    text-align: left;
    position: relative;
}
.programImgBox{
    display: inline-block;
    font-size: 0;
    text-align: center;
    position: absolute;
    left: 20px;
    top: 0;
}
img.programImg{
    border: 1px solid lightgray;
    width: 430px;
}
.programContent{
    display: inline-block;
    font-size: 0;
    margin-left: 500px;
}
.programContent > h3{
    width: 480px;
    font-size: 25px;
    line-height: 35px;
    margin-left: 10px;
    display: inline-block;
}
.bookRightnow{
    border: 1px solid rgb(201, 16, 16);
    font-size: 16px;
    margin: 20px 10px 20px;
    transition: .1s linear;
    color: white;
    background-color: rgb(201, 16, 16);
    border-radius: 5px;
    display: inline-block;
    padding: 10px 20px 10px;
    text-decoration: none;
    font-weight: bold;
    text-align: center;
    transform: translateY(-25%) translateX(5px);
}
.bookRightnow:hover{
    background-color: rgb(185, 15, 15);
}
.ai1_quastion_list{
    width: 640px;
    margin: 10px;
    margin-bottom: 0;
    margin-left: 0;
    padding: 10px;
    padding-left: 20px;
    background-color: rgb(230, 230, 230);
    color: black;
    font-size: 16px;
    position: relative;
    cursor: pointer;
    border-bottom: 1px solid lightgray;
    border-right: 1px solid lightgray;
}
.rectangle{
    display: inline-block;
    width: 7px;
    height: 70%;
    position: absolute;
    left: 5px;
    top: 50%;
    transform: translateY(-50%);
    background-color: black;
}
.triangle_right{
    position: absolute;
    width: 10px;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    transition: .5s;
}
.rotateTriangle{
    transform: translateY(-50%) rotate(90deg);
}
.ai1_quastion_list_answer{
    /* border: 1px solid darkgreen; */
    width: 640px;
    margin: 10px;
    margin-top: 0;
    margin-left: 0;
    padding: 10px;
    padding-left: 20px;
    background-color: white;
    font-size: 15px;
    line-height: 25px;
    border-top: 1px solid lightgray;
    color: black;
    display: none;
    animation: fadeEffect 1s;
}
@keyframes fadeEffect {
    from {opacity: .5;}
    to {opacity: 1;}
}
.preopen, .preopen2, .preopen3, .preopen4, .preopen5, .preopen6{
    display: block;
}
.eggSeat{
    width: 350px;
}
</style>
