<template>
  <div><img :src="Image">
    <h1>{{Nom}}</h1>
    <p>{{Menu}}</p>
    <p>{{Adresse}}</p></div>

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
      Adresse: ''
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
    }
  }
}
</script>

<style scoped>

</style>
