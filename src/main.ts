import { createApp,h } from "vue";
import App from "./App.vue";
import {store} from "./store/index";
import "@/utility/margin.css";
import "@/utility/padding.css";
import router from './router';
// import customNavigator from "@/router/routeNavigator";

// import myMixin from '@/router/navigator'
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
  NImage,
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
    NImage
  ],
});


const app = createApp({
  render: () => h(App),
  // mixins: [customNavigator]
})
// app.use(routeNavigator);
app.use(router);
app.use(naive);
app.use(store);
app.mount("#app");
