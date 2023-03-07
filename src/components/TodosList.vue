<template>
  <section class="mt-[20px] flex flex-col items-center">
    <h1 class="text-center text-4xl">Todos List</h1>
    <ul v-if="todos && todos.length">
      <li v-for="todo in todos" :key="todo.id">
        <base-cart :text="todo.text" :id="todo.id" :completed='todo.done'>{{todo.text}}</base-cart>
      </li>
    </ul>
    <h2 v-else>No todos yet</h2>
  </section>
</template>

<script lang="ts">
import BaseCart from "../UI/BaseCard.vue";
import { useAuthStore } from '../store/authStore'
import {computed} from "vue";

export default {
  components: {BaseCart},
  setup() {
    const authStore = useAuthStore()
    const todos = computed(() => authStore.user!.todos)
    return { todos };
  }
}
</script>

<style scoped>

</style>