<template>
  <div class="flex flex-wrap justify-end">
    <n-button class="mr-4 mt-4" size="large" type="primary">新建</n-button>
    <n-button class="mt-4" size="large">导入</n-button>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { NButton } from 'naive-ui'
export default defineComponent({
  name: 'BottomBtn',
  components: {
    NButton
  },
  setup() {}
})
</script>