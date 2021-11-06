<template>
  <n-layout
    embedded
    content-style="padding: 10px;"
    :class="darkTheme ? 'dark-layout-color' : 'light-layout-color'"
  >
    <n-page-header @back="handleBack">
      <template #avatar>
        <n-avatar src="https://avatars.githubusercontent.com/u/50544190?v=4" />
      </template>
      <template #title>
        <a
          href="https://anyway.fm/"
          style="text-decoration: none; color: inherit"
        >
          Shreyans Jain
        </a>
      </template>

      <template #extra>
        <n-space>
          <Button
            text
            :data="ni.text"
            :icon="ni.icon"
            @click="navigate(ni)"
            v-for="ni in topNavigation"
            :key="ni"
          />
          <n-button @click="changeTheme">Change Theme</n-button>
        </n-space>
      </template>
    </n-page-header>
  </n-layout>
</template>

<script lang="ts">
import { store } from "@/store";
import { mapGetters, mapState } from "vuex";
import { defineComponent } from "@vue/runtime-core";
import customNavigator from "@/router/routeNavigator";
import Button from "./microComponents/Button.vue";

export default defineComponent({
  components: { Button },
  name: "Header",
  mixins: [customNavigator],
  computed: {
    ...mapState({ darkTheme: "darkTheme" }),
    ...mapGetters({ topNavigation: "topNavigation" }),
  },
  methods: {
    changeTheme() {
      store.dispatch("changeTheme");
    },
  },
});
</script>

