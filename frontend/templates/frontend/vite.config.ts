import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte()],
    base: '/static/',
    build: {
        outDir: 'dist/app/',
        manifest: true,
        rollupOptions: {
            input: '/src/main.ts'
        }
    }
})
