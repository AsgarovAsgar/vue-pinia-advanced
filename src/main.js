import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import { createPinia } from "pinia";
const pinia = createPinia();

// Icons and Styles
import FontAwesomePlugin from "./plugins/FontAwesome";
import "./assets/main.pcss";

// App Wide Components
import AppButton from "./components/AppButton.vue";
import AppCountInput from "./components/AppCountInput.vue";
import AppModalOverlay from "./components/AppModalOverlay.vue";

// Init App
createApp(App)
  .use(router)
  .use(pinia)
  .use(FontAwesomePlugin)
  .component("AppButton", AppButton)
  .component("AppCountInput", AppCountInput)
  .component("AppModalOverlay", AppModalOverlay)
  .mount("#app");
