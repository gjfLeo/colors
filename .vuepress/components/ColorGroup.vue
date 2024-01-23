<template>
  <div class="flex flex-col p-4">
    <div class="flex items-center justify-end gap-2 pb-2">
      <span>对比色</span>
      <div
        v-for="color in presetColors"
        :key="color"
        class="box-border h-6 w-6 cursor-pointer border-1 border-light-8 rounded-full border-solid transition"
        :style="{
          backgroundColor: color,
          borderColor: color === contrastColor ? 'transparent' : undefined,
          boxShadow: color === contrastColor ? '0px 0px 0px 2px var(--c-brand)' : 'none',
        }"
        @click="contrastColor = color"
      />
      <!-- <ColorPicker v-model:pure-color="contrastColor" shape="circle" use-type="pure" /> -->
    </div>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import type { Ref } from "vue";
import { inject, provide } from "vue";

const props = withDefaults(
  defineProps<{
    type?: "text" | "background";
    defaultContrastColor?: string;
  }>(),
  {
    type: "text",
    defaultContrastColor: "#FFFFFF",
  },
);

provide("colorType", props.type);
provide("defaultContrastColor", props.defaultContrastColor);

const contrastColor = inject<Ref<string>>("contrastColor");

const presetColors = ["#ffffff", "#808080", "#000000"];
</script>
