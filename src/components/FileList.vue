<template>
  <n-list>
    <n-list-item
      class="shadow-md hover:bg-green-100"
      v-for="item in fileItemList"
      :key="item.id"
    >
      <template #prefix>
        <div class="w-6 h-6">
          <LogoMarkdown />
        </div>
      </template>
      {{ item.title }}
      <template #suffix>
        <n-space :inline="true">
          <n-button size="tiny">编辑</n-button>
          <n-button size="tiny" type="error">删除</n-button>
        </n-space>
      </template>
    </n-list-item>
  </n-list>
</template>
<script>
import { defineComponent } from 'vue'
import { NSpace, NButton, NList, NListItem } from 'naive-ui'
import { LogoMarkdown } from '@vicons/ionicons5'

export default defineComponent({
  name: 'FileList',
  components: {
    NList,
    NListItem,
    NButton,
    NSpace,
    LogoMarkdown
  },
  props: {
    fileItemList: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    console.log(props)
  }
})
</script>
