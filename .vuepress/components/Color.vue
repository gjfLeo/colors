<template>
  <div
    class="grid gap-4"
    style="grid-template-columns: repeat(5, 1fr);"
  >
    <div class="color-cell">{{ name }}</div>
    <div
      class="color-cell font-mono"
      :style="{
        color: colorType === 'text' ? color : defaultContrastColor,
        backgroundColor: colorType === 'text' ? defaultContrastColor : color,
      }"
    >
      {{ color }}
    </div>
    <div class="color-cell font-mono" :style="{ color, backgroundColor: contrastColor }">{{ color }}</div>
    <div class="color-cell font-mono" :style="{ backgroundColor: color, color: contrastColor }">{{ color }}</div>
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from "vue";
import { inject } from "vue";

defineProps<{
  name: string;
  color: string;
}>();

const contrastColor = inject<Ref<string>>("contrastColor");

const colorType = inject<string>("colorType");
const defaultContrastColor = inject<string>("defaultContrastColor");
</script>
