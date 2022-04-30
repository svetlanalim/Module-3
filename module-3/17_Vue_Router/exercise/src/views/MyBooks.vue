<template>
  <div>
      <h1>Reading List</h1>
      <reading-list></reading-list>
      <nav>
          <router-link :to="{ name: 'new-book' }">New Book </router-link>
      </nav>
  </div>
</template>

<script>
import ReadingList from '../components/ReadingList.vue';

export default {
components: {
    ReadingList
}
}
</script>

<style>

</style>