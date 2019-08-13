<template>
    <div>
        <div class="banner" @click="handleBannerclick">
            <img  class="banner-img" src="//img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg"/>
            <div class="banner-info">
                <div class="banner-title">
                    上海迪士尼乐园
                </div>
                <div class="banner-number">
                    <span class="iconfont banner-icon">&#xe658;</span> 5
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
            imgs:[       'http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_r_800x800_d6a63068.jpg',
                         'http://img1.qunarzz.com/sight/p0/1906/3d/3d61f18973a5ab7a3.img.jpg_r_800x800_cb717d83.jpg',
                         'http://img1.qunarzz.com/sight/p0/1906/90/905a3ed132facfe7a3.img.jpg_r_800x800_089aecd6.jpg',
                         'http://img1.qunarzz.com/sight/p0/1906/e9/e9b903f81b992acca3.img.jpg_r_800x800_84713129.jpg',
                         'http://img1.qunarzz.com/sight/p0/1811/ff/ff0ba07998df4d1a3.water.jpg_r_800x800_b508383f.jpg'
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

