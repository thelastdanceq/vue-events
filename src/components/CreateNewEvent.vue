<template>
    <div class="create-new">
        <div class="row">
            <div class="input-field col s6">
                <i class="material-icons prefix">subtitles</i>
                <input v-model="newEvent.title" id="icon_prefix" type="text" class="validate" placeholder="Title">

            </div>

            <div class="input-field col s6">
                <i class="material-icons prefix">device_hub</i>
                <input v-model="newEvent.category" id="icon_telephone" type="text" class="validate"
                    placeholder="Category">

            </div>
        </div>
        <div class="row">
            <div class="input-field ">
                <i class="material-icons prefix">mode_edit</i>
                <textarea v-model="newEvent.description" id="icon_prefix2" class="materialize-textarea"
                    placeholder="Description"></textarea>

            </div>
        </div>

        <div class="row">
            <div class="input-field col s6">
                <i class="material-icons prefix">date_range</i>
                <input v-model="newEvent.date" id="icon_telephone" type="date" class="validate" placeholder="Category">
            </div>
            <div class="input-field col s6">
                <i class="material-icons prefix">access_time</i>
                <input v-model="newEvent.time" id="icon_telephone" type="time" class="validate" placeholder="Category">
            </div>
        </div>
        <div class="row">
            <div class="input-field ">
                <i class="material-icons prefix">add_location</i>
                <input v-model="newEvent.location" id="icon_telephone" type="text" class="validate"
                    placeholder="Location">
            </div>
        </div>

        <div class="row" v-for="org in newEvent.organizer" :key="org.id">
            <div class="input-field ">
                <i class="material-icons prefix">contacts</i>
                <input v-model="org.name" id="icon_telephone" type="text" class="validate" placeholder="Organizer">
            </div>
        </div>
        <div class="row">
            <button @click="handleOrg" class="btn deep-purple accent-1">+</button>
        </div>
        <div class="row" v-for="attend in newEvent.attendees" :key="attend.id">
            <div class="input-field ">
                <i class="material-icons prefix">contacts</i>
                <input v-model="attend.name" id="icon_telephone" type="text" class="validate" placeholder="Attend">
            </div>
        </div>
        <div class="row">
            <button @click="handleAttend" class="btn deep-purple accent-1">+</button>
        </div>
        <div class="row">
            <button @click="handleNewEvent" class="btn deep-purple accent-1">ADD NEW EVENT</button>
        </div>


    </div>
</template>


<style lang="scss" scoped>
.row {
    width: 600px;
}
</style>


<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    methods: {
        handleOrg() {
            this.newEvent.organizer = [...this.newEvent.organizer, { id: new Date().getMilliseconds() + 3, name: "" }];
        },

        handleAttend() {
            this.newEvent.attendees = [...this.newEvent.attendees, { id: new Date().getMilliseconds() + 1, name: "" }];
        },
        handleNewEvent() {
            this.$store.commit('createEvent', { ...this.newEvent })
        },
    },
    data() {
        return {
            newEvent: {
                "id": new Date().getMilliseconds(), //done
                "title": "", // done 
                "date": "", //done
                "time": "", //done
                "location": "", // done
                "description": "", //done
                "organizer": [{ id: new Date().getMilliseconds() + 5, name: "" }],
                "category": "", //done
                "attendees": [{ id: new Date().getMilliseconds(), name: "" }],
            }
        }
    },
})
</script>