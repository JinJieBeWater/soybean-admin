import zhCN from './langs/zh-cn';
import enUS from './langs/en-us';

const locales: Record<App.I18n.LangType, App.I18n.Schema> = {
  'zh-CN': zhCN,
  'en-US': enUS
};
// const locales = {
//   en: {
//     label: 'English',
//     ...enUS
//   },
//   'zh-cn': {
//     label: '简体中文',
//     ...zhCN
//   }
// };

export default locales;
