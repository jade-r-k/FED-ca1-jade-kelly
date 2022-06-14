<template>
  <div class="home">
      <br>
      <h4>Search for a country!</h4>
      <br>

      <div class="col-lg-3 col-md-5 col-sm-5 mx-auto">
        <!-- Search Bar -->
        <b-input-group>
        <input class="form-control" type="text" v-model="term" v-on:keyup.enter="searchCountryName()" />
        <b-button variant="success" @click="searchCountryName()">Search</b-button>
      </b-input-group>
      </div>

      <br>
      
      <div>
        
        <!-- Card -->
        <b-card
        class="col-lg-4 col-md-6 col-sm-6 mx-auto"
        bg-variant="success">
        <!-- List group -->
          <b-list-group flush>
            <!-- AllCountryViewer component. Displays all countries in countries array -->
          <AllCountryViewer
          v-for="country in countries"
            :key="country.id"
            :country="country"/>
        </b-list-group>
        </b-card>
      </div>
      <br>
  </div>
</template>

<script>
//Import Axios (Used to get data from API )
import axios from 'axios';

//Import AllCountryViewer
import AllCountryViewer from '@/components/AllCountryViewer'

//REST countries URL
const COUNTRY_URL = "https://restcountries.com/v3.1"

export default {
  name: 'home',
  data() {
    return {
      //countries array
      countries: null,
      term: "",
    };
  },
  //Method that is used when the page is loaded
  mounted() {
    this.allCountry();
  },
  methods: {
    //gets all countries from API
    allCountry() {
      axios.get(`${COUNTRY_URL}/all`)
      .then((response) => {
        console.log(response.data)
        this.countries = response.data
      })
      .catch(error => console.log(error))
    },
    //Searches API using the countries name
    searchCountryName() {
      //If the user doesn't type
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
            //If there is no country found
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