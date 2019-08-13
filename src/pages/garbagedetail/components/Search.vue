<template>
   <div class="search border-topbottom">
       <div class="left-icon ">
            <div class="iconfont search-icon">&#xe63c;</div>
       </div>
       <input v-model="keyword" class="seach-input" type="text" 
            placeholder="输入要查询的内容"/>
        <div class="right " >
            <span class="right-content"> 查询</span>
        </div>
      
   </div>
</template>
<script>
export default {
    name:'GarbageSearch',
    data(){
        return{
            keyword:''
        }
    }
    
}
</script>

<style lang="stylus" scoped>
    .border-topbottom
        &:before
            border-color: #ccc
            border-width: .05 rem
        &:after
            border-color: #ccc
            border-width: .05 rem
    .search
        display:flex
        position: relative
        margin: 0.2rem auto
        width: 7.5rem
        height: 1.1rem
        .left-icon
            width:1rem
            text-align:center
            line-height:1.1rem
            .search-icon
                font-size:.5rem
                color:#FF0033
        .seach-input
            font-size:.36rem
            min-width:4.8rem
        .right
            width:1.7rem
            line-height:1.1rem 
            text-align:center
            background:#FF0033
            .right-content
                font-size:.36rem
                color:#fff
                

</style>
