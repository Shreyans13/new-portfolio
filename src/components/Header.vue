<template>
  <n-layout embedded content-style="padding: 10px;">
    <n-page-header
      :subtitle="currentTheme ? 'DARK' : 'LIGHT'"
      @back="handleBack"
    >
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
          <!-- <n-button text>
            <template #icon>
              <n-icon class="mr-3">
                <i class="fab fa-google"></i>
              </n-icon>
            </template>
            Home
          </n-button>
          -->
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
import { NavigationItem } from "@/types/state";
import Button from "./microComponents/Button.vue";
import router from "@/router";

export default defineComponent({
  components: { Button },
  name: "Header",
  computed: {
    ...mapState({ currentTheme: "currentTheme" }),
    ...mapGetters({ topNavigation: "topNavigation" }),
  },
  methods: {
    changeTheme() {
      store.dispatch("changeTheme");
    },
    handleBack() {
      console.log("backPressed in Header");
    },
    navigate(link: NavigationItem) {
      router.push({ path: link.to });
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
