<template>

<div>
  <article v-for="(location, idx) in locations" :key="idx">
    <h1 v-on:click="navigate(idx)">{{ location.Nom }}</h1>
  </article>
  </div>

</template>

<script>
import { db, router } from '../main'

export default {
  name: 'HelloWorld',
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
    navigate (id) {
      router.push({ path: `/Detail/${id}` })
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
