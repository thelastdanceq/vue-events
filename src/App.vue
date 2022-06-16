<template>
  <div id="app">

    <PreLoder v-if="$store.state.isLoading" />

    <nav class="deep-purple accent-1 nav" v-else>
      <router-link to="/">Home</router-link>
      <router-link to="/events">Events</router-link>
      <router-link to="/create-event">Create Event</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script lang="ts">
import axios from 'axios';
import Vue from 'vue'
import { IEvent } from './types/types';
import PreLoder from './components/PreLoder.vue';
export default Vue.extend({
  mounted() {
    axios.get('http://localhost:3000/events')
      .then(data => {
        data.data.map((eventasd: IEvent) => this.$store.dispatch('createEvent', eventasd))
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.$store.dispatch('toggleLoading')
      })
  },
  components: {
    PreLoder
  }
})
</script>

<style lang="scss">
.nav {
  display: flex;
  justify-content: space-between;

  & a {
    font-size: 20px;

    &:last-child {
      margin-right: 30px;
    }

    &:first-child {
      margin-left: 30px;
    }
  }
}
</style>

