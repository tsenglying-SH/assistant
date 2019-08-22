<template>
   <div class="header">
       <router-link tag="div" to="/" class="header-abs">
            <div class="iconfont header-abs-back">&#xe659;</div>
        </router-link>
         <div class="header-info">
            <router-link tag="p" to="/addcity" class="city">
                 <span class="iconfont more">&#xe602;</span>
                 {{this.$store.state.weatherList.city}}
            </router-link>
            <p class="publish-time">{{this.$store.state.weatherList.updatetime.slice(11,16)}} 发布</p>
        </div>
   </div>
</template>
<script>
export default {
    name:'WeatherHeader',
    
}
</script>

<style lang="stylus" scoped>
    .header 
        height:1.38rem
        margin:.3rem
        .header-abs
            z-index:99
            position:absolute
            left: .2 rem
            top:.2 rem
            width: .8 rem
            height: .8 rem
            line-height: .8 rem
            border-radius: .4 rem
            background: rgba(0,0,0,0.8)
            text-align:center
            .header-abs-back
                color:#fff
                font-size: .5 rem
        .header-info
            height:1.38rem
            .city
                height:.8rem
                line-height:.6rem
                text-align:center 
                font-size:.4rem
                color:#fff
                .more
                    font-size:.35rem 
                    color:white
            .publish-time
                height:.38 rem
                text-align:center
                color:#fff    

</style>
