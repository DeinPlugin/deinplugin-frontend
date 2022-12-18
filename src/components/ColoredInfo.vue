<template>
  <div :style="`border: 1px solid ${color}; color: ${color}`">
    <slot />
  </div>
</template>

<script setup>
defineProps({
  color: {
    type: String,
    default: '#FFFFFF'
  },
})
</script>

<style scoped>
  div {
    padding: 0.2rem 0.4rem;
    margin: 0 0.5rem 0.5rem 0;
    width: fit-content;
    display: inline-block;
  }
</style>