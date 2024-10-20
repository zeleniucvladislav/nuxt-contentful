<script setup lang="ts">
import type { Bicycle } from '@/queries/bicycle/types'

defineProps<{ bicycle: Bicycle }>()
</script>

<template>
  <div class="flex flex-col">
    <p class="text-[20px] font-semibold">
      {{ bicycle.manufacturerYear }} {{ bicycle.brand }}
    </p>
    <p class="text-[35px] font-bold text-primaryColorHover">
      {{ bicycle.model }}
    </p>
    <div class="flex flex-col gap-[5px]">
      <span class="font-semibold text-[18px]">Manufacturer Price</span>
      <span class="font-bold text-[25px]"
        >{{ bicycle.manufacturerPrice }} &euro;</span
      >
    </div>
    <table>
      <tbody class="flex flex-col gap-[5px]">
        <tr class="flex gap-[5px]">
          <th class="font-bold">Type</th>
          <th class="font-normal">{{ bicycle.type }}</th>
        </tr>
        <tr class="flex gap-[5px]">
          <th class="font-bold">Frame</th>
          <th class="font-normal">{{ bicycle.frame }}</th>
        </tr>
        <tr class="flex gap-[5px]">
          <th class="font-bold">Weight</th>
          <th class="font-normal">{{ bicycle.weight }} kg</th>
        </tr>
        <tr class="flex gap-[5px]">
          <th class="font-bold">Frame</th>
          <th class="font-normal">{{ bicycle.frame }}</th>
        </tr>
        <tr class="flex gap-[5px]">
          <th class="font-bold">Fork</th>
          <th class="font-normal">{{ bicycle.fork }}</th>
        </tr>
        <tr class="flex gap-[5px]">
          <th class="font-bold">Wheels</th>
          <th class="font-normal">{{ bicycle.wheels }}</th>
        </tr>
        <tr class="flex gap-[5px]">
          <th class="font-bold">Drivetrain</th>
          <th class="font-normal">{{ bicycle.drivetrain }}</th>
        </tr>
        <tr class="flex gap-[5px]">
          <th class="font-bold">Groupset</th>
          <th class="font-normal">{{ bicycle.groupset }}</th>
        </tr>
        <tr class="flex gap-[5px]">
          <th class="font-bold">Brakes</th>
          <th class="font-normal">{{ bicycle.brakes }}</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>
