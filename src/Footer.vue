<template>
  <footer>
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col class="sponsor my-3" md="3" sm="4">
          <p>Designs by</p>
          <a href="https://dershayan.de/" target="_blank"><img src="/img/dershayan.png"></a>
        </b-col>
        <b-col md="5" sm="3" class="my-3">
          <div id="links">
            <a :href="$twitterUrl" target="_blank"><img src="/img/twitter.svg"></a>
            <a :href="$donationUrl" target="_blank"><img src="/img/buymeacoffee.png"></a>
            <a :href="$discordJoinUrl" target="_blank"><img src="/img/discord.svg"></a>
          </div>

          <div id="legal">
            <a href="/imprint">Impressum</a><br>
            <a href="/policy">Datenschutzerklärung</a>
          </div>

          <p>Made with Love by DeinPlugin 2022</p>
        </b-col>
        <b-col class="sponsor my-3" md="3" sm="3">
          <p>Server by</p>
          <a href="https://bero-host.de/" target="_blank"><img src="/img/berohost.png"></a>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script setup>
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