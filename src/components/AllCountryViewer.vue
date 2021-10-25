<template>
  <div>
    <p>
      <img :src="country.flags.png" width="20" height="15">
      <router-link :to="{name: 'viewcountry', params: {country: country.name.official}}"> {{ country.name.common }}</router-link >
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