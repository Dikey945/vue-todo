<template>
  <form
      class="mt-[20px] flex flex-col w-[400px] h-[200px] p-10 border-2 border-green-400"
  >
    <div>
      <label class="mr-[5px]" for="todo">Enter todo task</label>
      <input
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

<script>
import BaseButton from "../UI/BaseButton.vue";
import {ref} from "vue";
export default {
  components: { BaseButton },
  name: "TodoForm",
  setup() {
    const check = ref(false);
    return {
      check
    }
  }
}
</script>

<style scoped>

</style>