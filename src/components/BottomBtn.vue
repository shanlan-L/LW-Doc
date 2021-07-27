<template>
  <div class="flex flex-wrap justify-around">
    <n-button size="large" type="primary">新建</n-button>
    <n-button size="large">导入</n-button>
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
