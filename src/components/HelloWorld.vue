<template>
  <div class="hello">
    <n-layout embedded content-style="padding: 10px;">
      <n-grid cols="7" responsive="screen">
        <n-grid-item span="2">
          <n-h1
            ><n-text>THEME : {{ msg }}</n-text></n-h1
          >
        </n-grid-item>
        <n-grid-item span="5">
          <n-space>
            <n-button>Default</n-button>
            <n-button dashed type="primary">Primary</n-button>
            <n-button type="info">Info</n-button>
            <n-button type="success">Success</n-button>
            <n-button type="warning">Warning</n-button>
            <n-button type="error">Error</n-button>
          </n-space>
        </n-grid-item>
        <n-grid-item span="2">
          <n-card title="Card"> Card Content </n-card>
        </n-grid-item>
        <n-grid-item span="4" offset="1">
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

        <n-grid-item span="2" offset="1">
          <n-space>
            <n-card>
              <n-thing>
                <template #avatar>
                  <n-avatar>
                    <n-icon>
                      <cash-icon />
                    </n-icon>
                  </n-avatar>
                </template>
                <template #header> Money </template>
                <template #header-extra>
                  <n-button circle size="small">
                    <template #icon>
                      <cash-icon />
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
                        <n-icon>
                          <cash-icon />
                        </n-icon>
                      </template>
                      1$
                    </n-button>
                    <n-button size="small">
                      <template #icon>
                        <n-icon>
                          <cash-icon />
                        </n-icon>
                      </template>
                      10$
                    </n-button>
                    <n-button size="small">
                      <template #icon>
                        <n-icon>
                          <cash-icon />
                        </n-icon>
                      </template>
                      100$
                    </n-button>
                  </n-space>
                </template>
              </n-thing>
            </n-card>
          </n-space>
        </n-grid-item>

        <n-grid-item span="2" offset="1">
          <n-space>
            <n-card>
              <n-thing content-indented>
                <template #avatar>
                  <n-avatar>
                    <n-icon>
                      <cash-icon />
                    </n-icon>
                  </n-avatar>
                </template>
                <template #header> Money </template>
                <template #header-extra>
                  <n-button circle size="small">
                    <template #icon>
                      <cash-icon />
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
                        <n-icon>
                          <cash-icon />
                        </n-icon>
                      </template>
                      1$
                    </n-button>
                    <n-button size="small">
                      <template #icon>
                        <n-icon>
                          <cash-icon />
                        </n-icon>
                      </template>
                      10$
                    </n-button>
                    <n-button size="small">
                      <template #icon>
                        <n-icon>
                          <cash-icon />
                        </n-icon>
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

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  setup() {
    return {
      value: ref(50),
    };
  },
  name: "HelloWorld",
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>
