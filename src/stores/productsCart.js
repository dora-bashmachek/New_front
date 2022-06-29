// import { defineStore } from 'pinia'
// import axios from "axios"

// export const useProductsStore = defineStore("product",{
//   state: () => ({
//     productsCart: []
//   }),
//   getters: {
//    getProductsCart(state) {
//      return state.productsCart
//    }
//   },
//   actions: {
//     async fetchProductsCart() {
//       try {
//       const endpoint = "http://38.242.229.113:8055/graphql/system";
//       const headers = {
//         "content-type": "application/json",
//         Authorization: `Bearer ${localStorage.getItem("token")}`,
//       };
//       const graphqlQuery = {

//         query: 
//           `query {
//             users_me {
//               carts {
//                 products_id {
//                   id
//                   title
//                   description
//                   price
//                   image {
//                     id
//                   }
//                 }
//               }
//             }
//           }
//           `
//         ,
//         variables: {},
//       };

//       const options = {
//         method: "POST",
//         headers: headers,
//         body: JSON.stringify(graphqlQuery),
//       };

//       const response = await fetch(endpoint, options);
//       const data = await response.json();
//       console.log(data.data.users_me.carts);
//       for (let i = 0; i < data.data.users_me.carts.length; i++) {
//         const a = data.data.users_me.carts[i].products_id;
//         this.productsCart.push(a)
//       }
//         }
//         catch (error) {
//           alert(error)
//           console.log(error)
//       }
//     }
//   },
// })