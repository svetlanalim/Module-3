<template>
  <div>
      <h1>Best Seller List</h1>
      <best-seller-list></best-seller-list>
      <h1>New Releases List</h1>
      <new-releases-list></new-releases-list>
  </div>
</template>

<script>
import BestSellerList from '../components/BestSellerList.vue';
import NewReleasesList from '../components/NewReleasesList.vue';

export default {
components: {
    BestSellerList,
    NewReleasesList
},
}
</script>

<style>

</style>