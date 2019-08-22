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
    name:'Zoodetail',
    data (){
        return{
            list1:[{
                title:'【即买即用】成人票', money:'122'
            },
            {
                title:'【即买即用】学生票',money:'65'
            },
            {
                title:'【早订优惠】成人票',money:'118'
            },
            {
                title:'【早订优惠】学生票',money:'65'
            },
            {
                title:'【亲子票】1大1小票',money:'185'
            },
            {
                title:'【家庭票】2大1小票',money:'280'
            },
            {
                title:'双人票',money:'240'
            },],
            list2:[{
                title:'【即买即用】夜场票', money:'55'
            },
            {
                title:'【早订早惠】夜场票',money:'55'
            },
            {
                title:'【夜场票】门票+马戏票',money:'105'
            },
            {
                title:'【夜场票】门票+水域探秘游船', money:'95'
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

