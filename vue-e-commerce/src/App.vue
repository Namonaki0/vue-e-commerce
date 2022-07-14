<template>
  <div>
    <WelcomeScreen />
    <router-link to="/" welcomeMessage="Welcome">Home</router-link>
    <router-link to="/cart" welcomeMessage="Your Cart">Cart</router-link>
  </div>
  <router-view />
</template>

<script>
import WelcomeScreen from "./components/WelcomeScreen.vue"
import HomeComponent from './views/HomeComponent.vue'
import CartComponent from './views/CartComponent.vue'

export default {
  name: 'App',
  components: { 
    WelcomeScreen
   
  },
  views: {
    HomeComponent,
    CartComponent
  }
  

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
