<template class="header">
  <div>
    <div class="content">
      <div class="body">
        <div v-if="fetching" class="loading">Loading...</div>

        <div v-else>
          <div v-if="data">
            <div class="product">
              <div class="title-img">
                <div class="img">
                  <img
                    :src="'http://38.242.229.113:8055/assets/' + data.products_by_id.image.id"
                    alt
                  />
                </div>
              </div>
              <div class="descr-spec-price">
                <h2 class="title">{{ data.products_by_id.title }}</h2>
                <p class="description">{{ data.products_by_id.description }}</p>
                <p class="price">{{ data.products_by_id.price }}$</p>
                <div class="knopochka">
                  <svg
                    @click="addFav(data.products_by_id.id)"
                    id="fav"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <a
                    href="#"
                    class="card-text-button"
                    @click="addToCart(data.products_by_id)"
                  >add to cart</a>
                  <a
                    href="/cart"
                    class="card-text-button"
                    @click="addToCart(data.products_by_id)"
                  >buy now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useQuery, useMutation, gql } from "@urql/vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import { addToCart } from "../utils/cart";
import { onMounted } from "@vue/runtime-core";

export default {
  setup() {
    const router = useRouter();
    const route = useRoute();
    const id = +route.params.id;
    const result = useQuery({
      query: `
        query getProduct($id: ID!) {
          products_by_id(id: $id) {
            id
            title
            price
            spec
            description
            image {
              id
            }
          }
        }
      `,
      variables: { id }
    });
    const add = useMutation(
      gql`
        mutation($ProductId: Int!, $UserId: String!) {
          create_junction_directus_users_products_item(
            data: { products_id: $ProductId, directus_users_id: $UserId }
          ) {
            id
          }
        }
      `
    );
    async function addFav(id) {
      const { data } = await axios.get("http://38.242.229.113:8055/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      const i = id;
      const a = parseInt(i);
      const u = data.data.id;
      const variables = { ProductId: a, UserId: u };
      add.executeMutation(variables).then(result => {
        if (result.error) {
          console.error("Oh no!", result.error);
        }
      });
    }

    return {
      fetching: result.fetching,
      data: result.data,
      error: result.error,
      route,
      addToCart,
      addFav
    };
  }
};
</script>

<style scoped>
#fav {
  cursor: pointer;
  width: 5%;
}
#fav:hover {
  color: rgb(138 152 235);
}
.knopochka {
  display: flex;
  justify-content: flex-end;
}
.card-text-button {
  border: #000 solid;
  border-radius: 50px;
  width: 25%;
  height: 45px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3%;
}
.card-text-button:hover {
  border-color: rgb(138 152 235);
}
div {
  background-color: #f6f6f6;
}
/* html {
    background-color: #f5f5f7;
} */
.header {
  background-color: #f6f6f6;
}
.logo {
  display: flex;
  justify-content: center;
  font-size: 350%;
  align-items: center;
  margin: 1%;
  height: 10px;
}
.header {
  margin: 0% 15% 0% 15%;

  background-color: #f6f6f6;
}
.body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px;
  flex-direction: column;
  background-color: #f6f6f6;
  height: 850px;
}

.title {
  font-size: 110%;
  max-width: 100%;
  margin-bottom: 30px;
  display: block;
  line-height: 25px;
  color: #000;
}

.price {
  font-size: 200%;
  font-weight: 600;
  display: flex;
  flex: 1 1 100%;
  max-width: 100%;
  flex-direction: row-reverse;
  line-height: 100%;
}

.product {
  display: flex;
  text-align: left;
  align-items: center;
  padding: 3%;
  margin: 5%;
  border: #00000059 solid 0px;
  border-radius: 3%;
  background-color: #f6f6f6;
}

.descr-spec-price {
  text-align: right;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.description {
  display: table-cell;
  vertical-align: bottom;
  font-size: 105%;
}

.title-img {
  width: 125%;
}

.img {
  width: 620px;
}
</style>