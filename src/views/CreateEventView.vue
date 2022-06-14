<template>
  <div class="about">
    <CreateNewEvent />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import CreateNewEvent from '@/components/CreateNewEvent.vue'
export default Vue.extend({
  components: { CreateNewEvent }
})
</script>
