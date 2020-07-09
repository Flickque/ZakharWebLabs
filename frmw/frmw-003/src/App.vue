<template>
  <div id="app">
    <frmw/>
  </div>
</template>

<script>
import frmw from './components/frmw.vue'

export default {
  name: 'App',
  components: {
    frmw
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
