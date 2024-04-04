// @ts-ignore
/* eslint-disable */
import { request } from '@/service/request';

/** 此处后端没有提供注释 GET /technology */
export async function findAllTechnology(options?: { [key: string]: any }) {
  return request<any>('/technology', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 POST /technology */
export async function createTechnology(
  body: API.CreateTechnologyDto,
  options?: { [key: string]: any },
) {
  return request<any>('/technology', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 GET /technology/${param0} */
export async function findOneTechnology(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.findOneTechnologyParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/technology/${param0}`, {
    method: 'GET',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 DELETE /technology/${param0} */
export async function removeTechnology(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.removeTechnologyParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/technology/${param0}`, {
    method: 'DELETE',
    params: { ...queryParams },
    ...(options || {}),
  });
}

/** 此处后端没有提供注释 PATCH /technology/${param0} */
export async function updateTechnology(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.updateTechnologyParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  return request<any>(`/technology/${param0}`, {
    method: 'PATCH',
    params: { ...queryParams },
    ...(options || {}),
  });
}
