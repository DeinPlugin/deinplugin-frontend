<template>
  <div id="community">
    <h1 class="my-5 mx-2">Die DeinPlugin-Community</h1>

    <b-container fluid>
      <b-row class="my-5 mx-4 justify-content-center">
        <HoverCard title="Twitter" img-url="/img/twitter_outline.jpg" :on-click="openTwitter">
          Erhalte immer die aktuellen Neuigkeiten zur Plattform und nimm an exklusiven Events wie Verlosungen teil.
        </HoverCard>
        <HoverCard title="Donation" img-url="/img/donation.svg" :on-click="openDonation">
          Unterstütze die Kosten der Plattform mit einer finanziellen Spende und erhalte dafür verschiedene Vorteile.
        </HoverCard>
        <HoverCard title="Discord" img-url="/img/discord_outline.png" :on-click="openDiscord">
          Vernetze dich mit einer wachsenden Community aus Entwicklern und Serverbesitzern oder gib und Feedback.
        </HoverCard>
      </b-row>
    </b-container>

    <b-container class="next-steps">
      <h1>Nächste Schritte</h1>
      <p>Für die nächsten Entwicklungsschritte haben wir bereits zahlreiche Ideen. Dazu zählen zum Beispiel:</p>
      <ul>
        <li>...ein über GitHub laufendes Usersystem</li>
        <li>...ein vereinfachter Einreichungsprozess</li>
        <li>...ein Generator für die deinplugin.yaml-Metadatei</li>
        <li>...die Bewertung von Plugins</li>
        <li>...und vieles mehr!</li>
      </ul>
    </b-container>

    <b-row class="justify-content-center mx-4">
      <HoverCard title="Öffentliche Roadmap" img-url="/img/roadmap_outline.png" :on-click="openRoadmap">
        Eine Gesamtübersicht für die nächsten Schritte ist auf unserer <b>öffentlichen Roadmap</b> sichtbar.
      </HoverCard>
    </b-row>
  </div>
</template>

<script setup>
import HoverCard from "@/components/HoverCard.vue";

// TODO: Use global constants
function openTwitter() {
  window.open('https://twitter.com/deinpluginnet', '_blank')
}

function openDonation() {
  window.open('https://github.com/sponsors/DeinPlugin', '_blank')
}

function openDiscord() {
  window.open('https://discord.gg/azG4wxrQWy', '_blank')
}

function openRoadmap() {
  window.open('https://github.com/orgs/DeinPlugin/projects/1', '_blank')
}
</script>

<style scoped>
* {
  text-align: center;
}

ul {
  padding-left: 0;
}

ul li {
  list-style-type: none;
  list-style-position: inside;
}

h1 {
  color: var(--bs-primary);
}
</style>