<template>
  <div class="card-details">
    <div class="card-details-back">
      <div class="card-details-modal">
        <button @click="handleClose" class="btn close-btn deep-purple accent-1">
          <i class="large material-icons">close</i>
        </button>
        <div class="card-details-modal-info">
          <p class="card-details-modal-title">
            Title : {{ getDetails[0].title }}
          </p>
          <p class="card-details-modal-title">
            Category :
            {{ getDetails[0].category }}
          </p>
          <p class="card-details-modal-title">
            Description :
            {{ getDetails[0].description }}
          </p>
          <p class="card-details-modal-title" v-if="Array.isArray(getDetails[0].organizer)">
            Organizer :
            <span v-for="org in  getDetails[0].organizer" :key="org.id">{{
                org.name
            }}</span>
          </p>
          <span v-else> Organizer :
            {{ getDetails[0].organizer }}</span>

          <p class="card-details-modal-title">
            Attends :
            <span v-for="attend in  getDetails[0].attendees" :key="attend.id">{{ `${attend.name} ` }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import { IEvent } from "@/types/types";
import axios from "axios";
import Vue from "vue";
import { mapGetters } from "vuex";
export default Vue.extend({
  components: {},
  data() {
    return {
      eventId: this.$route.params.id,
    }
  },
  mounted() {
    axios.get(`http://localhost:3000/events?id=${this.eventId}`)
      .then(data => this.$store.dispatch("fillDetails", data.data))
      .catch(err => console.log(err))
  },
  computed: {
    ...mapGetters([
      "getDetails"
    ])
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

