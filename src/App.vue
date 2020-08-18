<template>
  <div id="app">
    <nav class="navbar">
      <div class="nabar-homepage">
        <router-link :to="'/'"><img src="./assets/img/logo.png"></router-link>
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
          <li class="navbar-listsLi">
            <router-link :to="'/order'">訂單查詢</router-link>
          </li>
          <li class="navbar-listsLiLogin">
            <span>登入</span>
          </li>
          <li class="navbar-listsLiRegist">
            <span>註冊</span>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import "./assets/css/reset.css";
@import "./assets/css/navbar.css";
</style>
