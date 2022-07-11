<template>
  <div class="cont"
      style="
        width: 1141px;
        margin: 0 auto;
        background-color: #f6f6f6;
        padding-bottom: 10%;
      ">
    <div class="flex">
    <div v-for="p in data?.users_me?.favourites" :key="p.id" class="product_card"
          >
            <div class="fl">
              <div class="fav">
                <a @click="addFav(p.id)"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
</svg> </a>
              </div>
            </div>
            <div class="formove" @click="move(p.id)">
            <img
              :src="
                'http://38.242.229.113:8055/assets/' +
                p.products_id.image.id +
                '?width=210&height=218&fit=cover'
              "
              alt="" 
            />
            <p>{{p.products_id.title}}</p>
            </div>
            
            <div class="forPrice">
              <!-- <p style="color:#aac6de; font-weight: bold;">PRICE:</p> -->
              <p
                style="c    color: rgb(0 0 0);font-weight: bold;font-size: 21.5px;"
              >
                {{p.products_id.price}}$
              </p>
              
            
              <div class="fl">
              <div class="cart">
                <a @click="addToCart(p)"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg> </a>
              </div>
            </div>
            </div>
            </div>
            </div>
  </div>
</template>

<script>
import { useQuery, gql } from "@urql/vue";
export default {
  setup() {
    const fav = useQuery({
      query: gql`
        query {
          users_me {
            favourites {
              products_id {
                title
                description
                price
                image {
                  id
                }
              }
            }
          }
        }
      `,
      context: {
        url: "http://38.242.229.113:8055/graphql/system",
      },
    });

    return {
      data: fav.data,
    };
  },
};
</script>
<style scoped>
.fav{
  width: 25px;
  
  
}
.fav svg{
fill: #e234a7;
stroke: #e234a7;
}
h1 {
  color: black;
  font-weight: initial;
}

.product_card {
  width: 266px;
  border: 1px solid #ffffff00;
  border-radius: 6px;
  margin: 56px 35px 0px 35px;
  padding: 25px 11px 5px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  transition: all 0.2s ease-in-out;
  background-color: #f6f6f6;
}

.product_card:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.product_card svg:hover {
  color: #e234a7;
}

.fl {
  margin-left: 176px;
}

.product_card:hover {
  transform: scale(1.1);
  cursor: pointer;
}
.product_card a{ 
  text-decoration: none;
      color: black;
      font-size: 30px;
}
.product_card a:hover{ 
  text-decoration: none;
      color: black;
      font-weight: bold;
}

.flex {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}

.forPrice {
  display: flex;
  align-items: center;
}

.cart{
     width: 25px;
 
}

</style>
