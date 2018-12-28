<template>

  <div id="app">
     <div>
      <router-link to="/">Home</router-link>
      <router-link to="/List">List</router-link>
    </div>


      <p>This is a restaurant website</p>
      <app-user></app-user>



    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name:'Michel Buffa'
    }
  }
}
</script>

<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCOnuQ1Mx04SwtlsManSDYl9mqQhewA3Rc",
    authDomain: "tp1-buffa.firebaseapp.com",
    databaseURL: "https://tp1-buffa.firebaseio.com",
    projectId: "tp1-buffa",
    storageBucket: "tp1-buffa.appspot.com",
    messagingSenderId: "976663868904"
  };
  firebase.initializeApp(config);

  var restaurants = firebase.database().ref('restaurants')
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
