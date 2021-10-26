<template>
  <div>
    <b-card
        class="col-lg-4 col-md-6 col-sm-6 mx-auto"
        bg-variant="success"
        :title="country.name.common"
        >
        <img :src="country.flags.png">
        <b-card-text>
          <br>
    <b-list-group flush>
          <b-list-group-item>Region: {{ country.region }}</b-list-group-item>
          <b-list-group-item>Population: {{ country.population }}</b-list-group-item>
          <b-list-group-item>Capital: {{ country.capital[0] }}</b-list-group-item>
        </b-list-group>
        </b-card-text>
        </b-card>
  </div>
</template>

<script>
export default {
  name: 'CountryViewer',
  props: {
    country: Object
  }
}
</script>

<style>
</style>