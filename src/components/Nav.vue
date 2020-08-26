<template>
    <nav class="navbar"> 
      <!-- login lightbox -->
      <loginLightbox @loginLightboxClose='loginLightboxClose' :messageFromParent='message'></loginLightbox>  
      <!-- regist lightbox -->
      <registLightbox @registLightboxClose='registLightboxClose' :messageFromParent2='message2'></registLightbox> 
      <div class="nabarHomepage">
        <router-link :to="'/'"><img class="icon" src="../assets/img/iconsert-3.png"></router-link>
      </div>
      <div class="navbarLists">
        <ul class="navbarListsUl">
          <li class="navbarListsLi">
            <router-link :to="'/programs'">節目資訊</router-link>
          </li>
          <li class="navbarListsLi">
            <router-link :to="'/news'">最新消息</router-link>
          </li>
          <li class="navbarListsLi">
            <router-link :to="'/questions'">常見問題</router-link>
          </li>
          <li class="navbarListsLi" style="margin-right:20px">
            <router-link :to="'/order'">訂單查詢</router-link>
          </li>
          <li @click="showLoginLightbox" class="navbarListsLiLogin">
            <span>登入</span>
          </li>
          <li @click="showRegistLightbox" class="navbarListsLiRegist">
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
.nabarHomepage > a {
    display: inline-block;
    width: 70px;
    height: 70px;
    margin-left: 50px;
}
.icon{
    height: 58px;
    margin: 6px;
}
.navbarLists{
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
}
.navbarListsUl{
    display: inline-block;
    margin-right: 50px;
}
.navbarListsLi{
    display: inline-block;
}
.navbarListsLi > a{
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
.navbarListsLi >a:hover{
    background-color: rgb(230,230,230);
}
.navbarListsLiLogin, .navbarListsLiRegist{
    display: inline-block;
    /* border: 1px solid red; */
    color: gray;
    margin-left: 20px;
    transition-duration: .3s;
}
.navbarListsLiLogin:hover, .navbarListsLiRegist:hover{
    cursor: pointer;
    /* text-decoration-line: underline; */
    color: rgb(68, 68, 68);
}
</style>