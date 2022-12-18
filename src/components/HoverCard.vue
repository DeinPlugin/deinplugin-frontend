<template>

  <b-col xl="3" sm="12" class="hover-card mx-4" @click="() => console.log('HEY')">
    <h1>{{ title }}</h1>
    <b-img :src="imgUrl"></b-img>
    <p>
      <slot></slot>
    </p>
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
  text-align: center;
  background-color: #2c3e50;
  padding: 0.5rem;
  transition: 0.5s;
}

.hover-card:hover {
  background-color: #181818;
  scale: 1.05;
}

.hover-card h1 {
  font-size: 20pt;
}

.hover-card img {
  height: 15vh;
  margin: 1rem 0;
}

.hover-card p {

}
</style>