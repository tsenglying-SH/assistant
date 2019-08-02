import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Accountbook from '@/pages/accountbook/Accountbook'
import Memo from '@/pages/memo/Memo'
import Remind from '@/pages/remind/Remind'
import Mine from '@/pages/mine/Mine'
import NewsDetail from '@/pages/newsdetail/NewsDetail'
import WeatherDetail from '@/pages/weatherdetail/Weather'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/accountbook',
      name: 'Accountbook',
      component: Accountbook
    },
    {
      path: '/memo',
      name: 'Memo',
      component: Memo
    },
    {
      path: '/remind',
      name: 'Remind',
      component: Remind
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/newsdetail/:id',
      name: 'NewsDetail',
      component: NewsDetail
    },
    {
      path: '/weatherdetail',
      name: 'WeatherDetail',
      component:WeatherDetail
    }
    
  ]
})
