<template>
    <div>
      <SearchBar @search="handleSearch" />
      <MapComponent />
    </div>
  </template>
  
  <script>
  import SearchBar from '../components/SearchBar.vue';
  import MapComponent from '../components/MapComponent.vue';

  
  export default {
    components: {
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
  