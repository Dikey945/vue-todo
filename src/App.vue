<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script lang="ts">
 import TheHeader from "./layouts/TheHeader.vue";
  export default {
    components: {
      TheHeader,
    },
  }

</script>

<style scoped>

</style>
