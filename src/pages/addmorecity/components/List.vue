<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class="button">{{this.$store.state.city}}</div>
                        <!-- 使用vuex中store存储的数据 -->
                    </div>                
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot"
                    :key="item.id"
                    @click="handleCityClick(item.name)">
                          <!-- 绑定事件，并且传入城市的名称 -->
                        <div class="button">{{item.name}}</div>
                    </div>
                                    
                </div>
            </div>
            <div class="area" v-for="(item,key) of cities"
            :key="key"
            :ref="key">
                <div class="title border-topbottom">{{key}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="inneritem of item"
                    :key="inneritem.id"
                    @click="handleCityClick(inneritem.name)">  <!--绑定事件，并且传入城市的名称-->
                    {{inneritem.name}}    <!--二层循环，且父级的key与子级的key不影响-->
                    </div>
                   
                </div>
            </div>
     </div>
        
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
import axios from 'axios' 
export default {
    name:'CityList',
    props:{
        cities:Object,
        hot:Array,
        letter:String
    },
    methods:{
        handleCityClick (city){
             axios.get('/api/query?appkey=661d0fffc21f971f&city=' + city)
                .then( res=>{
                     console.log(res.data.result +'来自于添加城市页面')
                     this.$store.commit('getAddCityList',res.data.result)
                      this.bus.$emit('addCity')
                      this.$router.push('/addcity') 
                    })
        }
    },
    mounted (){
        this.scroll=new Bscroll(this.$refs.wrapper)
    },
    watch:{
        letter (){
            // console.log(this.letter)
            if (this.letter){
                const element =this.$refs[this.letter][0] //获取到dom 中letter对应的区域,是一个数组，但是下面的srollToElemnet要求是一个字母，所以用下标取一位即可
                this.scroll.scrollToElement(element)  //scroll自带函数，自动滚到所处字母处
               
            }

        }
    }

}
</script>

<style lang="stylus" scoped>
    .border-topbottom
        &:before
            border-color: #ccc
        &:after
            border-color: #ccc
    .border-bottom
        &:before
            border-color: #ccc
            border-width: .03 rem
    .list
        position:absolute
        overflow:hidden
        top:1.58 rem
        right:0
        bottom:0
        left:0       
        .title
            line-height: .56 rem
            background: #eee
            padding-left: .2 rem
            color:#666
            font-size: .26 rem
        .button-list
            overflow: hidden       
            padding-top: .1 rem 
            padding-bottom: .1 rem
            padding-left: .1 rem
            padding-right: .6 rem
            .button-wrapper
                float:left
                width: 33.33%  
                        
                .button
                    height: .3rem
                    margin: .1 rem
                    padding: .1 rem 
                    text-align:center
                    border-color: #ccc
                    border-style: solid
                    border-width: .02 rem           
                    border-radius: .06 rem
        .item-list
            .item
                line-height: .76 rem
                padding-left: .2 rem    
              
</style>

