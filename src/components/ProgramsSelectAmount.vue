<template>
    <div class="programBg">
        <div class="program">
            <h2 class="programTitle">&nbsp;&nbsp;節目資訊</h2>
            <hr>
            <br>
            <div class="selectAmountMain">
                <!-- 左半邊 -->
                <div class="selectAmountMainImgBox">
                    <img class="selectAmountMainImg" :src="programsData.programs[$route.params.id].bgPhoto"><br>
                    <img class="eggSeat" src="../assets/img/egg_seat.png">
                </div>
                <!-- 右半邊 -->
                <div class="chooseAmountBox">
                    <h3>{{ programsData.programs[$route.params.id].date }}<br>{{ programsData.programs[$route.params.id].name }}</h3>
                    <img class="step2" src="../assets/img/step2.svg">
                    <div class="chooseAmount">
                        <ul>
                            <li>&#9672; 演出日期：2020/05/23(六) 台北小巨蛋</li>
                            <li>&#9672; 選定區域：
                                <label class="box">&nbsp;&nbsp;&nbsp;&nbsp;</label>特A1區<span class="price">4200</span>
                                <input @click="minus" class="min" type="button" value="-" />
                                <input class="textBox" onkeyup="value=value.replace(/[^\d]/g,'')" type="text" v-model="ticketAmount" :min="min" :max="max" />
                                <input @click="add" class="add" type="button" value="+" />
                            </li>
                            <li class="totalPrice">總價： <label class="total">{{ totalPrice }}</label> 元</li>
                        </ul>
                        <div class="chooseAmountBtn">
                            <button class="pay">結帳</button>
                            <button @click="lastpage" class="cancel">返回</button>
                        </div>
                    </div>
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
            ticketAmount: 1,
            max: 4,
            min: 1,
            totalPrice: 4200
        }
    },
    methods: {
        minus () {
            if(this.ticketAmount > this.min){
                this.ticketAmount = this.ticketAmount - 1
                this.totalPrice = this.ticketAmount * 4200
            }
        },
        add () {
            if(this.ticketAmount < this.max){
                this.ticketAmount = this.ticketAmount + 1
                this.totalPrice = this.ticketAmount * 4200
            }
        },
        lastpage () {
            this.$router.go(-1)
        }
    }
}
</script>

<style scoped>
a{
    text-decoration-line: none;
}
input{
    -webkit-appearance: none;  /* Safari 和 Chrome，常用於iOS下移除內建樣式 */
    -moz-appearance: none;     /* FireFox */
    appearance: none;
}
.programBg{
    background-color: rgb(245, 245, 245);
    padding-bottom: 150px;
}
.program{
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
/* ==========內容=============================== */
.selectAmountMain{
    width: 1200px;
    margin: 0 auto;
    text-align: left;
    position: relative;
}
/* 左半邊 */
.selectAmountMainImgBox{
    display: inline-block;
    text-align: center;
}
.selectAmountMainImg{
    border: 1px solid lightgray;
    width: 450px;
    margin-left: 20px;
}
.eggSeat{
    margin-top: 50px;
    margin-left: 20px;
    width: 430px;
    border: 1px solid lightgray;
}

/* 右半邊 */
.chooseAmountBox{
    display: inline-block;
    position: absolute;
    left: 500px;
}
.chooseAmountBox > h3{
    /* border: 1px solid orange; */
    width: 650px;
    font-size: 25px;
    line-height: 35px;
    margin-left: 10px;
}
.step2{
    margin-top: 60px;
    width: 650px;
}
.chooseAmount{
    border: 1px solid lightgray;
    background-color: white;
    width: 600px;
    font-size: 20px;
    margin-top: 100px;
    margin-left: 20px;
    border-radius: 5px;
    position: relative;
}
.chooseAmount > ul{
    width: 430px;
    margin: 0 auto;
    list-style: none;
    margin-top: 50px;
}
.chooseAmount > ul >li{
    margin-bottom: 30px;
}
li.totalPrice{
    margin-left: 140px;
}
.box{
    border-radius: 3px;
    background-color: rgb(37, 78, 160);
    color: rgb(37, 78, 160);
    margin-right: 5px;
}
.textBox{
    width: 55px;
    height: 30px;
    text-align: center;
}
input.textBox:focus{
    outline: none;
    border-color: lightgray;
}
.min, .add{
    width: 24px;
    height: 26px;
    color: black;
    background-color: white;
    vertical-align: middle;
    cursor: pointer;
    outline: none;
}
input.min:hover, input.add:hover{
    background-color: lightgray;
}
.total{
    color: red;
    font-size: 25px;
}
.chooseAmountBtn{
    /* border: 1px solid red; */
    margin-top: 60px;
    margin-bottom: 50px;
    text-align: center;
}
.pay{
    width: 90px;
    height: 35px;
    font-size: 16px;
    outline: none;
    border: 1px solid rgb(6, 145, 6);
    background-color: rgb(6, 145, 6);
    color: white;
    border-radius: 3px;
    transition-duration: .3s;
    cursor: pointer;
}
.pay:hover{
    background-color: green;
}
.cancel{
    width: 90px;
    height: 35px;
    font-size: 16px;
    outline: none;
    border: 1px solid rgb(228, 35, 35);
    background-color: rgb(228, 35, 35);
    color: white;
    border-radius: 3px;
    transition-duration: .3s;
    cursor: pointer;
}
.cancel:hover{
    background-color: rgb(209, 31, 31);
}
</style>