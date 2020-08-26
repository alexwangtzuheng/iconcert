<template>
  <div class="orderBg">
    <div class="order">
      <h2 class="orderTitle">&nbsp;&nbsp;訂單查詢</h2>
      <hr>
      <br>
      <table class="cart">
        <tr>
          <th width="180px">訂單編號</th>
          <th width="180px">訂購時間</th>
          <th width="580px">購買節目</th>
          <th width="180px">訂單狀態</th>
        </tr>
        <tr>
          <td width="180px">-</td>
          <td width="180px">-</td>
          <td width="580px">-</td>
          <td width="180px">-</td>
        </tr>
      </table>
      <p class="pleaseLogin">※請先登入後才能查看訂購資訊喔！</p>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.orderBg{
    background-color: rgb(245, 245, 245);
    padding-bottom: 150px;
}
.order{
    /* border: 1px solid red; */
    position: relative;
    width: 1200px;
    margin: 0 auto;
    padding-top: 50px;
}
.orderTitle{
    font-size: 24px;
}
.order > hr{
    border-top: 1px dashed gray;
}
table.cart{
    width: 1200px;
    border: 2px solid lightgray;
    border-collapse: collapse;
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 30px;
    color: black;
    font-size: 16px;
    font-weight: bold;
}
table td, table th{
    border: 2px solid lightgray;
    padding: 10px;
    text-align: center;
}
table th{
    background-color: rgb(230, 230, 230);
}
.pleaseLogin{
    color: red;
    font-size: 18px;
    text-align: center;
}
</style>