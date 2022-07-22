<template>
  <div>
    <div class="menu">
      <div
        style="display: flex;align-items: baseline;font-size: 49.5px;font-weight: 600;color: rgb(0 0 0);font-weight: initial;"
      >
        <h1 class="pro">I-</h1>
        <h1 class="sto">shop.</h1>
      </div>
      <div class="menuu">
        <RouterLink class="dom" to="/">Home</RouterLink>
        <p style="color:#2c5592">|</p>
        <RouterLink to="/products" class="ducts">Products</RouterLink>
        <p style="color:#2c5592">|</p>
        <RouterLink to="/login" class="log">Login</RouterLink>
        <p style="color:#2c5592">|</p>
        <RouterLink to="/cart" class="caart">Cart</RouterLink>
        <p style="color:#2c5592">|</p>
        <RouterLink to="/favourite" class="faav">Favourite</RouterLink>
      </div>
    </div>
    <RouterView />
  </div>
</template>

<script>
import { createClient, provideClient } from "@urql/vue";
export default {
  setup() {
    const client = createClient({
      url: "http://38.242.229.113:8055/graphql",
      fetchOptions: () => {
        const token = localStorage.getItem("token");
        return {
          headers: { authorization: token ? `Bearer ${token}` : "" }
        };
      }
    });

    provideClient(client);
  }
};
</script>

<style>
.dom:hover {
  color: rgb(138 152 235);
}
.ducts:hover {
  color: rgb(138 152 235);
}
.log:hover {
  color: rgb(138 152 235);
}
.caart:hover {
  color: rgb(138 152 235);
}
.faav:hover {
  color: rgb(138 152 235);
}
.loading {
  font-size: 170%;
  text-align: center;
  padding: 5%;
  padding-bottom: 5%;
  padding-bottom: 15%;
  color: #7b7b7b66;
}
.error {
  font-size: 170%;
  text-align: center;
  padding: 5%;
  padding-bottom: 5%;
  padding-bottom: 15%;
  color: #7b7b7b66;
}
.menu {
  background-color: #f6f6f6;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid;
}
.menu h1 {
  font-weight: initial;
  font-size: unset;
}
.menuu {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
a {
  text-decoration: none;
  color: #000000;
  padding: 0px 10px 0px 10px;
  font-size: unset;
  text-transform: uppercase;
  font-weight: bold;
}
.pro {
  color: black;
}
.sto {
  color: black;
}
.logo {
  display: flex;
  justify-content: center;
  font-size: 350%;
  align-items: center;
  margin: 1%;
  height: 10px;
}
.logo {
  text-shadow: 7px -4px 5px #e7dec4, 0 0 5em #e7dec4;
}
</style>