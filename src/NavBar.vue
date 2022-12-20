<template>
  <div id="navbar">
    <b-navbar toggleable="lg" type="dark" class="px-5">
      <a href="/"><img src="/img/icon_shadow.svg"></a>
      <b-navbar-brand href="/" id="main-item" class="mx-2"><span class="text-white">Dein</span>Plugin</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

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
}
</style>