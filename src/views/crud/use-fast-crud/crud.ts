import type { CreateCrudOptionsProps, CreateCrudOptionsRet } from '@fast-crud/fast-crud';
import { dict } from '@fast-crud/fast-crud';
import { addRequest, delRequest, editRequest, pageRequest } from './api';

/** 定义行数据模型 如果你嫌定义数据模型麻烦，可以删掉此处，把下面出现的FirstRow用any代替即可 */
export type FirstRow = {
  id?: number;
  name?: string;
  description?: string;
  learners?: number;
  parents?: [];
  children?: [];
  learningexperience?: [];
  createAt?: Date;
  updateAt?: Date;
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
          title: '技术',
          type: 'text', // 字段类型，fs会根据字段类型，生成出一些默认配置
          search: { show: true },
          column: {
            // 表格列的一些配置
            resizable: true,
            width: 150,
            fixed: 'left'
          }
        },
        description: {
          title: '描述',
          type: 'text', // 字段类型，fs会根据字段类型，生成出一些默认配置
          search: { show: true },
          column: {
            // 表格列的一些配置
            resizable: true
          }
        },
        learners: {
          title: '学习人数',
          type: 'number',
          search: { show: true },
          column: {
            // 表格列的一些配置
            resizable: true
          }
        },
        parents: {
          title: '父级',
          type: 'dict-select',
          search: { show: true },
          form: {
            title: '父级',
            value: [],
            component: {
              multiple: true
            },
            rules: [{ required: true, message: '请选择一个选项' }]
          },
          dict: dict({
            data: [
              { value: 'sz', label: '深圳', color: 'success' },
              { value: 'gz', label: '广州' },
              { value: 'wh', label: '武汉' },
              { value: 'sh', label: '上海' },
              { value: 'hz', label: '杭州' },
              { value: 'bj', label: '北京', color: 'danger' }
            ]
          }),
          column: {
            resizable: true,
            sortable: true,
            component: {
              color: 'auto', // 自动染色
              defaultLabel: '未知城市' // 无数据字典时的默认文本
            }
          }
        },
        children: {
          title: '子级',
          type: 'dict-select',
          search: { show: true },
          form: {
            title: '子级',
            value: [],
            component: {
              multiple: true
            },
            rules: [{ required: true, message: '请选择一个选项' }]
          },
          dict: dict({
            data: [
              { value: 'sz', label: '深圳', color: 'success' },
              { value: 'gz', label: '广州' },
              { value: 'wh', label: '武汉' },
              { value: 'sh', label: '上海' },
              { value: 'hz', label: '杭州' },
              { value: 'bj', label: '北京', color: 'danger' }
            ]
          }),
          column: {
            resizable: true,
            sortable: true,
            component: {
              color: 'auto', // 自动染色
              defaultLabel: '未知城市' // 无数据字典时的默认文本
            }
          }
        },
        createAt: {
          title: '创建时间',
          type: 'datetime',
          column: {
            resizable: true,
            show: false
          }
        },
        updateAt: {
          title: '更新时间',
          type: 'datetime',
          column: {
            resizable: true,
            show: false
          }
        }
        // type: {
        //   title: '类型',
        //   type: 'dict-select',
        //   dict: dict({
        //     data: [
        //       { value: 1, label: '开始' },
        //       { value: 0, label: '停止' }
        //     ]
        //   })
        // }
      },
      rowHandle: {
        fixed: 'right',
        width: '150px'
      },
      form: {
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
    }
  };
}
