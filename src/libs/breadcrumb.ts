import type { AppRoute } from '@/router';

const findRouteByPath = (routes: AppRoute[], path: string): AppRoute | undefined => {
    for (const route of routes) {
        if (!route.path) continue;
        const fullPath = route.path.startsWith('/') ? route.path : `/${route.path}`;
        if (fullPath === path) {
            return route;
        }
        if (route.children) {
            const childRoute = findRouteByPath(route.children, path);
            if (childRoute) {
                return childRoute;
            }
        }
    }
    return undefined;
};

export const findBreadcrumbs = (paths: string[], routes: AppRoute[]) => {
    paths.unshift('');
    return paths.map((_, index) => {
        const path = `${paths.slice(0, index + 1).join('/')}`;
        const route = findRouteByPath(routes, path || '/');
        return {
            name: route?.name || path,
            path: path,
        };
    });
};

export const generatePath = (routes: AppRoute[]) => `${routes.map((r) => r.path).join('/')}`;
