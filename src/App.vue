<template>
  <div id="app">
    <div class="container-fluid">
        <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style scoped>
#app {
    padding-top: 15px;
}
</style>
