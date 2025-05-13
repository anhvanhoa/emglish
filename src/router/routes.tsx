import type { AppRoute } from '.';
import MainLayout from '@/layouts/MainLayout';
import { Home } from '@/pages/home';
import { LessonTopic } from '@/pages/lesson-topic';

export const routes: AppRoute[] = [
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                name: 'Home',
                element: <Home />,
            },
            {
                path: 'lesson-topic',
                name: 'Lesson/Topic',
                element: <LessonTopic />,
            },
            {
                path: 'lesson-topic/create-lesson',
                name: 'Create Lesson',
                element: <Home />,
            },
        ],
    },
];
