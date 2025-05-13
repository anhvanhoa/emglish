import MainLayout from '@/layouts/MainLayout';
import { Home } from '@/pages/home';
import { createBrowserRouter } from 'react-router';

const router = createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
]);

export { router };
