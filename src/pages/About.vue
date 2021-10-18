<template>
  <div class="about">
      This is the About page!
      <div>
        <b-card
        style="max-width: 20rem;"
        >
          <div>
            <b-card-title style="max-width:50%">Dublin</b-card-title>
            <b-card-sub-title style="max-width:50%" class="float-end">18/10/2021</b-card-sub-title>
          </div>

          <b-card-img src="https://www.metaweather.com/static/img/weather/png/lr.png" alt="Image"></b-card-img>

          <b-card-body  style="text-align: center;">
            <b-card-title>17°C</b-card-title>
            <b-card-text>Light Rain</b-card-text>
          </b-card-body>

          <b-card-body>
            <b-card-text>Max: 19°C</b-card-text>
            <b-card-text>Min: 14°C</b-card-text>
            <b-card-text>Humidity: 74%</b-card-text>
          </b-card-body>
        </b-card>
      </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  components: {
  }
}
</script>

<style>
</style>