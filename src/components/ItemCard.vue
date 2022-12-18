<template>
  <b-card class="overflow-hidden h-100">
    <b-row>
      <b-col md="2">
<!--        <b-card-img v-if="item.icon" :src="item.icon" alt="Image" class="rounded-0"></b-card-img>-->
        <b-card-img src="../../static/plugin_default.png" alt="Icon"></b-card-img>
      </b-col>
      <b-col md="10">
        <b-card-body :title="item.names[0].value">
          <b-card-text>
            <p class="introduction">{{item.introductions[0].value}}</p>
          </b-card-text>

          <colored-info :color="item.type !== 'lib' ? '#00AFEB' : '#FF8800'">{{item.type.toUpperCase()}}</colored-info>
          <colored-info color="#0F0">{{item.category.toUpperCase()}}</colored-info>
          <colored-info v-if="item.supportedPlatforms" v-for="platform in item.supportedPlatforms" color="#F00">{{platform.toUpperCase()}}</colored-info>

          <p class="version">Version: {{item.supportedGameVersions}}</p>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>

<script setup>
  import ColoredInfo from './ColoredInfo.vue'

  defineProps({
    item: Object
  })
</script>

<style scoped>
  .item-card {
    padding: 1rem 0.5rem;
    margin: 0.5rem;
    background-color: #282828;
  }

  .content {
    display: inline-block;
  }

  h1 {
    font-size: 18pt;
  }

  img {
    display: inline-block;
    height: 3rem;
    margin-right: 0.5rem;
  }

  .card-text p {
    font-size: 11pt;
  }

  p .version {
    color: #888;
  }
</style>