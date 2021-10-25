<template>
  <div class="home">
      <br>
      <h4>Search for a country!</h4>
      <br>

      <div class="col-lg-3 col-md-5 col-sm-5 mx-auto">
        <b-input-group>
        <input class="form-control" type="text" v-model="term" v-on:keyup.enter="searchCountryName()" />
        <b-button variant="success" @click="searchCountryName()">Search</b-button>
      </b-input-group>
      </div>

      <br>
      
      <div>
        <b-card
        class="col-lg-4 col-md-6 col-sm-6 mx-auto"
        bg-variant="success">
          <b-list-group flush>
          <b-list-group-item>
          <AllCountryViewer
          v-for="country in countries"
            :key="country.id"
            :country="country"/>
          </b-list-group-item>
        </b-list-group>
        </b-card>
      </div>
      <br>
  </div>
</template>

<script>
import axios from 'axios';
import AllCountryViewer from '@/components/AllCountryViewer'
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
    },
    searchCountryName() {
      if(!this.term) {
                alert("Please enter a search term!");
                return
            }
            axios.get(`${COUNTRY_URL}/name/${this.term}`)
            .then((response) => {
                console.log(response.data)
                this.countries = response.data
            }
            )
            .catch((error) => {
              console.log(error)
              this.allCountry();
              alert("Country was not found, check your spelling or find it in the list below.");
              })
    },

  },
  components: {
    AllCountryViewer
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
.green-back{
  background: #2ECC71;
}

.center-block {
    display: table;  /* Instead of display:block */
    margin-left: auto;
    margin-right: auto;
}
</style>