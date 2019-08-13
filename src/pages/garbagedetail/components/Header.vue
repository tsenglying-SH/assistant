<template>
    <div>
        <router-link tag="div" to="/" class="header-abs"
        v-show ="showAbs" >
            <div class="iconfont header-abs-back">&#xe659;</div>
        </router-link>
    </div>
</template>
<script>
export default {
    name:'GarbageHeader',
    data (){
        return {
            showAbs:true
        }
    },
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
</style>

