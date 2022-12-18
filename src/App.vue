<template>
  <NavBar />

  <div id="route">
    <router-view></router-view>
  </div>
</template>

<script setup>
import NavBar from './NavBar.vue'
import {ref} from "vue";

const discordJoinUrl = ref('https://discord.gg/')
</script>

<style scoped>
#route {
  padding: 2rem;
}
</style>
