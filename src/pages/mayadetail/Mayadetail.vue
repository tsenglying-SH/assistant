<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :list1="list1"  :list2="list2"></detail-list>
    </div>

</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
    name:'Mayadetail',
    data (){
        return{
             list1:[{
                title:'【早订优惠】成人全日票', money:'210'
            },
            {
                title:'【即买即用】成人全日票',money:'210'
            },
            {
                title:'【早订优惠】夜场票',money:'180'
            },
            {
                title:'【即买即用】夜场成人票',money:'190'
            },
            {
                title:'【双次入园】成人票',money:'315'
            },],
            list2:[{
                title:'玛雅水公园长者票', money:'140'
            },
            {
                title:'【早订早惠】夜场票',money:'140'
            },
            {
                title:'玛雅水公园儿童票',money:'140'
            },]
        }
    },
    components:{
        DetailBanner,
        DetailHeader,
        DetailList
    }
}
</script>

<style lang="stylus" scoped>
    .content
        height:50 rem

</style>

