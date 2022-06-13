<template>
  <div class="header">
    <div class="body">
      <div class="shapka">
        <img class="immg" src="./images/Снимок экрана (12).png" alt="">
      </div>
      <div class="content">
      <div class="search d4">
       <input  type="text" v-model="search" placeholder="search"/>
    </div>
    <div v-if="fetching" class="loading">Loading...</div>
    <div v-else-if="error" class="error">Oh no... {{ error }}</div>
    <div v-else>
      <div v-if="data" class="products">
        <div v-for="p in data.products" :key="p.id" @click="move(p.id)" class="product_card">
          <img class="img" :src="'http://38.242.229.113:8055/assets/' + p?.image?.id + '?width=190&height=200'" alt="">
          <div class="title-price">
          <p class="title">{{ p.title }}</p>
          <p class="price">{{ p.price }}$</p>
          </div>
        </div>
        <button @click="limit += 10">show more</button>
      </div>
    </div> 
  </div>
</div>
</div>
</template>

<script>
import { useQuery, gql } from "@urql/vue";
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const search = ref(null);
    const router = useRouter()
    const route = useRoute();
    // const result = useQuery(
    //   {
    //     query: `
    //     query($search: String) {
    //       products(search: $search) {
    //         id
    //         title
    //         price
    //         spec
    //         image {
    //           id
    //         }
    //       }
    //     }
    //   `, variables: { search }
    //   },
    // );
    const limit = ref(10);
    const getProductsQuery = gql` 
      query($limit: Int! = 10) {
        products(limit: $limit) {
          id
          title
          price
          description
        }
      }
    `;
    
    const getProducts = useQuery(
      { 
      query: 
      getProductsQuery, 
      variables: { limit }, 
       query: `
 query($search: String) {
          products(search: $search) {
            id
            title
            price
            spec
            image {
              id
            }
          }
        }
       `, variables: { search } 
      }
      ); // TODO: rename to products
    function searchProducts() {
      result.executeQuery()
    }

    function move(id) {
      router.push("/products/" + id)
    }

    return {
      search,
       fetching: getProducts.fetching,
      data: getProducts.data,
      error: getProducts.error,
      limit,
      // fetching: result.fetching,
      // data: result.data,
      // error: result.error,
      searchProducts,
      move
    };
  },
};
</script>

<style scoped>

.logo{
  display: flex;
  justify-content: flex-start;
  font-size: 350%;
  align-items: center;
  padding-left: 1%;
  color: white;
  background-color: black;
  height: 62px;
  text-shadow: 7px -4px 5px #e7dec4, 0 0 5em #e7dec4;
}
.sto{
  color: #e7dec4;
  text-shadow: 7px -4px 5px white, 0 0 5em white;
}
.icon{
  font-size: 16%;
}
.skobka{
  position: relative;
}
.title-pro{
  display: flex;
  justify-content: center;
  font-size: 200%;
}
.shapka{
  height: 650px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  justify-content: space-around;
}
input {
  margin: 20px 0px 0px 0px;
  height: 24px;
  width: 249px;
  margin-right: 19px;
  border-color: #c7cdd6;
  border-radius: 7px;
}
input:hover {
  margin: 20px 0px 0px 0px;
  height: 24px;
  width: 249px;
  margin-right: 19px;
  border-color: #bdbdbd;
  border-radius: 7px; 
}
.prod{
  margin: 0px;
  padding:0px ;
  font-size: 450%;
}
.header {
  margin: 0 auto;
  background-color: #fff;
  font-family: sans-serif;
}
.content{
  margin: 0 auto;
  width: 1440px;
}
.body{
  display: flex;
  justify-content: space-between;
  align-items: inherit;
  margin: 0px 0px;
  flex-direction: column;
}
.search {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  margin: 1%;
}
.products {
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: flex-start;;
}
.product_card{
  width: 41%;
  padding: 2%;
  margin: 1%;
  box-shadow: inset 0 0 10px 5px rgb(232 234 237);
  text-align: left;
  width: 266px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 21px;
  color: #000;
}
.product_card:hover {
  transition: 0.5s;
  cursor: pointer;
 
}
.img{
  margin: 7%;
  padding: 5%;
}
.title{
  font-size: 100%;    
  max-width: 100%;
  margin-bottom: 30px;
  display: block;
  line-height: 21px;
  color: #000;
}
.price{
  font-size: 100%;
  font-weight: 600;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  flex: 1 1 100%;
  max-width: 100%;
  justify-content: center;
}
.title-price {
  display: flex;
  flex-wrap: wrap;
  flex: auto;
  max-width: 100%
}
</style>