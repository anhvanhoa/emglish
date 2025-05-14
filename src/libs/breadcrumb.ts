import type { AppRoute } from '@/router';

const matchDynamicRoute = (routePath: string, currentPath: string): boolean => {
    const routeSegments = routePath.split('/');
    const currentSegments = currentPath.split('/');
    if (routeSegments.length !== currentSegments.length) return false;

    return routeSegments.every((segment, index) => {
        return segment.startsWith(':') || segment === currentSegments[index];
    });
};

const findRouteByPath = (routes: AppRoute[], path: string): AppRoute | undefined => {
    for (const route of routes) {
        if (!route.path) continue;
        const fullPath = route.path.startsWith('/') ? route.path : `/${route.path}`;
        if (fullPath === path || matchDynamicRoute(fullPath, path)) {
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
        const dynamicPath = route?.path?.replace(/:(\w+)/g, (_, key) => {
            const pathIndex = paths.findIndex((p) => p === key);
            return pathIndex !== -1 ? paths[pathIndex] : key;
        });
        return {
            name: route?.name || path,
            path: dynamicPath || path,
        };
    });
};

export const generatePath = (routes: AppRoute[]) => `${routes.map((r) => r.path).join('/')}`;
