<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import type { OnExposeContext } from '@fast-crud/fast-crud';
import { useFs } from '@fast-crud/fast-crud';
import createCrudOptions from './crud';

// 此处为组件定义
export default defineComponent({
  name: 'FsCrudFirst',
  setup(props: any, ctx: any) {
    //  =======以下为fs的初始化代码=========
    const context: any = { props, ctx }; // 自定义变量, 将会传递给createCrudOptions, 比如直接把props,和ctx直接传过去使用
    function onExpose(_e: OnExposeContext) {} // 将在createOptions之前触发，可以获取到crudExpose,和context
    const { crudRef, crudBinding, crudExpose } = useFs<API.Technology>({ createCrudOptions, onExpose, context });

    // 页面打开后获取列表数据
    onMounted(async () => {
      crudExpose.doRefresh();
    });
    return {
      crudBinding,
      crudRef
    };
  }
});
</script>

<template>
  <div class="relative m-2 min-h-500px flex-col-stretch gap-16px overflow-hidden !p-0">
    <FsPage class="filter-drop-shadow-sm">
      <FsCrud ref="crudRef" v-bind="crudBinding" />
    </FsPage>
  </div>
</template>
