<template>
  <div style="background-color: #f6f6f6;">
  <div class="content">
    <div class="flex">
      <div v-for="p in data?.users_me?.favourites" :key="p.id" class="product_card">
        <div class="fl">
          <div class="cart">
            <a @click="addToCart(p.products_id)">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="cartt"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              
            </a>
            <div class="delete" @click="deleteFromCartLocal(index)">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>
          </div>
          
      </div>
        </div>
        <div class="formove" @click="move(p.products_id.id)">
          <div class="img">
          <img
            :src="
                'http://38.242.229.113:8055/assets/' +
                p.products_id.image.id +
                '?width=218&height=226&fit=cover'
              "
            alt
          /></div>
          <div class="titleNprice">
            <div class="forTitle">
              <p>{{p.products_id.title}}</p>
            </div>
            <div class="forPrice">
              <p
                style="c    color: rgb(0 0 0);font-weight: bold;font-size: 21.5px;"
              >{{p.products_id.price}}$</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { useQuery, gql } from "@urql/vue";
import { addToCart } from "@/utils/cart.js";
import { useRouter, useRoute } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const fav = useQuery({
      query: gql`
        query {
          users_me {
            favourites {
              products_id {
                id
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
        url: "http://38.242.229.113:8055/graphql/system"
      }
    });

    function move(id) {
      router.push("/products/" + id);
    }

    return {
      data: fav.data,
      addToCart,
      move
    };
  }
};
</script>
<style scoped>
/* .delete{
  display: flex;
font-size: 160%;
cursor: pointer;
    width: 2%;
    flex-direction: column;
}*/
.delete:hover{
  color:rgb(138 152 235);
} 
.cart svg{
width: 28px;
}
.cart {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.fl {
  margin-left: 263px;
}
.forTitle {
    width: 80%;
  border-right: 1px solid #e5e5e5;
}
.forPrice {
      width: 20%;
    text-align: end;
}
.titleNprice {
  display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
}
.flex {
  display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-top: 3%;
}
/* .cart-fav {
  display: flex;
  justify-content: flex-end;
} */
/* .fav-into {
  width: 100%;
} */
/* .cart-into {
  width: 100%;
} */
svg {
  width: 10%;
  padding-left: 55%;
}
/* svg.w-6 .h-6{
    width: 21%;
} */
/* .fav .cart {
  width: 10%;
  display: flex;
} */
/* #fav:hover {
  color: rgb(138 152 235);
} */
.cartt:hover {
  color: rgb(138 152 235);
}
/* .logo {
  display: flex;
  justify-content: flex-start;
  font-size: 350%;
  align-items: center;
  padding-left: 1%;
  color: white;
  background-color: black;
  height: 62px;
  text-shadow: 7px -4px 5px #e7dec4, 0 0 5em #e7dec4;
} */
/* .sto {
  color: #e7dec4;
  text-shadow: 7px -4px 5px white, 0 0 5em white;
} */
/* .icon {
  font-size: 16%;
} */
/* .skobka {
  position: relative;
} */
/* .title-pro {
  display: flex;
  justify-content: center;
  font-size: 200%;
} */
/* .shapka {
  height: 535px;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #f6f6f6;
  justify-content: space-around;
} */
/* input {
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
} */
/* .prod {
  margin: 0px;
  padding: 0px;
  font-size: 450%;
} */
/* .header {
  margin: 0 auto;
  background-color: #fff;
  font-family: sans-serif;
} */
.content {
  width: 1141px;
  margin: 0 auto;
  background-color: #f6f6f6;
  padding-bottom: 10%;
  padding-left: 7%;
}
/* .body {
  display: flex;
  justify-content: space-between;
  align-items: inherit;
  margin: 0px 0px;
  flex-direction: column;
  background-color: #f5f5f7;
} */
/* .products {
  display: flex;
  text-align: center;
  flex-wrap: wrap;
  justify-content: flex-start;
} */
.product_card {
padding: 2%;
    margin: 1%;
    box-shadow: inset 0 0 10px 5px rgb(232 234 237);
    text-align: left;
    width: 35%;
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    margin-bottom: 30px;
    font-size: 18px;
    /* line-height: 21px; */
    color: #000;
    background-color: #f6f6f6;
    /* align-content: stretch; */
    justify-content: center;
}
.product_card:hover {
  /* transition: 0.5s; */
  cursor: pointer;
}
.img {
    margin-left: 20%;
    padding: 5%;
    display: flex;
    align-items: center;
}
/* .title {
  font-size: 100%;
  max-width: 100%;
  margin-bottom: 30px;
  display: block;
  line-height: 21px;
  color: #000;
} */
/* .price {
  font-size: 100%;
  font-weight: 600;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  flex: 1 1 100%;
  max-width: 100%;
  justify-content: center;
} */
/* .title-price {
  display: flex;
  flex-wrap: wrap;
  flex: auto;
  max-width: 100%;
} */
</style>
