<template>
    <div>
        <div class="banner" @click="handleBannerclick">
            <img  class="banner-img" src="//img1.qunarzz.com/sight/p0/1906/19/19b7939928a0200da3.img.jpg_600x330_41c60a4a.jpg"/>
            <div class="banner-info">
                <div class="banner-title">
                    上海海昌海洋公园
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
            imgs:[       'http://img1.qunarzz.com/sight/p0/1906/19/19b7939928a0200da3.img.jpg_350x240_8d777daf.jpg',
                         'http://img1.qunarzz.com/sight/p0/1908/72/72b2101be52c621ca3.img.jpg_350x240_ad9a20ae.jpg',
                         'http://img1.qunarzz.com/sight/p0/1908/1e/1ec7fd1913e0540ba3.img.jpg_350x240_4a686176.jpg',
                         'http://img1.qunarzz.com/sight/p0/1908/1e/1e5cf074e657f7c1a3.img.jpg_350x240_7c6945da.jpg',
                         'http://img1.qunarzz.com/sight/p0/1908/de/de1150af379fc8bba3.img.jpg_350x240_6121e7d6.jpg',
                         'http://img1.qunarzz.com/sight/p0/1908/a2/a2424506ca989668a3.img.jpg_350x240_c6ee2666.jpg',
                         'http://img1.qunarzz.com/sight/p0/1908/69/698f6a3f131f791fa3.img.jpg_350x240_2fffe219.jpg',
                         'http://img1.qunarzz.com/sight/p0/1908/ed/ed25429d16ec0f54a3.img.jpg_350x240_f714786f.jpg'
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

