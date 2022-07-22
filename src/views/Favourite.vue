<template>
  <div>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
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
              />
            </div>
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
.delete:hover {
  color: rgb(138 152 235);
}
.cart svg {
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

svg {
  width: 10%;
  padding-left: 55%;
}

.cartt:hover {
  color: rgb(138 152 235);
}

.content {
  width: 1141px;
  margin: 0 auto;
  padding-bottom: 10%;
  padding-left: 7%;
}

.product_card {
  padding: 2%;
  margin: 1%;
  box-shadow: inset 0 0 10px 5px rgb(232 234 237);
  text-align: left;
  width: 35%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  font-size: 18px;
  color: #000;
  background-color: #f6f6f6;
  justify-content: center;
}
.product_card:hover {
  cursor: pointer;
}
.img {
  margin-left: 20%;
  padding: 5%;
  display: flex;
  align-items: center;
}
</style>
