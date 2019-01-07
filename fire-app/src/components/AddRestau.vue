<template>
  <form @submit="addLocation(Nom, Photographie, Adresse, Menu)">
    <input v-model="Nom" placeholder="Name">
    <input v-model="Photographie" placeholder="Image URL">
    <input v-model="Adresse" placeholder="Location">
    <input v-model="Menu" placeholder="Menu">
    <button type="submit">Add New Restaurant</button>
  </form>
</template>

<script>
import { db } from '../main'
export default {
  name: 'AddRestau',
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
  },
  methods: {
    addLocation (Nom, Photographie, Adresse, Menu) { // <-- and here
      db.collection('locations').add({ Nom, Photographie, Menu, Adresse })
    }
  }
}
</script>

<style scoped>

</style>
