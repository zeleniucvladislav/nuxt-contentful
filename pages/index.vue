<script setup lang="ts">
import { ref, watch, computed, onMounted } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { GET_BICYCLES } from '@/queries/bycicles'
import type { Bicycle, BicyclesQuery } from '@/queries/bycicles/types'
import type { Pagination, PaginationGql } from '@/types/pagination'

const pagination = ref<Pagination>({ skip: 0, page: 1, limit: 20, total: 0 })
const bicycles = ref<Bicycle[]>([])

const { result, error, loading, refetch } = useQuery<
  BicyclesQuery,
  PaginationGql
>(GET_BICYCLES, {
  limit: pagination.value.limit,
  skip: pagination.value.skip
})

onMounted(() => {
  if (result.value?.bicyclesCollection) {
    updateBicycles(result.value.bicyclesCollection)
  }
})

const updateBicycles = (collection: BicyclesQuery['bicyclesCollection']) => {
  const { items, limit, skip, total } = collection
  bicycles.value = items || []
  pagination.value = { limit, skip, total, page: pagination.value.page }
}

watch(result, (newValue) => {
  if (newValue?.bicyclesCollection) {
    updateBicycles(newValue.bicyclesCollection)
  }
})

const handlePageChange = (page: number) => {
  pagination.value.page = page
  pagination.value.skip = (pagination.value.page - 1) * pagination.value.limit

  refetch({
    limit: pagination.value.limit,
    skip: pagination.value.skip
  })
}

const handleSearch = (search: string) => {
  pagination.value = { ...pagination.value, page: 1, skip: 0 }

  refetch({
    limit: pagination.value.limit,
    skip: pagination.value.skip,
    search
  })
}

const bikeLabel = computed(() =>
  pagination.value.total === 1 ? 'bike' : 'bikes'
)
</script>

<template>
  <main class="flex flex-col gap-[5vh]">
    <HomepageSearch :handle-search="handleSearch" />
    <template v-if="loading"><BaseLoading /></template>
    <template v-else-if="error">
      <BaseNotification error="Something went wrong while getting bicycles" />
    </template>
    <template v-else-if="bicycles.length">
      <h1>{{ pagination.total }} {{ bikeLabel }}</h1>
      <div class="grid grid-cols-cards gap-[30px]">
        <HomepageCard
          v-for="bicycle in bicycles"
          :key="bicycle.model"
          :bicycle="bicycle"
        />
      </div>
    </template>
    <template v-else-if="bicycles.length === 0">
      <BaseNotification error="Unfortunately there are no bikes :C" />
    </template>
    <template v-if="pagination.total > pagination.limit">
      <HomepagePagination
        v-if="bicycles.length"
        :page="pagination.page"
        :total="pagination.total"
        :items-per-page="pagination.limit"
        @update:page="handlePageChange"
      />
    </template>
  </main>
</template>
