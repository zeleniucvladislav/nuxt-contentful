<script setup lang="ts">
import { GET_BICYCLES } from '@/queries/bicycles'
import { ref, onMounted } from 'vue'
import { useQuery } from '@vue/apollo-composable'

const { result, error, loading } = useQuery(GET_BICYCLES)
const bicycles = ref({})

onMounted(async () => {
  if (result.value?.bicyclesCollection) {
    bicycles.value = result.value.bicyclesCollection
  }
})
</script>
<template>
  <div>
    <h1>Bicycles</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error.message }}</div>
    <div v-else>
      <div v-for="bicycle in bicycles.items" :key="bicycle.model">
        <h2>{{ bicycle.brand }} - {{ bicycle.model }}</h2>
        <p>Type: {{ bicycle.type }}</p>
        <p>Manufacturer Price: {{ bicycle.manufacturerPrice }}$</p>
        <img
          :src="bicycle.image.url"
          :alt="bicycle.model"
          :width="bicycle.image.width"
          :height="bicycle.image.height"
        />
      </div>
    </div>
  </div>
</template>
