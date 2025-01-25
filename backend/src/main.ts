import { api } from '@backend/api'

api.listen(3000)

console.log(`🦊 Elysia is running at ${api.server?.hostname}:${api.server?.port}`)
