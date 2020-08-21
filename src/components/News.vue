<template>
  <div class="news-bg">
    <div class="news">
      <h2>&nbsp;&nbsp;最新消息</h2>
      <hr>
      <div class="main_text">
        <!-- left aside -->
        <div class="smallmenu">
          <div class="smallmenu_tittle">[置頂]</div>
          <div class="smallmenu_content" @click="scrollFixtop('0')"><img src="../assets/img/ticket.png" class="ticket">退票作業延長公告</div>
          <div class="smallmenu_content" @click="scrollFixtop('1')"><img src="../assets/img/ticket.png" class="ticket">iconcert售票app上架<br> &nbsp;&nbsp;&nbsp;&nbsp; 囉！</div>
          <div class="smallmenu_content" @click="scrollFixtop('2')"><img src="../assets/img/ticket.png" class="ticket">iconcert會員加入辦法</div>
          <div class="smallmenu_tittle">[最新公告]</div>
          <div class="smallmenu_content" @click="scrollNewthing('0')"><img src="../assets/img/ticket.png" class="ticket">節目延期公告-[郭富城<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;舞林密碼-台北小巨蛋]</div>
          <div class="smallmenu_content" @click="scrollNewthing('1')"><img src="../assets/img/ticket.png" class="ticket">節目延期公告 - [蔡健 <br>&nbsp;&nbsp;&nbsp;&nbsp; 雅給世界最優長的吻-<br>&nbsp;&nbsp;&nbsp;&nbsp; 台北站]</div>
          <div class="smallmenu_tittle">[一般公告]</div>
          <div class="smallmenu_content" @click="scrollNormal('0')"><img src="../assets/img/ticket.png" class="ticket">預防詐騙提醒</div>
          <div class="smallmenu_content" @click="scrollNormal('1')"><img src="../assets/img/ticket.png" class="ticket">節目延期公告 - [陳小 <br>&nbsp;&nbsp;&nbsp;&nbsp; 春 STOP ANGRY 巡迴<br>&nbsp;&nbsp;&nbsp;&nbsp; 演唱會-台北站]</div>
        </div>

        <!-- right aside -->
        <div class="newscontent">
          <!-- fixtop -->
          <p class="fixtop">[置頂]</p>
          <div class="textContent" v-for="(item, index) in fixtops" :class="createClassFixtop(index)">
            <img src="../assets/img/ticket.png" class="ticket">
            <label>{{ item.title }}</label>
            <p v-html="item.content">{{ item.content }}</p>
          </div>
          <!-- newthing -->
          <p class="newthing">[最新公告]</p>
          <div class="textContent" v-for="(item, index) in newthings" :class="createClassNewthing(index)">
            <img src="../assets/img/ticket.png" class="ticket">
            <label for="">{{item.title}}</label>
            <img :src="item.img" class="poster">
            <p v-html="item.content">{{item.content}}</p>
          </div>
          <!-- normal -->
          <p class="normal">[一般公告]</p>
          <div class="textContent" v-for="(item, index) in normals" :class="createClassNormal(index)">
            <img src="../assets/img/ticket.png" class="ticket">
            <label for="">{{ item.title }}</label>
            <img :src="item.img" class="poster">
            <p v-html="item.content">{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
    data () {
        return {
            fixtops:[
                {
                    title: '退票作業延長公告',
                    content: `因新型冠狀病毒影響眾多節目取消或延期之故，所有退票作業處理時間將會拉長。
                    退票詳情請參考個別節目公告，部分節目因藝人及主辦單位尚需時間安排後續延期行程請大家耐心等待。<br><br>
                    變動如下：<br>
                    申請退票10個工作天後，請於訂單查詢確認訂單，訂單狀態將改為『個人因素退票』或 『主辦因素退票』，
                    訂單狀態若無變動請務必來電或來信確認iconcert是否有收到退票申請，退款作業時間約30個工作天(收到退票申請且資料完整起計算)，
                    刷卡退款時間將依發卡行之作業時間為準。`
                },
                {
                    title: 'iconcert售票app上架囉！',
                    content: `iconcert售票app上架了，可以直接app訂票囉！讓訂票更快速便捷！快來下載iconcert售票APP！<br><br>
                    來看看有甚麼好用的功能吧：<br>
                    * 電子票券儲存、轉贈與接收<br>
                    * 各類節目活動票券購買<br>
                    * 節目活動資訊搜尋<br>
                    * 快速查看最新消息`
                },
                {
                    title: 'iconcert會員加入辦法',
                    content: `iconcert會員加入辦法如下：<br>
                    * <label style="color:red;">每人限制僅可申請一個會員帳號</label>，此會員帳號需綁定唯一的「證件字號 + 手機號碼」。<br>
                    * 手機號碼需進行驗證，通過驗證後，才可開始於iconcert網站購票。<br>
                    * 請自行選擇 facebook或Google其中一項帳號（僅可二擇一），做為登入 iconcert之會員帳號。<br>
                    * 選定之會員帳號，經手機號碼驗證完成後，恕無法要求更換，請務必謹慎選定常用帳號。<br>
                    * 一個證件號碼僅可綁定於一個會員帳號，不可多個會員帳號共用一個證件號碼。<br>
                    * 一個手機號碼僅可綁定於一個會員帳號，不可多個會員帳號共用一個手機號碼。<br>
                    * 請務必詳關會員服務條款及隱私權條款，確認同意後再進行驗證作業。`
                }
            ],
            newthings:[
                {
                    title: '節目延期公告 - [郭富城 舞林密碼-台北小巨蛋]',
                    img: require('../assets/img/andrew1.jpeg'),
                    content: `由於「新冠肺炎」的疫情延燒及政府的建議，為顧及所有現場觀眾、演出人員及工作人員之健康考量，並不增加中央政府的防疫困難，
                    華貴娛樂與藝人等相關單位協商會議後，決定將原訂2019年 9月13日於高雄巨蛋舉行的《舞林密碼 2019世界巡迴演唱會》台北站延後舉行，
                    因為延期事關眾多單位，華貴娛樂會盡快與周邊單位協商出延期的日期與退票方式，再另行公告。`
                },
                {
                    title: '節目延期公告 - [蔡健雅 給世界最優長的吻-台北站]',
                    img: require('../assets/img/tsaib.jpeg'),
                    content: `原訂2020年5月9日於台北小巨蛋舉行的《Tanya蔡健雅 給世界最悠長的吻2020巡迴演唱會》，因應並配合中央及台北市政府針對疫情擬定的公共集會辦理規範，
                    為顧及所有現場觀眾、演出人員及工作人員之健康安全，主辦單位大地風與經紀公司水晶共振等相關單位協商後，決定延期舉行。已購票的朋友，可以選擇保留票券，屆時可直接憑此票券入場。<br>
                    新的演出日期會於主辦單位與小巨蛋確認可替代之檔期後，最晚於6月底前公佈。並同時公佈退票須知，請大家耐心等候。<br>
                    深深地感謝歌迷朋友們的支持與理解，希望所有人身心健康，疫情早日結束，期待相聚的約定。<br><br>
                    * 2020年5月9日蔡健雅小巨蛋演唱會<label>確定延期</label>。<br>
                    * 已取票之觀眾請謹慎保留該票券做為新的演出日期入場使用，不需再次搶票。<br>
                    * 尚未取票的觀眾可在新的演出日期前再取票，避免票券遺失。<br>
                    * 6月底前會公告新的演出日期，同時公佈退票須知。`
                }
            ],
            normals:[
                {
                    title: '預防詐騙提醒',
                    img: '',
                    content: `iconcert售票系統預防詐騙提醒<br>
                    近日詐騙集團猖獗，假借各大購物網站(通常是大陸口音)名義，並竄改來電顯示偽裝成該公司或銀行的電話號碼，以慣用伎倆佯稱訂單轉帳、分期、送貨簽收、結賬、等錯誤問題，恐嚇會被連續扣款，若不從，
                    歹徒就再恐嚇，這表示自動放棄權益，並有錄音存證等語，然後再假藉銀行人員或警察再打來(同樣竄改來電顯示)，要求到ATM提款機取消連續扣款設定..等語，實際卻是可惡的轉帳詐騙手法，請大家小心提防。<br>
                    請顧客提高警覺任何ATM提款機的操作，尤其不要於電話指示中進行。另外，所有詐騙電話的來電顯示都是被偽造的，請勿受騙。<br>
                    銀行、警方和網購業者，絕對不會要求您進行ATM任何操作，若有接到這樣要求，則對方必然是詐騙集團。<br>
                    對於個人使用的各種帳號(尤其是免費的email)，請使用不同的密碼並常更換，避免個人電腦被入侵後，歹徒可利用資訊拼圖的技術，以相同的帳號密碼進入各系統趁機盜取資料。<br>
                    本系統網站，僅以信用卡交易，未提供任何轉帳付款方式，敬請留意假冒本系統人員告知扣款失敗的電話，敬請提高警覺，共同防詐騙。<br>
                    如有任何問題煩請撥客服電話<label>02-2341-9898</label> or 反詐騙諮詢電話<label>165</label>。`
                },
                {
                    title: '節目延期公告 - [陳小春 STOP ANGRY巡迴演唱會-台北站]',
                    img: require('../assets/img/stop_angry1.jpg'),
                    content: `由於「新冠肺炎」的疫情延燒及政府的建議，為顧及所有現場觀眾、演出人員及工作人員之健康考量，並不增加中央政府的防疫困難，華貴娛樂與藝人等相關單位協商會議後，
                    決定將原訂2019年 12月7日於台北小巨蛋舉行的《Stop Angry 巡迴演唱會》延後舉行，因為延期事關眾多單位，主辦方會盡快與周邊單位協商出延期的日期與退票方式，再另行公告。`
                }
            ]
        }
    },
    methods: {
        scrollFixtop (order) {
            let specificClass = '.newClassFixtop-'+order
            $('html,body').animate({
            scrollTop: $(specificClass).offset().top
            },800);
        },
        scrollNewthing (order) {
            let specificClass = '.newClassNewthing-'+order
            $('html,body').animate({
            scrollTop: $(specificClass).offset().top
            },800);
        },
        scrollNormal (order) {
            let specificClass = '.newClassNormal-'+order
            $('html,body').animate({
            scrollTop: $(specificClass).offset().top
            },800);
        },
        createClassFixtop (index) {
            return `newClassFixtop-${index}`
        },
        createClassNewthing (index) {
            return `newClassNewthing-${index}`
        },
        createClassNormal (index) {
            return `newClassNormal-${index}`
        },
    }
}
</script>

