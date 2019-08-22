<template>
    <div class="notice">
        <div class="notice-wrapper">
            <div class="notice-title">
                <span class="iconfont notice-icon">&#xe619;</span>景区公告
            </div>
            <div class=" notice-content">
                <p class="notice-content-text">{{this.notice}}</p>
            </div>
            <div class="notice-back">
                <span class="iconfont icon-back"
                @click="handleIconClick">&#xe60b;</span>
            </div>

        </div>
    </div>
</template>
<script>
export default {
    name:"CommenNotice",
    props:{
        notice:String
    },

    methods:{
        handleIconClick (){
            this.$emit('close')
        }
    }

}
</script>
<style lang="stylus" scoped>
    .notice
        position:fixed
        left:0
        right:0
        top:0
        bottom:0
        background:white
        opacity:0.9
        .notice-wrapper
            position:fixed
            top:2rem 
            left:0
            width:100%
            .notice-title
                font-size:.45rem 
                color:#f67353
                text-align:center
                .notice-icon
                    font-size:.45rem
            .notice-content
                margin-top:1rem
                margin-left:.3rem 
                margin-right:.3rem 
                .notice-content-text
                    font-size:.3rem
                    line-height:.45rem
                    color:#333
            .notice-back
                position:fixed
                bottom:2rem 
                width:100%
                text-align:center
                .icon-back
                    font-size:.4rem
                    font-weight:500




</style>

