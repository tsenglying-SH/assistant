<template>
   <div>
       <div class="title"> 周末去哪</div>
       <ul>
           <li class="item border-bottom" v-for="item of recommendList" :key="item.id">    <!--1像素边框-->
               <div class="item-img-wrapper">
                   <img class="item-img" :src="item.imgUrl"/>
                </div>
               <div class="item-info">
                   <p class="item-title"> {{item.title}}</p>
                   <p class="item-desc">{{item.desc}}</p>
               </div>
           </li>
       </ul>
   </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    data () {
        return{
            recommendList:[{
                id:'001',
                imgUrl:'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
                title: '上海必打卡',
                desc:'中西合璧，现代和传统各有各的精彩'
            },{
                id:'002',
                imgUrl:'http://img1.qunarzz.com/sight/source/1603/ad/69b0fc5f48ad5f.jpg_r_640x214_b0fd5c7b.jpg',
                title: '周末亲子爱玩',
                desc:'走进自然或玩转乐园，等你们呦！'
            },{
                id:'003',
                imgUrl:'http://img1.qunarzz.com/sight/source/1511/1d/fe098e8cfec117.jpg_r_640x214_a9be292a.jpg',
                title: '上海城市观光',
                desc:'来这里寻找你所不认识的魔都，感受云端漫步？'
            },{
                id:'004',
                imgUrl:'http://img1.qunarzz.com/sight/source/1505/6f/2711e071838590.jpg_r_640x214_8f1ad9a1.jpg',
                title: '戏水清凉一夏',
                desc:'夏日戏水、欢乐无穷'
            },{
                id:'005',
                imgUrl:'http://img1.qunarzz.com/sight/source/1505/7b/2a6b0ce087f0e5.jpg_r_640x214_5c76b115.jpg',
                title: '情迷博物馆',
                desc:'走进艺术殿堂，电影博物馆生动演绎电影和热情'
            }]
        }
    }
}
</script>

<style lang="stylus" scoped >
    .title
        line-height:.8 rem
        background:#eee
        text-indent: .2 rem
    .item
        padding-bottom: .2 rem
        .item-img-wrapper
            overflow: hidden
            height:0
            padding-bottom:37.4%
            .item-img
                width: 100%
                
        .item-title
            line-height:.54 rem
            font-size: .32 rem
            text-indent: .1 rem
            color:#00bcd4
        .item-desc
            line-height: .4 rem
            font-size: .28 rem
            
                
</style>

