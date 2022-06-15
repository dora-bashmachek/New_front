<template>
  <div>
    <div class="flexin">
    <div class="flex">
    <div class="part1">
      <input type="text" name="first" placeholder="Write your name" />
      <input type="text" name="last" placeholder="Write your last name" />
      <input type="email" name="email" placeholder="Write your email" />
      <input
        type="password"
        name="password"
        placeholder="Write your password"
      />
      <button @click="createUser" class="card-text-button">Завершить регистрацию</button>
    </div>
    <div class="flx">
    <div class="liner"></div> <div>OR</div> <div class="liner"></div>
    </div>
    <div class="part2">
      <input
        type="email"
        name="auth_email"
        value="a@example.com"
        placeholder="Write your email"
      />
      <input
        type="password"
        name="auth_password"
        value="123"
        placeholder="Write your password"
      />
      <button @click="getAuth" class="card-text-button">Войти</button>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import { provideClient, useMutation, useQuery } from "@urql/vue";
import { ref } from "@vue/reactivity";
import axios from "axios";

export default {
  setup() {
    const me_email = ref('') 
    const me_id = ref('')

    
    async function user_me () {
       const { data } = await axios.get("http://38.242.229.113:8055/users/me", {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      console.log(data);
      me_email.value = data.data.email
      me_id.value = data.data.id
    }


    async function getAuth() {
      const password = document.querySelector(
        "input[name=auth_password]"
      ).value;
      const email = document.querySelector("input[name=auth_email]").value;
      const data = { email: email, password: password };
      const result = await axios.post(
        "http://38.242.229.113:8055/auth/login",
        data
      );
      localStorage.setItem('token', result.data.data.access_token);
    }
    async function createUser() {
      const first = document.querySelector("input[name=first]").value;
      const last = document.querySelector("input[name=last]").value;
      const email = document.querySelector("input[name=email]").value;
      const password = document.querySelector("input[name=password]").value;
      const data = {
        first_name: first,
        last_name: last,
        email: email,
        password: password,
        role: "cf49ed74-e9df-451d-ae3a-9a77c07fcf7a"
      };
      axios
        .post("http://38.242.229.113:8055/users", data)
        .then(alert("Успешно зарегистрировались"));
    }
    return {
      getAuth,
      createUser,
      user_me,
      me_email,
      me_id
    };
  },
};
</script>

<style scoped>
.flex{
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.flexin{
    display: flex;
        justify-content: center;
}
.part1{
    width: 50%;
    display: flex;
        flex-direction: column;

}
.part2{
    width: 50%;
    display: flex;
        flex-direction: column;

}
.flx{
    display: flex;
    align-items: center;
        margin: 27px 0px 10px 0px;
}
.liner{
    height: 1px;
    background-color: black;
    width: 300px;
}
input {
  width: 286px;
  text-align: center;
  padding-top: 15px;
  margin: 22px 0px 0px 0px;
  z-index: 10;
}
.card-text-button {
  padding: 10px 0px;
  border: #ffffff solid 1px;
  background-color: black;
  border-radius: 4%;
  color: white;
  font-weight: 700;
  opacity: 0.8;
  cursor: pointer;
  margin-top: 19px;
      border-radius: 5px;
      width: 286px;
      text-align: center;
}
.card-text-button:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
  z-index: 0;
}
</style>