<template>
  <!--<img :src="location.Photographie">
  <h1>{{locations.Nom}}</h1>
  <p>{{locations.Menu}}</p>
  <p>{{locations.Adresse}}</p>-->

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
      locations: db.collection('locations').orderBy('Nom'),
      loc: db.collection('locations').valueOf()
    }
  }
}
</script>

<style scoped>

</style>
