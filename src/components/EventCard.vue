<template>
  <div class="card">
    <div class="card-content">
      <span class="card-content-title">{{ event.title }}</span>
      <span class="card-content-description"> {{ event.date }}</span>
      <span class="card-content-description"> {{ event.time }}</span>
      <span class="card-content-location"> {{ event.location }}</span>
    </div>
    <button class="btn deep-purple accent-1 button" @click="handleClick">
      details
    </button>
    <button class="btn deep-purple accent-1 button" @click="deleteHandle">
      delete
    </button>
    <button class="btn deep-purple accent-1 button" @click="onUpdate">
      update
    </button>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import axios from "axios";
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  props: {
    event: Object,
  },
  computed: {
    ...mapGetters(["getPageInfo"]),
  },
  methods: {
    handleClick() {
      router.push({
        name: "event-details",
        params: { id: this.event.id },
      });
    },
    async deleteHandle() {
      await axios.delete(`http://localhost:3000/events/${this.event.id}`)
        .then((data) => {
          if (data.status === 200) {
            alert(`Event with id ${this.event.id} was deleted !`)
            this.$store.dispatch('setTotalItems', this.getPageInfo.totalItems - 1)
          }
        })
        .catch(err => console.log(err))
      const pages = (this.getPageInfo.currentPage > Math.ceil(this.getPageInfo.totalItems / this.getPageInfo.delimiter))
        ? this.getPageInfo.currentPage - 1
        : this.getPageInfo.currentPage
      await axios.get(`http://localhost:3000/events?_limit=${this.getPageInfo.delimiter}&_page=${pages}`)
        .then(data => {
          this.$store.dispatch('setCurrentPage', pages)
          this.$store.dispatch('setTotalItems', data.headers['x-total-count'])
          this.$store.dispatch('fillEvents', data.data)
        })
        .catch(err => console.log(err))
    },
    onUpdate() {
      console.log("asd");
    },
  },
});
</script>
<style lang="scss" scoped>
.button {
  margin: 10px;
  padding: 10px 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 400px;
  display: flex;

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex-grow: 1;

    &-title {
      font-size: 24px;
      color: purple;
    }

    &-category {
      font-size: 20px;

      color: plum;
    }

    &-description {
      font-size: 23px;

      color: pink;
    }

    &-location {
      color: black;
    }
  }

}
</style>

