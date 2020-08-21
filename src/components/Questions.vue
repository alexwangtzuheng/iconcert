<template>
  <div class="question-bg">
    <div class="question">
      <h2>&nbsp;&nbsp;常見問題</h2>
      <hr>
      <div class="question_buttom">
        <!-- left aside -->
        <div class="allbox">
          <div class="buy_ticket">
            <div class="bottom_line"></div>
            <a href="#"><img src="../assets/img/buy.png"></a>
          </div>
          <div class="take_ticket">
            <div class="bottom_line"></div>
            <a href="#"><img src="../assets/img/take_ticket.png"></a>
          </div>
          <div class="return_ticket">
            <div class="bottom_line"></div>
            <a href="#"><img src="../assets/img/return_ticket.png"></a>
          </div>
          <div class="other">
            <div class="bottom_line"></div>
            <a href="#"><img src="../assets/img/other.png"></a>
          </div>
        </div>
        <!-- right aside -->
        <div class="buy_detail">
          <div v-for="(item, index) in questionLists">
            <img class="tri" src="../assets/img/tri.png">
            <div @click="seeAnswer(index)" class="buy_quastion_list">
              <div class="rectangle"></div>{{ item.question }}<img class="triangle_right" :class="{ rotateTriangle: item.isrotateTriangle }" src="../assets/img/triangle_right2.png">
            </div>
            <p v-html='item.answer' class="buy_quastion_list_answer" :class="{ noShowAnswer: item.isnoShowAnswer }">{{ item.answer }}</p>
          </div>
        </div> 
      </div>      
    </div>
  </div>
    
</template>

<script>
export default {
    data () {
        return {
            // isrotateTriangle: true,
            questionLists: [
                {
                    isnoShowAnswer: true,
                    isrotateTriangle: true,
                    question: '如何加入會員?',
                    answer: '※每人限制僅可申請一個會員帳號，此會員帳號需綁定唯一的「證件字號 + 手機號碼」。<br>※手機號碼需進行驗證，通過驗證後才可開始於拓元網站購票。<br>※請自行選擇 facebook、Google或PixelPin，其中一項帳號（僅可三擇一），做為登入拓元之會員帳號。<br>※選定之會員帳號，經手機號碼驗證完成後，恕無法要求更換，請務必謹慎選定常用帳號。<br>※一個證件號碼僅可綁定於一個會員帳號，不可多個會員帳號共用一個證件號碼。<br>※一個手機號碼僅可綁定於一個會員帳號，不可多個會員帳號共用一個手機號碼。'
                },
                {
                    isnoShowAnswer: true,
                    isrotateTriangle: true,
                    question: '可以用手機購票嗎?',
                    answer: '本系統支援行動裝置，消費者可用手機購票。'
                },
                {
                    isnoShowAnswer: true,
                    isrotateTriangle: true,
                    question: '如何付款?',
                    answer: '付款方式依節目而定，請參考各節目的購票提醒。'
                },
                {
                    isnoShowAnswer: true,
                    isrotateTriangle: true,
                    question: '可以在便利商店機台購票嗎?',
                    answer: '本系統目前僅供網站購票。'
                },
                {
                    isnoShowAnswer: true,
                    isrotateTriangle: true,
                    question: '選到座位後，會因為別人比我先完成付款而搶不到座位嗎?',
                    answer: '一個座位只會分配到一筆訂單內，選到座位後在期限內完成付款即可。<br>1.線上刷卡：出現刷卡頁面後，請在15分鐘內填完信用卡資料並送出。<br>2.虛擬帳號：出現轉帳號碼後，請在指定時間內完成付款。<br>3.超商付款：請在訂單成立後指定時間內至超商完成付款取票。'
                },
                {
                    isnoShowAnswer: true,
                    isrotateTriangle: true,
                    question: '同一個節目有2天不同場次，可以同時購買2張票嗎?',
                    answer: '同一筆訂單不能跨場次購買，若購買不同場次，請分2筆訂單購買。'
                },
                {
                    isnoShowAnswer: true,
                    isrotateTriangle: true,
                    question: '一筆訂單最多可以買幾張票?',
                    answer: '購票張數依節目有不同的規定，購票前請於節目資訊查詢每個節目的購票需知。'
                },
                {
                    isnoShowAnswer: true,
                    isrotateTriangle: true,
                    question: '節目開賣前點選立即購票，會看到時間倒數，但是倒數的時間不會變動？',
                    answer: '只要重新點選『立即購票』，倒數的時間就會自動刷新。'
                },
                {
                    isnoShowAnswer: true,
                    isrotateTriangle: true,
                    question: '已經選到座位了，但還沒選擇付款方式，卻不小心按到別的畫面，該怎麼辦?',
                    answer: '請至訂單查詢，找出該筆訂單，並點選『前往結帳』。'
                },
                {
                    isnoShowAnswer: true,
                    isrotateTriangle: true,
                    question: '線上刷卡可以使用的卡分別為那些?',
                    answer: '刷卡僅限VISA、MasterCard、JCB，無法使用的卡別為AE、大來。銀聯卡依網站各節目公告為準。'
                },
                {
                    isnoShowAnswer: true,
                    isrotateTriangle: true,
                    question: '我住在國外，可以在網站上刷卡嗎?',
                    answer: '國外的消費者可以在網站刷卡購票，可使用的卡別為VISA、MasterCard、JCB，<br>無法使用的卡別為AE、大來。銀聯卡依網站各節目公告為準'
                },
                {
                    isnoShowAnswer: true,
                    isrotateTriangle: true,
                    question: '刷卡頁面是否有限制多久要完成?',
                    answer: '刷卡頁面出現後，請在15分鐘內完成送出。'
                },
                {
                    isnoShowAnswer: true,
                    isrotateTriangle: true,
                    question: '線上刷卡頁面，有跳出其他的訊息該怎麼辦，請問訂單是否成立?',
                    answer: '不論顯示訊息為何，請回到拓元售票系統頁面，點選右上角之"訂單查詢"，查看該筆訂單的"訂單狀態"<br>刷卡交易成功與否，依本系統顯示為主。<br><br>1.若顯示「訂單成立」，即表示刷卡成功。<br>2.若顯示「刷卡失敗」，則視個別節目 是否於開賣當天將部分交易期間內刷卡失敗之訂單，陸續轉為【ATM虛擬帳號 轉帳/繳費】<br>或【ibon付款取票】，屆時請至"訂單查詢"頁面，依系統指示該筆訂單之『繳費截止期限』內完成付款，逾期繳費者此訂單取消不<br>予保留，相關訊息請留意網站公告。'
                }
            ]
        }
    },
    methods: {
        seeAnswer (index) {
            this.questionLists[index].isnoShowAnswer = !this.questionLists[index].isnoShowAnswer
            this.questionLists[index].isrotateTriangle = !this.questionLists[index].isrotateTriangle
        }
    }
}
</script>

