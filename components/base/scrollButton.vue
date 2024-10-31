<script setup lang="ts">
defineProps<{ url: string }>()
</script>
<template>
  <nuxt-link
    :to="url"
    class="fixed bottom right-0 bottom-0 mx-[10vw] my-[10px] bg-primaryColor hover:bg-primaryColorHover transition-all duration-500 text-white p-[10px] rounded-md opacity-80"
  >
    <button class="flex items-center text-[20px]">
      <Icon name="radix-icons:home" />
    </button>
  </nuxt-link>
</template>
