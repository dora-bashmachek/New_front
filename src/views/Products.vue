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
      <div v-if="data" class="products">
        <div v-for="p in data.products" :key="p.id"  class="product_card">
        <div class="cart-fav">
      
      
          <svg id="cart" @click="addToCart(p)" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
        
      
        
         
          <svg @click="addFav(p.id)" id="fav" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg>
        
        </div>
        <div @click="move(p.id)">
          <img class="img" :src="'http://38.242.229.113:8055/assets/' + p?.image?.id + '?width=190&height=200'" alt="">
          <div class="title-price">
          <p class="title">{{ p.title }}</p>
          <p class="price">{{ p.price }}$</p>
          </div>
        </div>
        </div>
      </div>
      <div class="showmore">
          <div>
        <a @click="limit += 10">show more</a>
        </div>
        </div>
    
  </div>
</div>
</div>
</template>

<script>
  import { useQuery, gql, useMutation } from "@urql/vue";
  import { ref } from "vue";
  import axios from "axios";
  import { useRouter, useRoute } from "vue-router";
  import { addToCart } from '../utils/cart'
  import { onMounted } from "@vue/runtime-core";

  export default {
    setup() {
      const search = ref(null);
      const router = useRouter();
      const route = useRoute();
      
      const add = useMutation(
        gql`
          mutation ($ProductId: Int!, $UserId: String!) {
            create_junction_directus_users_products_item(
              data: { products_id: $ProductId, directus_users_id: $UserId }
            ) {
              id
            }
          }
        `
      );

      // const result = useQuery({
      //   query: gql`
      //     query($search: String, $limit: Int! = 8) {
      //       products(search: $search, limit: $limit) {
      //         id
      //         title
      //         price
      //         image {
      //           id
      //         }
      //       }
      //     }
      //   `, variables: { search, limit }
      // });

    const limit = ref(8);
      const getProductsQuery = gql` 
        query($limit: Int! = 8, $search: String) {
          products(limit: $limit, search: $search) {
            id
            title
            price
            image {
              id
            }
          }
        }
      `
      const getProducts = useQuery({ query: getProductsQuery, variables: { limit, search } });


    

      function searchProducts() {
        result.executeQuery()
      }


      function move(id) {
        router.push("/products/" + id);
      }

      async function addFav(id) {
        const { data } = await axios.get("http://38.242.229.113:8055/users/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const i = id;
        const a = parseInt(i);
        const u = data.data.id;
        const variables = { ProductId: a, UserId: u };
        add.executeMutation(variables).then((result) => {
          if (result.error) {
            console.error("Oh no!", result.error);
          }
        });
      }

      return {
        search,
        fetching: getProducts.fetching,
        data: getProducts.data,
        error: getProducts.error,
        searchProducts,
        move,
        addFav,
        addToCart,
        limit,
        getProducts
        
      };
    },
  };
</script>

<style scoped>
.cart-fav{
  display: flex;
  justify-content: flex-end;
}
.fav-into{
    width: 100%;
}
.cart-into{
    width: 100%;
}
svg {
    width: 10%;
     padding-left: 5%;
}
/* svg.w-6 .h-6{
    width: 21%;
} */
.fav .cart{
    width: 10%;
    display: flex;
}
#fav:hover {
  color: rgb(138 152 235);
}
#cart:hover {
  color: rgb(138 152 235);
}
.showmore{
 font-size: 200%;
    display: flex;
    justify-content: center;
        padding-bottom: 5%;
        cursor: pointer;
}
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
  height: 535px;
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
  background-color: #f5f5f7;
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
    /* width: 40%; */
    padding: 2%;
    margin: 1%;
    box-shadow: inset 0 0 10px 5px rgb(232 234 237);
    text-align: left;
    width: 19%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;
    font-size: 18px;
    line-height: 21px;
    color: #000;
    justify-content: space-between;
    background-color: #f6f6f6;
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