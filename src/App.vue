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
      <file-list class="mt-4" :fileItemList="fileList"></file-list>
    </n-layout-sider>

    <n-layout>
      <n-layout-header class="h-24 bg-indigo-100">
        <btn-group />
      </n-layout-header>
      <n-layout-content
        class="h-auto bg-indigo-100"
        content-style="padding: 24px"
      >
        <n-tabs type="card" :size="large" closable>
          <n-tab-pane name="neir" tab="Oasis">
            <div class="h-content">
              <v-md-editor
                v-model="text"
                mode="editable"
                :tab-size="2"
                height="100%"
              ></v-md-editor>
            </div>
          </n-tab-pane>
          <n-tab-pane name="the beatles" tab="the Beatles">Hey Jude</n-tab-pane>
          <n-tab-pane name="jay chou" tab="周杰伦">七里香</n-tab-pane>
        </n-tabs>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script>
import { NSpace, NLayout, NTabs, NTabPane } from 'naive-ui'
import { defineComponent, ref } from 'vue'
import { Search as FileSearch } from '@vicons/ionicons5'

import FileList from './components/FileList.vue'
import BtnGroup from './components/BtnGroup.vue'

import fileJson from '/public/fileList.json'

export default defineComponent({
  name: 'App',
  components: {
    NSpace,
    NLayout,
    NTabs,
    NTabPane,
    FileSearch,
    FileList,
    BtnGroup
  },
  setup() {
    const text = ref('')

    return {
      fileList: fileJson.data,
      text
    }
  }
})
</script>

<style></style>
