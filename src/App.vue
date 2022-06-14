<template>
  <div>
    <NavBar/>
    <!-- Current page -->
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
//Import NavBar and Footer
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
  }
}
</script>

<style>

</style>
