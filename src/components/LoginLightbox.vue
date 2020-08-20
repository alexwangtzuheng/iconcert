<template>
    <div class="loginLightbox-bg" :class="{ lightboxNoShow: this.messageFromParent }">
        <div class="loginer">
            <p class="tittle">會員登入</p>
            <p class="choose">請選擇以下社群帳號登入！</p>
            <div class="google">
                <a href="#"><img src="../assets/img/google.png"></a>
            </div>
            <br>
            <div class="facebook">
                <a href="#"><img src="../assets/img/facebook.png"></a>
            </div>
            <img @click="childClose" class="cross1" src="../assets/img/cross.png"><br>
            <p class="not_member">還不是會員？ <a href="#">註冊</a></p>
        </div>
    </div>
</template>

<script>
export default {
    props: [ 'messageFromParent' ],
    data () {
        return {
        }
    }, 
    methods: {
        childClose () {
            this.messageFromParent = true;
            this.$emit('childClose', true);
        }
    }
}
</script>

<style scoped>
.loginLightbox-bg{
    /* display: none; */
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.7);
    text-align: center;
    z-index: 100;
    animation: fadeEffect .5s;
}
@keyframes fadeEffect {
  from {opacity: 0;}
  to {opacity: 1;}
}
.lightboxNoShow{
    display: none;
}
div.loginer{
    width: 500px;
    height: 450px;
    background-color: white;
    display: inline-block;
    margin-top: 10vh;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0px 5px 10px 0px rgb(40,40,40) inset;
}
.loginer > p.tittle{
    background-color: rgb(40,40,40);
    color: white;
    padding: 20px;
    font-size: 20px;
}
.loginer > p.choose{
    color: red;
    padding: 40px;
    padding-bottom: 35px;
    font-size: 18px;  
}
.cross1{
    width: 15px;
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;
}
.not_member{
    color: black;
    font-size: 14px;
    margin-top: 15px;
}
.not_member > a{
    color: rgb(16, 141, 232);
    transition: .3s;      
}
.not_member > a:hover{
    color: blue;
}
.google{
    border: 1px solid lightgray;
    padding: 10px;
    padding-bottom: 5px;
    display: inline-block;
    font-size: 0;
    border-radius: 5px;
    margin-bottom: 5px;
}
.google:hover{
    border: 1px solid gray;
}
.google > a > img{
    width: 200px;
    border-radius: 5px;
}
.facebook{
    border: 1px solid lightgray;
    padding: 10px;
    padding-bottom: 5px;
    display: inline-block;
    font-size: 0;
    border-radius: 5px;
    background-color: rgb(60, 91, 155);
}
.facebook:hover{
    border: 1px solid gray;
}
.facebook > a > img{
    width: 200px;
    height: 66px;
    border-radius: 5px;
}
</style>