<template>
    <div>
        <div class="banner" @click="handleBannerclick">
            <img  class="banner-img" src="//img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_600x330_866232e3.jpg"/>
            <div class="banner-info">
                <div class="banner-title">
                    上海玛雅水上公园
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
            imgs:[       'http://img1.qunarzz.com/sight/p0/1506/30/7a528fae12c17e6e29d5d13a9d9813ee.water.jpg_350x240_53d5fff9.jpg',
                         'http://img1.qunarzz.com/sight/p0/1905/56/56fe1d0096abaf32a3.img.jpg_350x240_a27cfbfd.jpg',
                         'http://img1.qunarzz.com/sight/p0/1905/cf/cfa386b13342dd9ba3.img.jpg_350x240_92bf1564.jpg',
                         'http://img1.qunarzz.com/sight/p0/1905/fa/fa21aab1a0ce4800a3.img.jpg_350x240_9341b55f.jpg',
                         'http://img1.qunarzz.com/sight/p0/1905/39/39c4f8c5bf6bf19ba3.img.jpg_350x240_c6435395.jpg',
                         'http://img1.qunarzz.com/sight/p0/1905/7d/7d6fb7c2f9677a58a3.img.jpg_350x240_f2281a31.jpg',
                         'http://img1.qunarzz.com/sight/p0/1905/b4/b4fd42d9eccf9f6a3.img.jpg_350x240_1b86f29a.jpg',
                         'http://img1.qunarzz.com/sight/p0/1905/6d/6d0c887f32e43105a3.img.jpg_350x240_cb6847cc.jpg'
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

