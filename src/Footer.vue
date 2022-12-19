<template>
  <footer>
    <b-row>
      <b-col class="sponsor">
        <p>Designs by</p>
        <a href="https://dershayan.de/" target="_blank"><img src="static/dershayan.png"></a>
      </b-col>
      <b-col>
        <div id="links">
          <a :href="$twitterUrl" target="_blank"><img src="static/twitter.svg"></a>
          <a :href="$donationUrl" target="_blank"><img src="static/buymeacoffee.png"></a>
          <a :href="$discordJoinUrl" target="_blank"><img src="static/discord.svg"></a>
        </div>

        <div id="legal">
          <a href="/imprint">Impressum</a><br>
          <a href="/policy">Datenschutzerklärung</a>
        </div>

        <p>Made with Love by DeinPlugin 2022</p>
      </b-col>
      <b-col class="sponsor">
        <p>Server by</p>
        <a href="https://bero-host.de/" target="_blank"><img src="static/berohost.png"></a>
      </b-col>
    </b-row>


    <b-row id="sponsors" class="justify-content-center">
      <b-col md="3">

      </b-col>
      <b-col md="3">

      </b-col>
    </b-row>
  </footer>
</template>

<script setup>
</script>

<style scoped>
footer {
  background-color: #0B1317;
  padding: 2rem 0;
  text-align: center;
}

#legal {
  margin-bottom: 1rem;
}

#legal a {
  display: inline-block;
  text-decoration: none;
}

.sponsor img {
  width: 300px;
}

#links img {
  padding: 0 1rem;
  margin-bottom: 1rem;
  height: 30px;
}
</style>