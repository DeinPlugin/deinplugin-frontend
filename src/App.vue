<template>
  <NavBar />

  <div id="route">
    <router-view></router-view>
  </div>
</template>

<script setup>
import NavBar from './NavBar.vue'
</script>

<style scoped>
#route {
  padding: 2rem;
}
</style>
