<template>
  <div class="card-details">
    <div class="card-details-back">
      <div class="card-details-modal">
        <button @click="handleClose" class="btn close-btn deep-purple accent-1">
          <i class="large material-icons">close</i>
        </button>
        <div class="card-details-modal-info">
          <p class="card-details-modal-title">
            Title : {{ targetEvent.title }}
          </p>
          <p class="card-details-modal-title">
            Category :
            {{ targetEvent.category }}
          </p>
          <p class="card-details-modal-title">
            Description :
            {{ targetEvent.description }}
          </p>
          <p class="card-details-modal-title" v-if="Array.isArray(targetEvent.organizer)">
            Organizer :
            <span v-for="org in targetEvent.organizer" :key="org.id">{{
                org.name
            }}</span>
          </p>
          <span v-else> Organizer :
            {{ targetEvent.organizer }}</span>

          <p class="card-details-modal-title">
            Attends :
            <span v-for="attend in targetEvent.attendees" :key="attend.id">{{ `${attend.name} ` }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { IEvent } from "@/types/types";
import Vue from "vue";
export default Vue.extend({
  components: {},
  data() {
    return {
      eventId: this.$route.params.id
    }
  },
  computed: {
    targetEvent(): IEvent {
      return this.$store.state.events.events.find((event: IEvent) => event.id === Number(this.eventId))
    }
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

