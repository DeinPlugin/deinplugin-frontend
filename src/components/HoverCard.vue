<template>
  <b-col xl="3" sm="8" class="hover-card mx-4 my-3" @click="() => console.log('HEY')">
    <b-row>
      <b-col md="4">
        <img :src="imgUrl">
      </b-col>
      <b-col>
        <h1>{{ title }}</h1>
        <p><slot/></p>
      </b-col>
    </b-row>
  </b-col>
</template>

<script setup>

defineProps({
  title: String,
  imgUrl: String,
  onClick: Function,
})
</script>

<style scoped>
.hover-card {
  text-align: left;
  background-color: #1E3139;
  padding: 1.7rem 2.7rem;
  transition: 0.5s;
}

.hover-card:hover {
  scale: 1.05;
}

.hover-card h1 {
  font-size: 20pt;
}

.hover-card img {
  width: 85%;
  max-height: 20vh;
}
</style>