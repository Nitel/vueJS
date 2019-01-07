<template>

<div>
    <article v-for="(location, idx) in locations" :key="idx">
      <h1 ref="/Detail/{{idx}}">{{ location.Nom }}</h1>
      <p>{{locations.Menu}}</p>

    </article>
  </div>

</template>

<script>
import { db } from '../main'

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
