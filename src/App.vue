<template>
  <n-layout class="h-screen" has-sider>
    <n-layout-sider content-style="padding: 24px;">
      <n-input round placeholder="搜索">
        <template #suffix>
          <n-icon>
            <file-search />
          </n-icon>
        </template>
      </n-input>
      <file-list :fileItemList="fileList"></file-list>
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

import FileList from './components/FileList.vue'

import fileJson from '../public/fileList.json'

export default defineComponent({
  name: 'App',
  components: {
    NSpace,
    NLayout,
    FileSearch,
    FileList
  },
  setup() {
    return {
      fileList: fileJson.data
    }
  }
})
</script>

<style></style>
