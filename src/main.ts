import { createApp } from 'vue';
import './plugins/assets';
import Naive from 'naive-ui';
import { FastCrud } from '@fast-crud/fast-crud';
import ui from '@fast-crud/ui-naive';
import { setupDayjs, setupIconifyOffline, setupLoading, setupNProgress } from './plugins';
import { setupStore } from './store';
import { setupRouter } from './router';
import { i18n, setupI18n } from './locales';
import App from './App.vue';

// 引入fast-crud
import '@fast-crud/fast-crud/dist/style.css';
import { request } from './service/request';
async function setupApp() {
  setupLoading();

  setupNProgress();

  setupIconifyOffline();

  setupDayjs();

  const app = createApp(App);

  setupStore(app);

  await setupRouter(app);

  setupI18n(app);

  // 全量安装基础组件
  app.use(Naive);
  // 先安装ui
  app.use(ui);
  // 然后安装FastCrud
  // 然后安装FastCrud
  app.use(FastCrud, {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    i18n, // i18n配置，可选，默认使用中文，具体用法请看demo里的 src/i18n/index.js 文件
    // 此处配置公共的dictRequest（字典请求）
    async dictRequest({ dict }) {
      return await request({ url: dict.url as string }); // 根据dict的url，异步返回一个字典数组
    },
    // 公共crud配置
    commonOptions() {
      return {
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
          }
        },
        request: {
          // 接口请求配置
          // 你项目后台接口大概率与fast-crud所需要的返回结构不一致，所以需要配置此项
          // 请参考文档http://fast-crud.docmirror.cn/api/crud-options/request.html
          transformQuery: ({ page, form, sort }) => {
            // 转换为你pageRequest所需要的请求参数结构
            return { page, form, sort };
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
          labelWidth: '120px' // 表单label宽度
        }
      };
    }
  });

  app.mount('#app');
}

setupApp();
