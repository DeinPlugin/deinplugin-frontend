<template>
  <b-container class="my-4">
    <b-row>
      <b-col md="10" class="my-2">
        <b-form-input v-model="searchFilter.text" placeholder="Suche nach Plugins"></b-form-input>
      </b-col>
      <b-col md="2" class="my-2">
        <b-button v-b-toggle.collapse-filter variant="primary" class="text-white w-100">Filtern</b-button>
      </b-col>
    </b-row>
  </b-container>

  <b-collapse id="collapse-filter" class="mt-2">
    <b-container>
      <b-row>
        <b-col>
          <p><b>Art</b></p>
          <b-form-group>
            <b-form-checkbox
                v-for="type in types"
                v-model="searchFilter.types"
                :value="type">
              <Icon :icon="getDataFromType(type).icon" class="mx-1"/>
              {{ getDataFromType(type).name }}
            </b-form-checkbox>
          </b-form-group>
        </b-col>

        <b-col>
          <p><b>Kategorie</b></p>
          <b-form-group>
            <b-form-checkbox
                v-for="category in categories"
                v-model="searchFilter.categories"
                :value="category">
              <Icon :icon="getDataFromCategory(category).icon" class="mx-1"/>
              {{ getDataFromCategory(category).name }}
            </b-form-checkbox>
          </b-form-group>
        </b-col>

        <b-col>
          <p><b>Plattform</b></p>
          <b-form-group>
            <b-form-checkbox
                v-for="platform in platforms"
                v-model="searchFilter.platforms"
                :value="platform">
              <Icon :icon="getDataFromPlatform(platform).icon" class="mx-1"/>
              {{ getDataFromPlatform(platform).name }}
            </b-form-checkbox>
          </b-form-group>
        </b-col>
      </b-row>
    </b-container>
  </b-collapse>

  <b-container fluid v-if="items && filteredItems" id="items">
    <div v-if="filteredItems.length === 0" class="text-center">
      <h2>Leider keine passenden Plugins gefunden. :(</h2>
      <p class="my-4">Es wird eindeutig Zeit, dass sich jemand deiner Vorstellung annimmt!</p>
      <p>Wie wäre es, wenn du auf unserem <a :href="$discordJoinUrl" target="_blank">Discord-Server</a> fragst?</p>
    </div>


    <b-row>
      <b-col v-for="item in filteredItems" lg="4" md="10" class="align-self-stretch my-2">
        <ItemCard :item="item"></ItemCard>
      </b-col>
    </b-row>
  </b-container>


  <div v-else class="d-flex justify-content-center my-5">
    <b-spinner variant="primary" label="Lade"></b-spinner>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import ItemCard from "@/components/ItemCard.vue";
import {Icon} from "@iconify/vue";

const types = ['plugin', 'lib']
const categories = ['adminTool', 'devTool', 'chat', 'economy', 'game', 'protection', 'roleplay', 'worldManagement', 'misc']
const platforms = ['spigot', 'paper', 'sponge']

const items = ref(null)
const searchFilter = ref({
  text: '',
  types: types,
  categories: categories,
  platforms: platforms
})

const filteredItems = computed(() => {
  return items.value
      .filter((i) => searchFilter.value.text.trim().length === 0 || i.names[0].value.toLowerCase().includes(searchFilter.value.text.toLowerCase()))
      .filter((i) => searchFilter.value.types.includes(i.type))
      .filter((i) => searchFilter.value.categories.includes(i.category))
      .filter((i) => i.supportedPlatforms.some((p) => searchFilter.value.platforms.includes(p)))
})

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