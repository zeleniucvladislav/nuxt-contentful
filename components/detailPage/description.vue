<script setup lang="ts">
import type { Bicycle } from '@/queries/bicycle/types'

defineProps<{
  bicycle: Bicycle
}>()
</script>
<template>
  <div class="flex flex-col gap-[10px] text-[18px] text-justify">
    <span>{{ bicycle.description }}</span>
    <a :href="bicycle.url" target="_blank">
      <button
        class="flex items-center gap-[5px] text p-[10px] bg-primaryColor hover:bg-primaryColorHover text-white transition-all duration-500"
      >
        Buy on {{ bicycle.brand }}
        <Icon name="radix-icons:external-link" />
      </button>
    </a>
  </div>
  <div>
    <div class="flex flex-1 items-center">
      <img
        :src="bicycle.image.url"
        :alt="bicycle.model"
        :width="bicycle.image.width"
        :height="bicycle.image.height"
        class="h-full w-full object-contain aspect-video"
      />
    </div>
  </div>
</template>
