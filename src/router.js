import Vue from 'vue';
import Router from 'vue-router';

// Import your components here
// import YourComponent from '@/components/YourComponent';
import HomePage from './views/HomePage.vue'
import ProfilePage from './views/ProfilePage.vue'


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // Add your routes here
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfilePage
      }
  ]
});
