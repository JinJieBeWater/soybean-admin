// @ts-ignore
/* eslint-disable */
import { request } from '@/service/request';

/** 创建 POST /technology */
export async function createTechnology(
  body: API.CreateTechnologyDto,
  options?: { [key: string]: any },
) {
  return request<API.ResultVo & { records?: API.Technology[] }>('/technology', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 单个查询 GET /technology/${param0} */
export async function findOneTechnology(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findOneTechnologyParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultVo & { records?: API.Technology[] }>(`/technology/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 删除 DELETE /technology/${param0} */
export async function removeTechnology(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.removeTechnologyParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultVo & { records?: API.Technology[] }>(`/technology/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 修改 PATCH /technology/${param0} */
export async function updateTechnology(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateTechnologyParams,
  body: API.UpdateTechnologyDto,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<API.ResultVo & { records?: API.Technology[] }>(`/technology/${param0}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    params: { ...queryParams },
    data: body,
    ...(options || {}),
  });
}

/** 分页查询 GET /technology/pagination */
export async function paginationTechnology(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.paginationTechnologyParams,
  options?: { [key: string]: any },
) {
  return request<API.ResultVo & { data?: API.PaginationVo }>('/technology/pagination', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
