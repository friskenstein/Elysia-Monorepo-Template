import { api } from '@backend/index'

type RequestHandler = (v: { request: Request }) => Response | Promise<Response>

export const GET: RequestHandler = ({ request }) => api.handle(request)
export const POST: RequestHandler = ({ request }) => api.handle(request)
// export const PUT: RequestHandler = ({ request }) => api.handle(request)
// export const PATCH: RequestHandler = ({ request }) => api.handle(request)
// export const DELETE: RequestHandler = ({ request }) => api.handle(request)
