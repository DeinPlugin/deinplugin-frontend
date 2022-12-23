<template>
  <b-accordion class="my-3">
    <b-accordion-item :title="`${item.names[0].value} von ${item.authors.join(', ')} (${item.state.toUpperCase()})`" >
      <h1>Eckdaten</h1>
      <b-row>
        <b-col>
          <p><b>UUID:</b> <br/>{{item.uuid}}</p>
          <p><b>Status:</b> <br/>{{item.state.toUpperCase()}}</p>
        </b-col>
        <b-col>
          <p><b>Specs-Version:</b> <br/>{{item.specVersion}}</p>
          <p><b>GitHub-Repository:</b> <br/><a :href="item.github_url" target="_blank">{{item.github_url}}</a></p>
        </b-col>
      </b-row>

      <b-accordion>
        <b-accordion-item title="Unverzichtbare Properties">
          <h2>Autoren</h2>
          <p><a v-for="author in item.authors" :href="`https://github.com/${author}`" target="_blank">{{author}}</a></p>

          <h2>Name</h2>
          <ModerationLanguageInfo :lang-items="item.names" :wrap-in-pre="true"/>

          <h2>Kategorie</h2>
          <b-row>
            <b-col lg="4" :class="categories.includes(item.category) ? 'text-success' : 'text-danger'"><p>{{item.category}}</p></b-col>
            <b-col lg="8" class="text-warning">
              <p><i><b>Zugelassene Kategorien:</b></i></p>
              <p><i>{{categories.join(', ')}}</i></p>
            </b-col>
          </b-row>

          <h2>Unterstützte Spielversionen</h2>
          <b-row>
            <b-col lg="4" :class="matchesSemVer(item.supportedGameVersions) ? 'text-success' : 'text-danger'"><p>{{item.supportedGameVersions}}</p></b-col>
            <b-col lg="8" class="text-warning">
              <p><i><b>Semantic Version</b></i></p>
            </b-col>
          </b-row>

          <h2>Kurzbeschreibung</h2>
          <ModerationLanguageInfo :lang-items="item.introductions" :wrap-in-pre="true" />

          <h2>Vollbeschreibung</h2>
          <ModerationLanguageInfo :lang-items="item.descriptions" :wrap-in-pre="true"/>
        </b-accordion-item>
      </b-accordion>

      <b-accordion class="mt-3">
        <b-accordion-item title="Optionale Properties">
          <h2>Download</h2>
          <p v-for="download in item.download" v-if="item.download && item.download.length > 0" >
            {{download.name}}<br/>
            <a :href="download.download_url" target="_blank">{{ download.download_url }}</a>
          </p>
          <p v-else>Keine Downloads, verweise auf <a :href="`${item.github_url}/releases`" target="_blank">GitHub Releases</a></p>

          <h2>Unterstützte Plattformen</h2>
          <b-row v-if="item.supportedPlatforms && item.supportedPlatforms.length > 0">
            <b-col lg="4" :class="item.supportedPlatforms.every((p) => platforms.includes(p)) ? 'text-success' : 'text-danger'"><p>{{item.supportedPlatforms.join(', ')}}</p></b-col>
            <b-col lg="8" class="text-warning">
              <p><i><b>Zugelassene Plattformen:</b></i></p>
              <p><i>{{platforms.join(', ')}}</i></p>
            </b-col>
          </b-row>
          <p v-else>Keine unterstützen Plattformen angegeben.</p>

          <h2>Dependencies</h2>
          <p v-for="dependency in item.dependencies" v-if="item.dependencies && item.dependencies.length > 0" >
            {{dependency.name}}<br/>
            Download: <a :href="dependency.url" target="_blank">{{ dependency.url }}</a> <br/>
            <span v-if="dependency.versionRange">Versionen: {{dependency.versionRange}} <br/></span>
            Benötigt: {{dependency.required === null ? false : dependency.required}}
          </p>
          <p v-else>Keine Dependencies angegeben.</p>

          <h2>Installation</h2>
          <div v-if="item.installations && item.installations.length > 0">
            <ModerationLanguageInfo :lang-items="item.installations" :wrap-in-pre="true" />
          </div>
          <p v-else>Keine Installation angegeben, verwende Standard.</p>

          <h2>Tags</h2>
          <b-row v-if="item.tags && item.tags.length > 0">
            <b-col lg="4" :class="item.tags.length <= 5 ? 'text-success' : 'text-danger'"><p>{{item.tags.join(', ')}}</p></b-col>
            <b-col lg="8" class="text-warning">
              <p><i>Maximal 5 Tags</i></p>
            </b-col>
          </b-row>
          <p v-else>Keine Angabe.</p>

          <h2>Bilder</h2>
          <b-row v-for="image in item.images" v-if="item.images && item.images.length > 0" class="mb-2">
            <b-col lg="4">
              <a :href="image" target="_blank">{{image}}</a>
            </b-col>
            <b-col lg="8">
              <b-img fluid :src="image"></b-img>
            </b-col>
          </b-row>
          <p v-else>Keine Angabe.</p>

          <h2>Icon</h2>
          <div v-if="item.icon">
            <p class="text-warning">Das Icon sollte transparenten Hintergrund besitzen (hier rote Färbung!)</p>
            <b-row>
              <b-col lg="4">
                <a :href="item.icon" target="_blank">{{item.icon}}</a>
              </b-col>
              <b-col lg="8">
                <b-img fluid :src="item.icon" class="bg-danger"></b-img>
              </b-col>
            </b-row>
          </div>

          <h2>Videos</h2>
          <div v-if="item.videoSources && item.videoSources.length > 0">
            <b-row v-for="video in item.videoSources">
              <b-col lg="4">
                <a :href="video" target="_blank">{{video}}</a>
              </b-col>
              <b-col lg="8">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe :src="video.replace('youtu.be', 'youtube.com/watch?v=').replace('watch?v=', 'embed/')" class="embed-responsive-item"></iframe>
                </div>
              </b-col>
            </b-row>
          </div>
        </b-accordion-item>
      </b-accordion>

      <div class="my-3 state-buttons">
        <ModerationPatchButton :item="item" state="approved" class="bg-success"/>
        <ModerationPatchButton :item="item" state="rejected" class="bg-danger"/>
        <ModerationPatchButton :item="item" state="pending" class="bg-warning"/>
      </div>

    </b-accordion-item>
  </b-accordion>
</template>

<script setup>
import ModerationLanguageInfo from "@/components/moderation/ModerationLanguageInfo.vue";
import {categories, platforms} from "@/data_util";
import ModerationPatchButton from "@/components/moderation/ModerationPatchButton.vue";

const props = defineProps({
  item: Object
})

function matchesSemVer(text) {
  // TODO use correct SemVer range RegEx
  var re = '^(0|[1-9]\\d*)\\.(0|[1-9]\\d*)\\.(0|[1-9]\\d*)(?:-((?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\\.(?:0|[1-9]\\d*|\\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\\+([0-9a-zA-Z-]+(?:\\.[0-9a-zA-Z-]+)*))?$'
  return new RegExp(re).test(text)
}

</script>

<style scoped>
h1 {
  font-size: 20pt;
}

h2 {
  font-size: 16pt;
  padding-top: 0.5rem;
  border-top: 1px solid gray;
}

img {
  margin-left: 2rem;
  max-height: 30vh;
}

.state-buttons * {
  margin-right: 1rem;
}
</style>