<template>
  <div class="programBg">
    <div class="program">
    <h2 class="programTitle">&nbsp;&nbsp;節目資訊</h2>
    <hr>
    <br>
      <div class="selectSeatsMain">
        <!-- 左半邊 -->
        <div class="selectSeatsBox">
            <img class="selectSeatsImg" :src="programsData.programs[$route.params.id].bgPhoto"><br>
            <p class="selectSeatsWarnning">請選擇區域！</p>
            <div class="seatsSelection">
            <a href="#" class="seatsTittle"><label class="chooseSeatsBox1">&nbsp;&nbsp;&nbsp;&nbsp;</label>4200區</a><br><br>
            <router-link :to="{name:'ProgramsSelectAmount', params:{ id:$route.params.id }}" v-for="(item, index) in selectSeats4200"><a class="seatsContent"><label :style="{'background':item.color}" class="box">&nbsp;&nbsp;&nbsp;&nbsp;</label>{{ item.seat }}</a><br><br></router-link>
            <a href="#" class="seatsTittle"><label class="chooseSeatsBox4">&nbsp;&nbsp;&nbsp;&nbsp;</label>3800區</a><br><br>
            <span v-for="item in selectSeats3800"><a href="#" class="seatsContent"><label :style="{'background':item.color}" class="box">&nbsp;&nbsp;&nbsp;&nbsp;</label>{{ item.seat }} </a><br><br></span>
            <a href="#" class="seatsTittle"><label class="chooseSeatsBox6">&nbsp;&nbsp;&nbsp;&nbsp;</label>3200區</a><br><br>
            <span v-for="item in selectSeats3200"><a href="#" class="seatsContent"><label :style="{'background':item.color}" class="box">&nbsp;&nbsp;&nbsp;&nbsp;</label>{{ item.seat }} </a><br><br></span>
            <a href="#" class="seatsTittle"><label class="chooseSeatsBox14">&nbsp;&nbsp;&nbsp;&nbsp;</label>2800區</a><br><br>
            <span v-for="item in selectSeats2800"><a href="#" class="seatsContent"><label :style="{'background':item.color}" class="box">&nbsp;&nbsp;&nbsp;&nbsp;</label>{{ item.seat }} </a><br><br></span>
            <a href="#" class="seatsTittle"><label class="chooseSeatsBox25">&nbsp;&nbsp;&nbsp;&nbsp;</label>2400區</a><br><br>
            <span v-for="item in selectSeats2400"><a href="#" class="seatsContent"><label :style="{'background':item.color}" class="box">&nbsp;&nbsp;&nbsp;&nbsp;</label>{{ item.seat }} </a><br><br></span>
            <a href="#" class="seatsTittle"><label class="chooseSeatsBox30">&nbsp;&nbsp;&nbsp;&nbsp;</label>2000區</a><br><br>
            <span v-for="item in selectSeats2000"><a href="#" class="seatsContent"><label :style="{'background':item.color}" class="box">&nbsp;&nbsp;&nbsp;&nbsp;</label>{{ item.seat }} </a><br><br></span>
            <a href="#" class="seatsTittle"><label class="chooseSeatsBox37">&nbsp;&nbsp;&nbsp;&nbsp;</label>1600區</a><br><br>
            <span v-for="item in selectSeats1600"><a href="#" class="seatsContent"><label :style="{'background':item.color}" class="box">&nbsp;&nbsp;&nbsp;&nbsp;</label>{{ item.seat }} </a><br><br></span>
            <a href="#" class="seatsTittle"><label class="chooseSeatsBox48">&nbsp;&nbsp;&nbsp;&nbsp;</label>800區</a><br><br>
            <span v-for="item in selectSeats800"><a href="#" class="seatsContent"><label :style="{'background':item.color}" class="box">&nbsp;&nbsp;&nbsp;&nbsp;</label>{{ item.seat }} </a><br><br></span>
            </div>
        </div>
        <!-- 右半邊 -->
        <div class="seatsRefBox">
            <h3>{{ programsData.programs[$route.params.id].date }}<br>{{ programsData.programs[$route.params.id].name }}</h3>
            <router-link :to="{name:'ProgramsDetail', params:{ id:$route.params.id }}" class="detail" href="#">查看詳情</router-link>
            <img class="step1" src="../assets/img/step1.svg">
            <p class="seatsRef">座位區參考圖：</p>
            <img class="eggSeat" src="../assets/img/egg_seat.png">
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
                    color: 'rgb(37, 78, 160)'
                },
                {
                    seat: '特A2區4200',
                    color: 'rgb(37, 78, 160)'
                }
            ],
            selectSeats3800:[
                {
                    seat: '特B區3800',
                    color: 'rgb(75, 111, 175)'
                }
            ],
            selectSeats3200:[
                {
                    seat: '紅1B區3200',
                    color: 'rgb(230, 40, 138)'
                },
                {
                    seat: '紅1C區3200',
                    color: 'rgb(230, 40, 138)'
                },
                {
                    seat: '紅1D區3200',
                    color: 'rgb(230, 40, 138)'
                },
                {
                    seat: '紫1B區3200',
                    color: 'rgb(161, 85, 157)'
                },
                {
                    seat: '紫1C區3200',
                    color: 'rgb(161, 85, 157)'
                },
                {
                    seat: '紫1D區3200',
                    color: 'rgb(161, 85, 157)'
                },
                {
                    seat: '黃2C區3200',
                    color: 'rgb(190, 115, 26)'
                },
            ],
            selectSeats2800:[
                {
                    seat: '紅1E區2800',
                    color: 'rgb(231, 151, 191)'
                },
                {
                    seat: '紅2B區2800',
                    color: 'rgb(231, 151, 191)'
                },
                {
                    seat: '紅2C區2800',
                    color: 'rgb(231, 151, 191)'
                },
                {
                    seat: '紅2D區2800',
                    color: 'rgb(231, 151, 191)'
                },
                {
                    seat: '紫1E區2800',
                    color: 'rgb(183, 159, 199)'
                },
                {
                    seat: '紫2B區2800',
                    color: 'rgb(183, 159, 199)'
                },
                {
                    seat: '紫2C區2800',
                    color: 'rgb(183, 159, 199)'
                },
                {
                    seat: '紫2D區2800',
                    color: 'rgb(183, 159, 199)'
                },
                {
                    seat: '黃2B區2800',
                    color: 'rgb(228, 146, 31)'
                },
                {
                    seat: '黃2D區2800',
                    color: 'rgb(228, 146, 31)'
                },
            ],
            selectSeats2400:[
                {
                    seat: '紅2E區2400',
                    color: 'rgb(231, 22, 26)'
                },
                {
                    seat: '紫2E區2400',
                    color: 'rgb(101, 60, 148)'
                },
                {
                    seat: '黃2A區2400',
                    color: 'rgb(236, 187, 74)'
                },
                {
                    seat: '黃2E區2400',
                    color: 'rgb(236, 187, 74)'
                },
            ],
            selectSeats2000:[
                {
                    seat: '黃3C區2000',
                    color: 'rgb(242, 201, 32)'
                },
                {
                    seat: '黃3D區2000',
                    color: 'rgb(242, 201, 32)'
                },
                {
                    seat: '黃3E區2000',
                    color: 'rgb(242, 201, 32)'
                },
                {
                    seat: '黃3F區2000',
                    color: 'rgb(242, 201, 32)'
                },
                {
                    seat: '黃3G區2000',
                    color: 'rgb(242, 201, 32)'
                },
                {
                    seat: '黃3H區2000',
                    color: 'rgb(242, 201, 32)'
                },
            ],
            selectSeats1600:[
                {
                    seat: '黃3A區1600',
                    color: 'rgb(255, 241, 0)'
                },
                {
                    seat: '黃3B區1600',
                    color: 'rgb(255, 241, 0)'
                },
                {
                    seat: '黃3C區1600',
                    color: 'rgb(255, 241, 0)'
                },
                {
                    seat: '黃3D區1600',
                    color: 'rgb(255, 241, 0)'
                },
                {
                    seat: '黃3E區1600',
                    color: 'rgb(255, 241, 0)'
                },
                {
                    seat: '黃3F區1600',
                    color: 'rgb(255, 241, 0)'
                },
                {
                    seat: '黃3G區1600',
                    color: 'rgb(255, 241, 0)'
                },
                {
                    seat: '黃3H區1600',
                    color: 'rgb(255, 241, 0)'
                },
                {
                    seat: '黃3I區1600',
                    color: 'rgb(255, 241, 0)'
                },
                {
                    seat: '黃3J區1600',
                    color: 'rgb(255, 241, 0)'
                },
            ],
            selectSeats800:[
                {
                    seat: '黃3C區800',
                    color: 'rgb(243, 236, 144)'
                },
                {
                    seat: '黃3D區800',
                    color: 'rgb(243, 236, 144)'
                },
                {
                    seat: '黃3E區800',
                    color: 'rgb(243, 236, 144)'
                },
                {
                    seat: '黃3E區800',
                    color: 'rgb(243, 236, 144)'
                },
                {
                    seat: '黃3F區800',
                    color: 'rgb(243, 236, 144)'
                },
                {
                    seat: '黃3G區800',
                    color: 'rgb(243, 236, 144)'
                },
                {
                    seat: '黃3H區800',
                    color: 'rgb(243, 236, 144)'
                },
            ]
        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
