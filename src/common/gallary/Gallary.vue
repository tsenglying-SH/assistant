<template>
    <div class="container" @click="handleGallaryclick">
        <div class="wrapper">
            <swiper :options="swiperOption"> <!--刚开始是个空数组，所以加载默认在最后一页，加入v-if="list.length调整-->
                <swiper-slide v-for="(item,index) of imgs" 
                    :key="index" > 
                    <img class="swiper-img" :src="item"/>
                </swiper-slide>
                <!-- <swiper-slide > 
                    <img class="swiper-img" src="http://img1.qunarzz.com/sight/p0/1906/3d/3d61f18973a5ab7a3.img.jpg_r_800x800_cb717d83.jpg"/>
                </swiper-slide>-->
                
                <div class="swiper-pagination"  slot="pagination"></div>
            </swiper>
        </div>
    </div>
</template>
 <script>
 export default {
     name:'CommonGallary',
     props:{
         imgs:{
             type:Array,
             default (){
                 return []
                //  return ['http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_r_800x800_d6a63068.jpg',
                //         'http://img1.qunarzz.com/sight/p0/1906/3d/3d61f18973a5ab7a3.img.jpg_r_800x800_cb717d83.jpg',
                //         'http://img1.qunarzz.com/sight/p0/1906/90/905a3ed132facfe7a3.img.jpg_r_800x800_089aecd6.jpg',
                //         'http://img1.qunarzz.com/sight/p0/1906/e9/e9b903f81b992acca3.img.jpg_r_800x800_84713129.jpg',
                //         'http://img1.qunarzz.com/sight/p0/1811/ff/ff0ba07998df4d1a3.water.jpg_r_800x800_b508383f.jpg'
                 //        ]
             }
         }
     },
     data (){
         return{
           swiperOption:{
               loop:true,
               pagination:'.swiper-pagination',
               paginationType:'fraction',
               observeParents:true,
               observer:true
           }  
         }
     },
     methods:{
         handleGallaryclick (){
             this.$emit('close')   //子组件向父组件传值
         }
     }
 }
 </script>
 <style lang="stylus" scoped>
    .container >>>.swiper-container
        overflow:inherit
    .container
        display:flex
        flex-direction:column
        justify-content:center
        z-index:99
        position:fixed
        left:0
        right:0
        bottom:0
        top:0
        background:#000
        .wrapper
            height:0
            padding-bottom:100%
            .swiper-img
                padding-top: 1 rem
                
                width:100%
            .swiper-pagination
                color:#fff
                bottom:-3 rem

 </style>
 
 
