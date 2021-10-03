<template>
  <div id="nav">
    <n-config-provider :theme="currentTheme ? theme : ''">
      <Header />
    </n-config-provider>
  </div>
  <n-config-provider :theme="currentTheme ? theme : ''">
    <n-layout embedded content-style="padding: 10px;">
      <router-view />
    </n-layout>
  </n-config-provider>
</template>
<script lang="ts">
import Header from "./components/Header.vue";
import { defineComponent } from "vue";
import { mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "App",
  components: {
    Header,
  },
  computed: {
    ...mapGetters({
      topNavigation: "topNavigation",
      customColors: "customColors",
    }),
    ...mapState({ theme: "theme", currentTheme: "currentTheme" }),
  },
});
</script>


