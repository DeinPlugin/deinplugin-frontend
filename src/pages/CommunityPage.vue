<template>
  <div id="community">
    <h1>Die DeinPlugin-Community</h1>

    <b-row class="my-5 mx-auto justify-content-center">
      <HoverCard title="Twitter" img-url="../static/twitter.svg" :a-href="$twitterUrl">
        Erhalte immer die aktuellen Neuigkeiten zur Plattform und nimm an exklusiven Events wie Verlosungen teil.
      </HoverCard>
      <HoverCard title="Donation" img-url="../static/donation.svg">
        Unterstütze die Entwicklung- und Unterhaltungskosten der Plattform mit einer finanziellen Spende.
      </HoverCard>
      <HoverCard title="Discord" img-url="../static/discord.svg">
        Vernetze dich mit einer wachsenden Community aus Entwicklern und Serverbesitzern oder gib und Feedback.
      </HoverCard>
    </b-row>

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

    <HoverCard title="Öffentliche Roadmap" img-url="../static/roadmap.png" class="mx-auto">
      Eine Gesamtübersicht für die nächsten Schritte ist auf unserer <b>öffentlichen Roadmap</b> sichtbar.
    </HoverCard>
  </div>
</template>

<script setup>

import HoverCard from "@/components/HoverCard.vue";
</script>

<style scoped>
* {
  text-align: center;
}

#community {
  padding: 1rem 4rem;
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