<template>
  <div id="submission">
    <h1 class="my-5">Ein neues Plugin einreichen</h1>
    <div v-if="success" class="text-center my-4">
      <p class="text-success">
        Das Plugin wurde erfolgreich eingereicht.<br/>
        Wir melden uns bei dir, sobald es etwas Neues zu deiner Einreichung gibt.<br/>
        Vielen Dank für deine Unterstützung.
      </p>
      <b-button @click="reset" class="text-white my-4">Noch ein Plugin einreichen</b-button>
    </div>

    <b-col v-else xl="8" sm="11" class="mx-auto mb-5">
      <b-form @submit="onSubmit">
        <b-form-group
            id="mail-input-group"
            label="E-Mail-Adresse*:"
            label-for="mail-input">
          <b-form-input
              id="mail-input"
              v-model="state.email"
              placeholder="E-Mail-Adresse"
              aria-describedby="mail-feedback"
          ></b-form-input>
          <b-form-text>Über die Angabe deiner Mailadresse benachrichtigen wir dich über den Status deiner Einreichung.</b-form-text>
        </b-form-group>
        <b-form-invalid-feedback v-for="error in v$.email.$errors" class="my-3" id="mail-feedback">
          Bitte gib eine gültige Mail-Adresse an.
        </b-form-invalid-feedback>

        <b-form-group id="github-input-group"
                      label="GitHub-Repository URL*:"
                      label-for="github-input"
                      description=""
                      class="my-4">
          <b-form-input
              id="github-input"
              v-model="state.github_url"
              placeholder="GitHub-URL"
          ></b-form-input>
          <b-form-text>Es muss sich um ein Repository mit gültiger deinplugin.yaml-Datei handeln.</b-form-text>
        </b-form-group>
        <b-form-invalid-feedback v-for="error in v$.github_url.$errors" class="my-3">
          Bitte gib eine gültige GitHub-URL an.
        </b-form-invalid-feedback>

        <p v-if="error" class="text-danger">{{error}}</p>

        <div v-if="isLoading">
          <b-spinner variant="primary" label="Lade"></b-spinner>
        </div>
        <b-button v-else type="submit" variant="primary" class="text-white">Absenden</b-button>
      </b-form>
    </b-col>

    <b-col xl="8" sm="11" class="mx-auto mb-5">
      <p>
        All unsere Einreichungen funktionieren im Moment über die Plattform <a href="https://github.com/" target="_blank">GitHub</a>.
        GitHub ist eine Plattform, auf der alle Entwickler quelloffene Projekte teilen können.
        In quelloffenen Projekten ist der Quellcode für jeden Außenstehenden einsehbar.
        Außerdem können andere Entwickler das Projekt weiterentwickeln und somit den ursprünglichen Entwickler unterstützen.<br/>
      </p>
      <p>
        Das Einreichen eines Plugins ist bei uns nur für GitHub-Projekte möglich, die eine bestimmte Datei im Hauptverzeichnis beinhalten.
        Die Datei muss den Namen <b>deinplugin.yaml</b> tragen und eine vorgegebene Form besitzen.
        Die komplette Spezifikation der deinplugin.yaml-Datei findest du in einem von uns angelegten <a href="https://github.com/DeinPlugin/contribute" target="_blank">GitHub-Repository.</a>
        Wenn du direkt einsteigen willst, kannst du aber auch die unten gezeigten Beispiele anschauen oder dich an der deinplugin.yaml-Datei bereits eingereichter Plugins orientieren.
      </p>
      <p>
        <span class="text-primary"><b>Wichtig:</b></span> Nutze bestmöglich GitHub-Releases, damit andere dein Plugin herunterladen können. GitHub Releases ist direkt in deinem Repository enthalten.
        Andere Anbieter werden von uns möglicherweise <b>nicht</b> freigegeben (besonders wenn es sich um kommerzielle Plattformen oder Links mit begrenzter Lebensdauer handelt).
      </p>
    </b-col>


    <b-col xl="8" sm="11" class="mx-auto mb-5">
      <Expandable title="Aufbau der deinplugin.yaml-Datei" id="parts">
        <h2>SpecsObject</h2>
        <MarkdownDisplay md="
