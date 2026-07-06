import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",

  {
    text: "帮助",
    icon: "book",
    link: "help/",
  },

  {
    text: "使用",
    icon: "circle-nodes",
    link: "deploy/",
  },

  {
    text: "字段",
    icon: "key",
    link: "tips/field/",
  },

  {
    text: "技巧",
    icon: "wand-magic-sparkles",
    link: "tips/trick/",
  },

  {
    text: "维基",
    icon: "graduation-cap",
    link: "wiki/",
  },

  {
    text: "osu!",
    icon: "globe",
    link: "https://osu.ppy.sh/home",
  },
]);
