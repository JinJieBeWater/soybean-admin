import type { AddReq, DelReq, EditReq, UserPageQuery, UserPageRes } from '@fast-crud/fast-crud';
import _ from 'lodash-es';
import { paginationTechnology } from '@/api/multi-learner/technology';

/** 此处本地方式模拟远程接口，实际开发，你需要替换成你的后台请求 */
const records = [{ id: 1, name: 'Hello World', type: 1 }];
export const pageRequest = async (query: UserPageQuery): Promise<UserPageRes> => {
  const { data } = await paginationTechnology({ ...query.page });
  return data!;
};
export const editRequest = async ({ form, row }: EditReq) => {
  const target = _.find(records, item => {
    return row.id === item.id;
  });
  _.merge(target, form);
  return target;
};
export const delRequest = async ({ row }: DelReq) => {
  _.remove(records, item => {
    return item.id === row.id;
  });
};
export const addRequest = async ({ form }: AddReq) => {
  const maxRecord = _.maxBy(records, item => {
    return item.id;
  });
  form.id = (maxRecord?.id || 0) + 1;
  records.push(form);
  return form;
};
