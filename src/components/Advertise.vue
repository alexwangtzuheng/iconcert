<template>
    <main class="application">
      <div class="app">
        <img src="../assets/img/iconcert_app3.png" class="iconcert_app">
        <p class="appTittle">iconcert 手機板上線囉!</p>
        <p class="appContent">豐富的資訊、貼心的服務，</p>
        <p class="appContent">最完整的演唱會體驗盡在 iconcert!</p>
        <a href="https://www.apple.com/tw/ios/app-store/" target="_blank" class="iosLink"><img src="../assets/img/ios_download.png" class="ios_downloadBtn"></a>
        <a href="https://play.google.com/store?hl=zh_TW" target="_blank" class="androidLink"><img src="../assets/img/android_download.png" class="android_downloadBtn"></a>
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
.appContent{
    color: lightgray;
    letter-spacing: 2px;
    margin-bottom: 10px;
    margin-left: calc(50% - 550px);
    font-size: 20px;
}
.appTittle{
    color: white;
    font-size: 30px;
    margin-bottom: 60px;
    margin-left: calc(50% - 550px);
    margin-top: 40px;
    font-weight: bold;
}
.iosLink, .androidLink{
    display: inline-block;
    padding: 1px 3px 1px;
    margin: 10px;
    background-color: white;
    border-radius: 5px;
    margin-left: calc(50% - 550px);
    margin-top: 50px;
}
.androidLink{
    margin-left: 10px;
    transform: translateY(100%);
}
.iosLink{
    transform: translateY(100%);
}
.iosLink:hover, .androidLink:hover{
    background-color: gray;
}
img.iconcert_app{
    width: 400px;
    position: absolute;
    top: -100px;
    left: 60%;
}
img.ios_downloadBtn{
    width: 150px;
    transform: translateY(2px);
}
img.android_downloadBtn{
    width: 150px;
    transform: translateY(2px);
}
</style>