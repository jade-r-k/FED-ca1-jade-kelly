<template>
  <div>
    <p>
      <router-link
      :to="{name: 'viewcountry', params: {country: country.name.official}}"
      >
      <img :src="country.flags.png" width="20" height="15">
      </router-link>
      <router-link
        style="text-decoration: none; color: #000; font-size: 16px;"
        :to="{name: 'viewcountry', params: {country: country.name.official}}"> {{ country.name.common }}</router-link >
    </p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'AllCountryViewer',
  props: {
    country: Object
  }
}
</script>

<style>

</style>