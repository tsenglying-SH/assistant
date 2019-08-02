<template>
    <div class="wrapper">
        <swiper :options="swiperOption" v-if="list.length" > <!--刚开始是个空数组，所以加载默认在最后一页，加入v-if="list.length调整-->
            <swiper-slide v-for="item of list" :key="item.id"> 
                <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <!-- <swiper-slide>
                <img class="swiper-img" src="@/assets/swiper/2.jpg" />
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="@/assets/swiper/3.jpg" />
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="@/assets/swiper/4.jpg" />
            </swiper-slide> -->
        <!-- <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide> -->

        <div class="swiper-pagination"  slot="pagination"></div>         <!--点的显示-->
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->   <!--左右箭头注释掉-->
        <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->     <!--滚动条-->
         </swiper>
    </div>
</template> 

<script>
export default {
    name:'HomeSwiper',
    props:{
        list:Array
    },
    data (){
        return{
            swiperOption:{
             pagination:'.swiper-pagination',
             loop: true
             }
            }
     }

//             swiperList:[{
//                 id:'001',
//                 imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/01549e224da474a72681614810d07860.jpg_750x200_47325a53.jpg'

//             },{
//                  id:'002',
//                 imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'


//             },
//             {
//                 id:'003',
//                 imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/87a224d0349d94a11e97f31aa1aba4f5.jpg_750x200_1f78af87.jpg'

//             },{
//                  id:'004',
//                 imgUrl:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/1f69b3ab28f9962158c798a8a3f5b4b3.jpg_750x200_fb4bf7c4.jpg'
//              }]
//         }
//     }
    
 }
 </script >
    

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background: #fff
    .wrapper
        overflow:hidden
        width: 100%
        height: 0
        padding-bottom: 26.66%
        background: #eee
        .swiper-img 
            width: 100%
            

    </style>
