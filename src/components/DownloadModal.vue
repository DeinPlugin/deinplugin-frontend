<template>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Download</h1>
          <button type="button" class="btn-close bg-white" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <p class="my-4">
            Alle auf der Plattform angebotenen Plugins sind vollkommen kostenlos.
            Für die Entwicklung und Bereitstellung der Plattform entsteht dennoch ein zeitlicher und finanzieller Aufwand.<br/>
            Aus diesem Grund freuen wir uns sehr über jede freiwillige Spende, die uns hilft die Plattform noch besser zum machen.<br/>
          </p>

          <div class="my-4">
            <a href="https://github.com/sponsors/DeinPlugin" target="_blank" class="my-3">
              <img height="35" src="https://img.shields.io/github/sponsors/DeinPlugin?label=Spenden&logo=GitHub">
            </a>
            <p class="my-2">Danke für deine Unterstützung.</p>
          </div>
        </div>

        <div class="my-3">
          <b-button v-if="item && item.download && item.download[0]" v-for="download in item.download" @click="openDownload(download.download_url)" class="text-white">Download - {{download.name}}</b-button>
          <b-button v-else v-if="item" @click="openDownload(`${item.github_url}/releases`)" class="text-white">Download - GitHub</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {event} from "vue-gtag";

const props = defineProps({
  title: String,
  item: Object,
})

function openDownload(url) {
  window.open(url, '_blank')

  event('download', {
    event_label: props.item.names[0].value
  })
}
</script>

<style scoped>
* {
  text-align: center;
  align-content: center;
  color: #FFF !important;
}
</style>