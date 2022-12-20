<template>
  <div class="my-3">
    <b-accordion>
      <b-accordion-item :title="title">
        <slot/>
      </b-accordion-item>
    </b-accordion>
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