<template>
  <div id="app">
      <keep-alive exclude="NewsDetail">
        <router-view/>
      </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'

}
</script>

<style>
</style>
