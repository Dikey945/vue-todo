<template>
  <form @submit.prevent='submitForm' >
      <div class='form-control'>
        <label for='email'>Your email</label>
        <input type='email' id='email' v-model.trim='email'/>
      </div>
      <div class='form-control'>
        <label for='password'>Your password</label>
        <input type='password' id='password' v-model.trim='password'/>
      </div>
      <p v-if='!formValid'>Please enter valid data</p>
      <base-button fill-mode="true">{{ submitButtonCaption }}</base-button>
      <base-button class="bg-blue-500" fill-mode="true" type='button' mode='flat' @click='switchAuthMode'>{{ switchModeButtonCaption }}</base-button>

  </form>
</template>

<script lang="ts">
import BaseButton from "../UI/BaseButton.vue";
import {computed, ref} from "vue";
import {useAuthStore} from "../store/authStore";
import {useRoute, useRouter} from "vue-router";


export default {
  name: "AuthPage",
  components: {BaseButton},
  setup() {
    const email = ref('');
    const password = ref('');
    const formValid = ref(true);
    const mode = ref('login');
    const isLoading = ref(false);
    const error = ref(null);
    const auth = useAuthStore();
    const router = useRouter();

    const submitButtonCaption = computed(() => {
      return mode.value === 'login' ? 'Login' : 'SignUp';
    })

    const switchModeButtonCaption = computed(() => {
      return mode.value === 'login' ? 'SignUp' : 'Login';
    })

    function handleError() {
      error.value = null;
    }

    async function submitForm() {
      if (
        email.value === ''
        || !email.value.includes('@')
        || password.value.length < 6
      ) {
        formValid.value = false;
        return;
      }
      isLoading.value = true;
      const actionPayload = {
        id: new Date().toISOString(),
        email: email.value,
        password: password.value,
        todos: [],
      }
      try {
        if(mode.value === 'login') {
          await auth.login(actionPayload.email, actionPayload.password)
        } else {
          auth.signup(actionPayload)
        }
        router.push('/');
      } catch (e: any) {
        error.value = e.message;
      }
      isLoading.value = false;
    }

    function switchAuthMode() {
      mode.value = mode.value === 'login' ? 'signup' : 'login';
    }

    return {
      email,
      password,
      formValid,
      mode,
      isLoading,
      error,
      submitButtonCaption,
      switchModeButtonCaption,
      handleError,
      submitForm,
      switchAuthMode
    }
  }
}
</script>

<style scoped>
form {
  margin: 1rem;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}
label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}
input {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}
</style>