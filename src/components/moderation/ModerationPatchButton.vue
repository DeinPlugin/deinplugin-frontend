<template>
  <b-button @click="patchState(state)" v-if="item.state !== state" class="text-white my-2">Auf {{state.toUpperCase()}} setzen</b-button>
</template>

<script setup>
import {useCookies} from "vue3-cookies";

const { cookies } = useCookies()

const props = defineProps({
  item: Object,
  state: String,
  color: String,
})

async function patchState(state) {
  const requestOptions = {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      state: state,
      secret: cookies.get('mod_secret'),
    })
  };
  const res = await fetch(`${import.meta.env.VITE_SERVICE_URL}/plugins/${props.item.uuid}/`, requestOptions)
  if (res.ok) {
    props.item.state = state
    return;
  }
}
</script>

<style scoped>

</style>