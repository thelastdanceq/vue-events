<template>
  <div class="asd">
    <EventList />
  </div>
</template>


<script lang="ts">
import EventList from "@/components/EventList.vue";
// import axios from "axios";
import Vue from "vue";
export default Vue.extend({
  components: { EventList },
});
</script>

<style lang="scss" scoped>
</style>
