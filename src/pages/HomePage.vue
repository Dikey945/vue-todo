<template>
  <section class="mt-[20px] flex flex-col items-center">
    <h1 class="text-center text-4xl">Create Todo</h1>
    <todo-form />
    <todos-list :todos="todosStore.todos"/>
  </section>
</template>

<script>
  import TodoForm from "../components/TodoForm.vue";
  import TodosList from "../components/TodosList.vue";
  import {useTodosStore} from "../store/todosStore.ts";
export default {
  components: { TodosList, TodoForm },
  name: "HomePage",
  setup() {
    const todosStore = useTodosStore();
    return { todosStore };
  }
}
</script>

<style scoped>

</style>