import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [svelte({emitCss: false})],
    base: '/static/ext/',
    build: {
        cssCodeSplit: false,
        assetsInlineLimit: 0,
        outDir: 'dist/ext/',
        manifest: true,
        rollupOptions: {
            preserveEntrySignatures: 'strict',
            input: {
                counter: '/src/ext/Counter.ext.ts',
            },
            output: {
                entryFileNames: file => `${file.name}/${file.name}.js`,
                format: 'es'
            }
        }
    },
})
