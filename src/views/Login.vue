<template>
  <div id="container" class="d-flex justify-content-center align-items-center row h-100">
    <form @submit.once="$router.push({name: 'Home'})" id="card" class="d-flex flex-column justify-content-center gap-3 bg-white shadow-lg rounded-4 h-auto p-5 text-center col-12 col-sm-9 col-md-7 col-lg-6 col-xl-5">
      <h3 class="text-uppercase">login</h3>
      <p class="text-start lead">Please enter your credentials to login.</p>
      <input class="p-3 bg-light border-0" type="text" name="username" placeholder="username">
      <input class="p-3 bg-light border-0" type="password" name="password" placeholder="password">
      <button class="p-3 border-0 text-center text-white text-uppercase" type="submit">login</button>
      <p class="text-muted">Not registered? <a href="#" class="text-success text-decoration-none">Create an account</a></p>
    </form>
  </div>
</template>

<script>
export default {

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