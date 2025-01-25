import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'
import { fileURLToPath } from 'url'

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@backend': fileURLToPath(new URL('../backend/src', import.meta.url)),
			'@backend/*': fileURLToPath(new URL('../backend/src/*', import.meta.url)),
		},
	},
})
