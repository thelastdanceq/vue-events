<template>
  <div class="card">
    <div class="card-content">
      <span class="card-content-title">{{ event.title }}</span>
      <!-- <span class="card-content-category">Category: {{ event.category }}</span> -->
      <span class="card-content-description"> {{ event.date }}</span>
      <span class="card-content-description"> {{ event.time }}</span>
      <span class="card-content-location"> {{ event.location }}</span>
    </div>
    <button class="btn deep-purple accent-1" @click="handleClick">
      details
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
  },
});
</script>
<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
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

  & * {
    padding: 0;
  }
}
</style>

