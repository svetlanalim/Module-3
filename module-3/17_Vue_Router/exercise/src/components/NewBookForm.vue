<template>
  <form class="new-book-form" v-on:submit.prevent="saveBook">
    <input class="title-input" type="text" placeholder="Title" v-model="book.title" />
    <input class="author-input" type="text" placeholder="Author" v-model="book.author" />
    <input class="isbn-input" type="text" placeholder="ISBN" v-model="book.isbn" />
    <router-link :to="{ name: 'my-books', params: { id: $route.params.book } }"><button>Save</button></router-link>
  </form>
</template>

<script>
export default {
    name: "new-book-form",
    data() {
        return {
            book: {
                title: '',
                author: '',
                read: false,
                isbn: ''
            }
        }
    },
    methods: {
        saveBook() {
            this.$store.commit('SAVE_BOOK', this.$route.params.book);
            this.book = {
                title: '',
                author: '',
                read: false,
                isbn: ''
            };
        }
    }
}
</script>

<style>
.new-book-form {
    margin: 20px;
}

.new-book-form input, .new-book-form button {
    margin: 10px;
    font-size: 1rem;
}
</style>