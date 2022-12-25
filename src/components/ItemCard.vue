<template>
    <router-link :to="`/storage/${item.uuid}`">
      <div class="overflow-hidden h-100 itemcard">
        <b-row>
          <b-col md="3" class="my-1">
            <img v-if="item.icon" :src="item.icon" alt="Image" class="rounded-0">
            <img v-else
                 :src="item.type === 'plugin' ? '/img/plugin_default.png' : '/img/lib_default.png'"
                 alt="Icon">
          </b-col>
          <b-col md="9">
            <h1>{{item.names[0].value}}</h1>
            <p class="introduction">{{ item.introductions[0].value }}</p>

            <colored-info :icon="getDataFromType(item.type).icon" :color="item.type !== 'lib' ? 'var(--bs-primary)' : 'var(--bs-primary)'">{{ item.type.toUpperCase() }}
            </colored-info>
            <colored-info :icon="getDataFromCategory(item.category).icon" color="var(--bs-secondary)">{{ item.category.toUpperCase() }}</colored-info>
            <colored-info v-if="item.supportedPlatforms" v-for="platform in item.supportedPlatforms" color="#FB917B" :icon="getDataFromPlatform(platform).icon">
              {{ platform.toUpperCase() }}
            </colored-info>

            <p class="version">Version: {{ item.supportedGameVersions }}</p>
          </b-col>
        </b-row>
      </div>
    </router-link>
</template>

<script setup>
import ColoredInfo from './ColoredInfo.vue'
import {getDataFromCategory, getDataFromPlatform, getDataFromType} from "@/data_util";

defineProps({
  item: Object
})
</script>

<style scoped>
* {
  text-decoration: none;
  color: #FFF;
}

.itemcard {
  background-color: #1E3139;
  padding: 1rem 2rem;
  transition: 0.3s;
}

.itemcard:hover {
  scale: 1.02;
}

.itemcard:hover h1 {
  color: var(--bs-primary);
  transition: 0.3s;
}

h1 {
  font-size: 23pt;
  word-wrap: break-word;
}

img {
  max-width: 100%;
  max-height: 15vh;
}

.card-text p {
  font-size: 11pt;
}
</style>