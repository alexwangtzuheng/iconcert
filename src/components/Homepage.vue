<template>
  <div class="homepage">
    <div class="banner">
      <div class="banner-search">
        <input type="text" placeholder="searching for...">
        <button>搜尋</button>
      </div> 
      <section class="scrollDownBtn">
        <a @click="scrollDown"><span></span></a>
      </section> 
    </div>
    <div class="secondScreen" id="secondScreen">
      <h2>最新消息</h2>
      <hr>
      <div class="secondScreen-news">
        <div class="secondScreen-newsLeft">
          <div class="secondScreen-newsLeftContent"><img src="../assets/img/ticket.png">[置頂公告]&nbsp;iconcert會員加入辦法</div>
          <div class="secondScreen-newsLeftContent"><img src="../assets/img/ticket.png">[置頂公告]&nbsp;iconcert會員加入辦法</div>
          <div class="secondScreen-newsLeftContent"><img src="../assets/img/ticket.png">[最新消息]&nbsp;iconcert會員加入辦法</div>
          <div class="secondScreen-newsLeftContent"><img src="../assets/img/ticket.png">[最新消息]&nbsp;iconcert會員加入辦法</div>
          <div class="secondScreen-newsLeftContent"><img src="../assets/img/ticket.png">[最新消息]&nbsp;iconcert會員加入辦法</div>
        </div>
        <div class="secondScreen-newsRight">
          <div class="secondScreen-newsRightContent"><img src="../assets/img/ticket.png">[最新消息]&nbsp;iconcert會員加入辦法</div>
          <div class="secondScreen-newsRightContent"><img src="../assets/img/ticket.png">[重要通知]&nbsp;iconcert會員加入辦法</div>
          <div class="secondScreen-newsRightContent"><img src="../assets/img/ticket.png">[重要通知]&nbsp;iconcert會員加入辦法</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  methods: {
      scrollDown () {
          $('html,body').animate({
            scrollTop: $('#secondScreen').offset().top
          },800);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../assets/css/homepage.css";
</style>
