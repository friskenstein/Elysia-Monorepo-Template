import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { Hello } from './Hello'
import { api } from './api'

export const root = new Elysia()
	.use(api)
	.use(html())
	.get('/', Hello)
