<template>
<div>
<div class="container">
  <div class="row">
    <div class="product-list-item">
      <div v-if="fetching" class="loading">Loading...</div>
    <div v-else-if="error" class="error">Oh no... {{ error }}</div>
        <div class="no-gutters ">
     <!-- <div class="product-about"> -->
     <div class="product-about" v-for="(p, index) in cart"
      :key="p?.id" >
        <div class="product-image">
     <img class="img" :src="'http://38.242.229.113:8055/assets/' + p?.image?.id + '?width=190&height=200'" alt="">
     </div> 
     <div class="product-description">
      <div>
      <div class="descr-name">
      <p class="product-name">{{p?.title}}</p>
      
      </div>
      <div class="description">
      <p> {{p?.description}} </p>
      </div> 
      
      </div>
      </div>
      <div class="product-prices">
      <p>{{p?.price}} $</p>
      </div>
      <div class="delete" @click="deleteFromCartLocal(index)">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
      </div>
      </div>
      </div>
      </div>
      </div>
    <!-- </div> -->
    </div>
  </div>
</template>
 <script>
  import { ref } from '@vue/reactivity';
  import { deleteFromCart } from '../utils/cart'
  export default {
    setup() {
      let cart = ref(JSON.parse(sessionStorage.getItem('cart')));
      const deleteFromCartLocal = (index) => {
        cart.value.splice(index, 1)
        deleteFromCart(index)
      }
      return {
        cart,
        deleteFromCart,
        deleteFromCartLocal
      }
    },
  };
</script>
<style scoped>
.delete{
  display: flex;
font-size: 160%;
cursor: pointer;
    width: 2%;
    flex-direction: column;
}
.delete:hover{
  color:rgb(138 152 235);
}
.descr-name{
  display: flex;
}
.row {
      display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
.container{
  width: 1440px;
  margin: 0 auto;
}
/* .description{
  display: flex;
   border-left: 1px solid #e5e5e5; 
} */
.product-prices {
    display: flex;
    align-items: center;
    width: 5%;
    padding-right: 3%;
    padding-left: 3%;
    border-left: 1px solid #e5e5e5;
    font-weight: bold;
font-size: 140%;
}
.product-list-item{
    /* border: 1px solid #e5e5e5; */
    background: #fff;
    margin-bottom: 20px;
    flex: 1 1 100%;
    max-width: 100%;
    font-family: SF UI Text,Arial,sans-serif;
    position: relative;
}
.no-gutters {
    margin-right: 0;
    margin-left: 0;
}
.row {
    display: flex;
    flex-wrap: wrap;
    /* margin-right: -15px;
    margin-left: -15px; */
}
.product-about {
    padding: 1%;
    margin-top: 3%;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    border: 1px solid #e5e5e5;
}
.product-image{
border-right: 1px solid #e5e5e5;
}
.product-description{
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 5%;
}
.product-name{
    color: #231f20;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
}
</style>
   