// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'
import 'firebase/firestore'
import AddRestau from './components/AddRestau.vue'
import HelloWorld from './components/HelloWorld.vue'
import Detail from './components/Detail.vue'

Vue.use(VueRouter)

export const routes = [
  {path: '/Add', component: AddRestau},
  {path: '/', component: HelloWorld},
  {path: '/Detail/:restau',
    name: 'Detail',
    component: Detail}

]

export const router = new VueRouter({
  routes: routes,
  mode: 'history'
})

Vue.use(VueFire)
firebase.initializeApp({
  projectId: 'tp1-buffa',
  databaseURL: 'https://tp1-buffa.firebaseio.com'
})

export const db = firebase.firestore()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
