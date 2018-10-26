<template>
  <form @submit.prevent="createAuthor">
    <p v-if="isSubmitting">Submitting...</p>
    <label>First name
      <input type="text" v-model.trim="authorInfo.first_name">
    </label>
    <label>Middle name
      <input type="text" v-model.trim="authorInfo.middle_name">
    </label>
    <label>Last name
      <input type="text" v-model.trim="authorInfo.last_name">
    </label>
    <input type="submit" value="Submit">
  </form>
</template>

<script>
import VueCookie from 'vue-cookie'
import AuthorsApi from '@/api/Authors'

export default {
  name: 'AuthorsForm',
  data () {
    return {
      authorInfo: {
        first_name: '',
        middle_name: '',
        last_name: ''
      },
      isSubmitting: false,
      errors: []
    }
  },
  methods: {
    createAuthor () {
      this.isSubmitting = true
      const token = VueCookie.get('booksIOwnToken')

      AuthorsApi.createAuthor(this.authorInfo, token)
        .then(res => {
          this.authorInfo.first_name = ''
          this.authorInfo.last_name = ''
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
