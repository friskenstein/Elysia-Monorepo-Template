import { treaty } from '@elysiajs/eden'
import type { Api } from '@backend'

const api = treaty<Api>('localhost:3000')

const { data } = await api.api.plugin.get()

console.log(data)
