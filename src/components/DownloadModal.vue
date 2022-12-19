<template>
  <b-modal id="download-modal" hide-footer close-on-backdrop>
    <h1>Download</h1>
    <p class="my-4">
      Alle auf der Plattform angebotenen Plugins sind vollkommen kostenlos.
      Für die Entwicklung und Bereitstellung der Plattform entsteht dennoch ein zeitlicher und finanzieller Aufwand.<br/>
      Aus diesem Grund freuen wir uns sehr über jede freiwillige Spende, die uns hilft die Plattform noch besser zum machen.<br/>
    </p>

    <div class="my-5">
      <a href="https://www.buymeacoffee.com/deinplugin" target="_blank" class="my-3">
        <img src="https://img.buymeacoffee.com/button-api/?text=Unterstütze uns!&emoji=&slug=deinplugin&button_colour=e27b69&font_colour=FFFFFF&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00" />
      </a>
      <p class="my-2">Danke für deine Unterstützung.</p>
    </div>

    <div>
      <b-button v-if="item.download[0]" v-for="download in item.download" :href="download.download_url" target="_blank">Download - {{download.name}}</b-button>
      <b-button v-else :href="`${item.github_url}/releases`" target="_blank">Download - GitHub</b-button>
    </div>
  </b-modal>
</template>

<script setup>
import {ref} from "vue";

defineProps({
  title: String,
  item: Object,
})

function close() {
}
</script>

<style scoped>
* {
  text-align: center;
  align-content: center;
  color: #FFF !important;
}
</style>