```yaml
specVersion*: int
type*: String
  {plugin, lib}
name*: [LanguageObject]
authors*: [String]
download: DownloadObject
supportedPlatforms: [String]
  {spigot, paper, sponge}
supportedGameVersions*: String (Semantic Version)
category*: String
  {adminTool, devTool, chat, economy, game, protection, roleplay, worldManagement, misc}
dependencies: [DependencyObject]
introduction*: [LanguageObject]
description*: [LanguageObject]
installation: [LanguageObject]
tags: [String]
images: [String]
icon: String
videoSources: [String]
```
" />

        <h2>LanguageObject</h2>
        <p>
          <b>Info:</b> Wird kein separates LanguageObject angelegt (zB. mittels <code>name: Test</code>), so wird automatisch ein
          LanguageObject mit dem key <code>null</code> generiert.
        </p>
        <MarkdownDisplay md="
```yaml
key: String
text* String
```
" />

        <h2>DownloadObject</h2>
        <p>
          <b>Info:</b> Wird kein DownloadObject angelegt, so verlinkt der Download auf den GitHub-Releases Link des Repositories.
        </p>
        <MarkdownDisplay md="
```yaml
url*: String
name*: String
```
" />

        <h2>DependencyObject</h2>
        <MarkdownDisplay md="
```yaml
url*: String
name*: String
versionRange: String (Semantic Version)
required*: Boolean
```
" />
      </Expandable>

      <Expandable title="Bedeutung der Felder aus der Metadatei" id="fields">
        <p>
          <code>specVersion</code>: Version der Spezifikation (aktuelle Version: 1)<br/>
          <code>type</code>: Art des angebotenen Downloads (aktuell <code>plugin</code> oder <code>lib</code>)<br/>
          <code>name</code>: Anzeigename des Downloads<br/>
          <code>authors</code>: Autoren des Downloads<br/>
          <code>download</code>: Externer Download, der nicht unter GitHub-Releases bereitgestellt wird<br/>
          <code>supportedPlatforms</code>: Liste aller unterstützten Plattformen (aktuell <code>spigot</code>, <code>paper</code> und/oder <code>sponge</code>)<br/>
          <code>supportedGameVersions</code>: Unterstütze Minecraft-Versionen<br/>
          <code>category</code>: Kategorie des Downloads (aktuell: <code>adminTool</code>, <code>devTool</code>, <code>chat</code>, <code>economy</code>, <code>game</code>,
          <code>protection</code>, <code>roleplay</code>, <code>worldManagement</code>, oder <code>misc</code>)<br/>
          <code>dependencies</code>: Andere Bibliotheken, die für die reibungslose Nutzung des Downloads benötigt werden<br/>
          <code>introduction</code>: Einleitungstext des Downlaods. Markdown-Format.<br/>
          <code>description</code>: Beschreibungstext des Downloads. Markdown-Format.<br/>
          <code>installation</code>: Installations-Guide des Downlaods. Markdown-Format.<br/>
          <code>tags</code>: Tags zur besseren Einordnung des Downloads.<br/>
          <code>images</code>: Bilder des Downloads.<br/>
          <code>icon</code>:  Icon des Downloads.<br/>
          <code>videoSources</code>: Videos zum Download.<br/>
        </p>
      </Expandable>

      <Expandable title="Beispiel:  Minimale deinplugin.yaml-Datei" id="min-example">
        <MarkdownDisplay md="
```yaml
specVersion: 1
type: plugin
name: Hallo Welt
authors:
  - BiVieh
supportedGameVersions: ^1.8
category: misc
introduction: Ein einfaches Plugin, das das `/helloworld`-Kommando hinzufügt
description: |
      # Überblick
      Das Plugin fügt den weltbewegenden Befehl `/helloworld` hinzu.

      # Nutzung
      Zur Nutzung des Plugins muss lediglich `/helloworld` im Chat eingegeben werden.
```
" />
      </Expandable>

      <Expandable title="Beispiel:  Vollständige deinplugin.yaml-Datei" id="max-example">
        <MarkdownDisplay md="
