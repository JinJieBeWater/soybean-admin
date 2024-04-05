import type { CreateCrudOptionsRet } from '@fast-crud/fast-crud';
import { paginationTechnology } from '@/api/multi-learner/technology';
import { addRequest, delRequest, editRequest } from './api';

/** 定义一个CrudOptions生成器方法 */
// eslint-disable-next-line func-names, @typescript-eslint/no-unused-vars
export default function (): CreateCrudOptionsRet<API.Technology> {
  return {
    crudOptions: {
      // 在这里自定义你的crudOptions配置
      request: {
        pageRequest: paginationTechnology,
        addRequest,
        editRequest,
        delRequest
      },
      // 这里定义两个字段
      columns: {
        id: {
          title: 'ID',
          type: 'number', // 字段类型，fs会根据字段类型，生成出一些默认配置
          column: {
            resizable: true,
            width: 50
          },
          form: {
            component: {
              props: {
                disabled: true
              }
            }
          }
        },
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
            resizable: true,
            width: 150
          }
        },
        createdAt: {
          title: '创建时间',
          type: 'datetime',
          column: {
            resizable: true
          },
          form: {
            component: {
              props: {
                disabled: true
              }
            }
          }
        },
        upDatedAt: {
          title: '更新时间',
          type: 'datetime',
          column: {
            resizable: true
          },
          form: {
            component: {
              props: {
                disabled: true
              }
            }
          }
        }
      }
    }
  };
}
