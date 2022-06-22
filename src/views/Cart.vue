<template>
<div>
<div class="flex">
    <div class="product-list-item">
        <div class="no-gutters row">
    <div v-for="p in productsCart" :key="p?.id">
    <div class="product-about">
        <div class="product-image">
     <img class="img" :src="'http://38.242.229.113:8055/assets/' + p?.image?.id + '?width=190&height=200'" alt="">
     </div>
     <div class="product-description">
      <p class="product-name">{{p?.title}}</p>
      </div>
      <p>{{p?.price}}</p>
      </div>
      </div>
      </div>
    </div>
  </div>
 </div> 
</template>

<script>
import { useProductsStore } from "../stores/productsCart";
import { onMounted } from "vue";
export default {
  setup() {
    const store = useProductsStore();
    const getProducts = store.getProductsCart;
    const productsCart = store.productsCart;

   console.log(productsCart);

    onMounted(() => {
      store.fetchProductsCart();

    });

    return {
      getProducts,
      productsCart,


    };
  },
};
</script>

<style scoped>
.product-list-item{
    border: 1px solid #e5e5e5;
    background: #fafafa;
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
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    background: #fff;
}
.product-image{
width: 110px;
min-height: 110px;
}
.product-description{
        flex: 1;
    margin-left: 15px;
}
.product-name{
    color: #231f20;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
}
/* .price .img-title{
    width: 100%;
    } */
</style>