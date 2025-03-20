import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { Hello } from './Hello'
import { apiRoot } from './api'

export const root = new Elysia()
	.use(apiRoot)
	.use(html())
	.get('/', Hello)
