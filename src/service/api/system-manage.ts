import { request } from '../request';

/** get role list */
export function fetchGetRoleList(params?: Api.SystemManage.RoleSearchParams) {
  return request<Api.SystemManage.RoleList>('/systemManage/getRoleList', {
    method: 'get',
    params
  });
}

/**
 * get all roles
 *
 * these roles are all enabled
 */
export function fetchGetAllRoles() {
  return request<Api.SystemManage.AllRole[]>('/systemManage/getAllRoles', {
    method: 'get'
  });
}

/** get user list */
export function fetchGetUserList(params?: Api.SystemManage.UserSearchParams) {
  return request<Api.SystemManage.UserList>('/systemManage/getUserList', {
    method: 'get',
    params
  });
}

/**
 * get menu list
 *
 * @deprecated this will removed in next version 1.1.0
 */
export function fetchGetMenuListV1() {
  return request<Api.SystemManage.Menu[]>('/systemManage/getMenuList', {
    method: 'get'
  });
}

/** get menu list */
export function fetchGetMenuList() {
  return request<Api.SystemManage.MenuList>('/systemManage/getMenuList/v2', {
    method: 'get'
  });
}

/** get all pages */
export function fetchGetAllPages() {
  return request<string[]>('/systemManage/getAllPages', {
    method: 'get'
  });
}

/** get menu tree */
export function fetchGetMenuTree() {
  return request<Api.SystemManage.MenuTree[]>('/systemManage/getMenuTree', {
    method: 'get'
  });
}
