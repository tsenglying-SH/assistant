<template>
   <div class=garbage> 
       <garbage-header></garbage-header>
       <div class="header-img"></div>
       <garbage-search></garbage-search>
       <garbage-classfication></garbage-classfication>  
   </div>
</template>
<script>
import GarbageSearch from './components/Search'
import GarbageHeader from './components/Header'
import GarbageClassfication from './components/Classfication'
export default {
    name:'Garbagedetail',
    components:{
         GarbageSearch,
         GarbageHeader,
         GarbageClassfication

    }
    
}
</script>

<style lang="stylus" scoped>
    .header-img
        margin: 0rem auto 0.1rem
        width: 7.3rem
        height: 2.8rem
        background: url(http://pic.ibaotu.com/00/02/65/44v888piChdK.jpg-1.jpg!ww700)  center
        background-size: 100%

    </style>
