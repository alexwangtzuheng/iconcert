<template>
    <footer>
      <div class="footer">
        <div class="about">
          <a class="aboutUs">關於我們</a> <a class="privacyPolicy">隱私權政策</a>
        </div>
        <div class="app_icons">
          <a><img src="../assets/img/fb.png" class="fb"></a>
          <a><img src="../assets/img/twitter.png" class="twitter"></a>
          <a><img src="../assets/img/ig.png" class="ig"></a>
        </div>
        <div class="iconcertCompanyInfo">
          <p class="iconcertCompanyInfoContent">iconcert股份有限公司</p>
          <p class="iconcertCompanyInfoContent">聯絡電話：03-2345-6789</p>
          <p class="iconcertCompanyInfoContent">客服專線：0800-092-001</p>
          <p class="iconcertCompanyInfoContent">聯絡地址：桃園市中大路300號</p>
        </div>

        <div class="logobox">
          <img class="logoboxIcon" src="../assets/img/iconcert.png">
          <br>
          <p class="copyRight">Copyright &copy; 2020 iconcert.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All right reserved.</p>
        </div>
      </div>
    </footer>
</template>

<script>
</script>

<style>
footer{
    position: relative;
    height: 350px;
    overflow: hidden;
}
.footer{
    box-sizing: border-box;
    display: inline-block;
    width: 100%;
    height: 210px;
    position: absolute;
    top: 100px;
    bottom: 50px;
    box-shadow: 0px 5px 15px 0px gray;
    overflow: hidden;
}
.about{
    position: absolute;
    left: calc(50% - 390px);
    top: 30%;
}
.aboutUs, .privacyPolicy{
    color: black;
    font-size: 14px;
    transition-duration: .3s;
    text-decoration-line: underline;
}
.aboutUs:hover, .privacyPolicy:hover{
    color: gray;
    cursor: pointer;
}
.app_icons{
    position: absolute;
    left: calc(50% - 398px);
    top: 50%;
    display: inline-block;
    box-sizing: border-box;
    overflow: hidden;
    width: 150px;
    height: 50px;
    text-align: center;
    padding: 8px;
}
img.fb{
    width: 31px;
    margin-right: 15px;
    cursor: pointer;
}
img.twitter{
    width: 31px;
    margin-right: 12px;
    cursor: pointer;
}
img.ig{
    width: 31px;
    cursor: pointer;
}
.iconcertCompanyInfo{
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translateX(-50%);
}
.iconcertCompanyInfoContent{
    margin: 5px;
    font-size: 14px;
}
div.logobox{
    width: 200px;
    height: 200px;
    position: absolute;
    right: calc(50% - 400px);
}
.logoboxIcon{
    width: 115px;
    height: 120px;
    position: absolute;
    left: 20%;
    top: 40%;
    transform: translateY(-50%);
}
.copyRight{
    position: absolute;
    top: 150px;
    left: 25px;
    font-size: 10px;
}
</style>