<template>
  <div class="programs">
        <h2>&nbsp;&nbsp;節目資訊</h2>
        <hr>
        <!-- Tab links -->
        <div class="tabs">
            <div class="tab" @click="toggleTab('ProgramsAll')"><a>全部節目</a></div>
            <div class="tab" @click="toggleTab('ProgramsComingSoon')"><a>近期上演</a></div>
            <div class="tab" @click="toggleTab('ProgramsNewSell')"><a>最新開賣</a></div>
        </div>
        <!-- Tab content -->
        <prince :is="currentTab" keep-alive></prince>
  </div>
</template>

<script>
import ProgramsAll from './ProgramsAll.vue';
import ProgramsComingSoon from './ProgramsComingSoon.vue';
import ProgramsNewSell from './ProgramsNewSell.vue';

export default {
    data () {
        return {
            currentTab: 'ProgramsAll' 
        };
    },
    components: {
        ProgramsAll,
        ProgramsComingSoon,
        ProgramsNewSell
    },
    methods: {
        toggleTab: function(tab) {
            this.currentTab = tab;
        }
    }
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
.tabs{
    /* border: 1px solid red; */
}
.tab{
    border: 1px solid;
    border: 2px solid lightgray;
    display: inline-block;
    width: 120px;
    padding: 10px;
    text-align: center;
    font-size: 18px;
    transition-duration: .3s;
}
.tab:hover{
    cursor: pointer;
    background-color: lightgray;
}
.active{
    background-color: lightgray;
}
</style>