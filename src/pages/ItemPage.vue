<template>
  <DownloadModal title="Download" :item="item" />

  <div v-if="item" id="item-page">
    <div class="d-xl-none mb-5">
      <ItemSummary :item="item" />
    </div>

    <b-row>
      <b-col xl="10" lg="12" md="12">
        <b-tabs content-class="mt-3" justified id="tabs" active-nav-item-class="font-weight-bold text-primary font-weight-bold">
          <b-tab title="Infos" active>
            <h1>Beschreibung</h1>
            <MarkdownDisplay :md="item.descriptions[0].value"/>

            <div v-if="item.dependencies && item.dependencies[0]">
              <h1>Dependencies</h1>
              <p>
                Dependencies sind Plugins oder Bibliotheken, die für die reibungslose Nutzung des Plugins installiert werden.<br/>
                Lade dir Dependencies, die mit einem Stern als "unbedingt notwendig" gekennzeichnet wurden, mit dem Plugin herunter und installiere sie auf dem Server.
              </p>
              <b-row>
                <b-col v-for="(dependency, i) in item.dependencies" lg="3" md="6" class="dependency">
                  <h1>{{!dependency.name ? `Dependency ${i + 1}` : dependency.name}}</h1>
                  <p v-if="dependency.required">Zwingend notwendig</p>
                  <p v-else>Optional</p>
                  <p v-if="dependency.versionRange">Version {{dependency.versionRange}}</p>
                  <a :href="dependency.url" target="_blank">Download</a>
                </b-col>
              </b-row>
            </div>

            <h1>Installation</h1>
            <MarkdownDisplay v-if="item.installations[0]" :md="item.installations[0].value"/>
            <ul v-else>
              <li>Herunterladen der Plugin-Datei</li>
              <li>Ablegen der Datei im Plugins-Ordner des Servers</li>
              <li>Neustarten des Servers</li>
            </ul>

            <div v-if="item.images && item.images[0]">
              <h1>Bilder</h1>
              <b-row>
                <b-col xl="4" sm="10" v-for="image in item.images">
                  <b-img :src="image" fluid alt="Beispiel Bild"></b-img>
                </b-col>
              </b-row>
            </div>

            <div v-if="item.videoSources && item.videoSources[0]">
              <h1>Videoquellen</h1>
              <b-container fluid>
                <div v-for="video in item.videoSources" class="mw-100">
                  <iframe :src="video.replace('youtu.be', 'youtube.com/watch?v=').replace('watch?v=', 'embed/')"></iframe>
                </div>
              </b-container>

            </div>

          </b-tab>
          <b-tab title="Support">
            <p>
              Du hast einen Bug gefunden? Du hast einen Vorschlag zur Verbesserung des Plugins?
              Im Moment laufen all diese Anfragen über <a :href="`${item.github_url}/issues`" target="_blank">GitHub Issues.</a> <br/>
              GitHub Issues ist eine einfache Möglichkeit, mit der auch andere Developer auf dein Problem oder dein Feedback eingehen können.
            </p>
            <p>
              Bitte erstelle für Bug-Reports oder Feature-Anfragen einen neuen Issue im <a :href="`${item.github_url}/issues`" target="_blank">GitHub-Repository des Projekts</a>.<br/>
              Du kannst Fragen und Vorschläge auch auf unserem <a :href="$discordJoinUrl" target="_blank">Discord-Server</a> loswerden.
            </p>

            <div v-if="issues && issues[0]">
              <h1>Issues</h1>
              <b-row>
                <b-col v-for="issue in issues" xl="4" lg="6" md="12" class="align-self-stretch my-2">
                  <IssueCard :issue="issue"></IssueCard>
                </b-col>
              </b-row>
            </div>
          </b-tab>
        </b-tabs>
      </b-col>

      <b-col xl="2" md="0">
        <ItemSummary :item="item" class="d-none d-xl-block side-summary" />
      </b-col>
    </b-row>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import {useRoute} from "vue-router"
import MarkdownDisplay from "@/components/MarkdownDisplay.vue"
import ItemSummary from "@/components/ItemSummary.vue"
import DownloadModal from "@/components/DownloadModal.vue"
import {event} from "vue-gtag";
import IssueCard from "@/components/IssueCard.vue";

const item = ref(null)
const issues = ref(null)
const route = useRoute()

async function fetchItem() {
  item.value = null
  const res = await fetch(
      `${import.meta.env.VITE_SERVICE_URL}/plugins/${route.params.id}`
  )

  item.value = await res.json()
  await fetchIssues();

  event('visit-storage-item', {
    event_label: item.value.names[0].value
  })
}

async function fetchIssues(){
  issues.value = null

  let REST_URL = "https://api.github.com/repos"
  // Remove github prefix for getting the project path
  let projectPath = item.github_url.replace("https://github.com/", "");

  // Only request currently opened issues
  const res = await fetch(
      `${REST_URL}/${projectPath}/issues?state=open`
  )

  issues.value = await res.json()
  console.log(issues.value)
}

fetchItem()
</script>

<style scoped>
#item-page {
  padding: 1rem 5rem;
}

h1 {
  border-top: 1pt solid #444;
  margin-top: 4rem;
  padding-top: 1rem;
  color: var(--bs-primary);
}

.dependency {
  text-align: center;
  padding: 10px 0;
  border: 1px solid gray;
}

.dependency h1 {
  margin-top: 0rem;
  border-top: 0;
  font-size: 14pt;
}

.side-summary {
  margin-left: 2.5rem;
  padding: 0.5rem 0.75rem;
  border: 2px solid var(--bs-primary);
}

@media only screen and (max-width: 600px) {
  #item-page {
    padding: 1rem 1.5rem;
  }
}

@media only screen and (min-width: 1000px) {
  iframe {
    width: 853px;
    height: 400px;
  }
}
</style>