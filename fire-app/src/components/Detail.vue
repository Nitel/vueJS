<template>
  <div><img :src="locatison.Photographie">
    <h1>{{locations.Nom}}</h1>
    <p>{{locations.Menu}}</p>
    <p>{{locations.Adresse}}</p></div>

</template>

<script>
import { db } from '../main'

export default {
  name: 'Detail',
  data () {
    return {
      locations: [],
      Nom: '', // <-- here
      Photographie: '', // <-- here
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
