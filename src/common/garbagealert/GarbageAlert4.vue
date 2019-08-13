<template>
   <div class="alert" @click="handleAlertClick">
       <div class="description">
           <div class="name">{{this.name}}</div>
           <div class="belong">属于</div>
           <div class="classfication">
               <div class="iconfont item">&#xe68b;</div>
                <p class="icon-desc">有害垃圾</p>
           </div>
           <div class="introduction">
               <p class="text-property">
                   对人体健康或自然环境造成直接或者潜在危害的生活废弃物。主要包括：废电池、废灯管、废药品、废油漆及其容器等。
               </p>
           </div>
           <div class="transition">
               <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
               <p class="text-property">小科普:</p>
           </div>
           <div class="require">
               <p class="text-property">投放要求</p>
               <p class="text-property">·投放时请注意轻放</p>
               <p class="text-property">·易破损的请连带包装或包裹后轻放</p>
               <p class="text-property">·如易挥发，请密封后投放</p>
               <p class="text-property">.废灯管等易破损的有害垃圾应连带包装</p>
               <p class="text-property">.废弃药品宜连带包装一并投放</p>
           </div>
       </div>
       <p class="iconfont back-icon">&#xe60b;</p>
   </div>
</template>
<script>
export default {
    name:'CommonAlert4',
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
            background:red
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
