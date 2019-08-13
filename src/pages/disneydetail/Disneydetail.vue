<template>
    <div>
        <detail-banner></detail-banner>
        <detail-header></detail-header>
        <detail-list :list="list"></detail-list>
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
            list:[{
                title:'成人票',
                children:[{
                           title:'成人二联票',
                            
                        },
                        {
                            title:'成人三联票'
                        },
                        {
                            title:'成人五联票'
                        }]

            },
            {
                title:'儿童票'
            },
            {
                title:'老人票'
            },
            {
                title:'特价票'
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

