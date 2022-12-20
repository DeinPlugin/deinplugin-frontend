<template>
  <b-row v-if="items" id="items">
    <b-col v-for="item in items" lg="4" md="10" class="align-self-stretch my-2">
      <ItemCard :item="item"></ItemCard>
    </b-col>
  </b-row>

  <div v-else>
    <b-spinner variant="primary" label="Lade"></b-spinner>
  </div>
</template>

<script setup>
import {ref} from "vue";
import ItemCard from "@/components/ItemCard.vue";

const items = ref(null)

async function fetchItems() {
  items.value = null
  const res = await fetch(
      `${import.meta.env.VITE_SERVICE_URL}/plugins/`
  )
  items.value = await res.json()
}

fetchItems()
</script>

<style scoped>
#items {
  padding: 1rem 2rem;
}
</style>