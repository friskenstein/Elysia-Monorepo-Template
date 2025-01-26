import { treaty } from '@elysiajs/eden'
import type { Api } from '@backend/api'

const server = treaty<Api>('localhost:3000')

const { data } = await server.api.hello.get()

console.log(data)
