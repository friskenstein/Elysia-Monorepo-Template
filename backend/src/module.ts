import { Elysia } from 'elysia'

export const plugin = new Elysia().get('/plugin', getPlugin)

function getPlugin() {
	return {
		hello: 'from plugin yoooo',
	}
}
