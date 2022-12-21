<template>
  <div :style="`border: 1px solid ${color}; color: ${color}`">
    <Icon v-if="icon" :icon="icon" class="mx-1"/>
    <slot />
  </div>
</template>

<script setup>
import {Icon} from "@iconify/vue";

defineProps({
  color: {
    type: String,
    default: '#FFFFFF',
  },
  icon: String,
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