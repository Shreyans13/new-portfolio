<template>
  <div>
    <n-config-provider :theme="darkTheme">
      <Header />
      <HelloWorld msg="DARK" />
    </n-config-provider>
    <Header />
    <HelloWorld msg="LIGHT" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";

import { defineComponent } from "vue";
import { darkTheme } from "naive-ui";

export default defineComponent({
  setup() {
    return {
      darkTheme,
    };
  },
  name: "App",
  components: {
    HelloWorld,
    Header,
  },
});
</script>
