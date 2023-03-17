<template>
  <div id="container" class="d-flex justify-content-center align-items-center row h-100">
    <form @submit.prevent="loginUser()" method="GET" id="card" class="d-flex flex-column justify-content-center gap-3 bg-white shadow-lg rounded-4 h-auto p-5 text-center col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5">
      <h3 class="text-uppercase">login</h3>
      <p class="text-start lead">Please enter your credentials to login.</p>
      <div class="alert alert-danger" role="alert" v-if="errorMessage">{{ errorMessage }}</div>
      <input required v-model="email" class="p-3 bg-light border-0" type="email" name="email" placeholder="email">
      <input required v-model="password" class="p-3 bg-light border-0" type="password" name="password" placeholder="password">
      <button class="p-3 border-0 text-center text-white text-uppercase" type="submit">login</button>
      <p class="text-muted">Not registered? <a href="#" class="text-success text-decoration-none">Create an account</a></p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    }
  },
  methods: {
    async loginUser() {
      axios.post('https://api.integratrgov.com/api/user_srvc/admin/login', {
        email: this.email,
        password: this.password
      }).then((response) => {
        localStorage.setItem("currentUser", JSON.stringify(response.data.token));
        this.$router.push('/');
      }).catch((err) => {
        if(err.response) {
          return this.errorMessage = err.response.data.errors[0].detail;
        }
          this.errorMessage = "Something went wrong, Please try again!";
      })
    },
  },
}
</script>

<style scoped>
#container, button {
  background-image: linear-gradient(45deg,#10867c, #3cc771);
}

@media screen and (max-width: 576px) {
  #container {
    background: white;
  }

  #card {
    box-shadow: unset !important;
    border: none !important;
  }
}
</style>