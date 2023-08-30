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
      text: "帮助",
      icon: "book",
      prefix: "help/",
      link:"help/",
      children: "structure",
    },
     {
      text: "小提示",
      icon: "lightbulb",
      prefix: "tips/",
      link:"tips/",
      children:"structure",
      // children:["botFunction"]
    },
    {
      text: "关于",
      icon: "info",
      prefix: "about/",
      link: "about/",
      children: "structure",
    },
    "slides",
  ],
});
