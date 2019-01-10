<template>
  <div>
  <h2>Description</h2>
  <img :src="Image">
  <h3>{{Nom}}</h3>
    <div id="description">
    <p>Thème : {{Menu}}</p>
    <p>Lieu : {{Adresse}}</p>
    </div>
  <h2>Menu</h2>
  <div id="menu">
  <div v-for="(item, idx) in Prix" :key="idx" @click="add(item, idx)" >
  <div id="plat1"  v-if="idx === 0">Entrée - {{ item }}€</div>
  <div id="plat2" v-if="idx === 1">Plat - {{ item }}€</div>
  <div id="plat3" v-if="idx === 2">Dessert - {{ item }}€</div>
  </div>
  </div>
  <br><br><br><br>
  <div v-if="commande > 0" id="total">
  <h2>Total</h2>
  <div id="plat1-com" v-if="Entree > 0" v-on:click="del(2.5, 0)">{{ Entree }} Entrée(s)</div>
  <div id="plat2-com"  v-if="Plat > 0" v-on:click="del(5, 1)">{{ Plat }} Plat(s)</div>
  <div id="plat3-com"  v-if="Dessert > 0" v-on:click="del(10, 2)">{{ Dessert }} Dessert(s)</div>
<h2 id="paye">Total à payer : {{ commande }}€</h2>
</div>
</div>
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
      Adresse: '',
      Prix: [2.5, 5, 10],
      commande: 0,
      Entree: 0,
      Plat: 0,
      Dessert: 0
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
    },
    add (x, y) {
      this.commande += x
      if (y === 0) {
        this.Entree++
      } if (y === 1) {
        this.Plat++
      } if (y === 2) {
        this.Dessert++
      }
    },
    del (x, y) {
      this.commande -= x
      if (y === 0) {
        this.Entree--
      } if (y === 1) {
        this.Plat--
      } if (y === 2) {
        this.Dessert--
      }
    }
  }
}
</script>
<style scoped>
p{
padding:10px;
margin:0px;}
#description{
background-color:yellowgreen;
margin-left:31%;
margin-right:31%;
margin-top:0px;
}
#menu{
margin-top:20px;
}
#plat1{
background-color:white;
margin-top:5px;
margin-left:35%;
margin-right:35%;
padding:5px;
border-radius: 20px;
border-style:solid;
cursor:pointer;
}
#plat2{
  background-color:white;
  margin-top:5px;
  margin-left:35%;
  margin-right:35%;
  padding:5px;
  border-radius: 20px;
  border-style:solid;
  cursor:pointer;
}
#plat3{
  background-color:white;
  margin-top:5px;
  margin-left:35%;
  margin-right:35%;
  padding:5px;
  border-radius: 20px;
  border-style:solid;
  cursor:pointer;
}
#plat1-com{
background-color:gainsboro;
margin-top:5px;
margin-left:35%;
margin-right:35%;
padding:5px;
border-radius: 20px;
border-style:solid;
cursor:pointer;
}
#plat2-com{
  background-color:gainsboro;
  margin-top:5px;
  margin-left:35%;
  margin-right:35%;
  padding:5px;
  border-radius: 20px;
  border-style:solid;
  cursor:pointer;
}
#plat3-com{
  background-color:gainsboro;
  margin-top:5px;
  margin-left:35%;
  margin-right:35%;
  padding:5px;
  border-radius: 20px;
  border-style:solid;
  cursor:pointer;
}
#total{
margin-top:-75px;
}
#paye{
background-color : transparent;
}
</style>
