<template>
  <div><img :src="location.Photographie">
    <h1>{{location.Nom}}</h1>
    <p>{{location.Menu}}</p>
    <p>{{location.Adresse}}</p></div>

</template>

<script>
import { db } from '../main'

/* var restaurants = db.collection('locations')
const id = this.route.snapshot.params['id']

const location = restaurants.doc(id) */

export default {
  name: 'Detail',
  data () {
    return {
      locations: [],
      Nom: '',
      Photographie: '',
      Menu: '',
      Adresse: ''
    }
  },
  firestore () {
    return {
      locations: db.collection('locations').orderBy('Nom')
    }
  }
}
</script>

<style scoped>

</style>
