import {
  defineConfig,
  presetAttributify,
  presetUno,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
  ],
  shortcuts: [
    ["color-cell", "p-block-2 flex items-center justify-center transition"],
  ],
});
