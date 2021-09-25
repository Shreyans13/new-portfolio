<template>
  <div>
    <n-config-provider :theme="theme">
      <Header />
      <HelloWorld msg="DARK" />
    </n-config-provider>
    <Header />
    <HelloWorld msg="LIGHT" />
  </div>
</template>

<script lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import { defineComponent, ref } from 'vue';
import { darkTheme } from "naive-ui";
import { BuiltInGlobalTheme } from "naive-ui/lib/themes/interface";


export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Header
  },
  setup () {
    const theme = ref<BuiltInGlobalTheme>(darkTheme)
    return {
      theme
    }
  }
  // darkTheme
});
</script>

