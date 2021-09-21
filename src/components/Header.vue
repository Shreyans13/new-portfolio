<template>
  <n-layout embedded content-style="padding: 10px;">
    <n-page-header subtitle="A podcast to improve designs" @back="handleBack">
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
          <n-button>Refresh</n-button>
        </n-space>
      </template>
    </n-page-header>
  </n-layout>
</template>

<script>
export default {
  name: "Header",
  //   props: {
  //     msg: String,
  //   },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
