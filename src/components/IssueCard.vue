<template>
  <a :href="`${issue.html_url}`">
    <div class="overflow-hidden h-100 itemcard">
      <b-row>
        <b-col>
          <h1>Issue #{{issue.number}}</h1>
          <p class="description">{{issue.title}}</p>

          <b-row v-if="issue.labels && issue.labels[0]">
            <b-col v-for="label in issue.labels">
              <colored-info :color="`#${label.color}`">{{label.name}}</colored-info>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </a>
</template>

<script setup>
import ColoredInfo from "@/components/ColoredInfo.vue";

defineProps({
  issue: Object
})
</script>

<style scoped>
* {
  text-decoration: none;
  color: #FFF;
}

.itemcard {
  background-color: #1E3139;
  padding: 1rem 2rem;
  transition: 0.3s;
}

.itemcard:hover {
  scale: 1.02;
}

.itemcard:hover h1 {
  color: var(--bs-primary);
  transition: 0.3s;
}

h1 {
  font-size: 23pt;
}

img {
  max-width: 100%;
  max-height: 15vh;
}

.card-text p {
  font-size: 11pt;
}
</style>