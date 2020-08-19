<template>
  <div class="programs">
        <h2>&nbsp;&nbsp;節目資訊</h2>
        <hr>
        <!-- Tab links -->
        <div class="tab">
            <button class="tablinks" onclick="openCity(event, 'London')" id="defaultOpen">全部節目</button>
            <button class="tablinks" onclick="openCity(event, 'Paris')">近期上演</button>
            <button class="tablinks right" onclick="openCity(event, 'Tokyo')">最新開賣</button>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.programs{
    border: 1px solid green;
    position: relative;
    width: 1200px;
    height: 500px;
    margin: 0 auto;
    padding-top: 50px;
  }
.programs > h2{
    font-size: 24px;
}
.programs > hr{
    border-top: 1px dashed gray;
}
</style>