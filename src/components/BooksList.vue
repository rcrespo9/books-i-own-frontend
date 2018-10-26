<template>
  <ul class="books-list">
    <li class="books-list-item" v-for="book in books" :key="book.id">{{book.title}}</li>
  </ul>
</template>

<script>
import BooksListItem from './BooksListItem'

export default {
  name: 'BooksList',
  components: {
    BooksListItem
  },
  props: {
    books: {
      type: Array,
      required: true
    }
  }
}
</script>
