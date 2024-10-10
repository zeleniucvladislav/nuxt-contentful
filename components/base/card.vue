<script setup lang="ts">
import type { BicycleModel } from '@/queries/bycicles/types'

defineProps<{
  bicycles: Array<BicycleModel>
}>()
</script>

<template>
  <section
    v-for="bicycle in bicycles"
    :key="bicycle.model"
    class="flex flex-col gap-5px bg-white w-full rounded-lg p-20px shadow-md"
  >
    <h2>{{ bicycle.brand }}</h2>
    <h1 class="text-lg font-semibold">
      {{ bicycle.model }} {{ bicycle.manufacturerYear }}
    </h1>
    <p class="font-bold">{{ bicycle.manufacturerPrice }}$</p>
    <img
      :src="bicycle.image.url"
      :alt="bicycle.model"
      :width="bicycle.image.width"
      :height="bicycle.image.height"
      class="pt-30px"
    />
  </section>
</template>
