import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-accent/30 px-3 py-1 text-xs font-semibold text-accent",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
