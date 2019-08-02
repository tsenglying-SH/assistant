<template>
    <div class="tabbar">       
           <div class="icon">
               <router-link to='/'>
                    <div class="iconfont">&#xe69e;</div>
               </router-link>
           </div>
           <div class="icon">
               <router-link to='/accountbook'>
                    <span class="iconfont ">&#xe60f;</span>
                </router-link>

           </div>
           <div class="icon">
               <router-link to='/memo'>
                    <span class="iconfont ">&#xe634;</span>
                </router-link>
           </div>
           <div class="icon">
               <router-link to='/remind'>
                    <span class="iconfont this">&#xe67a;</span>
                </router-link>
           </div>
           <div class="icon">
               <router-link to='/mine'>
                    <span class="iconfont ">&#xe61a;</span>
                </router-link>
           </div>

    
       
    </div>
    
</template>


<script>

export default {
    name:'RemindTabbar'
    
}
</script>

<style lang="stylus" scoped> 
    .tabbar
        display:flex
        position:fixed
        bottom:0
        left:0        
        line-height:.9 rem
        width:100%
        background: #fff
        .icon
            width: 7.5 rem
            text-align:center   
            .iconfont
                font-size:.5 rem
                color:#aaa
            .this
                color:red
             
</style>


