<template>
  <div>
      <form class="new-book-form" v-on:submit.prevent="addNewBook">
          <div>
              <label for="title">Title:</label>
              <input class="title-input" type="text" v-model="newBook.title">
          </div>
          <div>
              <label for="author">Name: </label>
              <input class="author-input" type="text" v-model="newBook.author">
          </div>
          <div>
              <label for="isbn">Isbn: </label>
              <input class="isbn-input" type="text" v-model="newBook.isbn">
          </div>
          <input type="submit" value="save" />
      </form>
  </div>
</template>

<script>
export default {
    name: 'new-book',

        data(){

            return{
                newBook: {
                    title: '',
                    author: '',
                    read: false,
                    isbn: ''
                }
            }
        },
        methods: {
            addNewBook(){
                this.$store.commit('ADD_BOOK', this.newBook);
                this.resetForm();
            },
            resetForm(){
                this.showForm = false;
                this.newBook = {
                    read: false,
                };

            }
        }

}
</script>

<style>

</style>
