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
    <button class="btn deep-purple accent-1 button" @click="deleteHandler">
      delete
    </button>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import Vue from "vue";

export default Vue.extend({
  props: {
    event: Object,
  },
  methods: {
    handleClick() {
      router.push({
        name: "event-details",
        params: { id: this.event.id },
      });
    },
    deleteHandler() {
      this.$store.dispatch('deleteEvent', this.event.id)
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

