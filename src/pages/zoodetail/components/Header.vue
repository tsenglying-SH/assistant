<template>
    <div>
        <router-link tag="div" to="/" class="header-abs"
        v-show ="showAbs" >
            <div class="iconfont header-abs-back">&#xe659;</div>
        </router-link>
        <router-link tag="div" to="/" class="header-fix"
        v-show ="!showAbs">
            <div class="iconfont header-fix-back">&#xe658;</div>
            景点详情
        </router-link>
    </div>
</template>
<script>
export default {
    name:'DetailHeader',
    data (){
        return {
            showAbs:true
        }
    },
    // mounted (){
    //     window.addEventListener('scroll',this.handleScroll)
    // },
    // methods:{
    //    handleScroll (){ 
    //        const top =document.documentElement.scrollTop
    //        console.log(top)
    //        if (top > 60){
    //            this.showAbs = false
    //        } else {
    //            this.showAbs = true
    //        }         
    //    } 
    // }

}
</script>
<style lang="stylus" scoped>
    @import '../../../assets/styles/varibles.styl'
    .header-abs
        position:absolute
        left: .2 rem
        top:.2 rem
        width: .8 rem
        height: .8 rem
        line-height: .8 rem
        border-radius: .4 rem
        background: rgba(0,0,0,0.8)
        text-align:center
        .header-abs-back
            color:#fff
            font-size: .5 rem
        
    .header-fix
        position: absolute 
        left:0
        right:0
        top:0
        overflow: hidden
        height: .88 rem
        background: $bgColor
        line-height: .88 rem
        text-align: center
        color: #fff
        font-size: .32 rem
        .header-fix-back
            position: absolute
            top: 0
            left: 0
            width: .64 rem
            text-align: center
            font-size: .6 rem
            color: #fff
        


</style>

