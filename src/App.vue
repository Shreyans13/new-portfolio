<template>
  <div>
    {{ theme }}
    <!-- {{ modfyState }} -->
    <!-- <n-config-provider> -->
    <!-- <Header /> -->
    <!-- <HelloWorld msg="DARK" /> -->
    <!-- </n-config-provider> -->
    <!-- <Header /> -->
    <!-- <HelloWorld msg="LIGHT" /> -->
  </div>
</template>

<script lang="ts">
// import HelloWorld from "./components/HelloWorld.vue";
// import Header from "./components/Header.vue";
import { defineComponent } from "vue";
// import { useStore } from "./store";
import { mapGetters, mapState } from "vuex";

export default defineComponent({
  name: "App",
  components: {
    // HelloWorld,
    // Header,
  },
  computed: {
    ...mapGetters({ topNavigation: "topNavigation" }),
    ...mapState({ theme: "theme" }),
  },
  setup() {
    // const store = useStore();
    // const theme = store.state.theme;

    return {
      // theme,
    };
  },
  // darkTheme
});
</script>

