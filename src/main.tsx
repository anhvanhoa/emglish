import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { HeroUIProvider } from '@heroui/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

const root = document.getElementById('root');
if (root)
    createRoot(root).render(
        <StrictMode>
            <HeroUIProvider>
                <NextThemesProvider defaultTheme='system' attribute='class'>
                    <App />
                </NextThemesProvider>
            </HeroUIProvider>
        </StrictMode>,
    );
