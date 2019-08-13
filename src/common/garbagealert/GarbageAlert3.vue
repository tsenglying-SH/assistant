<template>
   <div class="alert" @click="handleAlertClick">
       <div class="description">
           <div class="name">{{this.name}}</div>
           <div class="belong">属于</div>
           <div class="classfication">
               <div class="iconfont item">&#xe689;</div>
                    <p class="icon-desc">干垃圾</p>
           </div>
           <div class="introduction">
               <p class="text-property">
                   除可回收物、有害垃圾、湿垃圾以外的其他生活废弃物。
               </p>
           </div>
           <div class="transition">
               <p>- - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
               <p class="text-property">小科普:</p>
           </div>
           <div class="require">
               <p class="text-property">湿垃圾在后期处置环节需要先粉碎，此类质地相对较硬的垃圾如果进入了湿垃圾处理渠道容易造成设备卡壳、损伤等现象，且此类垃圾不易腐烂，所以此类垃圾归属在干垃圾。</p>
               
           </div>
       </div>
       <p class="iconfont back-icon">&#xe60b;</p>
   </div>
</template>
<script>
export default {
    name:'CommonAlert3',
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
            background:#1F1F1F
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
