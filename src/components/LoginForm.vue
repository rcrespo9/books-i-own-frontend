<template>
  <form @submit.prevent="login">
    <p v-if="isLoggingIn">Logging in...</p>
    <label>Username
      <input type="text" v-model.trim="credentials.username">
    </label>
    <label>Password
      <input type="password" v-model.trim="credentials.password">
    </label>
    <input type="submit" value="Submit">
  </form>
</template>

<script>
import VueCookie from 'vue-cookie'
import LoginApi from '@/api/Login'

export default {
  name: 'LoginForm',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      isLoggingIn: false,
      errors: []
    }
  },
  methods: {
    login () {
      this.isLoggingIn = true

      LoginApi.login(this.credentials)
        .then(res => {
          this.credentials.username = ''
          this.credentials.password = ''
          VueCookie.set('booksIOwnToken', res.data.token, '1h')
        })
        .catch(error => {
          console.log(error)
          this.errors.push(error.message)
        })
        .finally(() => {
          this.isLoggingIn = false
        })
    }
  }
}
</script>
