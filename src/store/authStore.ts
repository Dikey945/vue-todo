import {defineStore} from "pinia";
import {usersDB} from "./usersDB";
import {useStorage} from "@vueuse/core";

interface State {
  isLoggedIn: boolean;
  user: User | null;
}

interface User{
  id: string;
  email: string;
  password: string;
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
      this.login(user);
    },
    login(user: User){
      if (!this.isLogged) {
        this.isLoggedIn = true;
        this.user = user;
        useStorage('isLoggedIn', true)
      }
    },
    logout(){
      this.isLoggedIn = false;
      this.user = null;
    }
  },
  getters: {
    isLogged(): boolean {
      return this.isLogged;
    }
  }
})