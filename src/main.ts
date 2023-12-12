import { createSSRApp } from "vue";
import * as Pinia from "pinia";
import tmui from "./tmui";
import App from "./App.vue";
import { setupStore } from "@/store";

export function createApp() {
  const app = createSSRApp(App);
  // 挂载 pinia
  setupStore(app);
  // pinia 一定要在 tmui 之前挂载
  app.use(tmui, { shareDisable: false } as Tmui.tmuiConfig);
  return {
    app,
    Pinia,
  };
}
