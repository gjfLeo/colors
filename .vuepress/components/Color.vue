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
      {{ hexColor }}
    </div>
    <div class="color-cell font-mono" :style="{ color, backgroundColor: contrastColor }">{{ hexColor }}</div>
    <div class="color-cell font-mono" :style="{ backgroundColor: color, color: contrastColor }">{{ hexColor }}</div>
    <div class="color-cell">
      <div class="i-carbon:copy cursor-pointer hover:text-[var(--c-brand)]" @click="copy(color) " />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from "vue";
import { computed, inject } from "vue";
import Color from "color";

import { useClipboard } from "@vueuse/core";

const props = defineProps<{
  name: string;
  color: string;
}>();

const contrastColor = inject<Ref<string>>("contrastColor");

const colorType = inject<string>("colorType");
const defaultContrastColor = inject<string>("defaultContrastColor");

const hexColor = computed(() => {
  return Color(props.color).hex();
});

const { copy } = useClipboard();
</script>
