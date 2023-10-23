<template>
  <div class="search-bar">
        <i class="fa fa-search search-bar-icon"></i>
        <input type="text" placeholder="Search" v-model="query" @input="onInputChange"/>
    </div>
</template>

<script>
import 'font-awesome/css/font-awesome.min.css';

export default {
    name: 'SearchBar',
    data() {
        return {
            query: ''
        };
    },
    methods: {
        onInputChange() {
            this.$emit('search', this.query);
        },
    }
};
</script>

<style scoped>
.search-bar {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border-radius: 25px;
    background-color: #ffffff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: 90%;
    max-width: 400px;
    margin: 10px auto;
    position: relative;
}

.search-bar input {
    border: none;
    background: transparent;
    flex-grow: 1; /* Allows the input to take all available space */
    font-size: 16px; /* Adjust as needed */
    color: #333; /* Dark text color */
    outline: none; /* Removes default focus outline */
}

.search-bar-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%); 
    font-size: 18px;
    color: #aaa;
}


/* Add additional styles if needed */

</style>
