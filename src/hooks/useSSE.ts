import { useEffect, useCallback, useRef } from 'react';

/**
 * Hook for Server-Sent Events (SSE) connections
 * Used for real-time job status updates and log streaming
 */
export function useSSE<T>(
    url: string | null,
    onMessage: (data: T) => void,
    onError?: (error: Event) => void
) {
    const eventSourceRef = useRef<EventSource | null>(null);
    const onMessageRef = useRef(onMessage);
    const onErrorRef = useRef(onError);

    // Keep refs updated in effect to avoid render-time mutation
    useEffect(() => {
        onMessageRef.current = onMessage;
        onErrorRef.current = onError;
    });

    const connect = useCallback(() => {
        if (!url) return;

        const eventSource = new EventSource(url);
        eventSourceRef.current = eventSource;

        eventSource.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data) as T;
                onMessageRef.current(data);
            } catch (e) {
                console.error('Failed to parse SSE message:', e);
            }
        };

        eventSource.onerror = (error) => {
            onErrorRef.current?.(error);
            eventSource.close();
        };

        return () => {
            eventSource.close();
        };
    }, [url]);

    useEffect(() => {
        const cleanup = connect();
        return cleanup;
    }, [connect]);

    const disconnect = useCallback(() => {
        eventSourceRef.current?.close();
        eventSourceRef.current = null;
    }, []);

    return { disconnect };
}
