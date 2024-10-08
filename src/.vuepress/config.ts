import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme";

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
    
  ],
  plugins:[
    searchProPlugin({
      // 索引全部内容
      indexContent: true,
    })
  ]
});
