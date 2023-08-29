import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Yumu Docs",
  description: "Yumu Docs",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
  head: [
    [
      "link",
      {
        href: "/assets/font/AlibabaPuHuiTi-3-55-Regular.ttf",
        rel: "stylesheet",
      },
    ],
    [
      "link",
      {
        href: "/assets/font/Torus-SemiBold.ttf",
        rel: "stylesheet",
      },
    ],
    
  ]
});
