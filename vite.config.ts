import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        port: 8000,
    },
    css: {
        devSourcemap: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@components': path.resolve(__dirname, './src/components'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@assets': path.resolve(__dirname, './src/assets'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@context': path.resolve(__dirname, './src/context'),
            '@pages': path.resolve(__dirname, './src/pages'),
            '@constants': path.resolve(__dirname, './src/constants'),
            '@types': path.resolve(__dirname, './src/types'),
            '@routes': path.resolve(__dirname, './src/routes'),
            '@api': path.resolve(__dirname, './src/api'),
            '@lib': path.resolve(__dirname, './src/lib'),
        },
    },
});
