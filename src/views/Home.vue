<template >
  <div class="home">
    <div class="flex">
      <div class="text">
        <h1 class="welcome">Welcome!</h1>
        <ul>
          <h2 class="why">why us?</h2>
          <li class="spisok">fast feedback</li>
          <li class="spisok">high quality</li>
          <li class="spisok">fast delivery</li>
          <li class="spisok">
            <h2>best for customers ;)</h2>
          </li>
        </ul>
      </div>
      <div class="src">
        <img class="golova" src="./images/Снимок экрана (7).jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>


<style scoped>
.home {
  text-align: center;
}
.menu {
  background-color: #ffffff;
}
.flex {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-top: 5%;
}
.text {
  width: 35%;
  text-align: center;
  font-size: initial;
}
.text li {
  text-decoration: none;
  list-style-type: none;
  font-size: 150%;
}
.welcome {
  font-size: 365%;
  height: 0%;
}
.golova {
  width: 100%;
}
.logo {
  display: flex;
  justify-content: center;
  font-size: 222%;
  align-items: center;
  margin: 1%;
  height: 10px;
}
</style>