<template>
   <div class="list">
       <div class="list-item" v-if="showCity1">
           <div class="city border-bottom">
               <span class="city-name">{{this.$store.state.addCityList[0].city}}</span>
               <span class="iconfont setting" v-show="showSetting" 
                @click="handleDeleteClick1">&#xe690;</span>
           </div>
           <router-link tag="div" @click.native="handleDetail1()"
           to="/weatherdetail">
                <div class="weather">
                    <div class="weather-left">
                        <img class="weather-img" :src="this.iconList[this.$store.state.addCityList[0].img]"  />
                    </div>
                    <div class="weather-right">
                        <div class="height">{{this.$store.state.addCityList[0].daily[0].day.temphigh}}<span>&#176;</span></div>
                        <div class="low">{{this.$store.state.addCityList[0].daily[0].night.templow}}<span>&#176;</span></div>
                    </div>
                </div>
                <div class="text">{{this.$store.state.addCityList[0].weather}}</div>
                <div class="remind">提醒城市</div>
            </router-link>
        </div>
       
        <div class="list-item1" v-if="showCity2">
           <div class="city border-bottom">{{this.$store.state.addCityList[1].city}}
               <span class="iconfont setting" v-show="showSetting" 
                @click="handleDeleteClick2()">&#xe690;</span>
           </div>
           <router-link tag="div" @click.native="handleDetail2()" 
           to="/weatherdetail">
                <div class="weather">
                    <div class="weather-left">
                        <img class="weather-img" :src="this.iconList[this.$store.state.addCityList[1].img]"  />
                    </div>
                    <div class="weather-right">
                        <div class="height">{{this.$store.state.addCityList[1].temphigh}}<span>&#176;</span></div>
                        <div class="low">{{this.$store.state.addCityList[1].templow}}<span>&#176;</span></div>
                    </div>
                </div>
                <div class="text">{{this.$store.state.addCityList[1].weather}}</div>
            </router-link>
        </div>

       <div class="list-item1" v-if="showCity3">
           <div class="city border-bottom">{{this.$store.state.addCityList[2].city}}
                <span class="iconfont setting" v-show="showSetting" 
                @click="handleDeleteClick3">&#xe690;</span>
           </div>
           <router-link tag="div" @click.native="handleDetail3()"
           to="/weatherdetail">
                <div class="weather">
                    <div class="weather-left">
                        <img class="weather-img" :src="this.iconList[this.$store.state.addCityList[2].img]"  />
                    </div>
                    <div class="weather-right">
                        <div class="height">{{this.$store.state.addCityList[2].temphigh}}<span>&#176;</span></div>
                        <div class="low">{{this.$store.state.addCityList[2].templow}}<span>&#176;</span></div>
                    </div>
                </div>
                <div class="text">{{this.$store.state.addCityList[2].weather}}</div>
            </router-link>
        </div>

       <div class="list-item1" v-if="showCity4">
           <div class="city border-bottom">{{this.$store.state.addCityList[3].city}}
                <span class="iconfont setting" v-show="showSetting" 
                @click="handleDeleteClick4">&#xe690;</span>
           </div>
           <router-link tag="div" @click.native="handleDetail4()" 
           to="/weatherdetail">
                 <div class="weather">
                    <div class="weather-left">
                        <img class="weather-img" :src="this.iconList[this.$store.state.addCityList[3].img]"  />
                    </div>
                    <div class="weather-right">
                        <div class="height">{{this.$store.state.addCityList[3].temphigh}}<span>&#176;</span></div>
                        <div class="low">{{this.$store.state.addCityList[3].templow}}<span>&#176;</span></div>
                    </div>
                </div>
                <div class="text">{{this.$store.state.addCityList[3].weather}}</div>
            </router-link>
        </div>

       <div class="list-item1" v-if="showCity5">
           <div class="city border-bottom">{{this.$store.state.addCityList[4].city}}
                <span class="iconfont setting" v-show="showSetting" 
                @click="handleDeleteClick5">&#xe690;</span>
           </div>
           <router-link tag="div" @click.native="handleDetail5()" 
           to="/weatherdetail">
                <div class="weather">
                    <div class="weather-left">
                        <img class="weather-img" :src="this.iconList[this.$store.state.addCityList[4].img]"  />
                    </div>
                    <div class="weather-right">
                        <div class="height">{{this.$store.state.addCityList[4].temphigh}}<span>&#176;</span></div>
                        <div class="low">{{this.$store.state.addCityList[4].templow}}<span>&#176;</span></div>
                    </div>
                </div>
                <div class="text">{{this.$store.state.addCityList[4].weather}}</div>
            </router-link>
        </div>

       <div class="list-item1" v-if="showCity6">
           <div class="city border-bottom">{{this.$store.state.addCityList[5].city}}
                <span class="iconfont setting" v-show="showSetting" 
                @click="handleDeleteClick6">&#xe690;</span>
           </div>
           <router-link tag="div" @click.native="handleDetail6()" 
           to="/weatherdetail">
                <div class="weather">
                    <div class="weather-left">
                        <img class="weather-img" :src="this.iconList[this.$store.state.addCityList[5].img]"  />
                    </div>
                    <div class="weather-right">
                        <div class="height">{{this.$store.state.addCityList[5].temphigh}}<span>&#176;</span></div>
                        <div class="low">{{this.$store.state.addCityList[5].templow}}<span>&#176;</span></div>
                    </div>
                </div>
                <div class="text">{{this.$store.state.addCityList[5].weather}}</div>
            </router-link>
        </div>

        <div class="list-item1" v-if="showCity7">
           <div class="city border-bottom">{{this.$store.state.addCityList[6].city}}
               <span class="iconfont setting" v-show="showSetting" 
                @click="handleDeleteClick7">&#xe690;</span>
           </div>
           <router-link tag="div" @click.native="handleDetail7()" 
           to="/weatherdetail">
                <div class="weather">
                    <div class="weather-left">
                        <img class="weather-img" :src="this.iconList[this.$store.state.addCityList[6].img]"  />
                    </div>
                    <div class="weather-right">
                        <div class="height">{{this.$store.state.addCityList[6].temphigh}}<span>&#176;</span></div>
                        <div class="low">{{this.$store.state.addCityList[6].templow}}<span>&#176;</span></div>
                    </div>
                </div>
                <div class="text">{{this.$store.state.addCityList[6].weather}}</div>
           </router-link>
        </div>

       <div class="list-item1" v-if="showCity8">
           <div class="city border-bottom">{{this.$store.state.addCityList[7].city}}
                <span class="iconfont setting" v-show="showSetting" 
                @click="handleDeleteClick8">&#xe690;</span>
           </div>
           <router-link tag="div" @click.native="handleDetail8()" 
           to="/weatherdetail">
                <div class="weather">
                    <div class="weather-left">
                        <img class="weather-img" :src="this.iconList[this.$store.state.addCityList[7].img]"  />
                    </div>
                    <div class="weather-right">
                        <div class="height">{{this.$store.state.addCityList[7].temphigh}}<span>&#176;</span></div>
                        <div class="low">{{this.$store.state.addCityList[7].templow}}<span>&#176;</span></div>
                    </div>
                </div>
                <div class="text">{{this.$store.state.addCityList[7].weather}}</div>
            </router-link>
        </div>
       <div class="list-item1" v-if="showCity9">
           <div class="city border-bottom">{{this.$store.state.addCityList[8].city}}
                <span class="iconfont setting" v-show="showSetting" 
                @click="handleDeleteClick9">&#xe690;</span>
           </div>
           <router-link tag="div" @click.native="handleDetail9()" 
           to="/weatherdetail">
                <div class="weather">
                    <div class="weather-left">
                        <img class="weather-img" :src="this.iconList[this.$store.state.addCityList[8].img]"  />
                    </div>
                    <div class="weather-right">
                        <div class="height">{{this.$store.state.addCityList[8].temphigh}}<span>&#176;</span></div>
                        <div class="low">{{this.$store.state.addCityList[8].templow}}<span>&#176;</span></div>
                    </div>
                </div>
                <div class="text">{{this.$store.state.addCityList[8].weather}}</div>
            </router-link>
        </div>
       <div class="list-item1" v-if="showCity10">
           <div class="city border-bottom">{{this.$store.state.addCityList[9].city}}
                <span class="iconfont setting" v-show="showSetting" 
                @click="handleDeleteClick10">&#xe690;</span>
           </div>
           <router-link tag="div" @click.native="handleDetail10()" to="/weatherdetail">
                <div class="weather">
                    <div class="weather-left">
                        <img class="weather-img" :src="this.iconList[this.$store.state.addCityList[8].img]"  />
                    </div>
                    <div class="weather-right">
                        <div class="height">{{this.$store.state.addCityList[8].temphigh}}<span>&#176;</span></div>
                        <div class="low">{{this.$store.state.addCityList[8].templow}}<span>&#176;</span></div>
                    </div>
                </div>
                <div class="text">{{this.$store.state.addCityList[8].weather}}</div>
            </router-link>
        </div>

       <router-link tag="div" to="addmorecity" class="list-item2">
           <p class="iconfont more">&#xe602;</p>
       </router-link>
       
   </div>
