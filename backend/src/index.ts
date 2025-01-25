import { Elysia } from 'elysia'
import { plugin } from '@backend/module'
import { ui } from '@backend/ui'

export const api = new Elysia({prefix: '/api'})
	.use(ui)
	.use(plugin)

export type Api = typeof api
