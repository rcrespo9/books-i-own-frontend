<template>
  <div class="home">
    <LoginForm />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginForm from '@/components/LoginForm'

export default {
  name: 'home',
  components: {
    LoginForm
  }
}
</script>
