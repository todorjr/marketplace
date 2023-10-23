<template>
    <nav>
      <router-link to="/" exact>Home</router-link>
      <router-link to="/profile">Profile</router-link>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavigationBar'
  }
  </script>
  
  <style scoped>
  nav {
    display: flex;
    padding: 10px 0;
    gap: 15px;
  }
  
  nav a {
    text-decoration: none;
    color: #000;
    padding: 10px 15px;
    border-radius: 5px;
    border: 1px solid rgb(0, 0, 0);
  }

  
  .router-link-exact-active {
    background-color: #f6f6f6;
  }
  </style>
  