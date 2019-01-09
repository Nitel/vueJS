<template>
  <div id="app">
		
		<img id="burger" src="./assets/burger.png">
		<h2  >COMMANDE SIMULATOR</h2>
		<h3 >Votre simulation culinaire, tout simplement</h3>
	
  
	
	
	<br>
	<div>
		<router-link to="/" id="link"><div id="tuile-menu">Tous les restaurants</div></router-link>
		
		<router-link to="/Add" id="link"><div id="tuile-menu">Ajouter un restaurant</div></router-link>
    
  
	</div>
  
    
    

    <app-user></app-user>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
	background-color:wheat;
	
}

#burger{
	width:40%;

}

h3{
	background-color:yellow;
	margin-left:30%;
	margin-right:30%;
	border-radius: 10px;
	margin-top:5px;
	margin-bottom:0px;
	
}
h2{
background-color:darkorange;
margin-left:30%;
	margin-right:30%;
	margin-bottom:10px;
	border-radius: 20px;
}

#tuile-menu{
background-color:yellowgreen;
padding:5px;
border-style:solid;
border-radius: 20px;
margin-right:40%;
margin-left:40%;
margin-bottom:5px;


}


#link{
text-decoration:none;
}


#app {
  font-family: Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
