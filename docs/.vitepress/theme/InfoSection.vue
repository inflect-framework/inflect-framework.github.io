<template>
  <div class="info-section">
    <div class="container">
      <div v-if="items" class="info-items">
        <div
          v-for="(item, index) in items"
          :key="item.title"
          class="info-item-wrapper"
        >
          <div v-if="item.image">
            <div class="info-item" :class="{ reverse: index % 2 !== 0 }">
              <div class="text-content">
                <h3
                  :style="{
                    color: 'transparent',
                    backgroundImage:
                      '-webkit-linear-gradient(120deg, #3aee9a, #54C4B2)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    display: 'inline-block',
                  }"
                >
                  {{ item.title }}
                </h3>
                <p>{{ item.description }}</p>
              </div>
              <div class="image-content">
                <img
                  :src="item.image"
                  :alt="item.title"
                  :style="{ border: index == 1 ? '10px solid #1F2430' : '' }"
                />
              </div>
            </div>
          </div>
          <div v-if="!item.image && item.title === 'Who is Inflect For?'">
            <div
              class="info-item who-is-inflect-for"
              :class="{ reverse: index % 2 !== 0 }"
            >
              <div class="text-content">
                <h3
                  :style="{
                    color: 'transparent',
                    backgroundImage:
                      '-webkit-linear-gradient(120deg, #3aee9a, #54C4B2)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    display: 'inline-block',
                  }"
                  class="who-is-inflect-for-title"
                >
                  {{ item.title }}
                </h3>
                <ul>
                  <li
                    v-for="(tab, tabIndex) in tabs"
                    :key="tabIndex"
                    @mouseenter="activeTab = tabIndex"
                    :class="{ active: activeTab === tabIndex }"
                  >
                    {{ tab.title }}
                  </li>
                </ul>
              </div>
              <div class="image-content text-no-image">
                <div class="content-container">
                  <transition name="slide-fade" mode="out-in">
                    <div :key="activeTab" class="tab-content">
                      <p
                        v-for="(paragraph, pIndex) in tabs[activeTab].content"
                        :key="pIndex"
                      >
                        {{ paragraph }}
                      </p>
                    </div>
                  </transition>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="!item.image && item.title !== 'Who is Inflect For?'"
            class="comparison-section"
          >
            <Comparison />
          </div>
        </div>
      </div>
      <div class="case-study-button-container">
        <a href="/background#introduction" class="case-study-button"
          >Read the Case Study</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    items: Array,
  },
  data() {
    return {
      activeTab: 0,
      tabs: [
        {
          title: "Large Microservices Architectures",
          content: [
            "Inflect enables large microservice systems with complex stream processing needs to offload stateless transformation logic into its own lightweight, easy-to-manage system.",
            "Perfect for organizations with multiple teams working on interconnected services, providing a centralized transformation layer.",
          ],
        },
        {
          title: "Small Microservices Architectures",
          content: [
            "Ideal for growing systems that need a flexible and scalable approach to data transformation.",
            "Provides a foundation for future growth while maintaining simplicity and ease of management.",
          ],
        },
        {
          title: "Rapid Prototyping",
          content: [
            "The low barrier to entry allows engineers from any microservice team to easily access, manage, and modify these transformations with minimal knowledge.",
            "Breaking down silos and boosting efficiency through quick iteration and deployment.",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.info-section {
  background-color: var(--vp-c-bg);
  padding: 4rem 0;
}
.container {
  max-width: 1280px;
  margin: 0 auto;
}

.info-item-wrapper {
  background-color: var(--vp-c-bg-soft);
  margin-bottom: 2rem;
  border-radius: 12px;
  overflow: hidden;
}
.info-item {
  display: flex;
  align-items: center;
  padding: 4rem;
}
.info-item.reverse {
  flex-direction: row-reverse;
}
.text-content,
.image-content {
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
  transform: scale(1.01);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

li {
  padding: 15px;
  list-style-type: none;
  font-weight: bold;
  font-size: 13pt;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
}

li.active,
li:hover {
  background-color: rgba(50, 197, 128, 0.1);
  color: #3aee9a;
}

.content-container {
  min-height: 250px;
}

.tab-content {
  position: absolute;
  width: 100%;
}

.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from {
  transform: translateY(10px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}

.case-study-button-container {
  display: flex;
  justify-content: center;
  margin-top: 7rem;
}
.case-study-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #32c580b1;
  color: #f7f7f7;
  text-decoration: none;
  border-radius: 30px;
  font-weight: bold;
  transition: transform 0.3s ease, box-shadow 0.3s ease,
    background-color 0.3s ease;
}
.case-study-button:hover {
  background-color: #45ca8cda;
  color: #f7f7f7;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.info-item-wrapper:has(.who-is-inflect-for) {
  background-color: color-mix(in srgb, var(--vp-c-bg-soft) 0%, transparent);
  margin: auto;
}

.text-no-image {
  background-color: color-mix(in srgb, var(--vp-c-bg-soft) 95%, transparent);
  border-radius: 12px;
  padding: 30px 30px;
  margin: auto;
}

@media (min-width: 768px) {
  .text-no-image {
    padding: 50px 70px;
    min-width: 60%;
    margin-top: 30px;
    margin-right: -30px;
  }

  .info-item-wrapper:has(.comparison-section) {
    margin: 50px 30px 0 30px;
  }

  .content-container {
    min-height: 250px;
    position: relative;
  }

  .who-is-inflect-for-title {
    margin-left: -30px;
  }

  .info-section {
    padding: 4rem 20px;
  }
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
  .info-item,
  .info-item.reverse {
    flex-direction: column;
    padding: 2rem;
  }
  .text-content,
  .image-content {
    padding: 1rem 0;
  }

  .content-container p {
    margin-left: -135px;
    width: 80%;
  }

  .info-item-wrapper:has(.who-is-inflect-for) {
    padding-bottom: 50px;
  }
}

.who-is-inflect-for-title {
  font-size: 31px !important;
}
</style>
