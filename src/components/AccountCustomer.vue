<template>
    <div>
      <img :src="profileImage" alt="Profile Picture" />
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
  