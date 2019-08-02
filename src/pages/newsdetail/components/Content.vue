<template>
    <div class="news-content"  v-html="newslist[this.$route.params.id].content">

    </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
    name:'DetailContent',
    computed:{
        newslist (){
            // console.log(this.$store.state.newslist)
            // console.log(this.$route.params.id)
            return this.$store.state.newslist

        }
    }
    
}
</script>
<style lang="stylus" >
    .news-content
        padding:.2rem .3rem 0 .3rem
        line-height:.6rem
        font-size:.36rem
        text-align:justify
        img{
           width:100%
        }
        video{
            width:100%
        }
        

</style>

