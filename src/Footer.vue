<template>
  <footer>
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col class="sponsor my-3" md="3" sm="4">
          <p>Designs by</p>
          <img @click="openExternalFooterLink('https://dershayan.de/')" src="/img/dershayan.png">
        </b-col>
        <b-col md="5" sm="3" class="my-3">
          <div id="links">
            <img @click="openExternalFooterLink($twitterUrl)" src="/img/twitter.svg">
            <img @click="openExternalFooterLink($donationUrl)" src="/img/donation_filled.png">
            <img @click="openExternalFooterLink($discordJoinUrl)" src="/img/discord.svg">
          </div>

          <div id="legal">
            <a href="/imprint">Impressum</a><br>
            <a href="/policy">Datenschutzerklärung</a>
          </div>

          <p>Made with Love by DeinPlugin 2022</p>
        </b-col>
        <b-col class="sponsor my-3" md="3" sm="3">
          <p>Server by</p>
          <img @click="openExternalFooterLink('https://bero-host.de/')" src="/img/berohost.png">
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script setup>
import {event} from "vue-gtag";

function openExternalFooterLink(url) {
  window.open(url, 'blank')
  event('footer-link', {
    event_label: url,
  })
}
</script>

<style scoped>
footer {
  background-color: #0B1317;
  padding: 2rem 0;
  text-align: center;
  max-width: 100vw;
}

#legal {
  margin-bottom: 1rem;
}

#legal a {
  display: inline-block;
  text-decoration: none;
}

img {
  cursor: pointer;
}

.sponsor img {
  width: 12vw;
}

@media only screen and (max-width: 600px) {
  .sponsor img {
    width: 30vw;
  }
}

#links img {
  padding: 0 1rem;
  margin-bottom: 1rem;
  height: 30px;
}
</style>