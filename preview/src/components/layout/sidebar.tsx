"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Users,
  CreditCard,
  Settings,
  BarChart3,
} from "lucide-react";

const navGroups = [
  {
    label: "Overview",
    items: [
      { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    ],
  },
  {
    label: "Management",
    items: [
      { label: "Users", href: "/users", icon: Users },
      { label: "Billing", href: "/billing", icon: CreditCard },
    ],
  },
];

const footerItems = [
  { label: "Settings", href: "/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden lg:flex h-screen w-60 flex-col border-r border-border bg-bg-secondary">
      <div className="flex h-14 items-center gap-2 px-4">
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-accent">
          <BarChart3 className="h-4 w-4 text-fg-on-accent" />
        </div>
        <span className="text-sm font-semibold text-fg-primary">Acme Corp</span>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-2">
        {navGroups.map((group, groupIdx) => (
          <div key={group.label} className={cn(groupIdx > 0 && "mt-6")}>
            <p className="mb-1 px-2 text-xs font-medium uppercase tracking-wide text-fg-muted">
              {group.label}
            </p>
            <ul className="space-y-0.5">
              {group.items.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors duration-75",
                        isActive
                          ? "bg-accent-subtle text-accent"
                          : "text-fg-secondary hover:bg-bg-hover hover:text-fg-primary"
                      )}
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      <div className="border-t border-border px-3 py-2">
        {footerItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors duration-75",
                isActive
                  ? "bg-accent-subtle text-accent"
                  : "text-fg-secondary hover:bg-bg-hover hover:text-fg-primary"
              )}
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              <span>{item.label}</span>
            </Link>
          );
        })}
        <div className="mt-2 flex items-center gap-2 rounded-md px-2 py-2">
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-xs font-medium text-fg-on-accent">
            J
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-fg-primary">Jane Cooper</p>
            <p className="truncate text-xs text-fg-muted">jane@acmecorp.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
