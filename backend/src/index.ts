import { Elysia } from 'elysia'
import { plugin } from '@backend/module'
import { ui } from '@backend/ui'

export const api = new Elysia({prefix: '/api'})
	.use(ui)
	.use(plugin)
// separate so we don't have to comment our .listen so much
	.listen(3000)

export type Api = typeof api

console.log(`🦊 Elysia is running at ${api.server?.hostname}:${api.server?.port}`)
