<script setup lang="ts">
import type { Bicycle } from '@/queries/bicycle/types'
import { ref } from 'vue'

defineProps<{
  images: Bicycle['imagesCollection']['items']
}>()

const currentSlide = ref(0)

const slideTo = (slide: number) => (currentSlide.value = slide)
</script>

<template>
  <div class="flex flex-col gap-[10px]">
    <Carousel
      id="gallery"
      v-model="currentSlide"
      :items-to-show="1"
      :wrap-around="false"
    >
      <slide v-for="(image, idx) in images" :key="idx">
        <img
          :src="image.url"
          :width="image.width"
          :height="image.height"
          class="w-full h-auto max-h-[600px] object-contain"
        />
      </slide>
      <template #addons>
        <navigation
          class="bg-gray-50 text-primaryColor hover:text-primaryColorHover transition-all duration-500"
        />
      </template>
    </Carousel>
    <Carousel
      id="thumbnails"
      ref="carousel"
      v-model="currentSlide"
      :items-to-show="5"
      :wrap-around="true"
    >
      <slide v-for="(image, idx) in images" :key="idx" class="bg-white">
        <div class="carousel__item h-full" @click="slideTo(idx)">
          <img
            :src="image.url"
            :width="image.width"
            :height="image.height"
            class="h-auto max-h-[100px] w-full object-contain"
          />
        </div>
      </slide>
    </Carousel>
  </div>
</template>
<style scoped>
#thumbnails .carousel__slide {
  @apply p-[10px];
  @apply border-transparent;
  @apply border-[1px];
  @apply transition-all duration-500;
}
#thumbnails .carousel__slide--active {
  @apply border-primaryColor;
}
</style>
