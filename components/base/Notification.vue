<script setup lang="ts">
defineProps<{ error: string }>()
</script>
<template>
  <div class="flex items-center justify-center">
    <span class="text-[20px]">{{ error }}</span>
  </div>
</template>
