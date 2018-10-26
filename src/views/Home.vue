<template>
  <div class="home">
    <LoginForm v-if="!this.$store.userToken" />
    <AuthorsForm v-if="this.$store.userToken" />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm'
import AuthorsForm from '@/components/AuthorsForm'

export default {
  name: 'home',
  components: {
    LoginForm,
    AuthorsForm
  }
}
</script>
