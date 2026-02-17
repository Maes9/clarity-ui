import { cn } from "@/lib/utils";

type StatusVariant = "success" | "warning" | "error" | "info" | "neutral";

interface StatusBadgeProps {
  label: string;
  variant: StatusVariant;
}

const variantStyles: Record<StatusVariant, string> = {
  success: "bg-status-success-bg text-status-success",
  warning: "bg-status-warning-bg text-status-warning",
  error: "bg-status-error-bg text-status-error",
  info: "bg-status-info-bg text-status-info",
  neutral: "bg-bg-tertiary text-fg-secondary",
};

const dotStyles: Record<StatusVariant, string> = {
  success: "bg-status-success",
  warning: "bg-status-warning",
  error: "bg-status-error",
  info: "bg-status-info",
  neutral: "bg-fg-muted",
};

export function StatusBadge({ label, variant }: StatusBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-xs font-medium",
        variantStyles[variant]
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dotStyles[variant])} />
      {label}
    </span>
  );
}
