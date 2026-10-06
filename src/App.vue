<script setup lang="ts">
//import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />
  <main>
    <RouterView />
  </main>
  <Footer />
</template>


<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
 
main {
  flex: 1;
}
</style>