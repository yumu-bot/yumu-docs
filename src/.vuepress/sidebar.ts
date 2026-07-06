import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "帮助",
      icon: "book",
      prefix: "help/",
      link: "help/",
      children: [
          "command",
          {
              icon: "terminal",
              text: "内部指令",
              prefix: "bot/",
              link: "bot/",
              collapsible: true,
              expanded: false,
              children: "structure"
          },
          {
              icon: "gamepad",
              text: "成绩指令",
              prefix: "scores/",
              link: "scores/",
              collapsible: true,
              expanded: false,
              children: "structure"
          },
          {
              icon: "user",
              text: "玩家指令",
              prefix: "player/",
              link: "player/",
              collapsible: true,
              expanded: false,
              children: "structure"
          },
      ],
    },
     {
      text: "使用",
      icon: "circle-nodes",
      prefix: "deploy/",
      link: "deploy/",
      children: "structure",
      // children:["botFunction"]
    },
     {
      text: "小提示",
      icon: "lightbulb",
      prefix: "tips/",
      link: "tips/",
      children: "structure",
      // children:["botFunction"]
    },
    {
      text: "维基",
      icon: "shapes",
      prefix: "wiki/",
      link: "wiki/",
      children: "structure",
      // children:["botFunction"]
    },
    {
      text: "关于",
      icon: "info",
      prefix: "about/",
      link: "about/",
      children: "structure",
    },
    // "slides",
  ],
});
