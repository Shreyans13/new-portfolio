<template>
  <n-button :text="text">
    <template #icon>
      <n-icon class="mr-3">
        <i :class="icon"></i>
      </n-icon>
    </template>
    {{ data }}
  </n-button>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "Button",
  props: {
    data: {
      required: true,
      type: String,
    },
    icon: {
      type: String,
    },
    text: {
      type: Boolean,
    },
  },
});
</script>
