<template>
  <div class="w-100 h-100">
    <Header></Header>
    <div class="w-100 h-auto container-fluid px-4 px-sm-5 py-4 overflow-auto">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>
:root {
  --primary: #f3525A;
  --secondary: #152440;
}
body {
  width: 100%;
  height: 100vh;
  font-family: 'Barlow', sans-serif;
}

.clr-primary {
  color: var(--primary);
}

.clr-secondary {
  color: var(--secondary);
}

.custom-bg-primary {
  background-color: var(--primary);
}

.custom-bg-secondary {
  background-color: var(--secondary);
}
</style>
