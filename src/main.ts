import "./assets/fonts/Font.css";
import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag-next";

const app = createApp(App);

app.use(VueGtag, {
  property: { id: "	GTM-ML3HJ9GZ" },
});
app.use(router).mount("#app");
