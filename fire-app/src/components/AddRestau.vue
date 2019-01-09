<template>
  <form @submit="addLocation(Nom, Image, Adresse, Menu)">
    <input v-model="Nom" placeholder="Name">
    <input v-model="Image" placeholder="Image URL">
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
      Nom: '',
      Image: '',
      Menu: '',
      Adresse: '',
      Prix: []
    }
  },
  firestore () {
    return {
      locations: db.collection('locations').orderBy('Nom')
    }
  },
  methods: {
    addLocation (Nom, Photographie, Adresse, Menu) {
      const slug = this.generateUUID()
      db.collection('locations').add({ Nom: Nom,
        Photographie: Photographie,
        Menu: Menu,
        Adresse: Adresse,
        Prix: [2.5, 5, 10],
        slug: slug })
        .then(docRef => {
          console.log('Document written with ID: ', docRef.id)
          this.$router.push(`/${slug}/success`)
        })
        .catch(function (error) {
          console.error('Error adding document: ', error)
        })
    },
    generateUUID () {
      let d = new Date().getTime()
      let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        let r = (d + Math.random() * 16) % 16 | 0
        d = Math.floor(d / 16)
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
      })
      return uuid
    }
  }
}
</script>

<style scoped>

</style>
