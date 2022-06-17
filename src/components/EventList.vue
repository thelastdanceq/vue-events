<template>
  <div class="card-list">

    <ul class="list">
      <EventCard v-for="event in targetEvents" :key="event.id" :event="event" />
    </ul>
    <ul class="pagination">
      <li v-for="number in Math.ceil(getPageInfo.totalItems / getPageInfo.delimiter)" :key="number">
        <button @click="onChangePage(number)" :class="
      getPageInfo.currentPage === number ?
        'active deep-purple btn' :
        'common deep-purple lighten-5 btn'">{{
        number
    }}</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { IEvent } from "@/types/types";
import axios from "axios";
import Vue from "vue";
import { mapGetters } from "vuex";
import EventCard from "./EventCard.vue";

export default Vue.extend({
  components: {
    EventCard,
  },
  methods: {
    onChangePage(id: number) {
      this.$store.dispatch('setCurrentPage', id)
      axios.get(`http://localhost:3000/events?_limit=${this.getPageInfo.delimiter}&_page=${id}`)
        .then(data => {
          this.$store.dispatch('fillEvents', data.data)
          this.$store.dispatch('setTotalItems', data.headers['x-total-count'])
        })
        .catch(err => console.log(err))
    }
  },
  computed: {
    targetEvents(): IEvent[] {
      return this.$store.state.events.events
    },
    ...mapGetters(["getPageInfo"]),
  },
});
</script>
<style lang="scss" scoped>
.active {
  background-color: red;
}

.common {
  color: black;
}

.card-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.list {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  justify-content: center;
}
</style>

