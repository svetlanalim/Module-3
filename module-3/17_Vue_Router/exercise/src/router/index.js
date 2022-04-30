import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import MyBooks from '../views/MyBooks.vue';
import NewBook from '../views/NewBook.vue';
import BookDetails from '../views/BookDetails.vue';

Vue.use(VueRouter);

const routes = [ 
  {
    path: '/',
    component: Home,
    name: 'home'
  },
  {
    path: '/myBooks',
    component: MyBooks,
    name: 'my-books'
  },

  {
    path: '/addBook',
    component: NewBook,
    name: 'new-book'
  },

  {
    path: '/book/:isbn',
    component: BookDetails,
    name: 'book-details'
  },

];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
