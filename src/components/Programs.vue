<template>
    <div class="programs-bg">
        <div class="programs">
            <h2>&nbsp;&nbsp;節目資訊</h2>
            <hr>
            <!-- Tab links -->
            <div class="tabs">
                <div class="tab" :class="{ programsAllTabfocus: isProgramsAllTabfocus }" @click="toggleTab('ProgramsAll'),clickProgramsAll()"><a>全部節目</a></div>
                <div class="tab" :class="{ programsComingSoonTabfocus: isProgramsComingSoonTabfocus }" @click="toggleTab('ProgramsComingSoon'),clickProgramsComingSoon()"><a>近期上演</a></div>
                <div class="tab" :class="{ programsNewSellTabfocus: isProgramsNewSellTabfocus}" @click="toggleTab('ProgramsNewSell'),clickProgramsNewSell()"><a>最新開賣</a></div>
            </div>
            <!-- Tab content -->
            <prince :is="currentTab" keep-alive></prince>
        </div>
    </div>
</template>

<script>
import ProgramsAll from './ProgramsAll.vue';
import ProgramsComingSoon from './ProgramsComingSoon.vue';
import ProgramsNewSell from './ProgramsNewSell.vue';

export default {
    data () {
        return {
            currentTab: 'ProgramsAll',
            isProgramsAllTabfocus: true,
            isProgramsComingSoonTabfocus: false,
            isProgramsNewSellTabfocus: false
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
        },
        clickProgramsAll () {
            this.isProgramsAllTabfocus = true,
            this.isProgramsComingSoonTabfocus = false,
            this.isProgramsNewSellTabfocus = false
        },
        clickProgramsComingSoon () {
            this.isProgramsAllTabfocus = false,
            this.isProgramsComingSoonTabfocus = true,
            this.isProgramsNewSellTabfocus = false
        },
        clickProgramsNewSell () {
            this.isProgramsAllTabfocus = false,
            this.isProgramsComingSoonTabfocus = false,
            this.isProgramsNewSellTabfocus = true
        }
    }
}
</script>

<style scoped>
.programs-bg{
    background-color: rgb(245, 245, 245);
    padding-bottom: 150px;
}
.programs{
    /* border: 1px solid green; */
    position: relative;
    width: 1200px;
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
    margin-left: 15px;
    margin-top: 20px;
}
.tab{
    border: 2px solid lightgray;
    display: inline-block;
    width: 120px;
    padding: 10px;
    text-align: center;
    font-size: 18px;
    transition-duration: .3s;
    background-color: white;
}
.tab:hover{
    cursor: pointer;
    background-color: lightgray;
}
.active{
    background-color: lightgray;
}
.programsAllTabfocus{
    background-color: lightgray;
}
.programsComingSoonTabfocus{
    background-color: lightgray;
}
.programsNewSellTabfocus{
    background-color: lightgray;
}
</style>