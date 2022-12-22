<template>
  <NavBar />

  <div id="route">
    <router-view></router-view>
  </div>

  <Footer />
</template>

<script setup>
import NavBar from './NavBar.vue'
import Footer from "@/Footer.vue";
import {watch} from "vue";
import {useRoute} from "vue-router";
import {pageview} from "vue-gtag";

const route = useRoute()
watch(
    () => route.path,
    async newPath => {
      pageview(newPath)
    }
)
</script>

<style scoped>
#route {
  min-height: 90vh;
}

@font-face {
  font-family: "Outfit";
  src: local("Outfit"),
  url(./fonts/Outfit-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Outfit SemiBold";
  src: local("Outfit SemiBold"),
  url(./fonts/Outfit-SemiBold.ttf) format("truetype");
}
@font-face {
  font-family: "Outfit ExtraBold";
  src: local("Outfit ExtraBold"),
  url(./fonts/Outfit-ExtraBold.ttf) format("truetype");
}
</style>
