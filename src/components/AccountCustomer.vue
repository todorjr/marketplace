<template>
    <div>
      <img :src="profileImage" alt="Profile Picture" class="profile-picture" />
      <h2>{{ name }}</h2>
      <p>{{ bio }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AccountCustomer',
    props: {
      profileImage: String,
      name: String,
      bio: String
    }
  }
  </script>

  <style scoped>
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
  }
  </style>
  