import { Elysia } from 'elysia'
import { root } from '@backend/routes/index'

export const api = new Elysia().use(root)

export type Api = typeof api

/* TODO: Add more routes */
