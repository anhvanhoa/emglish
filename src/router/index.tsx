import { createBrowserRouter, type RouteObject } from 'react-router';
import { routes} from './routes';

export type AppRoute = {
    name?: string;
    children?: AppRoute[];
} & RouteObject;

const generateBreadcrumbs = (routes: AppRoute[], parents: AppRoute[] = []): AppRoute[] => {
    return routes.reduce((acc: AppRoute[], route) => {
        const fullPath = [...parents, route]
            .map((r) => r.path)
            .filter(Boolean)
            .join('/')
            .replace(/\/+/g, '/');
        const newRoute = { ...route, path: fullPath };
        acc.push(newRoute);
        if (route.children) {
            acc.push(...generateBreadcrumbs(route.children, [...parents, newRoute]));
        }
        return acc;
    }, []);
};

export const configBreadcrumbs = generateBreadcrumbs(routes);

const buildRouterConfig = (routes: RouteObject[]) => {
    return routes.map((route) => ({
        path: route.path,
        element: route.element,
        children: route.children,
    }));
};


export const router = createBrowserRouter(buildRouterConfig(routes));