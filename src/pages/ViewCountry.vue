<template>
  <div class="viewCountry">
    <br>
    <!-- CountryViewer displays the country in countries array -->
      <CountryViewer
      v-for="country in countries"
      :key="country.id"
      :country="country"
       />
       <br>
  </div>
</template>

<script>
//Import Axios (Used to get data from API )
import axios from 'axios';

//Import CountryViewer
import CountryViewer from '@/components/CountryViewer'

export default {
  name: 'viewCountry',
  data(){
    return {
      //countries array
      countries: null,
    }
  },
  components: {
    CountryViewer,
  },
  //Method that is used when the page is loaded
  mounted(){
    this.country();
  },
  methods: {
    //Gets data about country using its name
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