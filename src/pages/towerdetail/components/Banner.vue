<template>
    <div>
        <div class="banner" @click="handleBannerclick">
            <img  class="banner-img" src="//img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_600x330_2285872d.jpg"/>
            <div class="banner-info">
                <div class="banner-title">
                    东方明珠(AAAAA景区)
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe658;</span> 8
                </div>
            </div>
        </div>
        <common-gallary :imgs="imgs" 
        v-show="showGallary"
        @close="handleGallaryClose">
        </common-gallary>
    </div>
</template>
<script>
import CommonGallary from '@/common/gallary/Gallary'
export default {
    name:'DetailBanner',
    data (){
        return{
            showGallary:false,
            imgs:[       'http://img1.qunarzz.com/tuan/team2/1507/2c/83e0e0e7ae082a.jpg_350x240_d1d791ef.jpg',
                         'http://img1.qunarzz.com/sight/p0/1411/b2/ffd511789081a81d84379ce6891ae623.water.jpg_350x240_920cefd6.jpg',
                         'http://img1.qunarzz.com/sight/p0/1411/a4/9bcc1c2b03a19c95055474bf637de92e.water.jpg_350x240_b4e9a3c9.jpg',
                         'http://img1.qunarzz.com/sight/p0/1411/3f/5d6caee48481e3248ba34636e2e50162.water.jpg_350x240_9e494668.jpg',
                         'http://img1.qunarzz.com/sight/p0/1411/ec/86594fa9af20fda6737b2e9d8b49b840.water.jpg_350x240_2e32b59d.jpg',
                         'http://img1.qunarzz.com/sight/p0/1411/5a/0aa1dbac5ca7c134dbcca4578d3eb82f.water.jpg_350x240_22058fa2.jpg',
                         'http://img1.qunarzz.com/sight/p0/1411/3e/0faaac0e6a277700dbb77a7a3c3a1abd.water.jpg_350x240_98e2cba6.jpg',
                         'http://img1.qunarzz.com/sight/p0/1411/fc/8550d4210f56c4f6b8993c60f5052ae7.water.jpg_350x240_f4dc6ad0.jpg'
                 ]
        }
    },
    methods:{
        handleBannerclick (){
            this.showGallary=true
        },
        handleGallaryClose (){
            this.showGallary=false
        }
    },
    components:{
        CommonGallary
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position:relative
        overflow:hidden
        height:0
        padding-bottom:55%
        .banner-img
            width:100%
        .banner-info
            display:flex
            position:absolute
            left:0
            bottom:0
            right:0
            line-height: .6 rem
            color:#fff
            background-image: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
            .banner-title
                flex:1
                font-size: .32 rem
                padding-left:.2 rem 
                padding-right: .2 rem
            .banner-number
                height: .32 rem
                line-height: .32 rem
                margin-top: .14 rem
                padding-left:.4 rem 
                padding-right: .4 rem                
                border-radius: .2 rem 
                background:rgba(0,0,0,0.8)
                font-size: .24 rem
                .banner-icon
                    font-size: .1 rem
</style>

