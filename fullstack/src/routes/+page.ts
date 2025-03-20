import type { PageLoad } from './$types'
import type { Api } from '@backend/api'
import { treaty } from '@elysiajs/eden'

export const load: PageLoad = async ({ fetch }) => {
	const apiClient = createApiClient(fetch)
	const res = await apiClient.api.hello.get()

	return { message: res.data }
}


type FetchFunction = typeof fetch

function createApiClient(customFetch?: FetchFunction) {

	return treaty<Api>('', {
		fetcher(url, options) {
			const fetchFn = customFetch || fetch
			return fetchFn(url, options)
		},
		keepDomain: true,
	})
}



