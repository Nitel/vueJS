<template>
  <div><img :src="location.Photographie">
    <h1>{{location.Nom}}</h1>
    <p>{{location.Menu}}</p>
    <p>{{location.Adresse}}</p></div>

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
      locations: [],
      Id: 0,
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
