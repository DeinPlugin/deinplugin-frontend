<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark">

      <b-navbar-brand id="main-item">
        <a href="/">
          <span><img src="/img/icon_shadow.svg"></span>
          <span class="text-white">Dein</span>Plugin
        </a>

        <b-navbar-toggle target="nav-collapse" id="toggle"></b-navbar-toggle>
      </b-navbar-brand>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/storage" class="mx-3">Plugins</b-nav-item>
          <b-nav-item href="/submission" class="mx-3">Einreichen</b-nav-item>
          <b-nav-item href="/community" class="mx-3">Community</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script setup>
</script>

<style scoped>
* a {
  text-decoration: none;
}

#navbar {
  background-color: #0B1317;
  padding: 0.5rem 0;
}

#main-item {
  font-weight: bold;
  color: var(--bs-primary);
  padding-right: 150px;
}

.nav-item {
  list-style-type: none;
}

img {
  height: 50px;
  margin-left: 1rem;
}

@media only screen and (max-width: 600px) {
  img {
    display: inline-block;
  }

  #toggle {
    position: absolute;
    right: 0px;
  }
}
</style>