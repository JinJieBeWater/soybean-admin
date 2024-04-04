import { createApp } from 'vue';
import './plugins/assets';
import Naive from 'naive-ui';
import UiNaive from '@fast-crud/ui-naive';
import { setupDayjs, setupIconifyOffline, setupLoading, setupNProgress } from './plugins';
import { setupStore } from './store';
import { setupRouter } from './router';
import { setupI18n } from './locales';
import App from './App.vue';

// 引入fast-crud
import '@fast-crud/fast-crud/dist/style.css';
import { setupFastCrud } from './plugins/fast-crud';
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
  app.use(UiNaive);
  // 然后安装FastCrud
  setupFastCrud(app);

  app.mount('#app');
}

setupApp();
