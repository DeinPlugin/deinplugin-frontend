<template>
  <b-col xl="3" sm="8" class="hover-card mx-4 my-3" @click="handleClick">
    <b-row>
      <b-col md="4">
        <img :src="imgUrl" class="my-3">
      </b-col>
      <b-col>
        <h1>{{ title }}</h1>
        <p><slot/></p>
      </b-col>
    </b-row>
  </b-col>
</template>

<script setup>

import {event} from "vue-gtag";

const props = defineProps({
  title: String,
  imgUrl: String,
  onClick: Function,
})

function handleClick() {
  props.onClick()

  event('hovercard-click', {
    event_label: props.title
  })
}
</script>

<style scoped>
.hover-card {
  text-align: left;
  background-color: #1E3139;
  padding: 1.7rem 2.7rem;
  transition: 0.5s;
  color: white;
  cursor: pointer;
}

.hover-card:hover {
  scale: 1.05;
}

.hover-card:hover h1 {
  color: var(--bs-primary);
  transition: 0.5s;
}

.hover-card h1 {
  font-size: 20pt;
}

.hover-card img {
  max-width: 100%;
}

@media only screen and (max-width: 600px) {
  .hover-card img {
    max-height: 15vh;
  }
}

</style>