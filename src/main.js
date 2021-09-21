import { createApp } from "vue";
import App from "./App.vue";
import {
  create,
  NAvatar,
  NButton,
  NCard,
  NCarousel,
  NConfigProvider,
  NGrid,
  NGridItem,
  NH1,
  NIcon,
  NInputNumber,
  NLayout,
  NPageHeader,
  NSlider,
  NSpace,
  NText,
  NThing,
} from "naive-ui";

const naive = create({
  components: [
    NButton,
    NSpace,
    NConfigProvider,
    NLayout,
    NGrid,
    NGridItem,
    NH1,
    NText,
    NCard,
    NCarousel,
    NPageHeader,
    NAvatar,
    NSlider,
    NInputNumber,
    NThing,
    NIcon,
  ],
});

import "@/utility/margin.css";
import "@/utility/padding.css";

const app = createApp(App);
app.use(naive);
app.mount("#app");
