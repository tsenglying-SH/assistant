<template>
   <div> 
       <weather-img></weather-img>
       <weather-header :location="location"
        :update="last_update"></weather-header>
        <weather-info :now="now"></weather-info>
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
    mounted (){
        this.getWeatherInfo()
    },
    methods:{
        getWeatherInfo (){
            axios.get('/api/now.json?key=SHMXyPLmxedgN3Oir&location=' + this.$store.state.city + '&language=zh-Hans&unit=c')
                .then( res=>{
                    // console.log(res.data.results[0])
                    this.$store.commit('getLocation',res.data.results[0].location);
                    this.$store.commit('getNow',res.data.results[0].now);
                    this.$store.commit('getLast_update',res.data.results[0].last_update);
                    })
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
}
</script>

<style lang="stylus" scoped>  

</style>
