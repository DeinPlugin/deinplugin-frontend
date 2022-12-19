<template>
  <div class="summary">
    <h1>{{item.names[0].value}}</h1>
    <p class="subtitle">{{item.introductions[0].value}}</p>

    <p><b>Typ:</b> {{capitalizeFirstLetter(item.type)}}</p>
    <p><b>{{item.supportedPlatforms.length > 1 ? 'Plattformen' : 'Plattform'}}:</b> {{item.supportedPlatforms.map(e => capitalizeFirstLetter(e)).join(', ')}}</p>
    <p v-if="item.supportedGameVersions"><b>Versionen:</b> {{item.supportedGameVersions}}</p>
    <p>
      <b>{{item.authors.length > 1 ? 'Autoren' : 'Autor'}}: </b>
      <a v-for="author in item.authors" :href="`https://github.com/${author}`" target="_blank">{{author}}</a>
    </p>
    <p><b>Repository:</b> <a :href="item.github_url" target="_blank">GitHub</a></p>
    <p class="download">

      <b-button  v-b-modal.download-modal>Download</b-button>
<!--      <DownloadModal title="Download" :item="item" />-->
    </p>
  </div>

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
import DownloadModal from "@/components/DownloadModal.vue";

defineProps({
  item: Object
})

const emit = defineEmits(['download'])

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function clickDownload() {
  emit('download')
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