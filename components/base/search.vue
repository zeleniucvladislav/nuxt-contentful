<script setup lang="ts">
import { ref } from 'vue'

const searchTerm = ref('')
const props = defineProps<{
  handleSearch: (term: string) => void
}>()

const onSubmit = (e: Event) => {
  e.preventDefault()

  console.log(searchTerm.value, 'searchTerm')

  props.handleSearch(searchTerm.value)
}
</script>

<template>
  <form class="w-[min(100%,800px)] h-[50px] mx-auto" @submit="onSubmit">
    <div class="relative">
      <div
        class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"
      >
        <Icon
          name="radix-icons:magnifying-glass"
          class="text-[18px] text-gray-500"
        />
      </div>
      <input
        v-model="searchTerm"
        type="search"
        class="block w-full p-[15px] ps-[40px] text-sm text-gray-900 placeholder-gray-500 border border-gray-300 rounded-full bg-white focus:border-primaryColor outline-none transition-all duration-500"
        placeholder="Search for bikes..."
      />
      <button
        type="submit"
        class="h-full text-[18px] text-white font-medium absolute right-0 top-0 flex items-center bg-primaryColor hover:bg-primaryColorHover rounded-r-full px-[20px] transition-all duration-500"
      >
        Search
      </button>
    </div>
  </form>
</template>
