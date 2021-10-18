<template>
  <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <br>
      Search for a country!
      <br>
      <input type="text" v-model="term" />
      <b-button variant="primary" >Search</b-button>
  </div>
</template>

<script>
import axios from 'axios';
const COUNTRY_URL = "https://restcountries.com/v3.1"

export default {
  name: 'home',
  data() {
    return {
      countries: [],
      term: "",

    };
  },
  mounted() {
    this.allCountry();
  },
  methods: {
    allCountry() {
      axios.get(`${COUNTRY_URL}/all`)
      .then((response) => {
        console.log(response)
      })
      .catch(error => console.log(error))
    }
  },
  components: {
  }
}
</script>

<style>
.home {
    text-align: center;
}
</style>