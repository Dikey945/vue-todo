import {defineStore} from "pinia";

interface State {
  todos: Todo[];
}

interface Todo {
  id: number;
  text: string;
  done: boolean;
}
export const useTodosStore = defineStore('todos',{
  state: (): State => ({
    todos: [
      {id: 1, text: 'Learn Vue 3', done: true},
      {id: 2, text: 'Learn Pinia', done: false},
      {id: 3, text: 'Build something awesome', done: false},
    ]
  }),
  getters: {
    doneTodos(): Todo[] | null {
      return this.todos.filter(todo => todo.done)
    }
  },
  actions: {
    addTodo(newTodo: Todo){
      this.todos.push(newTodo);
    }
  }
})