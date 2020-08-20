<template>
    <nav class="navbar"> 
      <!-- login lightbox -->
      <loginLightbox @loginLightboxClose='loginLightboxClose' :messageFromParent='message'></loginLightbox>  
      <!-- regist lightbox -->
      <registLightbox @registLightboxClose='registLightboxClose' :messageFromParent2='message2'></registLightbox> 
      <div class="nabar-homepage">
        <router-link :to="'/'"><img src="../assets/img/iconsert-3.png"></router-link>
      </div>
      <div class="navbar-lists">
        <ul class="navbar-listsUl">
          <li class="navbar-listsLi">
            <router-link :to="'/programs'">節目資訊</router-link>
          </li>
          <li class="navbar-listsLi">
            <router-link :to="'/news'">最新消息</router-link>
          </li>
          <li class="navbar-listsLi">
            <router-link :to="'/questions'">常見問題</router-link>
          </li>
          <li class="navbar-listsLi" style="margin-right:20px">
            <router-link :to="'/order'">訂單查詢</router-link>
          </li>
          <li @click="showLoginLightbox" class="navbar-listsLiLogin">
            <span>登入</span>
          </li>
          <li @click="showRegistLightbox" class="navbar-listsLiRegist">
            <span>註冊</span>
          </li>
        </ul>
      </div>
    </nav> 
</template>

<script>
import loginLightbox from './LoginLightbox.vue'
import registLightbox from './RegistsLightbox.vue'

export default {
    // name: "nav",
    data () {
      return{
        message: true,
        message2: true
      }      
    },
    components: {
        loginLightbox,
        registLightbox
    },
    methods: {
        showLoginLightbox () {
            this.message = false;
        },
        loginLightboxClose () {
            this.message = true;
        },
        showRegistLightbox () {
            this.message2 = false;
        },
        registLightboxClose () {
            this.message2 = true;
        }
    }
}
</script>

<style>
.navbar{
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 70px;
    background-color: white;
    box-shadow: 2px 2px 5px 2px lightgray;
}
.nabar-homepage > a {
    display: inline-block;
    width: 70px;
    height: 70px;
    margin-left: 50px;
}
.nabar-homepage > a > img{
    height: 58px;
    margin: 6px;
}
.navbar-lists{
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
}
.navbar-listsUl{
    display: inline-block;
    margin-right: 50px;
}
.navbar-listsLi{
    display: inline-block;
}
.navbar-listsLi > a{
    /* border: 1px solid red; */
    display: inline-block;
    text-decoration-line: none;
    color: black;
    width: 100px;
    height: 70px;
    margin-right: 5px;
    padding: 27px 0;
    text-align: center;
    transition-duration: .3s;
}
.navbar-listsLi >a:hover{
    background-color: rgb(230,230,230);
}
.navbar-listsLiLogin, .navbar-listsLiRegist{
    display: inline-block;
    /* border: 1px solid red; */
    color: gray;
    margin-left: 20px;
    transition-duration: .3s;
}
.navbar-listsLiLogin:hover, .navbar-listsLiRegist:hover{
    cursor: pointer;
    /* text-decoration-line: underline; */
    color: rgb(68, 68, 68);
}
</style>