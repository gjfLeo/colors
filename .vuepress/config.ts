import { defaultTheme, defineUserConfig } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import UnoCSS from "unocss/vite";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Colors",
  description: "收集一些项目中的颜色",
  pagePatterns: [
    "**/*.md",
    "!**/README.md",
  ],
  base: "/colors/",

  bundler: viteBundler({
    viteOptions: {
      plugins: [
        UnoCSS(),
      ],
    },
    vuePluginOptions: {},
  }),

  theme: defaultTheme({
    sidebar: [
      {
        text: "游戏",
        collapsible: true,
        children: [
          "/game/genshin-impact",
        ],
      },
    ],
  }),
});
