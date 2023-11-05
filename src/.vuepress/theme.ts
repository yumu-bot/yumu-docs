import { hopeTheme } from "vuepress-theme-hope";
import { componentsPlugin } from "vuepress-plugin-components";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://vuepress-theme-hope-docs-demo.netlify.app",

  iconAssets: "fontawesome-with-brands",

  logo: "/favicon.ico",

  repo: "http://git.365246692.xyz/bot/yumu-docs",
  
  repoLabel: "GitLab",
  
  repoDisplay: true,

  editLinkPattern: ":repo/-/blob/:branch/:path",
  
  docsRepo: "http://git.365246692.xyz/bot/yumu-docs",

  docsDir: "src",
  // navbar
  navbar,

  // sidebar
  sidebar,

  footer: "Yumu Docs",

  displayFooter: true,

  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
    },
  },

  // page meta
  metaLocales: {
    editLink: "在 Git 上编辑此页",
  },

  plugins: {
    // You should generate and use your own comment service
    comment: {
      provider: "Giscus",
      repo: "SIyuyuko/yumu-docs",
      repoId: "R_kgDOKOF_ag",
      category: "Announcements",
      categoryId: "DIC_kwDOKOF_as4CZA6x",
    },

    // md增加插件配置项，开启额外配置项需要手动安装对应依赖
    // beta244增加feature:components: add optional pkg check
    // 手动安装(包管理器以npm为例): npm i 依赖名
    // 依赖名务必准确，否则主题效果不生效
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      // katex: true,
      mark: true,
      // mermaid: true,
      card: true,
      playground: {
        presets: ["ts", "vue"],
      },
      revealJs: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
    
    components: {
      "components": [
        "AudioPlayer"
      ]
    }
    // uncomment these if you want a pwa
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
  
});
