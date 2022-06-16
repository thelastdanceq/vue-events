<template>
  <div class="card-list">

    <ul class="list">
      <EventCard v-for="event in targetEvents" :key="event.id" :event="event" />
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { IEvent } from "@/types/types";
import Vue from "vue";
import EventCard from "./EventCard.vue";

export default Vue.extend({
  components: {
    EventCard,
  },
  methods: {},
  computed: {
    targetEvents(): IEvent[] {
      return this.$store.state.events.events
    }
  },
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

