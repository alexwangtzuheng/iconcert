<template>
    <footer>
      <div class="foot">
        <div class="about">
          <a href="#">關於我們</a> <a href="#">隱私權政策</a>
        </div>
        <div class="app_icons">
          <a href="#"><img src="../assets/img/fb.png" class="fb"></a>
          <a href="#"><img src="../assets/img/twitter.png" class="twitter"></a>
          <a href="#"><img src="../assets/img/ig.png" class="ig"></a>
        </div>
        <div class="iconcert_company">
          <p>iconcert股份有限公司</p>
          <p>聯絡電話：03-2345-6789</p>
          <p>客服專線：0800-092-001</p>
          <p>聯絡地址：桃園市中大路300號</p>
        </div>

        <div class="logobox">
          <img src="../assets/img/iconcert.png" class="lll">
          <br>
          <p>Copyright &copy; 2020 iconcert.<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All right reserved.</p>
        </div>
      </div>
    </footer>
</template>

<script>
</script>

<style>
footer{
    /* border: 1px solid red; */
    position: relative;
    height: 350px;
    overflow: hidden;
}
.foot{
    /* border: 1px solid blue; */
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
div.foot > a > img{
    transition: .5s ease-out;
}
  
.about{
    /* border: 1px solid blue; */
    position: absolute;
    left: calc(50% - 390px);
    top: 30%;
}
div.about > a{
    color: black;
    font-size: 14px;
    transition-duration: .3s;
}
div.about > a:hover{
    color: gray;
}
.app_icons{
    /* border: 1px solid red; */
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
    /* border: 1px solid red; */
    width: 31px;
    margin-right: 15px;
}
img.twitter{
    width: 31px;
    margin-right: 12px;
}
img.ig{
    width: 31px;
}
.iconcert_company{
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translateX(-50%);
}
.iconcert_company > p{
    margin: 5px;
    font-family: Microsoft JhengHei;
    font-size: 14px;
}
div.logobox{
    /* border: 1px solid blue; */
    width: 200px;
    height: 200px;
    position: absolute;
    right: calc(50% - 400px);
    font-family: Microsoft JhengHei;
    font-size: 10px;
}
div.logobox > p{
    position: absolute;
    top: 150px;
    left: 25px;
}
img.lll{
    width: 115px;
    height: 120px;
    position: absolute;
    left: 20%;
    top: 40%;
    transform: translateY(-50%);
}
</style>