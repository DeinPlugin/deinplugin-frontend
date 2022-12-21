<template>
  <div class="summary">
    <h1>{{item.names[0].value}}</h1>
    <p class="subtitle">{{item.introductions[0].value}}</p>

    <p><b>Typ:</b> {{capitalizeFirstLetter(item.type)}}</p>
    <p v-if="item.supportedPlatforms"><b>{{item.supportedPlatforms.length > 1 ? 'Plattformen' : 'Plattform'}}:</b> {{item.supportedPlatforms.map(e => capitalizeFirstLetter(e)).join(', ')}}</p>
    <p v-if="item.supportedGameVersions"><b>Versionen:</b> {{item.supportedGameVersions}}</p>
    <p>
      <b>{{item.authors.length > 1 ? 'Autoren' : 'Autor'}}: </b>
      <a v-for="author in item.authors" :href="`https://github.com/${author}`" target="_blank">{{author}}</a>
    </p>
    <p><b>Repository:</b> <a :href="item.github_url" target="_blank">GitHub</a></p>

    <button type="button" class="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Download
    </button>
  </div>
</template>

<script setup>
defineProps({
  item: Object
})

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
</script>

<style scoped>
.summary {
  width: fit-content;
}

h1 {
  font-size: 20pt;
}

.subtitle {
  font-size: 12pt;
  color: #AAA;
}

.download {
  padding-top: 1.5rem;
}
</style>