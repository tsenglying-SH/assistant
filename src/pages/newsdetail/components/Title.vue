<template>
    <div class="artical-title">
        <h1 class="title-header">{{newslist[this.$route.params.id].title}}</h1>
        <div class="author">
            <div class="header-left">
                <img class="avater" src="https://p3.pstatp.com/thumb/16ab00080bf603f06ee3"/>
                <div class="author-info">
                    <span class="autor-name">{{newslist[this.$route.params.id].src}}</span>
                    <img class="v-info-0" src="http://s1.pstatp.com/growth/mobile_detail/image/v-0.tl0z9x5L.png"/>
                </div>
            </div>
            <div class="header-right">
                <span class="artical-publish-time">{{newslist[this.$route.params.id].time}}</span>
            </div>
        </div>
    </div> 
</template>
<script>
export default {
    name:'DetailTitle',
   
    computed:{
        newslist (){
            // console.log(this.$store.state.newslist)
            // console.log(this.$route.params.id)
            return this.$store.state.newslist

        }
    }
    
}
</script>

<style lang="stylus" scoped>
    .artical-title
        height 2.3rem
        padding:0 .3rem
        margin-top:.15rem
        line-height:.68rem 
        font-size:.48rem
        .title-header 
            height 1.4rem
            overflow:hidden
        .author
            position:relative
            margin-top:.2rem 
            display:flex
            justify-content:space-between
            .header-left
                display:flex
                align-items:center
                .avater
                    width:.48 rem
                    height:.48 rem
                    border-radius: .24rem
                    margin: auto
                    display: inline-block
                .author-info
                    margin-left:.12rem
                    align-self:center
                    .autor-name
                        font-size:.28rem
                        color:#222
                        font-weight:700
                        margin-right:.12rem
                    .v-info-0                      
                        width:.28rem
                        width:.28rem
            .artical-publish-time
                height:.32rem
                line-height:.32rem 
                font-size:.24rem
                color:#999999


</style>

