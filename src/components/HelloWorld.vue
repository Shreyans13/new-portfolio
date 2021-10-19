<template>
  <div class="hello">
    <n-layout embedded content-style="padding: 10px;">
      <n-grid cols="8" responsive="screen">
        <n-grid-item span="2">
          <n-h1
            ><n-text>THEME : {{ msg }}</n-text></n-h1
          >
        </n-grid-item>
        <n-grid-item span="6">
          <n-space>
            <n-button>Default</n-button>
            <n-button dashed type="primary" @click="mixinTest('shreyans')"
              >Mixin</n-button
            >
            <n-button type="info">Info</n-button>
            <n-button type="success">Success</n-button>
            <n-button type="warning">Warning</n-button>
            <n-button type="error">Error</n-button>
            <n-button :color="customColors.neonGreen"> Custom Color </n-button>
          </n-space>
        </n-grid-item>
        <n-grid-item span="2">
          <n-card title="Card"> Card Content </n-card>
        </n-grid-item>
        <n-grid-item span="4" offset="2">
          <n-carousel autoplay>
            <img
              class="carousel-img"
              src="https://s.anw.red/fav/1623979004.jpg!/fw/600/quality/77/ignore-error/true"
            />
            <img
              class="carousel-img"
              src="https://s.anw.red/news/1623372884.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true"
            />
            <img
              class="carousel-img"
              src="https://s.anw.red/news/1623177220.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true"
            />
            <img
              class="carousel-img"
              src="https://s.anw.red/news/1623152423.jpg!/both/800x450/quality/78/progressive/true/ignore-error/true"
            />
          </n-carousel>
        </n-grid-item>

        <n-grid-item span="3" offset="1" class="mt-5">
          <n-space>
            <n-card>
              <n-thing>
                <template #avatar>
                  <n-avatar>
                    <n-icon>
                      <n-image
                        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                      />
                    </n-icon>
                  </n-avatar>
                </template>
                <template #header> Money </template>
                <template #header-extra>
                  <n-button circle size="small">
                    <template #icon>
                      <n-image
                        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                      />
                    </template>
                  </n-button>
                </template>
                <template #description> Description </template>
                Money is any item or verifiable record that is generally
                accepted as payment for goods and services and repayment of
                debts, such as taxes, in a particular country or socio-economic
                context.
                <template #footer> Footer </template>
                <template #action>
                  <n-space>
                    <n-button size="small">
                      <template #icon>
                        <i class="fas fa-money-bill"></i>
                      </template>
                      1$
                    </n-button>
                    <n-button size="small">
                      <template #icon>
                        <i class="fas fa-money-bill"></i>
                      </template>
                      10$
                    </n-button>
                    <n-button size="small">
                      <template #icon>
                        <i class="fas fa-money-bill"></i>
                      </template>
                      100$
                    </n-button>
                  </n-space>
                </template>
              </n-thing>
            </n-card>
          </n-space>
        </n-grid-item>

        <n-grid-item span="3" offset="1" class="pt-5">
          <n-space>
            <n-card>
              <n-thing content-indented>
                <template #avatar>
                  <n-avatar>
                    <n-icon>
                      <n-image
                        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                      />
                    </n-icon>
                  </n-avatar>
                </template>
                <template #header> Money </template>
                <template #header-extra>
                  <n-button circle size="small">
                    <template #icon>
                      <n-image
                        src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"
                      />
                    </template>
                  </n-button>
                </template>
                <template #description> Description </template>
                Money is any item or verifiable record that is generally
                accepted as payment for goods and services and repayment of
                debts, such as taxes, in a particular country or socio-economic
                context.
                <template #footer> Footer </template>
                <template #action>
                  <n-space>
                    <n-button size="small">
                      <template #icon>
                        <i class="fas fa-money-bill"></i>
                      </template>
                      1$
                    </n-button>
                    <n-button size="small">
                      <template #icon>
                        <i class="fas fa-money-bill"></i>
                      </template>
                      10$
                    </n-button>
                    <n-button size="small">
                      <template #icon>
                        <i class="fas fa-money-bill"></i>
                      </template>
                      100$
                    </n-button>
                  </n-space>
                </template>
              </n-thing>
            </n-card>
          </n-space>
        </n-grid-item>
      </n-grid>
    </n-layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import customNavigator from "@/router/routeNavigator";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  mixins: [customNavigator],
  computed: {
    ...mapGetters({
      customColors: "customColors",
    }),
  },
});
</script>

<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
