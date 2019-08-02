<template>
    <div class="home">
        <!-- <home-header :city="city"></home-header> -->  <!--使用vuex中的数据，放弃ajax中返回的数据-->
        <home-header></home-header>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons></home-icons>
        <home-weather></home-weather>
        <home-news></home-news>
        <home-tabbar></home-tabbar>


    </div>
</template>

<script>
import HomeHeader from './components/Header'   //引入Header组件
import HomeSwiper from './components/Swiper'   //引入滑动组件
import HomeIcons from './components/Icons'    //引入Icons组件
import HomeWeather from './components/Weather'
import HomeNews from './components/News'//引入推荐组件
import HomeTabbar from './components/Tabbar' 
import axios from 'axios'                       //引入axios

export default {
    name:'Home',
    components:{
      HomeHeader ,  //ES6中键和值一样可以简写为HomeHeader
      HomeSwiper ,  //ES6中键和值一样可以简写为HomeSwiper
      HomeIcons,
      HomeWeather,
      HomeNews,
      HomeTabbar

     },
     data (){
         return{
            //  city:'',
             swiperList:[],
             lastCity:''
         }
     },
    
     mounted (){
         this.getHomeInfo()
         this.getWeatherInfo()
         this.lastCity=this.$store.state.city   //对临时变量赋值
         this.getNewsInfo()
     },
     activated (){
         if(this.lastCity !== this.$store.state.city){            //执行钩子函数之前先判断城市是否变化
             this.lastCity = this.$store.state.city
             this.getWeatherInfo()
         }

     },

     methods:{
         getHomeInfo () {
             axios.get('/static/data/index.json')
             .then(this.getHomeInfoSucc)
         },
         getHomeInfoSucc (res){
             res=res.data
             if(res.ret && res.data){
                 const data=res.data
                //  this.city=data.city     使用 vuex中的状态
                 this.swiperList=data.swiperList
             }
         },
         getWeatherInfo (){
            axios.get('/api/now.json?key=SHMXyPLmxedgN3Oir&location=' + this.$store.state.city + '&language=zh-Hans&unit=c')
                .then( res=>{
                    this.$store.commit('getLocation',res.data.results[0].location);
                    this.$store.commit('getNow',res.data.results[0].now);
                    //this.$store.commit('getLast_update',res.data.results[0].last_update);
                    })
            },
        getNewsInfo (){
            axios.get('/news/get?channel=头条&start=0&num=10&appkey=661d0fffc21f971f')
                 .then( res=>{
                     this.$store.dispatch('getNews',res.data.result.list)
             })
         }
        
      },

    //  mounted (){
    //      this.getHomeInfo()
    //  }

}
</script>

<style lang="stylus" scoped>
    .home
        padding-bottom:1rem

</style>


