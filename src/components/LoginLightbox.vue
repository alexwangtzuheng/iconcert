<template>
    <div class="loginLightboxBg" :class="{ lightboxNoShow: this.messageFromParent }">
        <div class="loginer">
            <p class="loginTittle">會員登入</p>
            <p class="chooseAccont">請選擇以下社群帳號登入！</p>
            <div class="googleLogin">
                <a><img class="googleLoginBtn" src="../assets/img/google.png"></a>
            </div>
            <br>
            <div class="facebookLogin">
                <a><img class="facebookLoginBtn" src="../assets/img/facebook.png"></a>
            </div>
            <img @click="loginLightboxClose" class="cross" src="../assets/img/cross.png"><br>
            <p class="notMember">還不是會員？ <a class="goToRegist">註冊</a></p>
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
        loginLightboxClose () {
            this.messageFromParent = true;
            this.$emit('loginLightboxClose');
        }
    }
}
</script>

<style scoped>
.loginLightboxBg{
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
.loginer{
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
.loginTittle{
    background-color: rgb(40,40,40);
    color: white;
    padding: 20px;
    font-size: 20px;
}
.chooseAccont{
    color: red;
    padding: 40px;
    padding-bottom: 35px;
    font-size: 18px;  
}
.cross{
    width: 15px;
    position: absolute;
    top: 12px;
    right: 12px;
    cursor: pointer;
}
.notMember{
    color: black;
    font-size: 16px;
    margin-top: 15px;
}
.goToRegist{
    color: rgb(16, 141, 232);
    transition: .3s; 
    text-decoration-line: underline;    
}
.goToRegist:hover{
    color: blue;
    cursor: pointer;
}
.googleLogin{
    border: 1px solid lightgray;
    padding: 10px;
    padding-bottom: 5px;
    display: inline-block;
    font-size: 0;
    border-radius: 5px;
    margin-bottom: 5px;
}
.googleLogin:hover{
    border: 1px solid gray;
}
.googleLoginBtn{
    width: 200px;
    border-radius: 5px;
}
.facebookLogin{
    border: 1px solid lightgray;
    padding: 10px;
    padding-bottom: 5px;
    display: inline-block;
    font-size: 0;
    border-radius: 5px;
    background-color: rgb(60, 91, 155);
}
.facebookLogin:hover{
    border: 1px solid gray;
}
.facebookLoginBtn{
    width: 200px;
    height: 66px;
    border-radius: 5px;
}
</style>