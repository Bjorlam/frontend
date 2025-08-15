import "@/assets/colors.css";
import "@/assets/base.css";
import "@/assets/tailwind.css";
import "@/assets/fonts.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./app/App.vue";
import router from "./app/router/index.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
