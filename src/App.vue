<template>
  <div id="app">
    <nav class="navbar">
      <div class="nabar-homepage">
        <router-link :to="'/'"><img src="./assets/img/iconsert-3.png"></router-link>
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
    <!-- advertisement -->
    <main class="application">
      <div class="app">
        <img src="./assets/img/iconcert_app3.png" class="iconcert_app">
        <p class="tittle ml3">iconcert 手機板上線囉!</p>
        <p>豐富的資訊、貼心的服務，</p>
        <p>最完整的演唱會體驗盡在 iconcert!</p>
        <a href="https://www.apple.com/tw/ios/app-store/" target="_blank" class="ios"><img src="./assets/img/ios_download.png" class="ios_download"></a>
        <a href="https://play.google.com/store?hl=zh_TW" target="_blank" class="android"><img src="./assets/img/android_download.png" class="android_download"></a>
      </div>
    </main>
    <!-- footer -->
    <footer>
      <div class="foot">
        <div class="about">
          <a href="#">關於我們</a> <a href="#">隱私權政策</a>
        </div>
        <div class="app_icons">
          <a href="#"><img src="./assets/img/fb.png" class="fb"></a>
          <a href="#"><img src="./assets/img/twitter.png" class="twitter"></a>
          <a href="#"><img src="./assets/img/ig.png" class="ig"></a>
        </div>
        <div class="iconcert_company">
          <p>iconcert股份有限公司</p>
          <p>聯絡電話：03-2345-6789</p>
          <p>客服專線：0800-092-001</p>
          <p>聯絡地址：桃園市中大路300號</p>
        </div>

        <div class="logobox">
          <img src="./assets/img/iconcert.png" class="lll">
          <br>
          <p>Copyright &copy; 2020 iconcert.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All right reserved.</p>
        </div>
      </div>
    </footer>
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
@import "./assets/css/advertisement.css";
@import "./assets/css/footer.css";
</style>
