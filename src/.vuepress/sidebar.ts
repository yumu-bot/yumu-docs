import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "案例",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "帮助",
      icon: "book",
      prefix: "help/",
      children: "structure",
    },
    {
      text: "关于",
      icon: "book",
      prefix: "about/",
      children: "structure",
    },
    "slides",
  ],
});
