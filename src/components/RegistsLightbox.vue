<template>
    <div class="registLightboxBg" :class="{ lightboxNoShow: this.messageFromParent2 }">
        <div class="register">
            <p class="registTittle">會員註冊</p>
            <p class="registWarnning">請選擇以下社群帳號註冊會員！</p>
            <div class="googleRegist">
              <a><img src="../assets/img/google.png"></a>
            </div>
            <br>
            <div class="facebookRegist">
              <a><img src="../assets/img/facebook.png"></a>
            </div>
            <img @click="registLightboxClose" class="cross" src="../assets/img/cross.png">
        </div>
  </div>
</template>

<script>
export default {
    props: [ 'messageFromParent2' ],
    data () {
        return {
        }
    }, 
    methods: {
        registLightboxClose () {
            this.messageFromParent2 = true;
            this.$emit('registLightboxClose');
        }
    }
}
</script>

<style scoped>
.registLightboxBg{
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
.register{
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
.registTittle{
    background-color: rgb(40,40,40);
    color: white;
    padding: 20px;
    font-size: 20px;
}
.registWarnning{
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
.googleRegist{
  border: 1px solid lightgray;
  padding: 10px;
  padding-bottom: 5px;
  display: inline-block;
  font-size: 0;
  border-radius: 5px;
  margin-bottom: 5px;
}
.googleRegist:hover{
  border: 1px solid gray;
  cursor: pointer;
}
.googleRegist > a > img{
  width: 200px;
  border-radius: 5px;
}
.facebookRegist{
  border: 1px solid lightgray;
  padding: 10px;
  padding-bottom: 5px;
  display: inline-block;
  font-size: 0;
  border-radius: 5px;
  background-color: rgb(60, 91, 155);
}
.facebookRegist:hover{
  border: 1px solid gray;
  cursor: pointer;
}
.facebookRegist > a > img{
  width: 200px;
  height: 66px;
  border-radius: 5px;
}
</style>