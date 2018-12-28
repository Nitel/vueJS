import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import User from './components/User.vue';
import List from './components/List.vue';
import firebase from 'firebase/app';

// Définition des routes
Vue.use(VueRouter);

const routes = [
	{path:'/List', component: List},

]

const router = new VueRouter({
	routes: routes,
	mode:'history'
})
// La ligne ci-dessous rend le composant User utilisable
// partout, dans tous les fichiers .vue
// C'est un GLOBAL COMPONENT
Vue.component("app-user", User);

const config = {
  apiKey: 'AIzaSyCOnuQ1Mx04SwtlsManSDYl9mqQhewA3Rc',
  authDomain: 'tp1-buffa.firebaseapp.com',
  databaseURL: 'https://tp1-buffa.firebaseio.com',
  projectId: 'tp1-buffa',
  storageBucket: 'tp1-buffa.appspot.com',
  messagingSenderId: '976663868904'
};

var firebase = require('firebase');
firebase.initializeApp(config);

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
})
