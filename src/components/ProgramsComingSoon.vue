<template>
    <div class="programsComingSoon">
        <div class="programBoxes1">
            <div class="program_content content" v-for="item in programs" :style="{backgroundImage:'url(' +item.bgPhoto+ ')'}">
                <div class="content_mask">
                    <p>{{ item.date }}</p>
                    <p>{{ item.name }}</p>
                    <div class="line"></div>
                    <router-link :to="'/programs/buy'" class="book_rightnow">立即訂購</router-link>
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
                    date: '2019/05/11 (六)',
                    name: '周興哲 亞洲巡迴演唱會 台北小巨蛋',
                    bgPhoto: require('../assets/img/eric.jpg')
                },
                {
                    date: '2019/06/13 (六)',
                    name: 'IU dlwlra 十週年巡迴演唱會',
                    bgPhoto: require('../assets/img/iu.jpeg')
                },
                {
                    date: '2019/06/22 (六)',
                    name: '宮野真守 Asia Live Tour 2019',
                    bgPhoto: require('../assets/img/japanese.jpg')
                },
                {
                    date: '2019/07/28 (日)',
                    name: 'A-lin 聲納 世界巡迴演唱會',
                    bgPhoto: require('../assets/img/alin.jpg')
                },
                {
                    date: '2019/07/28 (日)',
                    name: 'Westlife 西域男孩 2019台北演唱會',
                    bgPhoto: require('../assets/img/westlife1.jpg')
                },
                {
                    date: '2019/08/03 (六)',
                    name: 'NOGIZAKA46 Live in Taipei 2020',
                    bgPhoto: require('../assets/img/n46b.jpg')
                },
                {
                    date: '2019/08/17 (六)',
                    name: 'JJ林俊傑 聖所 世界巡迴演唱會',
                    bgPhoto: require('../assets/img/jjlin.jpg')
                }
            ],
        }
    },
}
</script>

<style scoped>
.program_content{
  /* border: 1px solid green; */
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
.program_content:hover{
  clip-path: polygon(0% 0%, 100% 0, 100% 50%, 100% 100%, 0% 100%);
}
div.line{
  border: 1px solid transparent;
  width: 0px;
  transition: .5s;
}
.program_content:hover > div.content_mask > div.line{
  border: 1px solid white;
  display: block;
  width: 335px;
}
a.book_rightnow{
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
a.book_rightnow:hover{
  background-color: rgb(185,15,15);
}
.content_mask{
  width: 100%;
  height: 35%;
  position: absolute;
  bottom: 0;
  border-radius: 0 0 5px 5px;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  padding-left: 20px;
}
.content_mask > p{
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