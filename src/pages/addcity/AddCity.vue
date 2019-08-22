<template>
    <div class="add">
        <city-manager></city-manager>
        <city-list></city-list>
    </div>
</template>
<script>
import CityManager from './components/Header'
import CityList from './components/citylist'
export default {
    name:'AddCity',
    components:{
        CityManager,
        CityList
    }
}
</script>
<style lang="stylus" scoped>
    .add
        position:fixed
        background:#DDDDDD
        top:0
        left:0
        right:0
        bottom:0
</style>
