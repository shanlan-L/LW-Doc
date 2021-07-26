<template>
  <n-list>
    <n-list-item
      class="shadow-md"
      v-for="(item, index) in fileItemList"
      :key="item.id"
    >
      <template #prefix>
        {{ index + 1 + '、' }}
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

export default defineComponent({
  name: 'FileList',
  components: {
    NList,
    NListItem,
    NButton,
    NSpace
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
