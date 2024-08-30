<template>
  <div class="team-member">
    <a :href="link" ><img :src="image" :alt="name" class="member-image"></a>
    <h2>{{ name }}</h2>
    <p>{{ tagline }}</p>
    <a :href="link" target="_blank" rel="noopener noreferrer" class="social">LinkedIn</a>
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
  padding: 0.5rem;
}

.social {
  color: #1DBF73;
  text-decoration: 'underline';
}
</style>