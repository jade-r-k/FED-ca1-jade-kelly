<template>
  <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
      <br>
      Search for a country!
      <br>
      <input type="text" v-model="term" />
      <b-button variant="primary" >Search</b-button>
      <div>
        <b-card
        class="countries mx-auto"
        header="Countries">
          <b-list-group flush>
          <b-list-group-item
            v-for="country in countries"
            :key="country.id"
            href="#"
          >{{ country.name.common }}</b-list-group-item>
        </b-list-group>
        </b-card>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
const COUNTRY_URL = "https://restcountries.com/v3.1"

export default {
  name: 'home',
  data() {
    return {
      countries: null,
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
        console.log(response.data)
        this.countries = response.data
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
.countries{
  width: 730px;
}
</style>