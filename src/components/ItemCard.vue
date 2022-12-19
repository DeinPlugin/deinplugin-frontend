<template>

  <router-link :to="`/storage/${item.uuid}`">
    <div class="overflow-hidden h-100 itemcard">
      <b-row>
        <b-col md="2" class="my-auto">
          <img v-if="item.icon" :src="item.icon" alt="Image" class="rounded-0">
          <img v-else
               :src="item.type === 'plugin' ? '../../static/plugin_default.png' : '../../static/lib_default.png'"
               alt="Icon">
        </b-col>
        <b-col md="9">
          <h1>{{item.names[0].value}}</h1>
          <p class="introduction">{{ item.introductions[0].value }}</p>

          <colored-info :color="item.type !== 'lib' ? '#389bfb' : '#4583d1'">{{ item.type.toUpperCase() }}
          </colored-info>
          <colored-info color="#86b1f2">{{ item.category.toUpperCase() }}</colored-info>
          <colored-info v-if="item.supportedPlatforms" v-for="platform in item.supportedPlatforms" color="#848dd8">
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
  scale: 1.005;
}

h1 {
  font-size: 23pt;
}

img {
  width: 100%;
}

.card-text p {
  font-size: 11pt;
}
</style>