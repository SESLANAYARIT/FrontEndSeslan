import { lazy, Suspense, ComponentType } from "react";
import { Loading } from "../LoadingSpinner/Loading";

export function loadable<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
) {
  const LazyComponent = lazy(importFn);
  return (props: React.ComponentProps<T>) => (
    <Suspense fallback={<Loading />}>
      <LazyComponent {...props} />
    </Suspense>
  );
}
