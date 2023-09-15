<template>
    <ul class="banner_content">
      <li class="banner_text" 
      :key="i" 
      v-for="(heroRight, i) in heroRight">
        <span v-show="heroRight.shown">
          {{ heroRight.text }}
        </span>
      </li>
    </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const heroRight = ref([]);
  
const genRandomVisibility = () => {
  const updatedHeroRight = [];
  for (let i = 0; i < heroRight.value.length; i++) {
      const item = heroRight.value[i];
      const shown = Math.random() >= 0.5;
      updatedHeroRight.push({ ...item, shown });
  }
  heroRight.value = updatedHeroRight;
};
  
/**
 * Creates M array
 */
const mArray = () => {
  for (let i = 0; i < 400; i++) {
      heroRight.value.push({ text: 'M', shown: true });
  }
}

/**
 * Sets component
 */
onMounted(() => {
    mArray();
    genRandomVisibility();
    setInterval(genRandomVisibility, 1000);
});

</script>

<style lang="sass" scoped>
.banner_content
    @apply flex flex-wrap max-w-lg my-6
    .banner_text
       @apply flex justify-center w-5

</style>