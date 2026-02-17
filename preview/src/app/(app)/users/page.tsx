"use client";

import { useState } from "react";
import { TopBar } from "@/components/layout/top-bar";
import { PageHeader } from "@/components/layout/page-header";
import { StatusBadge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { users, type User } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { Plus, Search, Mail, Shield, Clock } from "lucide-react";

function statusVariant(status: string) {
  if (status === "Active") return "success" as const;
  if (status === "Invited") return "info" as const;
  return "neutral" as const;
}

function UserDetail({ user }: { user: User }) {
  return (
    <div>
      <div className="flex items-start justify-between border-b border-border px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-medium text-fg-on-accent">
            {user.name.charAt(0)}
          </div>
          <div>
            <h2 className="text-lg font-semibold text-fg-primary">{user.name}</h2>
            <p className="text-sm text-fg-muted">{user.email}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <StatusBadge label={user.status} variant={statusVariant(user.status)} />
          <Button variant="outline" size="sm">Edit</Button>
        </div>
      </div>

      <div className="space-y-6 px-6 py-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <p className="flex items-center gap-1.5 text-xs text-fg-muted"><Shield className="h-3 w-3" /> Role</p>
            <p className="text-sm font-medium text-fg-primary">{user.role}</p>
          </div>
          <div className="space-y-1">
            <p className="flex items-center gap-1.5 text-xs text-fg-muted"><Mail className="h-3 w-3" /> Department</p>
            <p className="text-sm font-medium text-fg-primary">{user.department}</p>
          </div>
          <div className="space-y-1">
            <p className="flex items-center gap-1.5 text-xs text-fg-muted"><Clock className="h-3 w-3" /> Last Active</p>
            <p className="text-sm font-medium text-fg-primary">{user.lastActive}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UsersPage() {
  const [selectedId, setSelectedId] = useState<string | null>("1");
  const [search, setSearch] = useState("");

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  const selectedUser = users.find((u) => u.id === selectedId);

  return (
    <>
      <TopBar title="Users" />
      <main className="flex-1 overflow-y-auto">
        <PageHeader
          title="Users"
          description={`${users.length} team members`}
          actions={
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Invite User
            </Button>
          }
        />

        <div className="px-6 pb-6">
          {/* Search */}
          <div className="relative mb-4 w-64">
            <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-fg-muted" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search users..."
              className="pl-9"
            />
          </div>

          {/* List-detail */}
          <div className="flex rounded-md border border-border" style={{ height: "calc(100vh - 240px)" }}>
            {/* List */}
            <div className="w-96 flex-shrink-0 overflow-y-auto border-r border-border">
              {filtered.map((user) => (
                <button
                  key={user.id}
                  onClick={() => setSelectedId(user.id)}
                  className={cn(
                    "flex w-full flex-col gap-1 border-b border-border px-4 py-3 text-left transition-colors duration-75",
                    selectedId === user.id
                      ? "bg-accent-subtle"
                      : "hover:bg-bg-hover"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-fg-primary">{user.name}</span>
                    <StatusBadge label={user.status} variant={statusVariant(user.status)} />
                  </div>
                  <span className="text-xs text-fg-muted">{user.email}</span>
                  <span className="text-xs text-fg-muted">{user.role} · {user.department}</span>
                </button>
              ))}
              {filtered.length === 0 && (
                <div className="flex h-32 items-center justify-center text-sm text-fg-muted">
                  No users match your search.
                </div>
              )}
            </div>

            {/* Detail */}
            <div className="flex-1 overflow-y-auto">
              {selectedUser ? (
                <UserDetail user={selectedUser} />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-fg-muted">
                  Select a user to view details
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
