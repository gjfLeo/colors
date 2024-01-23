import { ref } from "vue";
import { defineClientConfig } from "@vuepress/client";

import Color from "./components/Color.vue";
import ColorGroup from "./components/ColorGroup.vue";

import "virtual:uno.css";

export default defineClientConfig({
  enhance({ app }) {
    app.component("Color", Color);
    app.component("ColorGroup", ColorGroup);

    app.provide("contrastColor", ref<string>("#ffffff"));
  },
});
