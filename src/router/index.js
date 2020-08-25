import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import Programs from '@/components/Programs'
import News from '@/components/News'
import Questions from '@/components/Questions'
import Order from '@/components/Order'
import ProgramsDetail from '@/components/ProgramsDetail'
import ProgramsSelectSeats from '@/components/ProgramsSelectSeats'
import ProgramsSelectAmount from '@/components/ProgramsSelectAmount'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Homepage
    },
    {
      path: '/programs',
      name: 'Programs',
      component: Programs
    },
    {
      path: '/programs/detail/:id',
      name: 'ProgramsDetail',
      component: ProgramsDetail
    },
    {
      path: '/programs/selectSeats/:id',
      name: 'ProgramsSelectSeats',
      component: ProgramsSelectSeats
    },
    {
      path: '/programs/selectAmount/:id',
      name: 'ProgramsSelectAmount',
      component: ProgramsSelectAmount
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/questions',
      name: 'Questions',
      component: Questions
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ],
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition;
    }else{
      return {x:0,y:0}
    }
  },
})
