<template>
  <div id="landing-page">
    <b-container fluid>
      <div id="top">
        <b-row class="my-5" xl="6" md="10">
          <b-col class="d-flex align-items-center justify-content-center">
            <h1 class="mx-5">Die Plattform <br/>für <span class="emphasize">freie Plugins</span>.</h1>
          </b-col>
          <b-col xl="6" md="10">
            <object type="image/svg+xml" data="/img/icon_shadow_animated.svg"></object>
          </b-col>
        </b-row>
      </div>
    </b-container>

    <b-container fluid>
        <b-row class="justify-content-center my-5 mx-4">
          <HoverCard title="Server-Admin" img-url="/img/owner.svg" :on-click="openPlugins">
            Lade dir jetzt die Plugins herunter, die am besten zu deinem Server passen und begeistere deine Community!
          </HoverCard>
          <HoverCard title="Entwickler" img-url="/img/developer.svg" :on-click="openSubmission">
            Reiche deine Plugins auf DeinPlugin ein! Die breite User-Basis hilft dir, Fehler zu finden und dein Plugin zu verbessern.
          </HoverCard>
        </b-row>
      </b-container>
    </div>

    <div id="socials" class="px-5">
      <h1>Folge uns!</h1>
      <p>Joine unserem Discord-Server, folge uns auf Twitter oder schau dir unsere nächsten Pläne für kommende Updates an!</p>
      <b-row class="justify-content-center">
        <b-col xl="3" class="my-3 social-link">
          <a :href="$discordJoinUrl" target="_blank">
            <h1>Discord</h1>
            <img src="/img/discord.svg">
          </a>
        </b-col>
        <b-col xl="3" class="my-3 social-link">
          <a :href="$twitterUrl" target="_blank">
            <h1>Twitter</h1>
            <img src="/img/twitter.svg">
          </a>
        </b-col>
      </b-row>
    </div>

    <div id="disclaimer" class="mx-5">
      <h1 class="mt-4">Dies ist der erste Prototyp der neuen <span class="text-white">Dein</span>Plugin-Plattform.</h1>
      <p>Es kann verstärkt zu Fehlern kommen. Bitte zögere uns nicht, diese auf Discord zu melden. Auch über sonstiges Feedback sind wir sehr dankbar.</p>
      <p class="mb-5">Schau auch auf unserer Roadmap vorbei, um die nächsten geplanten Updates einzusehen</p>
    </div>
</template>

<script setup>
import HoverCard from "@/components/HoverCard.vue";

function openPlugins() {
  window.open('/storage', '_self')
}

function openSubmission() {
  window.open('/submission', '_self')
}

function openTwitter() {
}
</script>

<style scoped>
* {
  text-align: center;
}

#top {
  background-image: url("/public/img/landing_background.svg");
  background-repeat: repeat;
}

#top h1 {
  font-size: 60pt;
  text-align: left;
}

#top object {
  width: 60%;
}

#top .emphasize {
  color: var(--bs-primary);
}

#socials {
  background-color: var(--bs-primary);
  padding: 3rem 0;
}

#socials a {
  text-decoration: none;
  color: #FFFFFF;
}

#socials img {
  width: 50px;
}

#socials h1 {
  margin: 0 2rem;
}

#socials h1, #disclaimer h1 {
  font-family: "Outfit SemiBold", sans-serif;
  font-size: 25pt;
  padding: 1rem 0;
}

#disclaimer {
  padding: 3rem 0;
}

#disclaimer h1 {
  color: var(--bs-primary);
}

@media only screen and (max-width: 600px) {
  h1 {
    font-size: 20pt !important;
  }

  #top h1 {
    font-size: 40pt !important;
  }

  .social-link h1, .social-link img {
    display: inline-block;
  }
}
</style>