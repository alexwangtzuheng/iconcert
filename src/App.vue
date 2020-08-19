<template>
  <div id="app">
    <!-- navbar -->
    <Navbar/>
    <router-view/>
    <!-- advertisement -->
    <Advertise/>
    <!-- footer -->
    <Footer/>
  </div>
</template>

<script>
import Navbar from './components/Nav.vue'
import Advertise from './components/Advertise.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Advertise,
    Footer
  },
}
</script>

<style>
@import "./assets/css/reset.css";
</style>
