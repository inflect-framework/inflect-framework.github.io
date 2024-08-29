<template>
  <div class="info-section">
    <div class="container">
      <div v-if="items" class="info-items">
        <div 
          v-for="(item, index) in items" 
          :key="item.title" 
          class="info-item-wrapper"
        >
          <div 
            class="info-item" 
            :class="{ 'reverse': index % 2 !== 0 }" 
          >
            <div class="text-content">
              <h3 :style="{
                color: 'transparent',
                backgroundImage: '-webkit-linear-gradient(120deg, #3aee9a, #54C4B2)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                display: 'inline-block'
              }">{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
            <div class="image-content">
              <img :src="item.image" :alt="item.title" :style="{ border: index == 1 ? '10px solid #1F2430' : '' }">
            </div>
          </div>
        </div>
      </div>
      <!-- New button div -->
      <div class="case-study-button-container">
        <a href="/introduction" class="case-study-button">Read the Case Study</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    items: Array
  }
}
</script>

<style scoped>
.info-section {
  background-color: var(--vp-c-bg);
  padding: 4rem 0;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 2rem;
}
.info-items {
  margin-top: 4rem;
}
.info-item-wrapper {
  background-color: var(--vp-c-bg-soft);
  margin-bottom: 2rem;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.info-item {
  display: flex;
  align-items: center;
  padding: 4rem;
}
.info-item.reverse {
  flex-direction: row-reverse;
}
.text-content, .image-content {
  flex: 1;
  padding: 1rem 2rem;
}
.text-content h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}
.text-content p {
  font-size: 1.1rem;
  line-height: 1.6;
}
img {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
img:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

/* New styles for the case study button */
.case-study-button-container {
  display: flex;
  justify-content: center;
  margin-top: 7rem;
}
.case-study-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #32c580b1;
  color: #F7F7F7;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;

}
.case-study-button:hover {
  background-color: #45CA8Cda;
  color: #F7F7F7;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
}

@media (max-width: 1024px) {
  .container {
    padding: 0 0rem;
  }
  .info-item {
    padding: 3rem;
  }
}

@media (max-width: 768px) {
  .info-item, .info-item.reverse {
    flex-direction: column;
    padding: 2rem;
  }
  .text-content, .image-content {
    padding: 1rem 0;
  }
}
</style>