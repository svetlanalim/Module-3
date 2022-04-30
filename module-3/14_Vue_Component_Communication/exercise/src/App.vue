<template>
  <div id="app">
    <h1>Reading List</h1>
    <reading-list />
    <add-book-form/>
  </div>
</template>

<script>
import ReadingList from './components/ReadingList.vue';
import AddBookForm from './components/AddBookForm.vue';

export default {
  name: 'app',
  components: {
    ReadingList,
    AddBookForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px;
}
</style>
