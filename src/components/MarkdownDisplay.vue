<template>
  <div v-if="md" v-html="markdownToHtml(md)"></div>
  <p v-else>Beim Laden ist ein Fehler aufgetreten.</p>
</template>

<script setup>
import {marked} from "marked";

defineProps({
  md: String,
})

function markdownToHtml(x) {
  return marked(x)
}
</script>

<style scoped>
</style>