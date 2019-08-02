<template>    
    <router-link tag="div" to="/weatherdetail" class="weather">
        <swiper :options="swiperOption"> 
            <swiper-slide>
                <img class="weather-img" src="https://api.neweb.top/bing.php?type=rand"/>
                    <div class="info-wrapper">
                            <div class="weather-left">
                                <div class="img-wrapper">  
                                    <img class="left-weather-logo" :src="this.iconList[this.$store.state.code]" />
                                </div>
                                <div class="left-weather-info">{{this.$store.state.text}}</div>
                            </div>

                            <div class="weather-right">
                                <div class="city">{{this.$store.state.forcastCity}}  <!--同步Vuex中的数据-->
                                    <span class="temperature">{{this.$store.state.temperature}}
                                        <span>&#176;</span>
                                    </span>                                   
                                </div>
                                <div class="temperature-today"> 今天：27~37
                                    <span>&#8451;</span>
                                </div>
                                <div class="wind">东北风5级</div>
                            </div>      
                    </div>
            </swiper-slide>
            <swiper-slide>
                <img class="weather-img" src="http://img0.imgtn.bdimg.com/it/u=4221305071,2333872119&amp;fm=26&amp;gp=0.jpg"/>
                    <div class="info-wrapper">
                            <div class="weather-left">
                                <div class="img-wrapper">  
                                    <img class="left-weather-logo" :src="this.iconList[this.$store.state.code]" />
                                </div>
                                <div class="left-weather-info">多云</div>
                            </div>

                            <div class="weather-right">
                                <div class="city">武汉  
                                    <span class="temperature">33
                                        <span>&#176;</span>
                                    </span>                                   
                                </div>
                                <div class="temperature-today"> 今天：27~35
                                    <span>&#8451;</span>
                                </div>
                                <div class="wind">北风2级</div>
                            </div>      
                    </div>
            </swiper-slide>
        </swiper>
    </router-link> 
</template>
<script>
export default {
    name:'HomeWeather',
    data (){
        return{
            swiperOption:{
             loop: true
             },
             iconList:['https://s1.sencdn.com/web/icons/black/0@1x.png',
                      'https://s1.sencdn.com/web/icons/black/1@1x.png',
                      'https://s3.sencdn.com/web/icons/black/2@1x.png',
                      'https://s4.sencdn.com/web/icons/black/3@1x.png',
                      'https://s5.sencdn.com/web/icons/black/4@1x.png',
                      'https://s1.sencdn.com/web/icons/black/5@1x.png',
                      'https://s1.sencdn.com/web/icons/black/6@1x.png',
                      'https://s1.sencdn.com/web/icons/black/7@1x.png',
                      'https://s1.sencdn.com/web/icons/black/8@1x.png',
                      'https://s4.sencdn.com/web/icons/black/9@1x.png',
                      'https://s4.sencdn.com/web/icons/black/10@1x.png',
                      'https://s1.sencdn.com/web/icons/black/11@1x.png',
                      'https://s1.sencdn.com/web/icons/black/12@1x.png',
                      'https://s1.sencdn.com/web/icons/black/13@1x.png',
                      'https://s1.sencdn.com/web/icons/black/14@1x.png',
                      'https://s1.sencdn.com/web/icons/black/15@1x.png',
                      'https://s1.sencdn.com/web/icons/black/16@1x.png',
                      'https://s1.sencdn.com/web/icons/black/17@1x.png',
                      'https://s1.sencdn.com/web/icons/black/18@1x.png',
                      'https://s4.sencdn.com/web/icons/black/19@1x.png',
                      'https://s5.sencdn.com/web/icons/black/20@1x.png',
                      'https://s5.sencdn.com/web/icons/black/21@1x.png',
                      'https://s5.sencdn.com/web/icons/black/22@1x.png',
                      'https://s5.sencdn.com/web/icons/black/23@1x.png',
                      'https://s5.sencdn.com/web/icons/black/24@1x.png',
                      'https://s5.sencdn.com/web/icons/black/25@1x.png',
                      'https://s5.sencdn.com/web/icons/black/26@1x.png',
                      'https://s5.sencdn.com/web/icons/black/27@1x.png',
                      'https://s5.sencdn.com/web/icons/black/28@1x.png',
                      'https://s5.sencdn.com/web/icons/black/29@1x.png',
                      'https://s5.sencdn.com/web/icons/black/30@1x.png',
                      'https://s5.sencdn.com/web/icons/black/31@1x.png',
                      'https://s5.sencdn.com/web/icons/black/32@1x.png',
                      'https://s5.sencdn.com/web/icons/black/33@1x.png',
                      'https://s5.sencdn.com/web/icons/black/34@1x.png',
                      'https://s5.sencdn.com/web/icons/black/35@1x.png',
                      'https://s5.sencdn.com/web/icons/black/36@1x.png',
                      'https://s1.sencdn.com/web/icons/black/37@1x.png',
                      'https://s5.sencdn.com/web/icons/black/38@1x.png',
                      'https://s5.sencdn.com/web/icons/black/99@1x.png'
                      ]  
            }
     }
  
    
}
</script>

<style lang="stylus" scoped>
    .weather
        position: relative
        overflow: hidden
        height:0
        padding-bottom: 50%
        margin:.04 rem
        border-radius:.2 rem
        .weather-img
            width:100%
            opacity:.95
        .info-wrapper
            display: flex
            .weather-left
                position:absolute
                flex:1
                left:0
                top:0
                width:3 rem
                .img-wrapper
                    margin:.3rem auto
                    width:1.2rem
                    height: 1.2rem
                    .left-weather-logo
                        width:100%                   
                .left-weather-info
                    text-align:center
                    margin-top:.1rem
                    color:#fff
                    font-size:.36 rem
                    font-weight:700
            .weather-right
                position: absolute
                min-width: 4 rem
                top:0
                right:0
                color:#fff
                .city
                    font-size: .7 rem
                    text-align: center
                    margin-top: .4 rem
                    .temperature
                        margin-left: .2 rem
                .temperature-today
                    margin-top: .3 rem
                    font-size:.36 rem
                    text-align:center

                .wind
                    margin-top:.3 rem
                    font-size:.35 rem
                    text-align:center

        

</style>
