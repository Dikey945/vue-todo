<template>
  <div class='card flex flex-col justify-between' :class="completed ? 'bg-green-500' : 'bg-red-600'" >
    <input
        @blur="isEditing = false"
        v-if="isEditing"
        v-model="text"
        type="text"
        ref="eddInput"
        @keyup.enter="saveEditedTodo"
    />
    <div class="w-[300px]" @click="editTodo" v-else>
      <slot></slot>
    </div>
    <div class="mt-[15px]">
      <button @click="deleteTodo"><font-awesome-icon @click="deleteTodo" class="mr-[5px] icons" icon="trash"  /></button>
      <button  @click="editTodo" ><font-awesome-icon class='mr-[5px] icons' icon="fa-pen-to-square" /></button>
      <button @click="toggleCompleted"><font-awesome-icon class="icons" icon="fa-square-check" /></button>
    </div>

  </div>

</template>

<script>

import BaseButton from "./BaseButton.vue";
import {computed, nextTick, ref, toRef} from "vue";
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {useAuthStore} from "../store/authStore";

export default {
  methods: {
    faSave() {
      return faSave
    }
  },
  components: {BaseButton},
  props:['id','completed', 'text'],
  name: 'BaseCart',
  setup (props) {
    const id = computed(() => props.id)
    let isEditing = ref(false)
    const completed = toRef(props, 'completed')
    const todosStore = useAuthStore()

    const text = props.text
    const eddInput = ref(text)
    const todos = computed(() => todosStore.user.todos)

    function deleteTodo() {
      todosStore.deleteTodo(props.id)
      console.log(todosStore.user.todos)
    }

    function editTodo() {
      isEditing.value = !isEditing.value
      nextTick(() => {
        eddInput.value.focus()
      })
    }

    function saveEditedTodo() {
      todosStore.editTodo({
        id: props.id,
        text: eddInput.value.value,
        done: completed
      })
      isEditing.value = false
    }

    function toggleCompleted() {
      todosStore.toggleDone(id.value)
      console.log(id.value)
      console.log(todosStore.user.todos)
    }


    return {
      completed,
      isEditing,
      text,
      eddInput,
      editTodo,
      deleteTodo,
      saveEditedTodo,
      toggleCompleted,
    }
  }
};
</script>

<style scoped>
  .card {
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 1rem auto;
    max-width: 40rem;
  }

  .icons:hover {
    cursor: pointer;
    color: #fff;
  }

  .icons:active {
    color: #fff;
  }
</style>