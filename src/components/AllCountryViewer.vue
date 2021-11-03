<template>
  <div>
    <!-- List item -->
    <b-list-group-item>
      <!-- Links to ViewCountry.vue -->
      <router-link
      :to="{name: 'viewcountry', params: {country: country.name.official}}"
      >
      <!-- Displays country's flag -->
      <img :src="country.flags.png" style="border: 1px solid #000;" width="20" height="15">
      </router-link>
      <!-- Links to ViewCountry.vue -->
      <router-link
        style="text-decoration: none; color: #000; font-size: 16px;"
        :to="{name: 'viewcountry', params: {country: country.name.official}}">
        <!-- Displays country's name -->
         {{ country.name.common }}</router-link >
    </b-list-group-item>
  </div>
</template>

<script>
export default {
  name: 'AllCountryViewer',
  props: {
    //Country prop
    country: Object
  }
}
</script>

<style>

</style>