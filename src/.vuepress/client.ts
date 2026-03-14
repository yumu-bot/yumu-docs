import { defineClientConfig } from "@vuepress/client";
import Countdown from "./components/Countdown.vue";

export default defineClientConfig({
    enhance: ({ app, router, siteData }) => {
        app.component("Countdown", Countdown);
    },
});