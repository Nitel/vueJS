<template>
  <div>
    <h1>Description</h1>
    <!-- <img :src="Image"> -->
    <h1>{{Nom}}</h1>
    <p>{{Menu}}</p>
    <p>{{Adresse}}</p>
    <p>*************************************************</p>
    <h1>Menu</h1>
      <div v-for="(item, idx) in Prix" :key="idx" @click="add(item, idx)">
        <p  v-if="idx === 0">Entrée</p>
        <p  v-if="idx === 1">Plat</p>
        <p  v-if="idx === 2">Dessert</p>
        <p> {{ item }}$</p>
        </div>
        <br><br><br>
        <p>*************************************************</p>
<div v-if="commande > 0">
  <p  v-if="Entree > 0" v-on:click="del(2.5, 0)">{{ Entree }} Entrée(s)</p>
  <p  v-if="Plat > 0" v-on:click="del(5, 1)">{{ Plat }} Plat(s)</p>
  <p  v-if="Dessert > 0" v-on:click="del(10, 2)">{{ Dessert }} Dessert(s)</p>
  <h1>Total commande : {{ commande }}$</h1>
  <div>

  </div>
</div>
        </div>
</template>

<script>
import { db } from '../main'
// import { params } from './HelloWorld'

// var restaurants = db.collection('locations')
// var location = db.collection('locations').doc(id)
// const location = restaurants.doc(id)

export default {
  name: 'Detail',
  data () {
    return {
      Nom: '',
      Image: '',
      Menu: '',
      Adresse: '',
      Prix: [2.5, 5, 10],
      commande: 0,
      Entree: 0,
      Plat: 0,
      Dessert: 0
    }
  },
  firestore () {
    return {
      locations: db.collection('locations').orderBy('Nom')
    }
  },
  beforeRouteEnter (to, from, next) {
    db.collection('locations').where('slug', '==', to.params.restau).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        next(vm => {
          vm.Nom = doc.data().Nom
          vm.Image = doc.data().Photographie
          vm.Menu = doc.data().Menu
          vm.Adresse = doc.data().Adresse
        })
      })
    })
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      db.collection('locations').where('slug', '==', this.$route.params.restau).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, ' => ', doc.data())
          this.Nom = doc.data().Nom
          this.Image = doc.data().Photographie
          this.Menu = doc.data().Menu
          this.Adresse = doc.data().Adresse
        })
      })
    },
    add (x, y) {
      this.commande += x
      if (y === 0) {
        this.Entree++
      } if (y === 1) {
        this.Plat++
      } if (y === 2) {
        this.Dessert++
      }
    },
    del (x, y) {
      this.commande -= x
      if (y === 0) {
        this.Entree--
      } if (y === 1) {
        this.Plat--
      } if (y === 2) {
        this.Dessert--
      }
    }
  }
}
</script>

<style scoped>

</style>
