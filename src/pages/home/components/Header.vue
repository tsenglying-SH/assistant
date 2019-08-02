<template>
    <div class="header">
        <div class="header-left">
            <!-- <div class="iconfont back-icon">&#xe658;</div> -->
        </div>
        <div class="header-input"> 
            <!-- <span class="iconfont">&#xe63c;</span> 
            <input  class="header-input-info" type="text" placeholder="心里想啥呢？"/> -->
            <span class="input-content">生活小助手</span>
        </div>
                  <!--city转而使用vuex中store的数据 -->
            <router-link to='/city'>
                <div class="header-right">
                    {{this.$store.state.city}}    
                    <span class="iconfont arror-icon">&#xe65c;</span>
                </div>
            </router-link>
    </div>
</template>

<script>

export default {
    name:'HomeHeader',
    // props:{
    //     city:String
    // }放弃ajax接收而来的数据，转而使用vuex 中store的数据
     
}
// scoped关键字限定作用域只在本组件有效
</script>

 <style lang="stylus" scoped> 
    @import '../../../assets/styles/varibles.styl'
    .header
        display: flex
        line-height:.82 rem
        background: $bgColor
        color:#fff
        .header-input
            flex:1
            box-sizing:border-box
            text-indent: 2.8 rem
            padding-top: .1 rem
            height:.82 rem
            line-height:.86 rem
            background:$bgColor
            
            .input-content
                height:.8 rem
                line-height:.7 rem
                text-align: center
                color: #fff
                font-size:.36 rem
        .header-right
            min-width:1.04 rem
            padding-right: .1 rem
            float:right
            text-align:center
            color:#fff
            .arror-icon
                font-size: .4 rem
                margin-left: -0.1 rem
        

</style>


