<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import type { OnExposeContext } from '@fast-crud/fast-crud';
import { useFs } from '@fast-crud/fast-crud';
import type { FirstRow } from './crud';
import createCrudOptions from './crud';

// 此处为组件定义
export default defineComponent({
  name: 'FsCrudFirst',
  setup(props: any, ctx: any) {
    // // crud组件的ref
    // const crudRef = ref();
    // // crud 配置的ref
    // const crudBinding = ref();
    // // 暴露的方法
    // const {crudExpose} = useExpose({crudRef, crudBinding});
    // // 你的crud配置
    // const {crudOptions} = createCrudOptions({crudExpose});
    // // 初始化crud配置
    // const {resetCrudOptions , appendCrudBinding} = useCrud({crudExpose, crudOptions});

    //  =======以上为fs的初始化代码=========
    //  =======你可以简写为下面这一行========
    const context: any = { props, ctx }; // 自定义变量, 将会传递给createCrudOptions, 比如直接把props,和ctx直接传过去使用
    function onExpose(_e: OnExposeContext) {} // 将在createOptions之前触发，可以获取到crudExpose,和context
    const { crudRef, crudBinding, crudExpose } = useFs<FirstRow>({ createCrudOptions, onExpose, context });

    // 页面打开后获取列表数据
    onMounted(() => {
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
  <div class="relative min-h-500px flex-col-stretch gap-16px overflow-hidden !p-0">
    <FsPage>
      <FsCrud ref="crudRef" v-bind="crudBinding" />
    </FsPage>
  </div>
</template>
