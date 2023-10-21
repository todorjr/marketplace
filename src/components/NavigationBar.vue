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
    justify-content: space-around;
    padding: 10px 0;
    background-color: #333;
  }
  
  nav a {
    color: #fff;
    text-decoration: none;
    padding: 10px 15px;
    border-radius: 5px;
    transition: background-color 0.3s;
  }
  
  nav a:hover {
    background-color: #555;
  }
  
  .router-link-exact-active {
    background-color: #555;
  }
  </style>
  