</template>
<script>
export default {
    name:'CityList',
    data (){
        return{
            showSetting:false,
            showCity1:true,
            showCity2:false,
            showCity3:false,
            showCity4:false,
            showCity5:false,
            showCity6:false,
            showCity7:false,
            showCity8:false,
            showCity9:false,
            showCity10:false,

            showcityList:false,
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
                    ] }
        },
        created (){
            this.bus.$on('addCity', ()=>{
                console.log('监听到触发') 
                this.handleAddmodul()  
            }),
            this.bus.$on('showSet', ()=>{
                console.log('监听到删除事件') 
                this.getShowSet()
            })

                
            
        },
        computed:{
            calculate (){
                console.log('列表长度为'+this.$store.state.addCityList.length)
                return this.$store.state.addCityList.length
            }
        },
        methods:{
            handleAddmodul (){
                console.log('处理增加')
                 switch(this.calculate){
                     case 1:
                        console.log('city 1 show')
                        this.showCity1=true
                        break
                     case 2:
                        this.showCity2=true
                        console.log('city 2 show')
                        break
                     case 3:
                        this.showCity3=true
                        console.log('city 3 show')
                        break
                     case 4:
                        this.showCity4=true
                        console.log('4')
                        break
                     case 5:
                        this.showCity5=true
                        console.log('5')
                        break
                     case 6:
                        this.showCity6=true
                        console.log('6')
                        break
                    case 7:
                        this.showCity7=true
                        console.log('7')
                        break
                     case 8:
                        this.showCity8=true
                        console.log('8')
                        break
                     case 9:
                        this.showCity9=true
                        console.log('9')
                        break
                    case 10:
                        this.showCity10=true
                        console.log('10')
                        break
                 }

            },
           getShowSet(){
               this.showSetting=!this.showSetting
           },
           handleDeleteClick1 (){
               this.showCity1=false
           },
            handleDeleteClick2 (){
               this.showCity2=false
           },
            handleDeleteClick3 (){
               this.showCity3=false
           },
            handleDeleteClick4 (){
               this.showCity4=false
           },
            handleDeleteClick5 (){
               this.showCity5=false
           },
            handleDeleteClick6 (){
               this.showCity6=false
           },
            handleDeleteClick7 (){
               this.showCity7=false
           },
           handleDeleteClick8 (){
               this.showCity8=false
           },
            handleDeleteClick9 (){
               this.showCity9=false
           },
            handleDeleteClick10 (){
               this.showCity10=false
           },
            handleDetail1 (){
                this.bus.$emit('Trans',this.$store.state.addCityList[0].city)
            },
           handleDetail2 (){
               this.bus.$emit('Trans',this.$store.state.addCityList[1].city)
           },
           handleDetail3 (){
                this.bus.$emit('Trans',this.$store.state.addCityList[2].city)
            },
           handleDetail4 (){
               this.bus.$emit('Trans',this.$store.state.addCityList[3].city)
           },
           handleDetail5 (){
                this.bus.$emit('Trans',this.$store.state.addCityList[4].city)
            },
           handleDetail6 (){
               this.bus.$emit('Trans',this.$store.state.addCityList[5].city)
           },
           handleDetail7 (){
                this.bus.$emit('Trans',this.$store.state.addCityList[6].city)
            },
           handleDetail8 (){
               this.bus.$emit('Trans',this.$store.state.addCityList[7].city)
           },
           handleDetail9 (){
                this.bus.$emit('Trans',this.$store.state.addCityList[8].city)
            },
           handleDetail10 (){
               this.bus.$emit('Trans',this.$store.state.addCityList[9].city)
           }
        },
}
</script>

