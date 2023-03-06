<template>
  <section class="mt-[20px] flex flex-col items-center">
    <h1 class="text-center text-4xl">Todos List</h1>
    <ul v-if="todos">
      <li v-for="todo in todos" :key="todo.id">
        <base-cart :completed='todo.done'>{{todo.text}}</base-cart>
      </li>
    </ul>
  </section>
</template>

<script>
import {ref} from "vue";
import BaseCart from "../UI/BaseCard.vue";

export default {
  components: {BaseCart},
  props: ['todos'],
  setup(props) {
    const todos = ref(props.todos);
    console.log(todos.value.length)

    return { todos };
  }
}
</script>

<style scoped>

</style>