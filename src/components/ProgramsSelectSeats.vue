<template>
  <div class="program-bg">
    <div class="program">
    <h2>&nbsp;&nbsp;節目資訊</h2>
    <hr>
    <br>
    <div class="ai1">
      <div class="ai1_img">
        <img class="ai" :src="programsData.programs[$route.params.id].bgPhoto"><br>
        <p class="ai1_imgP">請選擇區域！</p>
        <div class="seats_selection">
          <a href="#" class="seats_tittle"><label class="box1">&nbsp;&nbsp;&nbsp;&nbsp;</label>4200區</a><br><br>
          <a href="#" class="seats_content"><label class="box2">&nbsp;&nbsp;&nbsp;&nbsp;</label>特A1區4200</a><br><br>
          <a href="#" class="seats_content"><label class="box3">&nbsp;&nbsp;&nbsp;&nbsp;</label>特A2區4200</a><br><br>
          <a href="#" class="seats_tittle"><label class="box4">&nbsp;&nbsp;&nbsp;&nbsp;</label>3800區</a><br><br>
          <a href="#" class="seats_content"><label class="box5">&nbsp;&nbsp;&nbsp;&nbsp;</label>特B區3800 </a><br><br>
          <a href="#" class="seats_tittle"><label class="box6">&nbsp;&nbsp;&nbsp;&nbsp;</label>3200區</a><br><br>
          <a href="#" class="seats_content"><label class="box7">&nbsp;&nbsp;&nbsp;&nbsp;</label>紅1B區3200</a><br><br>
          <a href="#" class="seats_content"><label class="box8">&nbsp;&nbsp;&nbsp;&nbsp;</label>紅1C區3200</a><br><br>
          <a href="#" class="seats_content"><label class="box9">&nbsp;&nbsp;&nbsp;&nbsp;</label>紅1D區3200</a><br><br>
          <a href="#" class="seats_content"><label class="box10">&nbsp;&nbsp;&nbsp;&nbsp;</label>紫1B區3200</a><br><br>
          <a href="#" class="seats_content"><label class="box11">&nbsp;&nbsp;&nbsp;&nbsp;</label>紫1C區3200</a><br><br>
          <a href="#" class="seats_content"><label class="box12">&nbsp;&nbsp;&nbsp;&nbsp;</label>紫1D區3200</a><br><br>
          <a href="#" class="seats_content"><label class="box13">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃2C區3200</a><br><br>
          <a href="#" class="seats_tittle"><label class="box14">&nbsp;&nbsp;&nbsp;&nbsp;</label>2800區</a><br><br>
          <a href="#" class="seats_content"><label class="box15">&nbsp;&nbsp;&nbsp;&nbsp;</label>紅1E區2800</a><br><br>
          <a href="#" class="seats_content"><label class="box16">&nbsp;&nbsp;&nbsp;&nbsp;</label>紅2B區2800</a><br><br>
          <a href="#" class="seats_content"><label class="box17">&nbsp;&nbsp;&nbsp;&nbsp;</label>紅2C區2800</a><br><br>
          <a href="#" class="seats_content"><label class="box18">&nbsp;&nbsp;&nbsp;&nbsp;</label>紅2D區2800</a><br><br>
          <a href="#" class="seats_content"><label class="box19">&nbsp;&nbsp;&nbsp;&nbsp;</label>紫1E區2800</a><br><br>
          <a href="#" class="seats_content"><label class="box20">&nbsp;&nbsp;&nbsp;&nbsp;</label>紫2B區2800</a><br><br>
          <a href="#" class="seats_content"><label class="box21">&nbsp;&nbsp;&nbsp;&nbsp;</label>紫2C區2800</a><br><br>
          <a href="#" class="seats_content"><label class="box22">&nbsp;&nbsp;&nbsp;&nbsp;</label>紫2D區2800</a><br><br>
          <a href="#" class="seats_content"><label class="box23">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃2B區2800</a><br><br>
          <a href="#" class="seats_content"><label class="box24">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃2D區2800</a><br><br>
          <a href="#" class="seats_tittle"><label class="box25">&nbsp;&nbsp;&nbsp;&nbsp;</label>2400區</a><br><br>
          <a href="#" class="seats_content"><label class="box26">&nbsp;&nbsp;&nbsp;&nbsp;</label>紅2E區2400</a><br><br>
          <a href="#" class="seats_content"><label class="box27">&nbsp;&nbsp;&nbsp;&nbsp;</label>紫2E區2400</a><br><br>
          <a href="#" class="seats_content"><label class="box28">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃2A區2400</a><br><br>
          <a href="#" class="seats_content"><label class="box29">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃2E區2400</a><br><br>
          <a href="#" class="seats_tittle"><label class="box30">&nbsp;&nbsp;&nbsp;&nbsp;</label>2000區</a><br><br>
          <a href="#" class="seats_content"><label class="box31">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3C區2000</a><br><br>
          <a href="#" class="seats_content"><label class="box32">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3D區2000</a><br><br>
          <a href="#" class="seats_content"><label class="box33">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3E區2000</a><br><br>
          <a href="#" class="seats_content"><label class="box34">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3F區2000</a><br><br>
          <a href="#" class="seats_content"><label class="box35">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3G區2000</a><br><br>
          <a href="#" class="seats_content"><label class="box36">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3H區2000</a><br><br>
          <a href="#" class="seats_tittle"><label class="box37">&nbsp;&nbsp;&nbsp;&nbsp;</label>1600區</a><br><br>
          <a href="#" class="seats_content"><label class="box38">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3A區1600</a><br><br>
          <a href="#" class="seats_content"><label class="box39">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3B區1600</a><br><br>
          <a href="#" class="seats_content"><label class="box40">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3C區1600</a><br><br>
          <a href="#" class="seats_content"><label class="box41">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3D區1600</a><br><br>
          <a href="#" class="seats_content"><label class="box42">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3E區1600</a><br><br>
          <a href="#" class="seats_content"><label class="box43">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3F區1600</a><br><br>
          <a href="#" class="seats_content"><label class="box44">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3G區1600</a><br><br>
          <a href="#" class="seats_content"><label class="box45">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3H區1600</a><br><br>
          <a href="#" class="seats_content"><label class="box46">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3I區1600</a><br><br>
          <a href="#" class="seats_content"><label class="box47">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3J區1600</a><br><br>
          <a href="#" class="seats_tittle"><label class="box48">&nbsp;&nbsp;&nbsp;&nbsp;</label>800區</a><br><br>
          <a href="#" class="seats_content"><label class="box49">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3C區800</a><br><br>
          <a href="#" class="seats_content"><label class="box50">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3D區800</a><br><br>
          <a href="#" class="seats_content"><label class="box51">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3E區800</a><br><br>
          <a href="#" class="seats_content"><label class="box52">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3E區800</a><br><br>
          <a href="#" class="seats_content"><label class="box53">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3F區800</a><br><br>
          <a href="#" class="seats_content"><label class="box54">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3G區800</a><br><br>
          <a href="#" class="seats_content"><label class="box55">&nbsp;&nbsp;&nbsp;&nbsp;</label>黃3H區800</a>
        </div>
      </div>
      <div class="ai1_content">
        <h3>{{ programsData.programs[$route.params.id].date }}<br>{{ programsData.programs[$route.params.id].name }}</h3>
        <a class="detail" href="#">查看詳情</a>
        <img class="step1" src="../assets/img/step1.svg">
        <p class="seatsRef">座位區參考圖：</p>
        <img class="egg_seat" src="../assets/img/egg_seat.png">
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
            selectSeats4200:[
                {
                    seat: '特A1區4200',
                },
                {
                    seat: '特A2區4200',
                }
            ],
            selectSeats3800:[
                {
                    seat: '特B區3800',
                }
            ],
            selectSeats3200:[
                {
                    seat: '紅1B區3200',
                },
                {
                    seat: '紅1C區3200',
                },
                {
                    seat: '紅1D區3200',
                },
                {
                    seat: '紫1B區3200',
                },
                {
                    seat: '紫1C區3200',
                },
                {
                    seat: '紫1D區3200',
                },
                {
                    seat: '黃2C區3200',
                },
            ]
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
.program-bg{
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
.program> h2{
    font-size: 24px;
}
.program > hr{
    border-top: 1px dashed gray;
}
/* ==========內容=================================================== */
div.ai1{
    width: 1200px;
    margin: 0 auto;
    text-align: left;
    position: relative;
}
div.ai1_img{
    display: inline-block;
    text-align: center;
}
.ai{
    width: 400px;
}
.ai1_imgP{
    font-size: 18px;
    color: red;
    margin-top: 20px;
}
.seats_selection{
    /* border: 1px solid orange; */
    margin-top: 30px;
    font-size: 14px;
    text-align: left;
    transform: translateX(15%);
}
.seats_tittle{
    text-decoration: none;
    padding: 5px;
    padding-right: 200px;
    padding-left: 5px;
    background-color: rgb(220, 220, 220);
    border-radius: 3px;
    color: black;
}
.seats_content{
    /* border: 1px solid purple; */
    font-family: Menlo;
    text-decoration: none;
    padding: 5px;
    padding-right: 150px;
    padding-left: 5px;
    background-color: rgb(235, 235, 235);
    border-radius: 3px;
    color: black;
    margin-left: 15px;
    transition-duration: .3s;
}
.seats_content:hover{
    background-color: rgb(205, 205, 205);
}
.box1, .box2, .box3{
    border-radius: 3px;
    background-color: rgb(37, 78, 160);
    color: rgb(37, 78, 160);
    margin-right: 5px;
}

.box4, .box5{
    border-radius: 3px;
    background-color: rgb(75, 111, 175);
    color: rgb(75, 111, 175);
    margin-right: 5px;
}

.box6, .box7, .box8, .box9{
    border-radius: 3px;
    background-color: rgb(230, 40, 138);
    color: rgb(230, 40, 138);
    margin-right: 5px;
}

.box10, .box11, .box12{
    border-radius: 3px;
    background-color: rgb(161, 85, 157);
    color: rgb(161, 85, 157);
    margin-right: 5px;
}

.box13{
    border-radius: 3px;
    background-color: rgb(190, 115, 26);
    color: rgb(190, 115, 26);
    margin-right: 5px;
}

.box14, .box15, .box16, .box17, .box18{
    border-radius: 3px;
    background-color: rgb(231, 151, 191);
    color: rgb(231, 151, 191);
    margin-right: 5px;
}

.box19, .box20, .box21, .box22{
    border-radius: 3px;
    background-color: rgb(183, 159, 199);
    color: rgb(183, 159, 199);
    margin-right: 5px;
}

.box23, .box24{
    border-radius: 3px;
    background-color: rgb(231, 22, 26);
    color: rgb(231, 22, 26);
    margin-right: 5px;
}

.box25, .box26{
    border-radius: 3px;
    background-color: rgb(228, 146, 31);
    color: rgb(228, 146, 31);
    margin-right: 5px;
}

.box27{
    border-radius: 3px;
    background-color: rgb(101, 60, 148);
    color: rgb(101, 60, 148);
    margin-right: 5px;
}

.box28, .box29{
    border-radius: 3px;
    background-color: rgb(236, 187, 74);
    color: rgb(236, 187, 74);
    margin-right: 5px;
}

.box30, .box31, .box32, .box33, .box34, .box35, .box36{
    border-radius: 3px;
    background-color: rgb(242, 201, 32);
    color: rgb(242, 201, 32);
    margin-right: 5px;
}

.box37, .box38, .box39, .box40, .box41, .box42, .box43, .box44, .box45, .box46, .box47{
    border-radius: 3px;
    background-color: rgb(255, 241, 0);
    color: rgb(255, 241, 0);
    margin-right: 5px;
}

.box48, .box49, .box50, .box51, .box52, .box53, .box54, .box55{
    border-radius: 3px;
    background-color: rgb(243, 236, 144);
    color: rgb(243, 236, 144);
    margin-right: 5px;
}
/* 右半邊 */
.ai1_content{
    /* border: 1px solid blue; */
    display: inline-block;
    position: absolute;
    left: 500px;
}
.ai1_content > h3{
    /* border: 1px solid orange; */
    width: 480px;
    font-size: 25px;
    line-height: 30px;
    margin-left: 10px;
    display: inline-block;
}
.ai1_content > .detail{
    border: 1px solid rgb(201,16,16);
    font-size: 16px;
    margin: 20px 10px 20px;
    transition: .1s linear;
    color: white;
    background-color: rgb(201,16,16);
    border-radius: 5px;
    display: inline-block;
    padding: 10px 20px 10px;
    text-decoration: none;
    text-align: center;
    transform: translateY(-25%);
}
.ai1_content > .detail:hover{
    background-color: rgb(185,15,15);
}
.seatsRef{
    margin-top: 100px;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: bold;
}
.step1{
    margin-top: 50px;
    width: 650px;
}
.egg_seat{
    width: 650px;
}
</style>