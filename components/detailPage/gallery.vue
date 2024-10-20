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
          class="h-full w-full object-contain"
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
      :items-to-show="3"
      :wrap-around="true"
    >
      <slide v-for="(image, idx) in images" :key="idx">
        <div class="carousel__item h-full" @click="slideTo(idx)">
          <img
            :src="image.url"
            :width="image.width"
            :height="image.height"
            class="h-full w-full"
          />
        </div>
      </slide>
    </Carousel>
  </div>
</template>
<style scoped>
#thumbnails .carousel__slide {
  @apply mx-[5px];
  @apply scale-90;
}
#thumbnails .carousel__slide--active {
  @apply scale-100;
}
</style>
