<template>
  <b-container v-if="!items" class="my-5">
    <b-row>
      <b-col lg="8" class="mb-3">
        <b-form-input v-model="passwordInput" type="password" placeholder="Moderations-Passwort"/>
      </b-col>
      <b-col>
        <b-button @click="setPassword" class="text-white w-100">Einloggen</b-button>
      </b-col>
    </b-row>

    <div class="text-center my-5">
      <h1>Dieser Ort ist geheimer als Fort Knox.</h1>
      <p>Ohne ein Passwort wirst du hier also nicht viel finden.</p>
    </div>

    <p v-if="error" class="text-danger my-3">{{error}}</p>
  </b-container>

  <b-container v-if="items">
    <h1 class="text-primary text-center my-5">Moderations-Dashboard</h1>
    <b-button @click="logout" class="text-white my-3">Ausloggen</b-button>
    <ModerationItemCard v-for="item in items" :item="item"/>
  </b-container>
</template>

<script setup>
import { useCookies } from "vue3-cookies";
import {ref} from "vue";
import ModerationItemCard from "@/components/moderation/ModerationItemCard.vue";

const { cookies } = useCookies()
const passwordInput = ref('')
const items = ref(null)
const error = ref(null)

function setPassword() {
  cookies.set('mod_secret', passwordInput.value)
  fetchPendingItems()
}

async function fetchPendingItems() {
  items.value = null
  const res = await fetch(`${import.meta.env.VITE_SERVICE_URL}/plugins/?state=pending&secret=${cookies.get('mod_secret')}`)
  if (res.ok) {
    items.value = await res.json()
    error.value = null
    return;
  }

  const status = res.status
  if (status === 401) {
    error.value = 'Falsches Passwort.'
    cookies.remove('mod_secret')
    return
  }

  error.value = 'Ein unbekannter Fehler ist aufgetreten.'
}

function logout() {
  cookies.remove('mod_secret')
  items.value = null
  error.value = null
}

const initialCookie = cookies.get('mod_secret')
if (initialCookie) fetchPendingItems()
</script>

<style scoped>
h2 {
  color: var(--bs-primary);
}
</style>