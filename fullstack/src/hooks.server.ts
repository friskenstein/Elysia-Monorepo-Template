import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		filterSerializedResponseHeaders: name => {
			return name === 'content-type' || name === 'cache-control' || name.startsWith('x-')
		},
	})

	return response
}
