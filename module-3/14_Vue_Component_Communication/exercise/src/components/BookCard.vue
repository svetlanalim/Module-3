<template>
  <div class="card" v-bind:class="{read: book.read}">

  <h1 class="book-title">{{book.title}}</h1>
    <img v-if="book.isbn" v-bind:src="'http://covers.openlibrary.org/b/isbn/' + book.isbn + '-M.jpg'" />
    <h1 class="book-author">{{book.author}}</h1>
    <button class="mark-read" v-if="!book.read" v-on:click="toggleRead">Read</button>
    <button class="mark-unread" v-if="book.read" v-on:click="toggleRead">Unread</button>
  </div>
</template>

<script>
export default {
    name: 'book-card',
    props: ['book'],
    methods: {
        toggleRead(){
            this.$store.commit('TOGGLE_READ', this.book);
        }
    }
}
</script>

<style>
.card {
    border: 2px solid black;
    border-radius: 10px;
    width: 250px;
    height: 550px;
    margin: 20px;
}

.card.read {
    background-color: lightgray;
}

.card .book-title {
    font-size: 1.5rem;
}

.card .book-author {
    font-size: 1rem;
}
</style>