# OpsAgent UI

UI layer for OpsAgent AI - a FastAPI-based AI agent orchestration service.

## Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **State Management:** TanStack Query (server state) + Zustand (UI state) - *planned*
- **UI Components:** shadcn/ui + Tailwind CSS + Radix UI - *planned*
- **Testing:** Vitest + React Testing Library + Playwright

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm run test

# Build for production
npm run build
```

## Project Structure

```
src/
├── api/           # API client and endpoints
├── features/      # Feature-based modules (jobs, logs, settings)
├── hooks/         # Shared React hooks
├── lib/           # Utilities
├── pages/         # Route components
└── main.tsx       # Entry point
```

## Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript type checking |
| `npm run test` | Run unit tests |
| `npm run test:ci` | Run tests with coverage |
| `npm run test:e2e` | Run Playwright E2E tests |

## Integration

This UI connects to the OpsAgent FastAPI backend. In development, requests to `/api` are proxied to `http://localhost:8080`.

## License

MIT
