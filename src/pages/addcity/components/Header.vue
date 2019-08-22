<template>
    <div class="header">
        城市管理
        <router-link to='/weatherdetail'>
            <div class="iconfont header-back">&#xe659;</div> 
        </router-link>
        
        <div class="iconfont setting" @click="handleSettingClick">&#xe616;</div> 
    </div>
</template>

<script>
export default {
    name:'CityManager',
    methods:{
        handleSettingClick (){
            this.bus.$emit('showSet')
        }}
}
</script>

<style lang="stylus" scoped>
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
        .setting
            position: absolute
            top: 0
            right: .5rem
            width: .64 rem
            text-align: center
            font-size: .5 rem
            color: #fff


</style>


