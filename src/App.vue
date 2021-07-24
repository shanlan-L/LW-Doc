<template>
  <n-space vertical size="large">
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;">海淀桥</n-layout-sider>
      <n-layout>
        <n-layout-header>颐和园路</n-layout-header>
        <n-layout-content content-style="padding: 24px"
          >平山道</n-layout-content
        >
        <n-layout-footer>成府路</n-layout-footer>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<script>
import { NSpace, NLayout } from 'naive-ui'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {
    NSpace,
    NLayout
  }
})
</script>

<style></style>
