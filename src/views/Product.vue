<template>
  <div class="header">
    <div class="content">
    <div class="body">
    <div v-if="fetching" class="loading">Loading...</div>
    <div v-else-if="error" class="error">Oh no... {{ error }}</div>
    <div v-else>
      <div v-if="data">
        <div class="product">
          <div class="title-img">
          <h2 class="title">{{ data.products_by_id.title }}</h2>
          <div class="img"> <img  :src="'http://38.242.229.113:8055/assets/' + data.products_by_id.image.id" alt="">
          </div>
          </div>
          <div class="descr-spec-price">
          <p class="price">{{ data.products_by_id.price }}$</p>
          <p class="description">{{ data.products_by_id.description }}</p>
          <p class="spec">{{ data.products_by_id.spec }}</p>

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
.header {
  width: 1200px;
  margin: 10%;
  background-color: #fff;
  font-family: sans-serif;
}
.content{
  margin: 0 auto;
}
.body{  
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px 20px;
    flex-direction: column;
}
.title{
  font-size: 150%;   
  max-width: 100%;
  margin-bottom: 15%;
  display: block;
  line-height: 21px;
  color: #000;
}
.price{
font-size: 150%;
    font-weight: 600;
    display: flex;
    flex: 1 1 100%;
    max-width: 100%;
    flex-direction: row-reverse;
}
.product img{
    width: 400px;
    margin-right: 50px;
    padding: 30px 0px;
}
.product{
    display: flex;
    text-align: center;
    align-items: center;
    padding: 3%;
    margin: 1%;
    border: #00000059 solid 0px;
    border-radius: 3%;
    box-shadow: 0 0 10px 5px rgb(221 222 225);
    background-color: #f3f2f1;
}
.descr-spec-price{
  text-align: right;
}
.description{ display: table-cell;
  vertical-align: bottom;}
.title-img {
    width: 130%;

}
/* .img{
      border: #00000059 solid 1px;
    border-radius: 3%;
    box-shadow: 0 0 10px 5px rgb(221 222 225);
    background-color: #f3f2f1;
} */
</style>