a{
    text-decoration-line: none;
}
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
/* ==========內容============================ */
.selectSeatsMain{
    width: 1200px;
    margin: 0 auto;
    text-align: left;
    position: relative;
}
.selectSeatsBox{
    display: inline-block;
    text-align: center;
}
.selectSeatsImg{
    border: 1px solid lightgray;
    width: 430px;
    margin-left: 20px;
}
.selectSeatsWarnning{
    font-size: 18px;
    color: red;
    margin-top: 20px;
    margin-left: 20px;
}
.seatsSelection{
    margin-top: 30px;
    font-size: 14px;
    text-align: left;
    transform: translateX(15%);
    margin-left: 40px;
}
.seatsTittle{
    text-decoration: none;
    padding: 5px;
    padding-right: 200px;
    padding-left: 5px;
    background-color: rgb(220, 220, 220);
    border-radius: 3px;
    color: black;
}
.seatsContent{
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
.seatsContent:hover{
    background-color: rgb(205, 205, 205);
}
.box{
    border-radius: 3px;;
    margin-right: 5px;
}
.chooseSeatsBox1{
    border-radius: 3px;
    background-color: rgb(37, 78, 160);
    color: rgb(37, 78, 160);
    margin-right: 5px;
}
.chooseSeatsBox4{
    border-radius: 3px;
    background-color: rgb(75, 111, 175);
    color: rgb(75, 111, 175);
    margin-right: 5px;
}
.chooseSeatsBox6{
    border-radius: 3px;
    background-color: rgb(230, 40, 138);
    color: rgb(230, 40, 138);
    margin-right: 5px;
}
.chooseSeatsBox14{
    border-radius: 3px;
    background-color: rgb(231, 151, 191);
    color: rgb(231, 151, 191);
    margin-right: 5px;
}
.chooseSeatsBox25{
    border-radius: 3px;
    background-color: rgb(231, 22, 26);
    color: rgb(231, 22, 26);
    margin-right: 5px;
}
.chooseSeatsBox30{
    border-radius: 3px;
    background-color: rgb(242, 201, 32);
    color: rgb(242, 201, 32);
    margin-right: 5px;
}
.chooseSeatsBox37{
    border-radius: 3px;
    background-color: rgb(255, 241, 0);
    color: rgb(255, 241, 0);
    margin-right: 5px;
}
.chooseSeatsBox48{
    border-radius: 3px;
    background-color: rgb(243, 236, 144);
    color: rgb(243, 236, 144);
    margin-right: 5px;
}
/* 右半邊 */
.seatsRefBox{
    display: inline-block;
    position: absolute;
    left: 500px;
}
.seatsRefBox > h3{
    /* border: 1px solid orange; */
    width: 480px;
    font-size: 25px;
    line-height: 35px;
    margin-left: 10px;
    display: inline-block;
}
.seatsRefBox > .detail{
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
    font-weight: bold;
    text-align: center;
    transform: translateY(-25%);
}
.seatsRefBox > .detail:hover{
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
.eggSeat{
    width: 650px;
}
</style>