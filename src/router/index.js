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
import Disneydetail from '@/pages/disneydetail/Disneydetail'
import Zoodetail from '@/pages/zoodetail/Zoodetail'
import Mayadetail from '@/pages/mayadetail/Mayadetail'
import Gardendetail from '@/pages/gardendetail/Gardendetail'
import Garbagedetail from '@/pages/garbagedetail/Garbagedetail'
import TowerDetail from '@/pages/towerdetail/Towerdetail'
import Aquariumdetail from '@/pages/aquariumdetail/Aquariumdetail'
import Destinationdetail from '@/pages/destinationdetail/Destinationdetail'
import AddCity from '@/pages/addcity/AddCity'
import SearchCity from '@/pages/addmorecity/City'


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
    },
    {
      path: '/disneydetail',
      name: 'Disneydetail',
      component:Disneydetail
    },
    {
      path: '/zoodetail',
      name: 'Zoodetail',
      component:Zoodetail
    },
    {
      path: '/mayadetail',
      name: 'Mayadetail',
      component:Mayadetail
    },
    {
      path: '/gardendetail',
      name: 'Gardendetail',
      component:Gardendetail
    },
    {
      path: '/garbagedetail',
      name: 'Garbagedetail',
      component:Garbagedetail
    },
    {
      path: '/towerdetail',
      name: 'TowerDetail',
      component:TowerDetail
    },
    {
      path: '/aquariumdetail',
      name: 'Aquariumdetail',
      component:Aquariumdetail
    },{
      path: '/destinationdetail',
      name: 'Destinationdetail',
      component:Destinationdetail
    },
    {
      path: '/addcity',
      name: 'AddCity',
      component:AddCity
    },
    {
      path: '/addmorecity',
      name: 'SearchCity',
      component:SearchCity
    },
    


    
  ]
})
