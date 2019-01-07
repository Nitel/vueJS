<template>
  <div id="app">
    <img src="https://organicthemes.com/demo/restaurant/wp-content/themes/organic-restaurant/images/logo.png">
    <router-link to="/Home">List</router-link>
    <router-link to="/Add">Add a restaurant</router-link>

    <app-user></app-user>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
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
