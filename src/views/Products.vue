<template>
  <div class="header">
    <div class="content">
    <div class="body">
      <div class="shapka">
        <img src="./images/Снимок экрана (1).png" alt="">
        <p class="prod">Products</p>
      </div>
      <div class="search d4">
       <input  type="text" v-model="search" placeholder="search"/>
    </div>
    <div v-if="fetching" class="loading">Loading...</div>
    <div v-else-if="error" class="error">Oh no... {{ error }}</div>
    <div v-else>
      <div v-if="data" class="products">
        <div v-for="p in data.products" :key="p.id" @click="move(p.id)" class="product_card">
          <img class="img" :src="'http://38.242.229.113:8055/assets/' + p.image.id + '?width=190&height=200'" alt="">
          <div class="title-price">
          <p class="title">{{ p.title }}</p>
          <p class="price">{{ p.price }}$</p>
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
import { ref } from "@vue/reactivity";
import { useRouter, useRoute } from 'vue-router'

export default {
  setup() {
    const search = ref(null);
    const router = useRouter()
    const route = useRoute()
    const result = useQuery(
      {
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
      },
    );
    function searchProducts() {
      result.executeQuery()
    }

    function move(id) {
      router.push("/products/" + id)
    }

    return {
      search,
      fetching: result.fetching,
      data: result.data,
      error: result.error,
      searchProducts,
      move
    };
  },
};
</script>

<style scoped>
/* .d4 form {
  background: #fffffe;
  border-bottom: 4px solid #d9dcd9;
}
.d4 input, .d4 button {
  outline: none;
  background: transparent;
}
.d4 input {
  width: 100%;
  height: 42px;
  padding-left: 15px;
}
.d4 button {
  height: 42px;
  width: 42px;
  position: absolute;
    top: 444px;
    right: 180px;
  cursor: pointer;
}
.d4 button:before {
  content: "\f178";
  font-family: FontAwesome;
  font-size: 20px;
  color: #be290e;
} */
.shapka{
    /* background-image: url(https://cdn0.ipoint.kz/AfrOrF3gWeDA6VOlDG4TzxMv39O7MXnF4CXpKUwGqRM/resize:fit:1400:600:0/q:100/plain/s3://complex-images/29/3284/2100-ru.png@webp); */
    height: 430px;
    width: 1270px;
    display: flex;
    align-items: center;
}
input {
  margin: 20px 0px 0px 0px;
  height: 24px;
  width: 249px;
  margin-right: 19px;
  border-color: #e96d65;
  border-radius: 7px;
}
/* input[type="text"]::-webkit-input-placeholder {
    color: #e96d65;
   }  */
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
  /* background-color: #0400ff; */
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
    /* width: 74%; */
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
    padding: 4%;
    margin: 3%;
    border: #00000059 solid 1px;
    border-radius: 3%;
    box-shadow: inset 0 0 10px 5px rgb(214 216 211);
    text-align: left;
    width: 266px;
    /* border: 1px solid #ffffff00; */
    /* border-radius: 6px; */
    /* margin: 56px 35px 0px 35px; */
    /* padding: 25px 11px 5px 15px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* transition: all .2s ease-in-out; */
    /* max-width: 100%; */
    margin-bottom: 30px;
    /* display: block; */
    font-size: 18px;
    line-height: 21px;
    /* margin-bottom: 5px; */
    color: #000;
    /* text-decoration: none; */
    /* transition: color .3s linear; */
    /* word-break: break-word; */
}
.product_card:hover {
  border: #0400ff solid 1px;
  transition: 0.5s;
  cursor: pointer;
 
}
.img{
    margin: 7%;
    padding: 5%;
}
.title{
  font-size: 100%;    
  /* flex: 1 1 100%; */
  max-width: 100%;
  margin-bottom: 30px;
  display: block;
    /* font-size: 18px; */
    line-height: 21px;
    /* margin-bottom: 5px; */
    color: #000;
    /* text-decoration: none; */
    /* transition: color .3s linear; */
    /* word-break: break-word; */
}
.price{
  font-size: 100%;
  font-weight:600;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-end;
  flex: 1 1 100%;
  max-width: 100%;
}
.title-price {
  display: flex;
  flex-wrap: wrap;
  flex: auto;
  max-width: 100%
}
</style>