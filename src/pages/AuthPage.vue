<template>
  <form @submit.prevent='' >
      <div class='form-control'>
        <label for='email'>Your email</label>
        <input type='email' id='email' v-model.trim='email'/>
      </div>
      <div class='form-control'>
        <label for='password'>Your password</label>
        <input type='password' id='password' v-model.trim='password'/>
      </div>
      <p v-if='!formValid'>Please enter valid data</p>
      <base-button>{{ submitButtonCaption }}</base-button>
      <base-button type='button' mode='flat' @click='switchAuthMode'>{{ switchModeButtonCaption }}</base-button>

  </form>
</template>

<script>
import BaseButton from "../UI/BaseButton.vue";

export default {
  name: "AuthPage",
  components: {BaseButton}
}
</script>

<style scoped>

</style>