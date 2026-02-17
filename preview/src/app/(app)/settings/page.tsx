"use client";

import { TopBar } from "@/components/layout/top-bar";
import { PageHeader } from "@/components/layout/page-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-fg-primary">
      {children}
    </label>
  );
}

function Toggle({ defaultChecked }: { defaultChecked?: boolean }) {
  return (
    <button
      role="switch"
      aria-checked={defaultChecked}
      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors duration-75 ${defaultChecked ? "bg-accent" : "bg-bg-active"}`}
    >
      <span
        className={`inline-block h-3.5 w-3.5 rounded-full bg-white transition-transform duration-75 ${defaultChecked ? "translate-x-4" : "translate-x-0.5"}`}
      />
    </button>
  );
}

export default function SettingsPage() {
  return (
    <>
      <TopBar title="Settings" />
      <main className="flex-1 overflow-y-auto">
        <PageHeader title="Settings" />

        <div className="px-6 pb-6">
          <div className="max-w-2xl space-y-8">
            {/* General */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-fg-primary">General</h3>
                <p className="text-sm text-fg-muted">Manage your account settings.</p>
              </div>
              <div className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Display Name</Label>
                  <Input id="name" defaultValue="Jane Cooper" />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="jane@acmecorp.com" />
                  <p className="text-xs text-fg-muted">This email is used for login and notifications.</p>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" defaultValue="Acme Corp" />
                </div>
              </div>
            </div>

            <div className="border-t border-border" />

            {/* Notifications */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-fg-primary">Notifications</h3>
                <p className="text-sm text-fg-muted">Choose what you want to be notified about.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-fg-primary">Email notifications</p>
                    <p className="text-xs text-fg-muted">Receive emails about account activity.</p>
                  </div>
                  <Toggle defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-fg-primary">Push notifications</p>
                    <p className="text-xs text-fg-muted">Receive push notifications in your browser.</p>
                  </div>
                  <Toggle />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-fg-primary">Weekly digest</p>
                    <p className="text-xs text-fg-muted">Receive a summary of activity every Monday.</p>
                  </div>
                  <Toggle defaultChecked />
                </div>
              </div>
            </div>

            <div className="border-t border-border" />

            {/* Actions */}
            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Save Changes</Button>
            </div>

            <div className="border-t border-border" />

            {/* Danger Zone */}
            <div className="rounded-md border border-status-error/20 bg-status-error-bg p-5">
              <h3 className="text-sm font-semibold text-status-error">Danger Zone</h3>
              <p className="mt-1 text-sm text-fg-secondary">
                Once you delete your account, there is no going back. Please be certain.
              </p>
              <Button variant="destructive" size="sm" className="mt-4">
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
