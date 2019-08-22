<template>    
    <router-link tag="div" to="/weatherdetail" class="weather">
        <swiper :options="swiperOption"> 
            <swiper-slide>
                <img class="weather-img" src="https://api.neweb.top/bing.php?type=rand"/>
                    <div class="info-wrapper">
                            <div class="weather-left">
                                <div class="img-wrapper">
                                    <!-- <img class="left-weather-logo" :src="this.url"/> -->
                                    <img class="left-weather-logo" :src="this.iconList[this.$store.state.weatherList.img]"/>
                                </div>
                                <div class="left-weather-info">{{this.$store.state.weatherList.weather}}</div>
                            </div>

                            <div class="weather-right">
                                <div class="city">{{this.$store.state.weatherList.city}}  <!--同步Vuex中的数据-->
                                    <span class="temperature">{{this.$store.state.weatherList.temp}}
                                        <span>&#176;</span>
                                    </span>                                   
                                </div>
                                <div class="temperature-today"> 今天：{{this.$store.state.weatherList.templow}}~{{this.$store.state.weatherList.temphigh}}
                                    <span>&#8451;</span>
                                </div>
                                <div class="wind">{{this.$store.state.weatherList.winddirect + this.$store.state.weatherList.windpower}}</div>
                            </div>      
                    </div>
            </swiper-slide>
            <swiper-slide>
                <img class="weather-img" src="http://img0.imgtn.bdimg.com/it/u=4221305071,2333872119&amp;fm=26&amp;gp=0.jpg"/>
                    <div class="info-wrapper">
                            <div class="weather-left">
                                <div class="img-wrapper">  
                                    <!-- <img class="left-weather-logo" :src="this. iconList[this.$store.state.weatherList.img].Url"/> -->
                                    <img class="left-weather-logo" :src="this.iconList[this.$store.state.weatherList.img]"/>
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
            number:'',
            url:'',
            swiperOption:{
             loop: true
             },
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
                //  iconList:[ { id:'0',
                //             text:'晴',
                //             Url:'https://s1.sencdn.com/web/icons/black/0@1x.png'
                //             },
                //             { id:'1',
                //             text:'多云',
                //             Url:'https://s5.sencdn.com/web/icons/black/4@1x.png'
                //             },
                //             { id:'2',
                //             text:'阴',
                //             Url:'https://s4.sencdn.com/web/icons/black/9@1x.png'
                //             },
                //             { id:'3',
                //             text:'阵雨',
                //             Url:'https://s4.sencdn.com/web/icons/black/10@1x.png'
                //             },
                //             { id:'4',
                //             text:'雷阵雨',
                //             Url:'https://s4.sencdn.com/web/icons/black/11@1x.png'
                //             },
                //             { id:'5',
                //             text:'雷阵雨伴有冰雹',
                //             Url:'https://s1.sencdn.com/web/icons/black/12@1x.png'
                //             },
                //             { id:'6',
                //             text:'雨夹雪',
                //             Url:'https://s5.sencdn.com/web/icons/black/20@1x.png'
                //             },
                //             { id:'7',
                //             text:'小雨',
                //             Url:'https://s1.sencdn.com/web/icons/black/13@1x.png'
                //             },
                //             { id:'8',
                //             text:'中雨',
                //             Url:'https://s1.sencdn.com/web/icons/black/0@1x.png'
                //             },
                //             { id:'9',
                //             text:'大雨',
                //             Url:'https://s5.sencdn.com/web/icons/black/4@1x.png'
                //             },
                //             { id:'10',
                //             text:'暴雨',
                //             Url:'https://s4.sencdn.com/web/icons/black/9@1x.png'
                //             },
                //             { id:'11',
                //             text:'大暴雨',
                //             Url:'https://s4.sencdn.com/web/icons/black/10@1x.png'
                //             },
                //             { id:'12',
                //             text:'特大暴雨',
                //             Url:'https://s4.sencdn.com/web/icons/black/11@1x.png'
                //             },
                //             { id:'13',
                //             text:'阵雪',
                //             Url:'https://s1.sencdn.com/web/icons/black/12@1x.png'
                //             },
                //             { id:'14',
                //             text:'小雪',
                //             Url:'https://s5.sencdn.com/web/icons/black/20@1x.png'
                //             },
                //             { id:'15',
                //             text:'中雪',
                //             Url:'https://s1.sencdn.com/web/icons/black/13@1x.png'
                //             },
                //             { id:'16',
                //             text:'大雪',
                //             Url:'https://s1.sencdn.com/web/icons/black/12@1x.png'
                //             },
                //             { id:'17',
                //             text:'暴雪',
                //             Url:'https://s5.sencdn.com/web/icons/black/20@1x.png'
                //             },
                //             { id:'18',
                //             text:'雾',
                //             Url:'https://s1.sencdn.com/web/icons/black/13@1x.png'
                //             }
                //  ]  
            }
     },
     methods:{
         geturl (){
            this.number=this.$store.state.weatherList.img
            // console.log(this.number)
            //  console.log(this.$store.state.weatherList.img)
            //  console.log(this. iconList[this.$store.state.weatherList.img].Url)
            // console.log(this.iconList[this.number])
            //this.url=this.iconList[this.$store.state.weatherList.img].Url

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
