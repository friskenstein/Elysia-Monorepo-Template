import { api } from "@backend/index"

api.listen(3000)

console.log(`🦊 Elysia is running at ${api.server?.hostname}:${api.server?.port}`)
