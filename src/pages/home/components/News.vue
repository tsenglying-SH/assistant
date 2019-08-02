<template>
   <div>
       <div class="title">新闻热点</div>
       <ul>
           <router-link tag="li" :to="'/newsdetail/'+ index" class="item border-bottom" 
           v-for ="(item,index) of newslist"
           :key="index">    <!--1像素边框-->
               <div class="item-wrapper">
                   <h3 class="item-title">{{item.title}}</h3>                 
                    <div class="item-message">
                        <span>{{item.time}}</span>
                        <span class="message-src">{{item.src}}</span>
                    </div>
               </div> 
               <img class="item-img" :src="item.pic"/>
           </router-link>
           <!-- <router-link tag="li" to="/newsdetail" class="item border-bottom" > -->
               <!-- <div class="item-wrapper">
                   <h3 class="item-title">{{this.$store.state.newslist[0].title}}</h3>                 
                    <div class="item-message">
                        <span>{{this.$store.state.newslist[0].time}}</span>
                        <span class="message-src">{{this.$store.state.newslist[0].src}}</span>
                    </div>
               </div> 
               <img class="item-img" :src="this.$store.state.newslist[0].pic"/>
           </router-link> --> 
           
       </ul>
   </div>
</template>

<script>
export default {
    name:'HomeNews',
    data () {
        return{
            
        }
    },
    computed:{
        newslist (){
            return this.$store.state.newslist
        }
    }
}
</script>
 
<style lang="stylus" scoped >
    .border-bottom
        &:before
            border-color: #ccc
            border-width: .02 rem
    .title
        line-height:.8 rem
        background:#eee
        text-indent: .2 rem
        
    .item
        overflow: hidden
        display: flex
        height: 1.8 rem
        margin: .3 rem
        position: relative
        .item-img
            width:2.28 rem
            height:1.62 rem
        .item-wrapper
            flex:1
            height: 1.8 rem
            min-width:0
        .item-title
            line-height:.45 rem
            font-size: .32 rem
            margin-right: .2 rem
        .item-message
            position:absolute
            bottom:.2rem
            line-height: .12 rem
            font-size:.12 rem  
            color:#bbb
            .message-src
                margin-left:.7rem
        
</style>

