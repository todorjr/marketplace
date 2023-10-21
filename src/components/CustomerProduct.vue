<template>
    <div>
      <img :src="productImage" alt="Product Image" />
      <h3>{{ productName }}</h3>
      <p>{{ productPrice }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CustomerProduct',
    props: {
      productImage: String,
      productName: String,
      productPrice: String
    }
  }
  </script>
  