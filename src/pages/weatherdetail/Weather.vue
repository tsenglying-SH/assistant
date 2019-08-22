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
    
        // getWeatherInfoSucc (res){
        //     res=res.data
        //     if (res.results){
        //         const results=res.results[0]
        //         this.location=results.location
        //         this.now=results.now
        //         this.last_update=results.last_update
        //     }
            
        // }
    
}
</script>

<style lang="stylus" scoped>  

</style>
