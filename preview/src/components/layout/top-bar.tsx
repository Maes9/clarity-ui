"use client";

import { Bell, Search, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface TopBarProps {
  title: string;
}

export function TopBar({ title }: TopBarProps) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <header className="sticky top-0 z-30 flex h-14 items-center border-b border-border bg-bg-primary px-4 lg:px-6">
      <div className="flex-1 min-w-0">
        <span className="text-sm text-fg-muted">{title}</span>
      </div>

      <div className="flex items-center gap-1">
        <Button variant="ghost" size="sm" className="hidden gap-2 text-fg-muted sm:flex">
          <Search className="h-4 w-4" />
          <span className="text-sm">Search...</span>
          <kbd className="pointer-events-none rounded border border-border bg-bg-secondary px-1.5 py-0.5 text-xs text-fg-muted">
            ⌘K
          </kbd>
        </Button>

        <Button variant="ghost" size="icon" onClick={toggleTheme}>
          {dark ? <Sun className="h-4 w-4 text-fg-secondary" /> : <Moon className="h-4 w-4 text-fg-secondary" />}
        </Button>

        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-4 w-4 text-fg-secondary" />
          <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-status-error text-[10px] font-medium text-white">
            3
          </span>
        </Button>
      </div>
    </header>
  );
}
