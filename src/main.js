import {createApp} from "vue";
import {createPinia} from "pinia";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "./assets/tailwind.css";
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);
app.use(createPinia());
app.use(router);

app.mount("#app");

app.use(VueApexCharts);
