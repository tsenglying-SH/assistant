<template>
    <div>
        <div class="banner" @click="handleBannerclick">
            <img  class="banner-img" src="//img1.qunarzz.com/sight/p0/1511/49/499c8f4ce3968f9c90.img.jpg_600x330_ce81f941.jpg"/>
            <div class="banner-info">
                <div class="banner-title">
                    上海辰山植物园
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
            imgs:[       'https://imgs.qunarzz.com/sight/p0/1511/49/499c8f4ce3968f9c90.img.jpg_350x240_4f64237a.jpg',
                         'https://imgs.qunarzz.com/sight/p0/1802/b7/b7e37f305b358ce1a3.water.jpg_350x240_4955f1b7.jpg',
                         'https://imgs.qunarzz.com/sight/p0/1511/61/61d4696e0c95c74d90.img.jpg_350x240_fde2a6ce.jpg',
                         'https://imgs.qunarzz.com/sight/p0/1603/a4/a4ba3b4ac41dbd9090.water.jpg_350x240_c67d9b12.jpg',
                         'https://imgs.qunarzz.com/sight/p0/1603/f7/f780387f16fc249d90.water.jpg_350x240_6fbfea25.jpg',
                         'https://imgs.qunarzz.com/sight/p0/1603/35/353c0d4267a9836090.water.jpg_350x240_deea3afe.jpg',
                         'https://imgs.qunarzz.com/sight/p0/1511/d5/d5d6c86f2df8a5f690.img.jpg_350x240_d40ffee5.jpg',
                         'https://imgs.qunarzz.com/sight/p0/1603/a4/a4ba3b4ac41dbd9090.water.jpg_350x240_c67d9b12.jpg'

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

