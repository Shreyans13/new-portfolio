<template>
  <div id="nav">
    <n-config-provider :theme="darkTheme ? theme : ''">
      <Header />
    </n-config-provider>
  </div>
  <n-config-provider :theme="darkTheme ? theme : ''">
    <n-layout embedded>
      <!-- content-style="padding: 10px;" -->
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
    ...mapState({ theme: "theme", darkTheme: "darkTheme" }),
  },
});
</script>


<style>
.dark-layout-color {
  background-color: #2d2f33;
}
.light-layout-color {
}

.dark-layout-color-2 {
  background-color: #25262a;
}
.light-layout-color-2 {
}
.displayed {
  background-color: blueviolet;
}
</style>