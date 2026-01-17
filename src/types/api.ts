/**
 * Standard API response wrapper
 */
export interface ApiResponse<T> {
  data: T
  message?: string
  timestamp: string
}

/**
 * API error response
 */
export interface ApiError {
  code: string
  message: string
  details?: Record<string, unknown>
  timestamp: string
}

/**
 * Paginated response wrapper
 */
export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    pageSize: number
    totalItems: number
    totalPages: number
    hasNextPage: boolean
    hasPreviousPage: boolean
  }
}

/**
 * Health check response
 */
export interface HealthResponse {
  status: 'ok' | 'degraded' | 'down'
  version?: string
  uptime?: number
}
