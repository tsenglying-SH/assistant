<template>
    <div class="header">
        选择天气城市
        <router-link to='/addcity'>
            <div class="iconfont header-back">&#xe659;</div> 
        </router-link>
    </div>
</template>

<script>
export default {
    name:'CityHeader'
    
}
</script>

<style lang="stylus" scoped >
    @import '../../../assets/styles/varibles.styl'
    .header
        position: relative
        overflow: hidden
        height: .88 rem
        background: $bgColor
        line-height: .88 rem
        text-align: center
        color: #fff
        font-size: .32 rem
        .header-back
            position: absolute
            top: 0
            left: 0
            width: .64 rem
            text-align: center
            font-size: .6 rem
            color: #fff
            
</style>

