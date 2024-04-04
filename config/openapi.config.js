import { generateService } from '@umijs/openapi';

const basicConfig = {
  serversPath: './src/api',
  dataFields: ['data']
};
const importList = [
  {
    // 接口目标路径
    schemaPath: 'http://localhost:3003/api-json',
    // 生成文件夹名称
    projectName: 'multi-learner',
    requestLibPath: "import {request} from '@/service/request'"
  }
];
// 接口生成函数
function openapiGenerate() {
  for (const item of importList) {
    generateService({
      ...basicConfig,
      ...item
    });
  }
}
openapiGenerate();
