<template>
    <div class="destination">
        <destination-header></destination-header>
        <destination-recommend></destination-recommend>
    </div>
</template>

<script>
import DestinationHeader from './components/Header'
import DestinationRecommend from './components/Recommend'
export default {
    name:'Destinationdetail',
    components:{
        DestinationHeader,
        DestinationRecommend
        }  
}
</script>
<style lang="stylus" scoped>

</style>


