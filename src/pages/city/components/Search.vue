<template>
    <div>
        <div class="search">
            <input v-model="keyword" class="seach-input" type="text" 
            placeholder="输入城市名或拼音"/>
        </div>

        <div class="search-content" ref="search"
         v-show="keyword">
            <ul>
                <li class="search-item border-bottom" 
                v-for="item of list" :key="item.id"
                @click="handleCityClick(item.name)">
                    {{item.name}}
                </li>
                <li class="search-item border-bottom"
                v-show="!list.length">
                    没有找到匹配项
                    
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
    name:'CitySearch',
    props:{
        cities:Object
    },
    data (){
        return{
            keyword: '',
            list: [],
            timer: null
        }
    },
    mounted (){
        this.scroll=new Bscroll(this.$refs.search)
    },
    methods:{
        handleCityClick (city){
            // alert(city)
            this.$store.dispatch('changeCity',city),
            this.$router.push('/')
        }
    },

    watch:{
        keyword (){
            // 定义节流函数
            if (this.timer) {
                clearTimeout(this.timer)
            }
            if (!this.keyword){
                this.list= []
                return
            }
            this.timer=setTimeout(() =>{
                const result=[]
                for (let i in this.cities){
                    this.cities[i].forEach((value) => {
                        if(value.spell.indexOf(this.keyword) >-1 ||
                            value.name.indexOf(this.keyword) > -1)
                            {
                                result.push(value)
                            }                       
                     })
                }
                this.list = result
            },100)     // 延时函数 利用箭头函数延时100ms
        }       
    },
    
    
}
</script>

<style lang="stylus" scoped>
    @import '../../../assets/styles/varibles.styl'
    .search
        height: .72 rem
        padding: 0 .1 rem
        background: $bgColor
        .seach-input
            box-sizing: border-box
            height: .62 rem
            line-height: .62 rem
            width: 95%
            margn-top: .5 rem
            margin-left: .2 rem
            margin-right: .2 rem
            text-align: center
            border-radius: .1 rem
            color:#666
    .search-content
        z-index:1
        overflow:hidden
        position:absolute
        top:1.58 rem
        left:0
        right:0
        bottom:0
        background:#eee
        .search-item
            line-height : .62 rem
            padding-left: .2 rem  
            background: #fff
            color: #666



</style>

