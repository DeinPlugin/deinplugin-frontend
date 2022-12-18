<template>
  <div class="my-5">
    <b-button v-b-toggle="`collapse-${id}`" variant="primary">{{title}}</b-button>
    <b-collapse :id="`collapse-${id}`" class="mt-2">
        <slot />
    </b-collapse>
  </div>
</template>

<script setup>


defineProps({
  title: String,
  id: String
})
</script>

<style scoped>

</style>