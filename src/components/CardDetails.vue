<template>
  <div class="card-details" v-if="getDetails[0]">
    <div class="card-details-back" @click="clickModal">
      <div v-if="!updating" class="card-details-modal">
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
          <button class="btn deep-purple accent-1 button" @click="onUpdate">
            update
          </button>
        </div>
      </div>
      <div v-else class="card-details-modal">
        <button @click="handleClose" class="btn close-btn deep-purple accent-1">
          <i class="large material-icons">close</i>
        </button>
        <div class="card-details-modal-info">
          Title :<input class="card-details-modal-title" v-model="getDetails[0].title" />
          Category:<input class="card-details-modal-title" v-model="getDetails[0].category" />
          Description:<input class="card-details-modal-title" v-model="getDetails[0].description" />
          <div class="btns">
            <button class="btn deep-purple accent-1 button" @click="onSave">
              save
            </button>
            <button class="btn deep-purple accent-1 button" @click="onClose">
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from "@/router";
import axios from "axios";
import Vue from "vue";
import { mapGetters } from "vuex";
export default Vue.extend({
  components: {},
  data() {
    return {
      eventId: this.$route.params.id,
      updating: false,
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
    clickModal(e: Event) {
      e.stopPropagation();

    },
    onSave() {
      axios.put(`http://localhost:3000/events/${this.getDetails[0].id}`, this.getDetails[0])
        .then(data => {
          data.status === 200 ? this.updating = false : this.updating = false
        })
        .catch(err => console.log(err))
    },
    onClose() {
      this.updating = !this.updating;

    },
    handleClose() {
      this.updating = false;

      router.push({
        name: "events",
      });
      this.$store.commit('fillDetails', {})
      axios.get(`http://localhost:3000/events?_limit=${this.$store.state.pagination.delimiter}&_page=${this.$store.state.pagination.currentPage}`)
        .then(data => {
          this.$store.dispatch('setTotalItems', data.headers['x-total-count'])
          this.$store.dispatch('fillEvents', data.data)
        })
        .catch(err => console.log(err))
    },
    onUpdate() {
      this.updating = !this.updating;
    },
  },
});
</script>
<style lang="scss" scoped>
.btns {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.card-details {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: gray;
  opacity: 1;

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

