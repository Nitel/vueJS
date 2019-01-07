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
  },
  methods: {
    addLocation (Nom, Photographie, Adresse, Menu) {
      db.collection('locations').add({ Nom, Photographie, Menu, Adresse })
    }
  }
}
</script>

<style scoped>

</style>
