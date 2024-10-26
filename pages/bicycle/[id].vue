<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import { GET_BICYCLE } from '@/queries/bicycle'
import type { Bicycle, BicyclesQuery } from '@/queries/bicycle/types'

const route = useRoute()
const bicycle = ref<Bicycle>()

const { result, error, loading, refetch } = useQuery<
  BicyclesQuery,
  { id: string }
>(GET_BICYCLE, {
  id: route.params.id as string
})

onMounted(() => {
  if (result.value?.bicyclesCollection) {
    getBicycle(result.value.bicyclesCollection)
  }
})

watch(result, (newValue) => {
  if (newValue?.bicyclesCollection) {
    getBicycle(newValue.bicyclesCollection)
  }
})

onBeforeRouteUpdate(async (route) => {
  refetch({ id: route.params.id as string })
})

const getBicycle = (collection: BicyclesQuery['bicyclesCollection']) => {
  const { items } = collection
  bicycle.value = items[0]
}
</script>
<template>
  <div v-if="loading">Loading...</div>
  <div v-else-if="error">Error: {{ error.message }}</div>
  <div v-else-if="bicycle?.model">
    <section
      class="grid desktop:grid-cols-detailed mobile:grid-cols-1 gap-[50px]"
    >
      <DetailPageGallery :images="bicycle.imagesCollection.items" />
      <DetailPageCharacteristics :bicycle="bicycle" />
      <DetailPageDescription :bicycle="bicycle" />
      <BaseScrollButton url="/" />
    </section>
  </div>
</template>
