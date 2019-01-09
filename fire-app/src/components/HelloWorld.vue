<template>

<div >
  <article v-for="(location, idx) in locations" :key="idx">
    <router-link id="link" class="button is-primary" v-bind:to="{ name: 'Detail', params: { restau: location.slug }}"><div id="tuile-resto">{{ location.Nom }}</div></router-link>
  
  </article>
  <h2>&nbsp;</h2>
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
			  'Nom': doc.data().Nom,
			  'Image': doc.data().Image,
			  'Adresse': doc.data().Adresse,
			  'Menu': doc.data().Menu,
			  'Prix': doc.data().Prix,
			  'slug': doc.data().slug
			}
			this.locations.push(data)
			
		  })
		})
	},
	firestore () {
		
		locations: db.collection('locations').orderBy('Nom')
		
	},
	methods: {
		navigate (id) {
		router.push({ path: `/Detail/${id}` })
		params = id
		}
	}
}

</script>

<style>
#tuile-resto{
	background-color:greenyellow;
	padding:5px;
	border-style:solid;
	border-radius: 20px;
	margin-right:40%;
	margin-left:40%;
	margin-bottom:5px;
	
	

}

</style>
