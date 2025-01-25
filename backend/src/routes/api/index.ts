import { Elysia } from 'elysia'

export const api = new Elysia({ prefix: '/api' })
	.get('/', () => ({ message: 'api root' }))
	.get('/hello', getHello)

function getHello() {
	return {
		hello: 'hello from plugin yoooo',
	}
}
