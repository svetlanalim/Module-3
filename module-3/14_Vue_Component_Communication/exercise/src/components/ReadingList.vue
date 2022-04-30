<template>
  <div class="book-container">
    <section v-for="book in $store.state.books" v-bind:key="book.isbn">
    <book-card v-bind:book="book" />
</section>
  </div>
</template>

<script>
import BookCard from './BookCard.vue'

export default {
    name: 'reading-list',
    components:{
      BookCard
    }
}
</script>

<style>
.book-container {
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
</style>