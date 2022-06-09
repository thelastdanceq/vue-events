<template>
  <div class="card-details">
    <div class="card-details-back">
      <div class="card-details-modal">
        <button @click="handleClose" class="btn close-btn deep-purple accent-1">
          <i class="large material-icons">close</i>
        </button>
        <div class="card-details-modal-info">
          <p class="card-details-modal-title">
            Title : {{ events.filter((el) => el.id === $attrs.id)[0].title }}
          </p>
          <p class="card-details-modal-title">
            Category :
            {{ events.filter((el) => el.id === $attrs.id)[0].category }}
          </p>
          <p class="card-details-modal-title">
            Description :
            {{ events.filter((el) => el.id === $attrs.id)[0].description }}
          </p>
          <p class="card-details-modal-title">
            Organizer :
            {{
              events.filter((el) => el.id === $attrs.id)[0].organizer instanceof
              Object
                ? events.filter((el) => el.id === $attrs.id)[0].organizer.user
                    .name
                : events.filter((el) => el.id === $attrs.id)[0].organizer
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import Vue from "vue";
export default Vue.extend({
  components: {},
  props: {
    events: [],
  },
  methods: {
    handleClose() {
      router.push({
        name: "events",
      });
    },
  },
});
</script>
<style lang="scss" scoped>
.card-details {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: gray;
  opacity: 0.95;

  display: flex;
  justify-content: center;
  align-items: center;

  &-modal {
    width: 700px;
    height: 700px;
    position: relative;
    background-color: white;
    & .close-btn {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
    &-info {
      font-size: 20px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>

