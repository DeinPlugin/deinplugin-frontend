<template>
  <h1 class="my-5">Die Plattform für freie Plugins.</h1>
  <b-row class="justify-content-center">
    <HoverCard title="Owner?" img-url="../static/manager.png">
      Lade dir jetzt die Plugins herunter, die am besten zu deinem Server passen und begeistere deine Community!
    </HoverCard>
    <HoverCard title="Folge uns!" img-url="../static/community.png">
      Joine unserem Discord-Server, folge uns auf Twitter oder schau dir unsere nächsten Pläne für kommende Updates an!
    </HoverCard>
    <HoverCard title="Developer?" img-url="../static/developer.png">
      eiche deine Plugins auf DeinPlugin ein! Die breite User-Basis hilft dir, Fehler zu finden und dein Plugin zu verbessern.
    </HoverCard>
  </b-row>

  <h2 class="mt-5">Dies ist der erste Prototyp der neuen DeinPlugin-Plattform.</h2>
  <p>
    Es kann verstärkt zu Fehlern kommen. Bitte zögere uns nicht, diese auf Discord zu melden. Auch über sonstiges Feedback sind wir sehr dankbar.<br/>
    Schau auch auf unserer Roadmap vorbei, um die nächsten geplanten Updates einzusehen
  </p>
</template>

<script setup>

import HoverCard from "@/components/HoverCard.vue";
</script>

<style scoped>
* {
  text-align: center;
}
</style>