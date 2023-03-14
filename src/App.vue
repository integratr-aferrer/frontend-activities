<template>
  <div class="w-100 h-auto">
    <!-- HEADER -->
    <Header></Header>
    <!-- BODY -->
    <!-- FOOTER -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  },
  mounted() {
    console.log("heya");
    this.$router.push({path: '/login'});
  },
}
</script>

<style>
body {
  width: 100%;
  height: 100vh;
}
</style>
