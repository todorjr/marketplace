<template>
    <div>
      <AccountCustomer 
        :profileImage="profile.image" 
        :name="profile.name" 
        :bio="profile.bio"
        />
      <CustomerProduct
        v-for="product in products" 
        :key="product.id"
        :productImage="product.image" 
        :productName="product.name" 
        :productPrice="product.price"
        />
    </div>
  </template>
  
  <script>
  import AccountCustomer from '../components/AccountCustomer.vue'
  import CustomerProduct from '../components/CustomerProduct.vue'
  
  export default {
    components: {
      AccountCustomer,
      CustomerProduct
    },
    data() {
      return {
        profile: {
          image: '', 
          name: '', 
          bio: ''
        },
        products: [
          {
            id: 1,
            image: '',
            name: 'Carrot',
            price: '12 € per kg'
          },
          {
            id: 1,
            image: '',
            name: ' Tomate',
            price: '12 € per kg'
          },
          {
            id: 1,
            image: '',
            name: 'Potato',
            price: '12 € per kg'
          }
        ]
      }
    }
  }
  </script>
  