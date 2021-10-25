<template>
  <div class="viewCountry">
      This is the View Country page!
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'viewCountry',
  components: {
  },
  mounted(){
    axios.get(`https://restcountries.com/v3.1/name/${this.$route.params.country}?fullText=true`)
         .then(response => {
           console.log(response.data)
         })
         .catch(error => console.log(error))
  }
}
</script>

<style>
.viewCountry {
    text-align: center;
}
</style>