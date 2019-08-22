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
    name:'Aquariumdetail',
    data (){
        return{
            list1:[{
                title:'【限时特惠】（15:00之后入园）', money:'180'
            },
            {
                title:'【常规夜场】（15:00之后入园）',money:'195'
            },
            {
                title:'【即买即用】成人票', money:'355'
            },
            {
                title:'【即买即用】儿童票',money:'240'
            },
            {
                title:'【即买即用】老人票',money:'240'
            },
            ],
            list2:[{
                title:'【早订优惠】成人票', money:'315'
            },
            {
                title:'大学生门票',money:'156'
            },
            {
                title:'【提前2小时预订】儿童票',money:'240'
            },
            {
                title:'【提前2小时预定】长者票', money:'240'
            },
            {
                title:'【夜场票】门票+摩天轮',money:'50'
            },
            {
                title:'【夜场早订优惠】学生票',money:'30'
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

