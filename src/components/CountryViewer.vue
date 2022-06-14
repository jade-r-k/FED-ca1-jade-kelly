<template>
  <div>
    <!-- Card -->
    <b-card
        class="col-lg-4 col-md-6 col-sm-6 mx-auto"
        bg-variant="success"
        style="color: #fff;"
        :title="country.name.common"
        >
        <!-- ^Displays country's name^ -->
        <!-- Displays country's flag -->
        <img :src="country.flags.png" style="border: 1px solid #000;">
        <b-card-text>
          <br>
    <b-list-group flush>
      <!-- List containing info about country -->
          <b-list-group-item>Region: {{ country.region }}</b-list-group-item>
          <b-list-group-item>Population: {{ country.population }}</b-list-group-item>
          <b-list-group-item>Capital: {{ country.capital[0] }}</b-list-group-item>
          <!-- Displays all languages country may have -->
          <b-list-group-item>Languages: <p
          v-for="language in Object.values(country.languages)"
          :key="language"
          >{{ language }}</p></b-list-group-item>
          <!-- Displays all currencies country may have -->
          <b-list-group-item>Currencies: <p
          v-for="currency in Object.values(country.currencies)"
          :key="currency.name"
          >{{ currency.name }}</p></b-list-group-item>

        </b-list-group>
        </b-card-text>
        </b-card>
  </div>
</template>

<script>
export default {
  name: 'CountryViewer',
  props: {
    //Country prop
    country: Object
  }
}
</script>

<style>
</style>