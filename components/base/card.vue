<script setup lang="ts">
import type { Bicycle } from '@/queries/bycicles/types'

defineProps<{
  bicycle: Bicycle
}>()
</script>

<template>
  <section class="group [perspective:1000px]">
    <div
      class="relative bg-white w-full min-h-[400px] rounded-lg shadow-md transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
    >
      <div
        class="card-front flex flex-col gap-[5px] absolute h-full w-full p-[20px] [backface-visibility:hidden] cursor-pointer"
      >
        <h2>{{ bicycle.brand }}</h2>
        <h1
          class="text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {{ bicycle.model }} {{ bicycle.manufacturerYear }}
        </h1>
        <p class="font-bold">{{ bicycle.manufacturerPrice }}$</p>
        <div class="flex flex-1 items-center pt-[30px] h-[200px]">
          <img
            :src="bicycle.image.url"
            :alt="bicycle.model"
            :width="bicycle.image.width"
            :height="bicycle.image.height"
            class="h-full w-full object-contain aspect-video"
          />
        </div>
      </div>
      <div
        class="card-back flex flex-col justify-center gap-[10px] absolute h-full w-full p-[20px] [backface-visibility:hidden] cursor-pointer [transform:rotateY(180deg)]"
      >
        <p
          class="text-lg font-semibold whitespace-nowrap overflow-hidden text-ellipsis text-center"
        >
          {{ bicycle.model }}
        </p>
        <p class="whitespace-nowrap overflow-hidden text-ellipsis">
          {{ bicycle.description }}
        </p>
        <button
          class="self-center w-[100px] p-[10px] bg-primaryColor hover:bg-primaryColorHover text-white transition-all duration-500"
        >
          Read more
        </button>
      </div>
    </div>
  </section>
</template>
