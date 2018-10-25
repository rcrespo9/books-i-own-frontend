<template>
  <form @submit.prevent="login">
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
import LoginApi from '@/api/Login'

export default {
  name: 'LoginForm',
  data () {
    return {
      credentials: {
        username: '',
        password: ''
      },
      errors: []
    }
  },
  methods: {
    login () {
      LoginApi.login(this.credentials)
        .then(res => {
          this.credentials.username = ''
          this.credentials.password = ''
          console.log(res)
          this.$store.dispatch('saveUserToken', res.token)
        })
        .catch(error => {
          console.log(error)
          // this.errors.push(error.message)
        })
    }
  }
}
</script>