<style scoped>
.news-bg{
    background-color: rgb(245, 245, 245);
    padding-bottom: 150px;
}
.news{
    position: relative;
    width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
}
.news> h2{
    font-size: 24px;
}
.news > hr{
    border-top: 1px dashed gray;
}

/* left aside */
div.main_text{
    width: 1200px;
    margin: 0 auto;
    padding: 10px 0px 10px;
    box-sizing: border-box;
}
.smallmenu{
    width: 215px;
    margin-left: 10px;
    margin-right: 10px;
    position: sticky;
    top: 10px;
    font-size: 16px;
    display: inline-block;
    vertical-align: top;
}
.smallmenu > .smallmenu_tittle{
    /* border: 1px solid red; */
    font-size: 18px;
    margin-top: 10px;
    background-color: lightgray;
    padding: 5px;
    padding-top: 7px;
    padding-left: 10px;
    font-weight: bold;
    border-radius: 3px;
    border-bottom: 1px solid transparent;
}
.smallmenu > .smallmenu_content{
    cursor: pointer;
    padding: 3px;
    padding-bottom: 10px;
    text-decoration: none;
    color: rgb(16, 141, 232);
    background-color: rgb(240, 240, 240);
}
.smallmenu > .smallmenu_content:hover{
    color: blue;
}
.smallmenu_content > img{
    width: 20px;
    margin-right: 10px;
    transform: translateY(5px);
}

/* right aside */
div.newscontent{
    width: 950px;
    display: inline-block;
    padding-bottom: 50px;
}
.fixtop, .newthing, .normal{
    padding: 5px 10px 5px;
    font-size: 25px;
    font-weight: bold;
}
.newthing, .normal{
    margin-top: 30px;
}
.textContent{
    padding: 10px;
    font-size: 20px;
    letter-spacing: 1px;
    border-bottom: 1px solid gray;
}
.textContent:last-child{
    border-bottom: none;
}
.ticket{
    box-sizing: border-box;
    display: inline-block;
    width: 25px;
    padding-top: 10px;
}
.textContent > .poster{
    width: 900px;
    margin-left: 30px;
    margin-top: 10px;
}
.textContent > label{
    font-weight: bold;
}
.textContent > p{
    width: 900px;
    font-size: 16px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-left: 30px;
    line-height: 25px;
}
.textContent > a{
    display: inline-block;
    padding: 1px 3px 1px;
    margin: 10px;
    background-color: lightgray;
    border-radius: 5px;
}
div.textContent > a.ios1{
    margin-left: 30px;
}
div.textContent > a:hover{
    background-color: gray;
}
</style>