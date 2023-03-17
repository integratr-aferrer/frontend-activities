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
    components: {
        Header, Footer,
    },
}
</script>

<style>

</style>