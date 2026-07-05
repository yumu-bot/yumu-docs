import {defineUserConfig} from "vuepress";
import {viteBundler} from "@vuepress/bundler-vite";
import theme from "./theme";

export default defineUserConfig({
    base: "/",

    bundler: viteBundler(),

    lang: "zh-CN", title: "Yumu Docs", description: "Yumu Docs",

    theme,
});
