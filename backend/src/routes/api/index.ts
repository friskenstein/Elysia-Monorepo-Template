import { Elysia } from 'elysia'

export const apiRoot = new Elysia({ prefix: '/api' })
	.get('/', () => ({ message: 'api root' }))
	.get('/hello', getHello)
	.post('/response', () => ({ message: 'success' }))
	.get('/get/:id', ({ params: { id }, error }) => {
		if (id === '') {return error(418, 'I am a teapot') }
		return { message: 'success' }
	})

function getHello() {
	return {
		hello: 'hello from plugin yoooo',
		info: {
			status: 200,
			message: 'success'
		}
	}
}
