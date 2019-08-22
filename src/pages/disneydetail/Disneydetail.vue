<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :list1="list1" :list2="list2"></detail-list>
    </div>

</template>
<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default {
    name:'Disneydetail',
    data (){
        return{
            
            list1:[{
                title:'成人票', money:'543'
            },
            {
                title:'儿童票',money:'431'
            },
            {
                title:'老人票',money:'431'
            },
            {
                title:'票+车+导',money:'466'
            },
            {
                title:'双人票',money:'1150'
            },
            {
                title:'亲子票',money:'1106'
            },
            {
                title:'家庭票',money:'1581'
            },],
            list2:[{
                title:'双人票', money:'2026'
            },
            {
                title:'亲子票',money:'1808'
            },
            {
                title:'家庭票',money:'2842'
            },]
        }
    },
    components:{
        DetailBanner,
        DetailHeader,
        DetailList,
    }, 

}
</script>

<style lang="stylus" scoped>
    .content
        height:50 rem

</style>

