<template>
   <div class="forecast">
        <ul class="today-info border-bottom" >
                <li class="info">
                    <p class="line-1">{{this.$store.state.weatherList.winddirect}}</p>
                    <p class="line-1">{{this.$store.state.weatherList.windpower}}</p>
                </li>
                <li class="info">
                    <p class="line-1">空气质量</p>
                    <p class="line-1">{{this.$store.state.weatherList.aqi.aqiinfo.level}}</p>
                </li>
                <li class="info">
                    <p class="line-1">湿度</p>
                    <p class="line-1">{{this.$store.state.weatherList.humidity}}%</p>
                </li>  
        </ul>
        <ul class="forecast-threedays">
                <li class="days">
                    <p class="line-one">{{this.$store.state.weatherList.daily[1].date}}</p>
                    <div class="icon-line">
                        <div class="icon-wrapper">
                            <img  class="icon" :src="this.iconList[this.$store.state.weatherList.daily[1].day.img]" />
                        </div>
                    </div>
                    <p class="line-one">{{this.$store.state.weatherList.daily[1].day.weather}}</p>
                    <p class="line-one">{{this.$store.state.weatherList.daily[1].night.templow}}<span>&#176;</span>/{{this.$store.state.weatherList.daily[1].day.temphigh}}<span>&#176;</span></p>
                </li>
                <li class="days">
                    <p class="line-one">{{this.$store.state.weatherList.daily[2].date}}</p>
                    <div class="icon-line">
                        <div class="icon-wrapper">
                            <img  class="icon" :src="this.iconList[this.$store.state.weatherList.daily[2].day.img]" />
                        </div>
                    </div>
                    <p class="line-one">{{this.$store.state.weatherList.daily[2].day.weather}}</p>
                    <p class="line-one">{{this.$store.state.weatherList.daily[2].night.templow}}<span>&#176;</span>/{{this.$store.state.weatherList.daily[2].day.temphigh}}<span>&#176;</span></p>
                </li>
                <li class="days">
                    <p class="line-one">{{this.$store.state.weatherList.daily[3].date}}</p>
                    <div class="icon-line">
                        <div class="icon-wrapper">
                            <img  class="icon" :src="this.iconList[this.$store.state.weatherList.daily[3].day.img]" />
                        </div>
                    </div>
                    <p class="line-one">{{this.$store.state.weatherList.daily[3].day.weather}}</p>
                    <p class="line-one">{{this.$store.state.weatherList.daily[3].night.templow}}<span>&#176;</span>/{{this.$store.state.weatherList.daily[3].day.temphigh}}<span>&#176;</span></p>
                </li>
        </ul>
   </div>
</template>
<script>
export default {
    name:'WeatherForecast',
    data (){
        return{
            iconList:[ 
                        'https://s1.sencdn.com/web/icons/black/0@1x.png',                 
                        'https://s5.sencdn.com/web/icons/black/4@1x.png',
                        'https://s4.sencdn.com/web/icons/black/9@1x.png',        
                        'https://s4.sencdn.com/web/icons/black/10@1x.png',                         
                        'https://s4.sencdn.com/web/icons/black/11@1x.png',                          
                        'https://s1.sencdn.com/web/icons/black/12@1x.png',                      
                        'https://s5.sencdn.com/web/icons/black/20@1x.png',                      
                        'https://s1.sencdn.com/web/icons/black/13@1x.png',                
                        'https://s1.sencdn.com/web/icons/black/0@1x.png',                   
                        'https://s5.sencdn.com/web/icons/black/4@1x.png',               
                        'https://s4.sencdn.com/web/icons/black/9@1x.png',              
                        'https://s4.sencdn.com/web/icons/black/10@1x.png',            
                        'https://s4.sencdn.com/web/icons/black/11@1x.png',                         
                        'https://s1.sencdn.com/web/icons/black/12@1x.png',                   
                        'https://s5.sencdn.com/web/icons/black/20@1x.png',                        
                        'https://s1.sencdn.com/web/icons/black/13@1x.png',                         
                         'https://s1.sencdn.com/web/icons/black/12@1x.png',                          
                         'https://s5.sencdn.com/web/icons/black/20@1x.png',                           
                         'https://s1.sencdn.com/web/icons/black/13@1x.png'                         
                    ]  
        }
    }
    
}
</script>

<style lang="stylus" scoped>
    .border-bottom
        &:before
            border-color: #fff
            border-width: .02rem
    .forecast
        position:absolute
        left:0
        right:0
        bottom: .5rem
        height 3.3rem
        
        .today-info
            margin-top:.1rem
            height 1.3rem
            .info
                width:2.5rem 
                height:1.3rem
                float:left
                text-align:center
                .line-1
                    line-height:.6rem
                    color:#fff
                    font-size:.35rem
        .forecast-threedays
            margin-top:.15rem
            height:2rem
            .days
                width:2.5rem 
                height:2rem
                float:left
                text-align:center
                .line-one
                    line-height:.4rem
                    height:.4rem
                    color:#fff
                .icon-line
                    margin-top:.05rem
                    height:.8rem
                    .icon-wrapper 
                        width:.8rem 
                        height:.8rem
                        margin:0 auto
                        .icon
                            width:100%
                       
</style>