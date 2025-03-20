import { api } from '@backend/api'
import type { RequestHandler } from '@sveltejs/kit'

const handler: RequestHandler = async (event) => await api.handle(event.request)

export const GET = handler
export const POST = handler
export const PUT = handler
export const PATCH = handler
export const DELETE = handler
