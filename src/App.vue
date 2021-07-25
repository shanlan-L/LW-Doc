<template>
  <n-layout class="h-screen" has-sider>
    <n-layout-sider class="bg-green-100" content-style="padding: 24px;">
      <n-input round placeholder="搜索">
        <template #suffix>
          <n-icon>
            <file-search />
          </n-icon>
        </template>
      </n-input>
    </n-layout-sider>
    <n-layout>
      <n-layout-header class="h-1/6 bg-blue-100">标题</n-layout-header>
      <n-layout-content
        class="h-5/6 bg-purple-100"
        content-style="padding: 24px"
        >内容</n-layout-content
      >
    </n-layout>
  </n-layout>
</template>

<script>
import { NSpace, NLayout } from 'naive-ui'
import { defineComponent } from 'vue'
import { Search as FileSearch } from '@vicons/ionicons5'

export default defineComponent({
  name: 'App',
  components: {
    NSpace,
    NLayout,
    FileSearch
  }
})
</script>

<style></style>
