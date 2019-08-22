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
    name:'Gardendetail',
    data (){
        return{
            list1:[{
                title:'辰山植物园成人票', money:'60'
            },
            ],
            list2:[{
                title:'辰山植物园电子导览', money:'2'
            },
            ]
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

