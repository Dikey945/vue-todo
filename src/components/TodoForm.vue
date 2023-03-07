<template>
  <form
      @submit.prevent="addTodo"
      class="mt-[20px] flex flex-col w-[400px] h-[200px] p-10 border-2 border-green-400"
  >
    <div>
      <label class="mr-[5px]" for="todo">Enter todo task</label>
      <input
          v-model="todoInput"
          class="w-[200px] border-2 border-blue-700"
          type="text"
          id="todo"
          placeholder="What you want to do?"
      />
    </div>
    <div class="mt-[10px] flex justify-between">
      <label for="completed">Is task completed?</label>
      <input type="checkbox"  v-model="check" id="completed"/>
    </div>


    <base-button class="mt-[10px]" fill-mode="true" type="submit">Add Todo</base-button>
  </form>
</template>

<script lang="ts">
import BaseButton from "../UI/BaseButton.vue";
import {ref} from "vue";

import { Todo } from '../store/authStore'
import {useAuthStore} from "../store/authStore";
import {useRouter} from "vue-router";
export default {
  components: { BaseButton },
  name: "TodoForm",
  setup() {
    const check = ref(false);
    const todoInput = ref(null);
    const todosStore = useAuthStore();
    const router = useRouter();
    function addTodo() {

      if(todoInput.value) {
        const isLogged = todosStore.isLogged
        if(!isLogged) {
          router.push('/auth')
          return;
        }
        const newTodo: Todo = {
          id: new Date().toISOString(),
          text: todoInput.value,
          done: check.value
        }
        todosStore.addTodo(newTodo)
        todoInput.value = null
        check.value = false

      }

      return;
    }

    return {
      check,
      todoInput,
      addTodo,
    }
  }
}
</script>

<style scoped>

</style>