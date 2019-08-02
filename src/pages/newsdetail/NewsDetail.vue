<template>
    <div>
      <detail-header></detail-header>
      <detail-title></detail-title>
      <detail-content></detail-content>
    </div>
</template>
<script>
import DetailHeader from'./components/Header'
import DetailTitle from'./components/Title'
import DetailContent from'./components/Content'

export default {
    name:'NewsDetail',
    components:{
        DetailTitle,
        DetailHeader,
        DetailContent
    }
     
}
</script>

<style lang="stylus" scoped>

</style>

