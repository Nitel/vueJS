<template>

<div >
  <article v-for="(location, idx) in locations" :key="idx">
    <router-link class="button is-primary" v-bind:to="{ name: 'Detail', params: { restau: location.slug }}">{{ location.Nom }}</router-link>
  </article>
  </div>

</template>

<script>
import { db, router } from '../main'

export var params

export default {
  name: 'HelloWorld',
  data () {
    return {
      locations: [],
      loading: true
    }
  },
  created () {
    db.collection('locations').get().then((querySnapshot) => {
      this.loading = false
      querySnapshot.forEach((doc) => {
        let data = {
          'id': doc.id,
          'Nom': doc.data().firstname,
          'Image': doc.data().lastname,
          'Adresse': doc.data().emailaddress,
          'Menu': doc.data().phonenumber,
          'slug': doc.data().slug
        }
        this.locations.push(data)
      })
    })
  },
  firestore () {
    return {
      locations: db.collection('locations').orderBy('Nom')
    }
  },
  methods: {
    navigate (id) {
      router.push({ path: `/Detail/${id}` })
      params = id
    }
  }
}

</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
