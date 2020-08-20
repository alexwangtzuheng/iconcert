<template>
    <main class="application">
      <div class="app">
        <img src="../assets/img/iconcert_app3.png" class="iconcert_app">
        <p class="tittle">iconcert 手機板上線囉!</p>
        <p>豐富的資訊、貼心的服務，</p>
        <p>最完整的演唱會體驗盡在 iconcert!</p>
        <a href="https://www.apple.com/tw/ios/app-store/" target="_blank" class="ios"><img src="../assets/img/ios_download.png" class="ios_download"></a>
        <a href="https://play.google.com/store?hl=zh_TW" target="_blank" class="android"><img src="../assets/img/android_download.png" class="android_download"></a>
      </div>
    </main>
</template>

<script>
</script>

<style>
.app{
    display: inline-block;
    box-sizing: border-box;
    width: 100%;
    height: 550px;
    background-image: url(../assets/img/app_background.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    opacity: .9;
    box-shadow: 0px 5px 15px 0px gray;
    padding-top: 100px;
}
div.app > p{
    color: lightgray;
    letter-spacing: 2px;
    margin-bottom: 10px;
    margin-left: calc(50% - 540px);
    font-size: 20px;
}
div.app > p.tittle{
    /* border: 1px solid red; */
    color: white;
    font-size: 30px;
    margin-bottom: 60px;
    margin-left: calc(50% - 550px);
    margin-top: 40px;
    font-weight: bold;
}
  
  div.app > a{
    /* border: 1px solid orange; */
    display: inline-block;
    padding: 1px 3px 1px;
    margin: 10px;
    background-color: white;
    border-radius: 5px;
    margin-left: calc(50% - 550px);
    margin-top: 50px;
  }
  
  div.app > a.android{
    margin-left: 10px;
    transform: translateY(100%);
    opacity: 0;
    transition: 1s;
  }
  
  div.app > a.android.fade{
    transform: translateY(0);
    opacity: 1;
  }
  
  .ios{
    transform: translateY(100%);
    opacity: 0;
    transition: 1s;
  }
  
  .ios.fade{
    transform: translateY(0);
    opacity: 1;
  }
  
  div.app > a:hover{
    background-color: gray;
  }
  
  img.iconcert_app{
    /* border: 1px solid red; */
    width: 400px;
    position: absolute;
    top: -100px;
    left: 60%;
  }
  
  img.ios_download{
    width: 150px;
    transform: translateY(2px);
  }
  
  img.android_download{
    width: 150px;
    transform: translateY(2px);
  }
</style>