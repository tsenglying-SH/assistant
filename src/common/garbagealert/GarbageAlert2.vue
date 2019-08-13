<template>
   <div class="alert" @click="handleAlertClick">
       <div class="description">
           <div class="name">{{this.name}}</div>
           <div class="belong">属于</div>
           <div class="classfication">
               <div class="iconfont item">&#xe68a;</div>
                <p class="icon-desc">湿垃圾</p>
           </div>
           <div class="introduction">
               <p class="text-property">
                   湿垃圾又称为厨余垃圾，即易腐垃圾，指食材废料、剩菜剩饭、过期食品、瓜皮果核、中药药渣等易腐的废弃物。
               </p>
           </div>
           <div class="transition">
               <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
               <p class="text-property">小科普:</p>
           </div>
           <div class="require">
               <p class="text-property">投放要求</p>
               <p class="text-property">轻投轻放</p>
               <p class="text-property">·纯流质的食物垃圾，如牛奶等，</p>
               <p class="text-property">　应直接倒进下水口</p>
               <p class="text-property">·有包装物的湿垃圾应将包装物</p>
               <p class="text-property">　去除后分类投放，包装物请投放</p>
               <p class="text-property">　到对应的可回收物或干垃圾容器</p>
           </div>
       </div>
       <p class="iconfont back-icon">&#xe60b;</p>
   </div>
</template>
<script>
export default {
    name:'CommonAlert2',
    props:{
        name:String
    },

    methods:{
        handleAlertClick (){
            this.$emit('close')
        }
    }
    
}
</script>

<style lang="stylus" scoped>
    .alert
        position:fixed
        left:0
        right:0
        top:0
        bottom:0
        background:rgba(0,0,0,0.6)
        .description
            position:fixed
            top:1rem 
            left:1rem 
            right:1rem 
            bottom:2 rem
            background:#8B4513
            color:white
            opacity:0.6
            border-radius:.5rem 
            .name
                height:1rem 
                margin-top:.2rem
                line-height:1rem 
                font-size:.4rem 
                font-weight:700
                text-align:center
            .belong
                height:1rem 
                line-height:1rem 
                font-size:.3rem 
                text-align:center
            .classfication
                height:2rem 
                .item
                    font-size:1rem
                    text-align:center 
                .icon-desc
                    margin-top:.2rem
                    text-align:center
            .introduction
                height:1.6rem 
                margin-left:.3rem
                margin-right:.3rem
                .text-property
                    line-height:.5rem
            .transition
                height:.8rem
                margin-left:.3rem
                margin-right:.3rem
                .text-property
                     line-height:.5rem
            .require
                height:3.4rem
                padding-top:.2rem
                margin-left:.3rem
                margin-right:.3rem 
                .text-property
                    line-height:.45rem
        .back-icon
            font-size:.7rem
            color:#ccc
            position:fixed
            text-align:center
            bottom:1.2rem
            left:3.5rem
</style>
