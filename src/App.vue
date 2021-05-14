<template>
  <div id="app">
  <div class="navbar">
    <router-link class="link" to="/">Home</router-link> <!--using router link rerenders pge,keeps it single page application-->
    <router-link class="link" to="/users/10">Users</router-link> <!--using router link rerenders pge,keeps it single page application-->
    <router-link class="link" to="/drawingpage">Drawing</router-link> <!--using router link rerenders pge,keeps it single page application-->
    <router-link class="link" to="/calculator">Calculator</router-link> <!--using router link rerenders pge,keeps it single page application-->
    <router-link class="link" to="/notes">Notes</router-link> <!--using router link rerenders pge,keeps it single page application-->
    <router-link class="link" to="/classroom">Classroom</router-link> <!--using router link rerenders pge,keeps it single page application-->
    <router-link class="link" to="/chatroom">Chatroom</router-link> <!--using router link rerenders pge,keeps it single page application-->
  </div>
  <router-view></router-view>    <!--router view is reserved components-->
  </div> 
</template>

<script>
// import Calculator from './components/Calculator.vue'

export default {
  name: 'App',
}
</script>

<style>

 * {  /*selects all elements and removes margin */
       margin: 0;
   }

#app {
   padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
  background: burlywood;
}

.navbar{
    display: flex;
    flex-direction: row;
    background-color: #1bc5cb;
    text-decoration: none;
    color: black;
    list-style-type: none;
    width:100vw;
    margin:0;
}

.link{
    display: flex;
    flex-direction: row;
    color: black;
    text-decoration: none !important;
    list-style-type: none;
    padding: 10px;
    padding-left: 30px;
}



.link:hover{
    color:slategrey
}
</style>
