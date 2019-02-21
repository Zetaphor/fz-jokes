<template>
  <div id="app">
    <top-nav></top-nav>
    <card-container></card-container>
  </div>
</template>

<script>
import TopNav from './components/TopNav.vue'
import CardContainer from './components/CardContainer.vue'

export default {
  name: 'app',
  components: {
    TopNav,
    CardContainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
