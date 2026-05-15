import type { PropsWithChildren } from "react";

export function Container({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return <div className={`mx-auto w-[min(1120px,calc(100%-32px))] ${className}`}>{children}</div>;
}
