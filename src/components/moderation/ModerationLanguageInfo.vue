<template>
  <slot>
    <div v-for="item in langItems">
      <span class="text-muted">Language-Key: {{item.key === null ? 'Keine Angabe, Standardsprache' : item.key}}</span>
      <pre v-if="wrapInPre">{{item.value}}</pre>
      <p v-else>{{item.value}}</p>
    </div>

  </slot>
</template>

<script setup>
defineProps({
  langItems: Object,
  wrapInPre: Boolean,
})
</script>

<style scoped>
div {
  margin: 1rem 0;
}
</style>