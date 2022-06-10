<template>
  <div class="header">
<!-- <div class="logo">PRO <p>sto</p></div> -->
    <div class="content">
      <div class="body">
        <div v-if="fetching" class="loading">Loading...</div>
        <div v-else-if="error" class="error">Oh no... {{ error }}</div>
        <div v-else>
          <div v-if="data">
            <div class="product">
              <div class="title-img">
                <div class="img"> <img :src="'http://38.242.229.113:8055/assets/' + data.products_by_id.image.id"
                    alt="">
                </div>
              </div>
              <div class="descr-spec-price">
                <h2 class="title">{{ data.products_by_id.title }}</h2>
                <p class="description">{{ data.products_by_id.description }}</p>
                <p class="price">{{ data.products_by_id.price }}$</p>
                <!-- <p class="spec">{{ data.products_by_id.spec }}</p> -->

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useQuery } from "@urql/vue";
import { useRouter, useRoute } from 'vue-router'

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
      `, variables: { id }
    });
    return {
      fetching: result.fetching,
      data: result.data,
      error: result.error,
      route
    }
  },
};
</script>

<style scoped>
.header{background-color: #f6f6f6;}
.logo{
    display: flex;
    justify-content: center;
    font-size: 350%;
    align-items: center;
    margin: 1%;
    height: 10px;
}
.header {
  /* width: 1200px; */
  margin: 0% 15% 0% 15%;
  /* background-color: #fff; */
  font-family: sans-serif;
}

/* .content{
  margin: 0 auto;
  background-color: aqua;
} */
.body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px;
  flex-direction: column;
}

.title {
    font-size: 150%;
    max-width: 100%;
    display: block;
    line-height: 100%;
    color: #000;
    text-align: right;
    margin-bottom: 52px;
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
    margin: 2%;
    border: #00000059 solid 0px;
    border-radius: 3%;
    /* box-shadow: 0 0 10px 5px rgb(221 222 225); */
    background-color: #f6f6f6;
}

.descr-spec-price {
    text-align: right;
    display: flex;
    flex-direction: column;
}
.description {
  display: table-cell;
  vertical-align: bottom;
}

.title-img {
    width: 59%;
}

.img {
width: 805px;
}
</style>