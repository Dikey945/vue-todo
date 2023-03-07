<template>
  <section class="mt-[20px] flex flex-col items-center">
    <h1 class="text-center text-4xl">Create Todo</h1>
    <todo-form />
    <todos-list v-if="isAuth"/>
  </section>
</template>

<script lang="ts">
  import TodoForm from "../components/TodoForm.vue";
  import TodosList from "../components/TodosList.vue";
  import {useAuthStore} from "../store/authStore";
  import {computed, onMounted} from "vue";
export default {
  components: { TodosList, TodoForm },
  name: "HomePage",
  setup() {
    const user = useAuthStore();
    const isAuth = computed(() => useAuthStore().isLogged);
    onMounted(() => {
      const logged = localStorage.getItem('isLogged')
      if(logged) {
        user.autoLogin()
      }

      console.log(user)
    })
    return {isAuth};
  }
}
</script>

<style scoped>

</style>