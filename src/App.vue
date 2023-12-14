<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
</script>

<template>

  <main>
    <NavBar></NavBar>
    <RouterView />
    <Footer></Footer>
    <!-- <img src="./assets/2023-12-10.png" alt=""> -->
  </main>
</template>

<style scoped>
main{
  min-height: 100vh;
}
</style>