<style lang="stylus" scoped>
    .border-bottom
        &:before
            border-color: #ccc
            border-width: .03rem
    .list
        background:green
        margin-top:.2rem
        padding-left:.1rem

        
        .list-item
            float:left
            width:30%
            margin:.1rem
            height:3rem
            background:white
            .city
                position:relative
                height:.6rem 
                line-height:.6rem 
                text-align:center 
                font-size:.32rem 
                .city-name
                    color:blue
                .setting
                    position:absolute
                    right:0
                    top:-.2rem 
                    font-size:.4rem 
            .weather
                height:1.3rem 
                display:flex
                .weather-left
                    width:1.5rem 
                    .weather-img
                        margin-left:.2rem 
                        margin-top:.15rem
                .weather-right 
                    width:.71rem 
                    .height
                        width:.71rem 
                        height:.3rem
                        line-height:.3rem
                        margin-top:.2rem     
                    .low
                        width:.71rem 
                        height:.3rem
                        line-height:.3rem
                        margin-top:.2rem 
            .text
                width:100%
                height:.4rem 
                line-height:.4rem 
                text-align:center 
            .remind
                width:60%
                height:.35rem 
                line-height:.38rem
                background:#0066FF
                margin-top:.3rem
                margin-left:.4rem
                color:white
                font-size:.2rem 
                text-align:center
        .list-item1
            float:left
            width:30%
            margin:.1rem
            height:3rem
            background:white
            .city
                position:relative
                height:.6rem 
                line-height:.6rem 
                text-align:center 
                font-size:.32rem 
                .setting
                    position:absolute
                    right:0
                    top:-.2rem 
                    font-size:.4rem 
            .weather
                height:1.3rem 
                display:flex
                .weather-left
                    width:1.5rem 
                    .weather-img
                        margin-left:.2rem 
                        margin-top:.15rem
                .weather-right 
                    width:.71rem 
                    .height
                        width:.71rem 
                        height:.3rem
                        line-height:.3rem
                        margin-top:.2rem     
                    .low
                        width:.71rem 
                        height:.3rem
                        line-height:.3rem
                        margin-top:.2rem 
            .text
                width:100%
                height:.4rem 
                line-height:.4rem 
                text-align:center 
        .list-item2
            float:left
            width:28%
            margin:.1rem
            height:3rem
            border:.1rem dashed #AAAAAA
            .more
                height:3rem
                line-height:3rem 
                font-size:1rem
                text-align:center
                color:#AAAAAA




</style>