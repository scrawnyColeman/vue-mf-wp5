import { createApp } from "vue";

import App from "../App.vue";

export default function (id: string) {
  createApp(App).mount(`#${id}`);
}
