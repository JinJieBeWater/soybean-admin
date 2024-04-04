import { request } from '../request';

/** get constant routes */
export function fetchGetConstantRoutes() {
  return request<Api.Route.MenuRoute[]>('/route/getConstantRoutes', {});
}

/** get user routes */
export function fetchGetUserRoutes() {
  return request<Api.Route.UserRoute>('/route/getUserRoutes', {});
}

/**
 * whether the route is exist
 *
 * @param routeName route name
 */
export function fetchIsRouteExist(routeName: string) {
  return request<boolean>('/route/isRouteExist', { params: { routeName } });
}
