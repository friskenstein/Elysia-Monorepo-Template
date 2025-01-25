import type { PageLoad } from './$types'

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch(`/api/plugin`)
	const message = await res.json() as { hello: string }

	return { message }
}
