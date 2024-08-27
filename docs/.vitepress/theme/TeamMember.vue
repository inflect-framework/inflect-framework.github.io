<template>
  <div class="team-member">
    <img :src="image" :alt="name" class="member-image">
    <h2>{{ name }}</h2>
    <p>{{ tagline }}</p>
    <a :href="link" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  name: string
  tagline: string
  image: string
  link: string
}>()
</script>

<style scoped>
.team-member {
  text-align: center;
  margin-bottom: 2rem;
}
.member-image {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
}
</style>