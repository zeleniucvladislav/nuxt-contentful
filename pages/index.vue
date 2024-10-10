<script setup lang="ts">
import { GET_BICYCLES } from '@/queries/bycicles'
import type { Bicycles } from '@/queries/bycicles/types'
import { ref, onMounted } from 'vue'
import { useQuery } from '@vue/apollo-composable'

const { result, error, loading } = useQuery<Bicycles>(GET_BICYCLES)
const bicycles = ref<Bicycles['bicyclesCollection']>()

onMounted(async () => {
  if (result.value?.bicyclesCollection) {
    bicycles.value = result.value.bicyclesCollection
  }
})
</script>
<template>
  <main class="bg-gray-100">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else-if="bicycles?.items">
      <h1>{{ bicycles.total }} bikes</h1>
      <div class="grid grid-cols-cards gap-30px">
        <BaseCard :bicycles="bicycles.items" />
      </div>
    </div>
  </main>
</template>
