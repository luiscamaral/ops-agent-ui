import { Skeleton } from '@/components/ui/skeleton'

export function AppSkeleton() {
  return (
    <div className="flex h-screen w-full bg-background">
      {/* NavRail skeleton */}
      <div className="flex w-16 flex-col items-center gap-4 border-r border-border bg-sidebar p-3">
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-10 w-10 rounded-lg" />
        <Skeleton className="h-10 w-10 rounded-lg" />
        <div className="flex-1" />
        <Skeleton className="h-10 w-10 rounded-full" />
      </div>

      {/* Left sidebar skeleton */}
      <div className="flex w-64 flex-col gap-3 border-r border-border bg-surface p-4">
        <Skeleton className="h-8 w-32" />
        <Skeleton className="h-10 w-full" />
        <div className="flex flex-col gap-2 pt-4">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-5/6" />
        </div>
      </div>

      {/* Main content skeleton */}
      <div className="flex flex-1 flex-col">
        {/* Header */}
        <div className="flex h-14 items-center justify-between border-b border-border px-6">
          <Skeleton className="h-6 w-48" />
          <div className="flex gap-2">
            <Skeleton className="h-8 w-8 rounded-full" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>

        {/* Chat area */}
        <div className="flex flex-1 flex-col gap-4 p-6">
          <div className="flex gap-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-64" />
              <Skeleton className="h-4 w-48" />
            </div>
          </div>
          <div className="flex gap-3 self-end">
            <div className="flex flex-col items-end gap-2">
              <Skeleton className="h-4 w-56" />
              <Skeleton className="h-4 w-40" />
            </div>
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
          <div className="flex gap-3">
            <Skeleton className="h-8 w-8 rounded-full" />
            <div className="flex flex-col gap-2">
              <Skeleton className="h-4 w-72" />
              <Skeleton className="h-4 w-64" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        </div>

        {/* Input area */}
        <div className="border-t border-border p-4">
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
      </div>

      {/* Right sidebar skeleton */}
      <div className="flex w-72 flex-col gap-4 border-l border-border bg-surface p-4">
        <Skeleton className="h-6 w-24" />
        <div className="flex flex-col gap-3">
          <Skeleton className="h-20 w-full rounded-lg" />
          <Skeleton className="h-20 w-full rounded-lg" />
          <Skeleton className="h-20 w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}
