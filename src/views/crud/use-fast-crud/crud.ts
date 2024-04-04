import type { CreateCrudOptionsProps, CreateCrudOptionsRet } from '@fast-crud/fast-crud';
import { dict } from '@fast-crud/fast-crud';
import { addRequest, delRequest, editRequest, pageRequest } from './api';

/** 定义行数据模型 如果你嫌定义数据模型麻烦，可以删掉此处，把下面出现的FirstRow用any代替即可 */
export type FirstRow = {
  id?: number;
  name?: string;
  type?: number;
};

/** 定义一个CrudOptions生成器方法 */
// eslint-disable-next-line func-names, @typescript-eslint/no-unused-vars
export default function ({ crudExpose, context }: CreateCrudOptionsProps<FirstRow>): CreateCrudOptionsRet<FirstRow> {
  return {
    crudOptions: {
      container: {
        is: 'fs-layout-card'
      },
      // 在这里自定义你的crudOptions配置
      request: {
        pageRequest,
        addRequest,
        editRequest,
        delRequest
      },
      // 这里定义两个字段
      columns: {
        name: {
          title: '姓名',
          type: 'text', // 字段类型，fs会根据字段类型，生成出一些默认配置
          search: { show: true },
          column: {
            // 表格列的一些配置
            resizable: true,
            width: 200
          }
        },
        type: {
          title: '类型',
          type: 'dict-select',
          dict: dict({
            data: [
              { value: 1, label: '开始' },
              { value: 0, label: '停止' }
            ]
          })
        }
      }
    }
  };
}
