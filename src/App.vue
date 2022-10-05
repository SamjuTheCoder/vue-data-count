<template>
  <div id="app">
    <DataCount count="20"/>
  </div>
</template>

<script>
import DataCount from './components/DataCount.vue'

export default {
  name: 'App',
  components: {
    DataCount
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
