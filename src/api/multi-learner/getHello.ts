// @ts-ignore
/* eslint-disable */
import { request } from '@/service/request';

/** 此处后端没有提供注释 GET / */
export async function getHello(options?: { [key: string]: any }) {
  return request<string>('/', {
    method: 'GET',
    ...(options || {}),
  });
}
