<template>
  <div class="asd">
    <EventList :events="events" />
  </div>
</template>


<script lang="ts">
import EventList from "@/components/EventList.vue";
import { events } from "@/constants/events";
import Vue from "vue";
export default Vue.extend({
  components: { EventList },
  data() {
    return {
      events: events,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
