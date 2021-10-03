<template>
  <div id="nav">
    <n-config-provider :theme="currentTheme ? theme : ''">
      <Header />
    </n-config-provider>
    <!--
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> -->
  </div>
  <n-config-provider :theme="currentTheme ? theme : ''">
    <n-layout embedded content-style="padding: 10px;">
      <router-view />
    </n-layout>
  </n-config-provider>
</template>
<script lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
import Header from "./components/Header.vue";
import { defineComponent } from "vue";
// import { useStore } from "./store";
import { mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "App",
  components: {
    // HelloWorld,
    Header,
  },
  computed: {
    ...mapGetters({
      topNavigation: "topNavigation",
      customColors: "customColors",
    }),
    ...mapState({ theme: "theme", currentTheme: "currentTheme" }),
  },
  // darkTheme
});
</script>


