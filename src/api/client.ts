/**
 * API client for OpsAgent backend
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || '';

export class ApiError extends Error {
    status: number;
    data: unknown;

    constructor(status: number, data: unknown) {
        super(`API Error: ${status}`);
        this.name = 'ApiError';
        this.status = status;
        this.data = data;
    }
}

export const apiClient = {
    async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options?.headers,
            },
        });

        if (!response.ok) {
            throw new ApiError(response.status, await response.json());
        }

        return response.json();
    },

    get<T>(endpoint: string): Promise<T> {
        return this.fetch<T>(endpoint, { method: 'GET' });
    },

    post<T>(endpoint: string, body: unknown): Promise<T> {
        return this.fetch<T>(endpoint, {
            method: 'POST',
            body: JSON.stringify(body),
        });
    },

    put<T>(endpoint: string, body: unknown): Promise<T> {
        return this.fetch<T>(endpoint, {
            method: 'PUT',
            body: JSON.stringify(body),
        });
    },

    delete<T>(endpoint: string): Promise<T> {
        return this.fetch<T>(endpoint, { method: 'DELETE' });
    },
};
