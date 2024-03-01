import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    // 开发时若需要使用demo，请临时将配置项注释解开，提交代码时把注释加回来
    // {
    //   text: "案例",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "帮助",
      icon: "book",
      prefix: "help/",
      link:"help/",
      children: "structure",
    },
     {
      text: "部署",
      icon: "circle-nodes",
      prefix: "deploy/",
      link:"deploy/",
      children:"structure",
      // children:["botFunction"]
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
      text: "维基",
      icon: "shapes",
      prefix: "wiki/",
      link:"wiki/",
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
    // "slides",
  ],
});
