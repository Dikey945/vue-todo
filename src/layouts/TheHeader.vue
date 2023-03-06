<template>
  <header class="h-[70px] flex flex-wrap justify-between items-center max-w-full bg-green-400 p-[10px]">
    <div class="text-xl text-white">Logo</div>
    <nav class="">
      <ul class="flex ">
        <li>
          <router-link to="">Completed</router-link>
        </li>

        <li>
          <router-link to="">Active</router-link>
        </li>

        <li>
          <router-link to="">login</router-link>
        </li>

        <li>
          <base-button v-if="auth.isLogged">logout</base-button>
        </li>
      </ul>

    </nav>
  </header>
</template>

<script>
  import BaseButton from '../UI/BaseButton.vue';
  import {useAuthStore} from "../store/authStore.ts";
  import {ref} from "vue";

  export default {
  components: { BaseButton },
  name: "TheHeader",
  setup() {
    const auth = ref(useAuthStore())
    console.log(auth)
    return {
      auth
    }
  }
}
</script>

<style scoped>
  li {
    margin: 0 0.5rem;
  }
</style>