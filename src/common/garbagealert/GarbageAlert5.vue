<template>
   <div class="alert" @click="handleAlertClick">
       <div class="description">
           <div class="name">{{this.name}}</div>
           <div class="belong">抱歉！</div>
           <div class="classfication">
               没有找到您的垃圾
           </div>
           <div class="introduction">
               <p class="text-property">
                  建议当干垃圾处理。
               </p>
           </div>
           
       </div>
       <p class="iconfont back-icon">&#xe60b;</p>
   </div>
</template>
<script>
export default {
    name:'CommonAlert5',
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
        background:rgba(255,255,255,0.8)
        .description
            position:fixed
            top:1rem 
            left:1rem 
            right:1rem 
            bottom:2 rem
            background:yellow
            color:#000
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
                font-size:.6rem 
                text-align:center
            .classfication
                width:100%
                height:2rem 
                margin-top:.4rem
                text-align:center
                font-size:.6rem
                
            .introduction
                height:1.6rem 
                margin-left:.3rem
                margin-right:.3rem
                .text-property
                    margin:0 .2rem
                    line-height:1rem
                    font-size:.5rem
                
        .back-icon
            font-size:.7rem
            color:#ccc
            position:fixed
            text-align:center
            bottom:1.2rem
            left:3.5rem
</style>
