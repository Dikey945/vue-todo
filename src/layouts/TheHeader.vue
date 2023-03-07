<template>
  <header class="h-[70px] flex flex-wrap justify-between items-center max-w-full bg-green-400 p-[10px]">
    <div class="text-xl text-white">Logo</div>
    <nav class="">
      <ul class="flex ">

        <li v-if="!auth.isLogged">
          <router-link to="/auth">login</router-link>
        </li>

        <li>
          <base-button @click="logout" v-if="auth.isLogged">logout</base-button>
        </li>
      </ul>

    </nav>
  </header>
</template>

<script lang="ts">
  import BaseButton from '../UI/BaseButton.vue';
  import {useAuthStore} from "../store/authStore";
  import {ref} from "vue";

  export default {
  components: { BaseButton },
  name: "TheHeader",
  setup() {
    const auth = ref(useAuthStore())
    function logout() {
      auth.value.logout()
    }
    return {
      auth,
      logout
    }
  }
}
</script>

<style scoped>
  li {
    margin: 0 0.5rem;
  }
  header a {
    text-decoration: none;
    color: white;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 1px solid white;
    border-radius: 10px;
  }

  a:active,
  a:hover,
  a.router-link-active {
    border: 1px solid yellow;
    color: yellow
  }
</style>