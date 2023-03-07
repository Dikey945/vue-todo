import {defineStore} from "pinia";
import {usersDB} from "./usersDB";

interface State {
  isLoggedIn: boolean;
  user: User | null;

}

export interface Todo {
  id: string;
  text: string;
  done: any;
}

export interface User{
  id: string;
  email: string;
  password: string;
  todos: Todo[];
}
export const useAuthStore = defineStore('auth',{
  state: (): State => ({
    isLoggedIn: false,
    user: null
  }),
  actions: {
    signup(user: User){
      for(let i = 0; i < usersDB.length; i++){
        if (usersDB[i].email === user.email){
          return false;
        }
      }
      usersDB.push(user);
      this.login(user.email, user.password);
    },
    login(email: string, password: string){
      if (!this.isLogged) {
        const loggedUser: User | undefined = usersDB.find(user => user.email === email && user.password === password);
        if (loggedUser !== undefined) {
          this.isLoggedIn = true;
          this.user = loggedUser;
          localStorage.setItem('isLoggedIn', "true")
          localStorage.setItem('user', JSON.stringify(loggedUser))
        }

      }
    },
    autoLogin(){
      const loggedUser = localStorage.getItem('user');
      if (loggedUser) {
        const user = JSON.parse(loggedUser);
        this.login(user.email, user.password);
      }
    },
    logout(){
      this.isLoggedIn = false;
      this.user = null;
      localStorage.setItem('isLoggedIn', "true")
      console.log('Setted to false')
      localStorage.setItem('user', JSON.stringify(this.user))
    },
    addTodo(newTodo: Todo){
      this.user!.todos.unshift(newTodo);
    },
    deleteTodo(id: string){
      this.user!.todos = this.user!.todos.filter(todo => todo.id !== id)
    },
    editTodo(editedTodo: Todo){
      const todo = this.user!.todos.find(todo => todo.id === editedTodo.id);
      if (todo) {
        todo.text = editedTodo.text;
      }
    },
    toggleDone(id: string){
      const todo = this.user!.todos.find(todo => todo.id === id);
      if (todo) {
        todo.done = !todo.done;
      }
    }
  },
  getters: {
    isLogged(): boolean {
      return this.isLoggedIn;
    }
  }
})