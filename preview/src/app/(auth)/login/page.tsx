"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BarChart3, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-fg-primary">
      {children}
    </label>
  );
}

export default function LoginPage() {
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
    <div className="flex min-h-screen items-center justify-center bg-bg-secondary px-4 relative">
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 rounded-md p-2 text-fg-muted hover:bg-bg-hover transition-colors"
      >
        {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>

      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <BarChart3 className="h-5 w-5 text-fg-on-accent" />
          </div>
          <h1 className="mt-4 text-xl font-semibold text-fg-primary">
            Sign in to your account
          </h1>
          <p className="mt-1 text-sm text-fg-muted">
            Enter your credentials to continue.
          </p>
        </div>

        <div className="rounded-lg border border-border bg-bg-primary p-6 shadow-sm">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@company.com" autoComplete="email" />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="#" className="text-xs text-accent hover:text-accent-hover">
                  Forgot password?
                </a>
              </div>
              <Input id="password" type="password" placeholder="Enter your password" autoComplete="current-password" />
            </div>

            <Button type="submit" className="w-full">Sign In</Button>
          </form>

          <div className="relative my-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-bg-primary px-2 text-fg-muted">or</span>
            </div>
          </div>

          <Button variant="outline" className="w-full">
            Continue with Google
          </Button>
        </div>

        <p className="mt-4 text-center text-sm text-fg-muted">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-accent hover:text-accent-hover">Sign up</a>
        </p>
      </div>
    </div>
  );
}
