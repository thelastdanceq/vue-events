<template>
    <div class="preloader-wrapper big active">
        <div class="spinner-layer spinner-yellow-only">
            <div class="circle-clipper left">
                <div class="circle "></div>
            </div>
            <div class="gap-patch">
                <div class="circle"></div>
            </div>
            <div class="circle-clipper right">
                <div class="circle"></div>
            </div>
        </div>
    </div>
</template>
 
 <style lang="scss" scoped>
 .preloader-wrapper {
     position: absolute;
     left: 0;
     right: 0;
     top: 0;
     bottom: 0;
     margin: auto;
 }
 </style>
 <script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: "PreLoaderF"
})
</script>