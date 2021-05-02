import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';  //importing router
import Users from './components/Users.vue';
import Home from './components/Home.vue';
import DrawingPage from './components/DrawingPage.vue';
import Calculator from './components/Calculator.vue';
import NotesPage from './components/Notes.vue';

Vue.use(VueRouter); //routing is now enabled as a plugin and will work

const  routes = [   //this difines the rotues
  {path: '/users/teamId', component:Users},   //makes the routes
  {path: '/drawingPage', component:DrawingPage},   //makes the routes
  {path: '/calculator', component:Calculator},   //makes the routes
  {path: '/notes', component:NotesPage},   //makes the routes
  {path: '/', component: Home},  //home is always the blank route
];

const router = new VueRouter({ //this creates the router
  routes: routes,   //this import the routes made from above
  mode:'history',  //enables to not need the hastag for routing 
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,   //adding to app view instance
}).$mount('#app')
