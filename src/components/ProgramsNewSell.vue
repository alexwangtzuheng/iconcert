<template>
    <div class="programsNewSell">
        <div class="programBoxes">
            <div class="programContent content" v-for="item in programs" :style="{backgroundImage:'url(' +item.bgPhoto+ ')'}">
                <div class="contentMask">
                    <p class="contentMaskContent">{{ item.date }}</p>
                    <p class="contentMaskContent">{{ item.name }}</p>
                    <div class="line"></div>
                    <router-link :to="'/programs/buy'" class="bookRightnow">立即訂購</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            programs:[
                {
                    date: '2019/08/17 (六)',
                    name: 'JJ林俊傑 聖所 世界巡迴演唱會',
                    bgPhoto: require('../assets/img/jjlin.jpg')
                },
                {
                    date: '2019/08/17 (六)',
                    name: 'Lisa Best -Way- 巡迴演唱會',
                    bgPhoto: require('../assets/img/lisa.jpg')
                },
                {
                    date: '2019/08/31 (六)',
                    name: '李宗盛 有歌之年 巡迴演唱會 2020',
                    bgPhoto: require('../assets/img/li.jpg')
                },
                {
                    date: '2019/09/21 (六)',
                    name: '蕭秉治 凡人Mortal 2019巡迴演唱會',
                    bgPhoto: require('../assets/img/xiao1.jpg')
                },
                {
                    date: '2019/12/07 (六)',
                    name: '陳小春 Stop Angry 巡迴演唱會',
                    bgPhoto: require('../assets/img/stop_angry.jpg')
                }
            ],
        }
    },
}
</script>

<style scoped>
.programContent{
    width: 360px;
    height: 300px;
    display: inline-block;
    box-sizing: border-box;
    margin: 15px;
    margin-top: 40px;
    border-radius: 5px;
    clip-path: polygon(0% 0%, 84% 0, 100% 50%, 84% 100%, 0% 100%);
    transition: .5s;
    cursor: pointer;
    overflow: none;
}
.programContent:hover{
    clip-path: polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%);
}
.line{
    border: 1px solid transparent;
    width: 0px;
    transition: .5s;
}
.programContent:hover > .contentMask > .line{
    border: 1px solid white;
    display: block;
    width: 335px;
}
.bookRightnow{
    border: 1px solid rgb(201,16,16);
    font-size: 14px;
    transition: .1s linear;
    color: white;
    background-color: rgb(201,16,16);
    border-radius: 3px;
    display: inline-block;
    padding: 7px 10px 7px;
    text-decoration: none;
    text-align: center;
    opacity: .9;
    transform: translateY(5px);
}
.bookRightnow:hover{
    background-color: rgb(185,15,15);
}
.contentMask{
    width: 100%;
    height: 35%;
    position: absolute;
    bottom: 0;
    border-radius: 0 0 5px 5px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 10px;
    padding-left: 20px;
}
.contentMaskContent{
    font-size: 16px;
    color: white;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
.content{
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
}
</style>