```yaml
specVersion: 1
type: plugin
name:
  de: Hallo Welt
  en: Hello World
authors:
  - BiVieh
download:
  url: https://mydownload.com/helloworld.jar
  name: MyDownload
supportedPlatforms:
  - spigot
  - paper
supportedGameVersions: ^1.8
category: misc
dependencies:
  - url: https://dependency1.dev/
    name: Dependency 1
    versionRange: 1.0.0 - 1.7.0
    required: true
  - url: https://dependency2.dev/
    name: Dependency 2
    required: false
introduction:
  de: Ein einfaches Plugin, das das `/helloworld`-Kommando hinzufügt
  en: A simple plugin adding the `/helloworld`-command
description:
  de: |
      # Überblick
      Das Plugin fügt den weltbewegenden Befehl `/helloworld` hinzu.

      # Nutzung
      Zur Nutzung des Plugins muss lediglich `/helloworld` im Chat eingegeben werden.
  en: |
      # Overview
      The plugin adds the groundbreaking command `/helloworld`.

      # Usage
      To use the plugin, just enter the command `/hellworld` in the chat.
installation:
  de: |
    - Herunterladen der Plugin-Datei
    - Ablegen der Datei im Plugins-Ordner
    - Server neustarten
  en: |
    - Download the plugin-file
    - Put the file into your plugins-folder
    - Restart your server
tags:
  - helloworld
images:
  - https://myimage.com/screenshot1.png
  - https://myimage.com/screenshot2.png
icon: https://myimage.com/helloworld.png
videoSources:
  - https://www.youtube.com/watch?v=dQw4w9WgXcQ
```
" />
      </Expandable>

      <Expandable title="Schema zur Validierung" id="schema">
        <p>
          In unserem <a href="https://github.com/DeinPlugin/contribute/blob/main/schema.json" target="_blank">Contribution GitHub-Repository</a>
          stellen wir ein JSON-Schema bereit, das zur Validierung der YAML-Metadatei genutzt werden kann.
          Viele gängige Code-Editoren bieten das Einbinden eines solchen Schemas zur einfacheren Bearbeitung der Datei an.
        </p>
        <p>Bitte beachte, dass es keine Garantie für die Richtigkeit des Schemas gibt. Das Schema findet sich in ständiger Überarbeitung.</p>
      </Expandable>
    </b-col>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";
import Expandable from "@/components/Expandable.vue";
import MarkdownDisplay from "@/components/MarkdownDisplay.vue";
import {email, required, helpers} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

const state = reactive({
  email: '',
  github_url: '',
})

const githubUrlValidator = helpers.regex(/https?:\/\/(www\.)?(github)..[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)
const rules = {
  email: { required, email },
  github_url: { required, githubUrlValidator }
}
const v$ = useVuelidate(rules, state)

const isLoading = ref(false)
const success = ref(false)
const error = ref(null)

function onSubmit() {
  v$.value.$touch()

  if (v$.value.github_url.$error || v$.value.email.$error) {
    return;
  }

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      mail: state.email.trim(),
      github_url: state.github_url.trim().replace(/\/$/,''),
    })
  };
  isLoading.value = true
  error.value = null

  fetch(`${import.meta.env.VITE_SERVICE_URL}/plugins/`, requestOptions)
      .then(async response => {
        isLoading.value = false
        if (!response.ok) {
          if (response.status === 400) error.value = 'Unter der URL wurde keine valide deinplugin-yaml Datei gefunden.'
          if (response.status === 409) error.value = 'Dieses Repository wurde bereits eingereicht.'
          if (response.status === 500) error.value = 'Es ist ein unbekannter Fehler aufgetreten.'
          return
        }

        success.value = true
      })
      .catch(_ => {
        isLoading.value = false
        error.value = 'Es ist ein unbekannter Fehler aufgetreten.'
      })
}

function reset() {
  success.value = false
  error.value = false
  state.email = ''
  state.github_url = ''
}
</script>

<style scoped>
#submission {
  padding: 1rem 3rem;
}

h1 {
  text-align: center;
  color: var(--bs-primary);
}
</style>