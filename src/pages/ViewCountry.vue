<template>
  <div class="viewCountry">
    <br>
      <CountryViewer
      v-for="country in countries"
      :key="country.id"
      :country="country"
       />
       <br>
  </div>
</template>

<script>
import axios from 'axios';
import CountryViewer from '@/components/CountryViewer'

export default {
  name: 'viewCountry',
  data(){
    return {
      countries: null,
    }
  },
  components: {
    CountryViewer
  },
  mounted(){
    this.country();
  },
  methods: {
    country() {
      axios.get(`https://restcountries.com/v3.1/name/${this.$route.params.country}?fullText=true`)
         .then(response => {
           console.log(response.data)
           this.countries = response.data
         })
         .catch(error => console.log(error))
    },
  }
}
</script>

<style>
.viewCountry {
    text-align: center;
}
</style>