<template>
  <div
    class="home"
    :class="darkTheme ? 'dark-layout-color' : 'light-layout-color'"
  >
    <n-grid :cols="2">
      <n-gi>
        <n-layout
          class="m-5 p-3"
          :class="darkTheme ? 'dark-layout-color' : 'light-layout-color'"
        >
          <n-space
            ><n-button type="success" size="tiny">Frontend-Developer</n-button>
          </n-space>
          <n-h1 class="display-1 my-2 fw-bold">SHREYANS JAIN</n-h1>
          <n-p class="display-6 my-2 font-monospace">I MAKE THINGS HAPPEN</n-p>
          All you need to do to look to those clouds,<br />
          and every day be in a good mood.<br />
          <n-grid :cols="4" class="mt-5">
            <n-gi>
              <n-statistic label="Followers" value="125" />
            </n-gi>
            <n-gi>
              <n-statistic label="Following" value="22" />
            </n-gi>
            <n-gi>
              <n-statistic label="Stars" value="36" />
            </n-gi>
            <n-gi>
              <n-statistic label="Contributions" value="83" />
            </n-gi>
          </n-grid>
        </n-layout>
      </n-gi>
      <n-gi>
        <n-layout class="p-5 black">
          <iframe
            src="https://shreyans13.github.io/html-star/index.html"
            title="W3Schools Free Online Web Tutorials"
            height="500px"
            width="800px"
          ></iframe>
        </n-layout>
      </n-gi>
    </n-grid>

    <n-grid
      :cols="2"
      :class="darkTheme ? 'dark-layout-color-2' : 'light-layout-color-2'"
    >
      <n-gi>
        <n-layout
          class="m-5 p-3"
          :class="darkTheme ? 'dark-layout-color-2' : 'light-layout-color-2'"
        >
          <n-space vertical>
            <n-card class="card-background" size="small">
              <template #header> Github-Profile-Finder</template>

              <template #footer>
                <n-space>
                  <n-tag type="success">Github </n-tag>
                  <n-tag type="warning"> Flutter </n-tag>
                  <n-tag type="error"> Android </n-tag>
                  <n-tag type="info">IOS </n-tag>
                </n-space>

                <n-space class="mt-2">
                  <n-button type="success">
                    <template #icon>
                      <n-icon>
                        <i class="far fa-star"></i>
                      </n-icon>
                    </template>
                    5
                  </n-button>
                  <n-button type="info">
                    <template #icon>
                      <n-icon>
                        <i class="fas fa-code-branch"></i>
                      </n-icon>
                    </template>
                    5
                  </n-button>
                  <n-button text>
                    <template #icon>
                      <n-icon>
                        <i class="fab fa-vuejs"></i>
                      </n-icon>
                    </template>
                    5
                  </n-button>
                </n-space>
              </template>
              A flutter application which uses Github api to share Github
              Profile.
            </n-card>

            <n-card
              class="card-background"
              size="small"
              v-for="i in 2"
              :key="i"
            >
              <template #header>Eats</template>

              <template #footer>
                <n-space>
                  <n-tag type="success"> Yes It Is </n-tag>
                  <n-tag type="warning"> I'm Down </n-tag>
                  <n-tag type="error"> Real Love </n-tag>
                  <n-tag type="info"> I'm Looking Through You </n-tag>
                </n-space>

                <n-space class="mt-2">
                  <n-button type="success">
                    <template #icon>
                      <n-icon>
                        <i class="far fa-star"></i>
                      </n-icon>
                    </template>
                    5
                  </n-button>
                  <n-button type="info">
                    <template #icon>
                      <n-icon>
                        <i class="fas fa-code-branch"></i>
                      </n-icon>
                    </template>
                    5
                  </n-button>
                  <n-button text>
                    <template #icon>
                      <n-icon>
                        <i class="fab fa-vuejs"></i>
                      </n-icon>
                    </template>
                    5
                  </n-button>
                </n-space>
              </template>
              A UI/UX design for a Food delivery application based on a real
              life scenario made with Vue.js and Vuetify.
            </n-card>
          </n-space>
        </n-layout>
      </n-gi>
    </n-grid>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { mapState } from "vuex";
import { defineComponent } from "@vue/runtime-core";
// import Button from "@/components/microComponents/Button.vue";
export default defineComponent({
  name: "Home",
  components: {
    // HelloWorld,
    // Button,
  },
  computed: {
    ...mapState({ darkTheme: "darkTheme" }),
  },
});
</script>

<style scoped>
.black {
  background-color: #28292d;
}
.card-background {
  background-color: #2d2e32;
}
</style>