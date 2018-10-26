<template>
  <form @submit.prevent="createAuthor">
    <p v-if="isSubmitting">Submitting...</p>
    <label>First name
      <input type="text" v-model.trim="authorInfo.firstName">
    </label>
    <label>Last name
      <input type="text" v-model.trim="authorInfo.lastName">
    </label>
  </form>
</template>

<script>
import AuthorsApi from '@/api/Authors'

export default {
  name: 'AuthorsForm',
  data () {
    return {
      authorInfo: {
        firstName: '',
        lastName: ''
      },
      isSubmitting: false,
      errors: []
    }
  },
  methods: {
    createAuthor () {
      AuthorsApi.createAuthor(this.authorInfo, this.$store.userToken)
        .then(res => {
          this.isSubmitting = true
          this.authorInfo.firstName = ''
          this.authorInfo.lastName = ''
          console.log(res.data)
        })
        .catch(error => {
          this.errors.push(error.message)
        })
        .finally(() => {
          this.isSubmitting = false
        })
    }
  }
}
</script>
