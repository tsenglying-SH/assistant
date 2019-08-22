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
    name:'TowerDetail',
    data (){
        return{
            list1:[{
                title:'成人票【刷码入园】', money:'195'
            },
            {
                title:'成人票【统一入园】',money:'173'
            },
            {
                title:'儿童票【刷码入园】',money:'99'
            },
            {
                title:'东方明珠黄浦江游船成人票',money:'70'
            },
            {
                title:'十六铺黄浦江游船成人票',money:'80'
            },],
            list2:[{
                title:'成人票', money:'170'
            },
            {
                title:'亲子票（1大1小）',money:'269'
            },
            {
                title:'亲子票（2大1小）',money:'458'
            },
            {
                title:'成人票(自助餐)',money:'288'
            },
            {
                title:'儿童票(自助餐)',money:'174'
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

