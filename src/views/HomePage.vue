<template>
    <div>
      <ProfilePage />
      <SearchBar @search="handleSearch" />
      <MapComponent />
    </div>
  </template>
  
  <script>
  import SearchBar from '../components/SearchBar.vue';
  import MapComponent from '../components/MapComponent.vue';
  import ProfilePage from '../views/ProfilePage.vue'

  
  export default {
    components: {
      ProfilePage,
      SearchBar,
      MapComponent
    },
    methods: {
      handleSearch(query) {
    // Do something with the search query, e.g., filter a list, navigate, etc.
      console.log('User searched for:', query);
    }
  }

  }
  </script>
  