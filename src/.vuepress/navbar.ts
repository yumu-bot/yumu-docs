import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  "/help/",
  {
    text: "小提示",
    icon: "lightbulb",
    prefix: "/tips/",
    children: [
      {
        text: "Bot 功能",
        icon: "icons",
        link: "botFunction/",
      },
      {
        text: "osu! 冷知识",
        icon: "compass-drafting",
        link: "osuTrivia/",
      },
    ],
  },
  {
    text: "Bot 主站",
    icon: "network-wired",
    link: "https://theme-hope.vuejs.press/zh/",
  },
]);
