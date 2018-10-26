<template>
  <div class="home">
    <AuthorsForm />
    <LoginForm />
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
