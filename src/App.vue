<template>
  <div>
    <div class="menu">
      <div style="display: flex;align-items: baseline;font-size: 49.5px;font-weight: 600;color: rgb(0 0 0);font-weight: initial;">
      <h1 class="pro">I-</h1><h1 class="sto">shop.</h1></div>
    <div class="menuu"><RouterLink to="/">Home</RouterLink> <p style="color:#2c5592">|</p>
    <RouterLink to="/products">Products</RouterLink>
    </div></div>
    <RouterView />

  </div>
</template>

<script>
export default {
  setup() {

  }
}
</script>

<style scoped>
.menu{ 
    background-color: #f6f6f6;;
    height: 75px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* box-shadow: rgb(44 85 146) 0px 19px 38px -29px inset; */
}
.menu h1{ 
      font-weight: initial;
      font-size: unset;
}
.menuu{ 
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
a{
text-decoration: none;
color: #000000;
padding: 0px 10px 0px 10px;
font-size: unset;
text-transform: uppercase;
font-weight: bold;
}
.pro {
color: black;
    /* color: #646f81; */
    /* text-shadow: 7px -4px 3px #646f81, 0 0 0em #657081; */
    /* text-decoration: line-through; */
    }
    .sto{
    /* color: #e8e8e6; */
color: black;
    /* text-shadow: 7px -4px 3px #68748a, 0 0 0em #646f81; */
}
.header
{background-color: #f6f6f6;}
.logo{
display: flex;
    justify-content: center;
    font-size: 350%;
    align-items: center;
    margin: 1%;
    height: 10px;
}
.logo{
    /* display: flex; */
    /* justify-content: flex-start; */
    /* font-size: 350%; */
    /* align-items: center; */
    /* margin: 1%; */
    /* padding-left: 1%; */
    /* color: white;
    background-color: black; */
    /* height: 62px; */
  text-shadow: 7px -4px 5px #e7dec4, 0 0 5em #e7dec4;
    }
</style>