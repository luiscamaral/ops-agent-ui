/**
 * Makes all properties of T optional recursively
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}

/**
 * Represents the state of an async operation
 */
export type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: T }
  | { status: 'error'; error: Error }

/**
 * Common timestamp fields for entities
 */
export interface Timestamps {
  createdAt: string
  updatedAt: string
}

/**
 * Entity with ID and timestamps
 */
export interface BaseEntity extends Timestamps {
  id: string
}

/**
 * Nullable type helper
 */
export type Nullable<T> = T | null

/**
 * Optional type helper
 */
export type Optional<T> = T | undefined
