<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>
<script>
import Navbar from './components/navigation/Navbar.vue'
import Footer from './components/navigation/Footer.vue'
import {mapActions} from 'vuex'
export default {
 components: {
   Navbar,
   Footer
 },
 methods: {
   ...mapActions(['checkUser'])
 },
 created() {
   this.checkUser()
 }
}
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: monospace;
  font-size: 18px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.btn:active {  /* Styling animation för alla knappar  */
    
    transform: translateY(5px);
}
</style>
