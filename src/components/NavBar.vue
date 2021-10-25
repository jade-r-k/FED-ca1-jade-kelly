<template>
  <div id="nav">
      <b-navbar variant="success">
          <b-navbar-brand class="mx-auto">
              <router-link
              style="text-decoration: none; color: #fff; font-size: 28px;"
                to="/">
              <Icon icon="gis:earth" color="white" width="50" height="50" />
              EARTH</router-link>
          </b-navbar-brand>
      </b-navbar>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
	components: {
		Icon,
	},
};
</script>

<style>
#nav {
    text-align: center;
}

#nav a {
    font-weight: bold;
}
</style>