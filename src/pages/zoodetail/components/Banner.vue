<template>
    <div>
        <div class="banner" @click="handleBannerclick">
            <img  class="banner-img" src="//img1.qunarzz.com/sight/p0/1908/60/60a42982845f7bf1a3.img.jpg_600x330_83d4b2c9.jpg"/>
            <div class="banner-info">
                <div class="banner-title">
                    上海野生动物园
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
            imgs:[       'http://img1.qunarzz.com/sight/p0/1908/60/60a42982845f7bf1a3.img.jpg_r_800x800_6df8eab8.jpg',
                         'http://img1.qunarzz.com/sight/p0/1908/9d/9d931ae072d967bba3.img.jpg_350x240_ac86279d.jpg',
                         'http://img1.qunarzz.com/sight/p0/1908/ae/ae1ab25fa3d7de91a3.img.jpg_350x240_29e8c51c.jpg',
                         'http://img1.qunarzz.com/sight/p0/1908/ae/ae1ab25fa3d7de91a3.img.jpg_350x240_29e8c51c.jpg',
                         'http://img1.qunarzz.com/sight/p0/1908/c8/c88ef92a5beac2c2a3.img.jpg_350x240_28ffb76e.jpg',
                         'http://img1.qunarzz.com/sight/p0/1908/64/642ddf089422b4fca3.img.jpg_350x240_5537cca8.jpg',
                         'http://img1.qunarzz.com/sight/p0/1904/18/18699dab00a7ffc1a3.img.jpg_350x240_6b951c90.jpg',
                         'http://img1.qunarzz.com/sight/p0/1904/ce/ce40daced23ef5cca3.img.jpg_350x240_993797a6.jpg'
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

