<template>
   <div class="forecast">
        <ul class="today-info border-bottom" >
                <li class="info">
                    <p class="line-1">{{this.datas[0].wind}}</p>
                    <p class="line-1">{{this.datas[0].level}}</p>
                </li>
                <li class="info">
                    <p class="line-1">能见度</p>
                    <p class="line-1">{{this.datas[0].visibility}}</p>
                </li>
                <li class="info">
                    <p class="line-1">湿度</p>
                    <p class="line-1">{{this.datas[0].humidity}}</p>
                </li>  
        </ul>
        <ul class="forecast-threedays">
                <li class="days" v-for="item of datas" :key="item.id">
                    <p class="line-one">{{item.time}}</p>
                    <div class="icon-line">
                        <div class="icon-wrapper">
                            <img  class="icon" :src="item.iconUrl" />  
                        </div>
                    </div>
                    <p class="line-one">{{item.status}}</p>
                    <p class="line-one">{{item.temperature_l}}<span>&#176;</span>/{{item.temperature_h}}<span>&#176;</span></p>
                </li>
            <!-- <li class="days">
                <p class="line-one">{{this.datas[1].time}}</p>
                <div class="icon-line">
                    <div class="icon-wrapper">
                        <img  class="icon" :src="this.datas[1].iconUrl" />  
                    </div>
                </div>
                <p class="line-one">{{this.datas[1].status}}</p>
                <p class="line-one">{{this.datas[1].temperature_l}}<span>&#176;</span>/{{this.datas[1].temperature_h}}<span>&#176;</span></p>
            </li>
            <li class="days">
                <p class="line-one">{{this.datas[2].time}}</p>
                <div class="icon-line">
                    <div class="icon-wrapper">
                        <img  class="icon" :src="this.datas[2].iconUrl" />  
                    </div>
                </div>
                <p class="line-one">{{this.datas[2].status}}</p>
                <p class="line-one">{{this.datas[2].temperature_l}}<span>&#176;</span>/{{this.datas[1].temperature_h}}<span>&#176;</span></p>
            </li>-->
        </ul>
   </div>
</template>
<script>
export default {
    name:'WeatherForecast',
    data (){
        return{
            datas:[{
                id:'01',
                time:'2019-07-24',
                iconUrl:'https://s1.sencdn.com/web/icons/black/7@1x.png',
                status:'多云',
                temperature_l:'28',
                temperature_h:'37',
                wind:' 西南风',
                level:'3级',
                visibility:'10km',
                humidity:'66%'
            },{
                id:'02',
                time:'2019-07-25',
                iconUrl:'https://s1.sencdn.com/web/icons/black/7@1x.png',
                status:'多云',
                temperature_l:'28',
                temperature_h:'37',
                wind:' 西南风',
                level:'3级',
                visibility:'10km',
                humidity:'66%'
            },{
                id:'03',
                time:'2019-07-26',
                iconUrl:'https://s1.sencdn.com/web/icons/black/7@1x.png',
                status:'多云',
                temperature_l:'28',
                temperature_h:'37',
                wind:' 西南风',
                level:'3级',
                visibility:'10km',
                humidity:'66%'
            }]
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