import { createApp } from "vue";

import Button from "../Button.vue";

export default function (id: string) {
  createApp(Button).mount(`#${id}`);
}
