import { http, HttpResponse } from 'msw'
import type { HealthResponse } from '@/types'

export const handlers = [
  http.get('/api/v1/health', () => {
    return HttpResponse.json<HealthResponse>({
      status: 'ok',
      version: '1.0.0',
      uptime: 12345,
    })
  }),
]
