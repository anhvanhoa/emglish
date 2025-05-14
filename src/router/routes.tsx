import { CreateLesson } from '@/pages/create-lesson';
import type { AppRoute } from '.';
import MainLayout from '@/layouts/MainLayout';
import { CreateTopic } from '@/pages/create-topic';
import { Home } from '@/pages/home';
import { LessonTopic } from '@/pages/lesson-topic';
import { EditTopic } from '@/pages/edit-topic';
import { ImportTopic } from '@/pages/import-topic';

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
                name: 'Create a lesson',
                element: <CreateLesson />,
            },
            {
                path: 'lesson-topic/create-topic',
                name: 'Create a topic',
                element: <CreateTopic />,
            },
            {
                path: 'lesson-topic/import',
                name: 'Import topic',
                element: <ImportTopic />,
            },
            {
                path: 'lesson-topic/:id',
                name: 'Edit a topic',
                element: <EditTopic />,
            },
        ],
    },
];
