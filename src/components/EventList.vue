<template>
  <div class="card-list">
    <ul class="list">
      <EventCard v-for="event in events" :key="event.id" :event="event" />
    </ul>
    <router-view :events="events"></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EventCard from "./EventCard.vue";
export default Vue.extend({
  components: {
    EventCard,
  },
  props: {
    events: Array,
  },
  methods: {},
});
</script>
<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
}
</style>

