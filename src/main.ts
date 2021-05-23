import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import addAntd from "./ant-design";

const app = createApp(App);
app.use(store);
app.use(router);
addAntd(app);
app.mount("#app");