<style scoped>
.question-bg{
    background-color: rgb(245, 245, 245);
    padding-bottom: 150px;
}
.question{
    position: relative;
    width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
}
.question> h2{
    font-size: 24px;
}
.question > hr{
    border-top: 1px dashed gray;
}
.question_buttom{
    /* border: 1px solid blue; */
    width: 1200px;
    margin: 0 auto;
    margin-top: 50px;
    position: relative;
}

/* left aside */
.allbox{
    display: inline-block;
    position: absolute;
    left: 20px;
    top: 0px;
}
.buy_ticket{
    box-sizing: border-box;
    display: block;
    width: 150px;
    height: 150px;
    text-align: center;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0px 0px 3px 0px;
}
.buy_detail{
    /* border: 1px solid blue; */
    width: 900px;
    border-radius: 10px;
    margin-left: 250px;
    display: inline-block;
    padding: 8px 10px 15px;
    background-color: white;
    position: relative;
}
.buy_ticket > a{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 5%;
}
.buy_ticket > a > img{
    width: 65px;
}
.take_ticket{
    border: 1px solid lightgray;
    box-sizing: border-box;
    display: block;
    width: 150px;
    height: 150px;
    text-align: center;
    position: relative;
    margin-top: 5px;
    cursor: pointer;
}
.take_ticket:hover{
    box-shadow: 0px 0px 3px 0px;
}
.take_ticket > a{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 5%;
}
.take_ticket > a > img{
    width: 82px;
}
.return_ticket{
    border: 1px solid lightgray;
    box-sizing: border-box;
    display: block;
    width: 150px;
    height: 150px;
    text-align: center;
    position: relative;
    margin-top: 5px;
    cursor: pointer;
}
.return_ticket:hover{
    box-shadow: 0px 0px 3px 0px;
}
.return_ticket > a{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -2%;
}
.return_ticket > a > img{
    width: 100px;
}
.other{
    border: 1px solid lightgray;
    box-sizing: border-box;
    display: block;
    width: 150px;
    height: 150px;
    text-align: center;
    position: relative;
    transform: translateY(0px);
    margin-top: 5px;
    cursor: pointer;
}
.other:hover{
    box-shadow: 0px 0px 3px 0px;
}
.other > a{
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 5%;
}
.other > a > img{
    width: 67.2px;
}

/* right aside */
img.tri{
    width: 100px;
    position: absolute;
    top: 15px;
    left: -50px;
}
.buy_quastion_list{
    margin: 10px;
    margin-bottom: 0;
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
.buy_quastion_list_answer{
    border: 1px solid lightgray;
    margin: 10px;
    margin-top: 0;
    padding: 10px;
    padding-left: 20px;
    background-color: white;
    font-size: 15px;
    line-height: 25px;
    color: black;
    animation: fadeEffect .5s;
}
@keyframes fadeEffect {
  from {opacity: .5;}
  to {opacity: 1;}
}
.noShowAnswer{
  display: none;
}
</style>