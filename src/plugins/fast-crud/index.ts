import type { VueI18n } from 'vue-i18n';
import type { App } from 'vue';
import FastCrud from '@fast-crud/fast-crud';
import { request } from '@/service/request';
import { i18n } from '@/locales';

/**
 * fast-crud的安装方法 注意：在App.vue中，需要用fs-ui-context组件包裹RouterView，让fs-crud拥有message、notification、dialog的能力
 *
 * @param app
 * @param options
 */
export type FsSetupOpts = {
  i18n?: VueI18n;
};
function install(app: App, _options: FsSetupOpts = {}) {
  app.use(FastCrud, {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    i18n, // i18n配置，可选，默认使用中文，具体用法请看demo里的 src/i18n/index.js 文件
    // 此处配置公共的dictRequest（字典请求）
    async dictRequest({ dict }) {
      return await request(dict.url as string, {}); // 根据dict的url，异步返回一个字典数组
    },
    // 公共crud配置
    commonOptions() {
      return {
        container: {
          is: 'fs-layout-card'
        },
        table: {
          size: 'small',
          pagination: false
        },
        search: {
          options: {
            size: 'medium'
          }
        },
        rowHandle: {
          buttons: {
            view: { text: null, icon: 'EyeOutlined', size: 'small' },
            edit: { text: null, icon: 'EditOutlined', size: 'small' },
            remove: { type: 'error', text: null, icon: 'DeleteOutlined', size: 'small' }
          },
          dropdown: {
            more: { size: 'small' }
          },
          fixed: 'right',
          width: '150px'
        },
        request: {
          // 接口请求配置
          // 你项目后台接口大概率与fast-crud所需要的返回结构不一致，所以需要配置此项
          // 请参考文档http://fast-crud.docmirror.cn/api/crud-options/request.html
          transformQuery: ({ page, form, sort }) => {
            // 转换为你pageRequest所需要的请求参数结构
            return { page, form, sort, currentPage: page?.currentPage, pageSize: page?.pageSize };
          },
          transformRes: ({ res }) => {
            // 将pageRequest的返回数据，转换为fast-crud所需要的格式
            // return {records,currentPage,pageSize,total};
            return { ...res };
          }
        },
        // 你可以在此处配置你的其他crudOptions公共配置
        form: {
          display: 'flex', // 表单布局
          // labelWidth: '120px', // 表单label宽度
          col: { span: 24 },
          wrapper: {
            is: 'n-modal',
            headerStyle: {
              maxWidth: '100vw'
            },
            contentStyle: {
              maxWidth: '100vw'
            },
            footerStyle: {
              maxWidth: '100vw'
            }
          }
        }
      };
    },
    logger: { off: { tableColumns: false } }
  });
}

export default {
  install
};

export function setupFastCrud(app: App<Element>, options: FsSetupOpts = {}) {
  install(app, options);
}
