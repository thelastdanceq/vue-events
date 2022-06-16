<template>
  <div class="asd">
    <EventList />
  </div>
</template>


<script lang="ts">
import EventList from "@/components/EventList.vue";
import axios from "axios";
import Vue from "vue";
export default Vue.extend({
  mounted() {
    axios.get(`http://localhost:3000/events?_limit=${this.$store.state.pagination.delimiter}&_page=${this.$store.state.pagination.currentPage}`)
      .then(data => {
        this.$store.dispatch('setTotalItems', data.headers['x-total-count'])
        this.$store.dispatch('fillEvents', data.data)
      })
      .catch(err => console.log(err))
      .finally(() => {
        this.$store.dispatch('toggleLoading')
      })
  },
  components: { EventList },
});
</script>

<style lang="scss" scoped>
</style>
