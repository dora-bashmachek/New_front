<template>
  <div>
    <div
      class="border-2 border-black mb-2 p-4"
      v-for="(p, index) in cart"
      :key="p.id"
    >
      <p>{{ p.title }}</p>
      <p>{{ p.price }}</p>
      <button
        @click="deleteFromCartLocal(index)"
        class="border-2 border-black p-1 hover:text-white hover:bg-black"
      >
        delete from cart
      </button>
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
    width: 3%;
    padding-right: 3%;
    padding-left: 3%;
    border-left: 1px solid #e5e5e5;
}
.product-list-item{
    /* border: 1px solid #e5e5e5; */
    background: #fafafa;
    margin-bottom: 20px;
    flex: 1 1 100%;
    max-width: 100%;
    font-family: SF UI Text,Arial,sans-serif;
    position: relative;
    background-color: white;
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