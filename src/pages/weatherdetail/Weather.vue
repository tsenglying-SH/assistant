<template>
   <div> 
       <weather-img></weather-img>
       <weather-header ></weather-header>
        <weather-info ></weather-info>
        <weather-forecast></weather-forecast>
   </div>
</template>
<script>
import WeatherImg from './components/Backimg'
import WeatherHeader from './components/Header'
import WeatherInfo from './components/Info'
import WeatherForecast from './components/Forecast'
import axios from 'axios'
export default {
    name:'WeatherDetail',
    components:{
        WeatherHeader,
        WeatherImg,
        WeatherInfo,
        WeatherForecast
    },
    data (){
        return{
            location:{},
            now:{},
            last_update:""
        }
    },
    created (){
        this.bus.$on('Trans',(city)=>{
            console.log('城市详情监听到'+city)
            axios.get('/api/query?appkey=661d0fffc21f971f&city=' + city)
                .then( res=>{                
                     this.$store.commit('getWeather',res.data.result)
                    })
        })
    }
}
</script>

<style lang="stylus" scoped>  

</style>
